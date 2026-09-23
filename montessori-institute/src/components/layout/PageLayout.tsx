import { AnnouncementBar } from "./AnnouncementBar";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
