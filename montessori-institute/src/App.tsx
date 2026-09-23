import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/layout/PageLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { CurriculumPage } from "./pages/CurriculumPage";
import { AdmissionsPage } from "./pages/AdmissionsPage";
import { ApplyPage } from "./pages/ApplyPage";
import { TrainersPage } from "./pages/TrainersPage";
import { StudentExperiencePage } from "./pages/StudentExperiencePage";
import { CareersPage } from "./pages/CareersPage";
import { FaqsPage } from "./pages/FaqsPage";
import { ContactPage } from "./pages/ContactPage";
import { BrochurePage } from "./pages/BrochurePage";
import { PrivacyPage, TermsPage } from "./pages/LegalPage";

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/student-experience" element={<StudentExperiencePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brochure" element={<BrochurePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
