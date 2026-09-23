import { useEffect, useState } from "react";

type Props = {
  value: string;
  active: boolean;
};

/** Parses numeric prefix from placeholder strings like "[X]+" or "[X]" */
function parseValue(raw: string): { num: number; prefix: string; suffix: string } | null {
  const match = raw.match(/^(\[?)(\d+(?:\.\d+)?)(\]?)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1] === "[" ? "[" : "",
    suffix: (match[3] === "]" ? "]" : "") + match[4],
    num: parseFloat(match[2]),
  };
}

export function AnimatedCounter({ value, active }: Props) {
  const parsed = parseValue(value.replace(/\[X\]/g, "0"));
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!active || !parsed || value.includes("[X]")) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${parsed.prefix}${Math.round(parsed.num * eased)}${parsed.suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value, parsed]);

  return <span>{display}</span>;
}
