import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, siteConfig } from "../../data/site";
import { Button } from "../ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-white/95 backdrop-blur-md">
      <div className="container-main flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link to="/" className="font-serif text-xl text-ink no-underline">
          {siteConfig.instituteName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `text-sm font-medium no-underline ${isActive ? "text-forest" : "text-muted hover:text-ink"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button to="/apply" variant="secondary">Apply now</Button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-forest/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-white px-5 py-4 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="block border-b border-forest/10 py-3 text-ink no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button to="/apply" variant="secondary" className="mt-4 w-full">Apply now</Button>
        </nav>
      )}
    </header>
  );
}
