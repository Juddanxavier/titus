import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site";

export function AnnouncementBar() {
  return (
    <div className="bg-forest-dark text-white text-sm" role="region" aria-label="Announcement">
      <div className="container-main flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.announcement.message}</p>
        <Link
          to={siteConfig.announcement.linkHref}
          className="font-medium text-sage no-underline hover:underline"
        >
          {siteConfig.announcement.linkLabel} →
        </Link>
      </div>
    </div>
  );
}
