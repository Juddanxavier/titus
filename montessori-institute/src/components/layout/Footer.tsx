import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import { navLinks, siteConfig } from "../../data/site";

export function Footer() {
  return (
    <footer className="bg-sand pt-14 pb-8">
      <div className="container-main grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl text-ink">{siteConfig.instituteName}</p>
          <p className="mt-3 text-sm text-muted">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-muted">{siteConfig.location}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-forest">Institute</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-muted no-underline hover:text-forest">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-forest">Programmes</p>
          <ul className="mt-4 space-y-2">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link to={`/courses/${c.slug}`} className="text-sm text-muted no-underline hover:text-forest">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-forest">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><a href={`mailto:${siteConfig.contact.email}`} className="text-muted no-underline hover:text-forest">{siteConfig.contact.email}</a></li>
            <li>{siteConfig.contact.phone}</li>
            <li><a href={siteConfig.contact.whatsapp} className="text-muted no-underline hover:text-forest">WhatsApp</a></li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="container-main mt-10 flex flex-col gap-4 border-t border-forest/10 pt-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.instituteName}</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="text-muted no-underline hover:text-forest">Privacy policy</Link>
          <Link to="/terms" className="text-muted no-underline hover:text-forest">Terms and refund</Link>
        </div>
      </div>
    </footer>
  );
}
