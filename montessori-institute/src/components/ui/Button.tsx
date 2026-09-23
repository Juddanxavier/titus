import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline";

const styles: Record<Variant, string> = {
  primary: "bg-forest text-white hover:bg-forest-dark border-transparent",
  secondary: "bg-terracotta text-white hover:opacity-90 border-transparent",
  outline: "bg-transparent text-forest border-forest/25 hover:bg-sage/50",
};

type Props = {
  variant?: Variant;
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  variant = "primary",
  href,
  to,
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: Props) {
  const base =
    `inline-flex min-h-12 items-center justify-center rounded-[10px] border px-6 text-sm font-medium no-underline transition ${styles[variant]} ${className}`;

  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
