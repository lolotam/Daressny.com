
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import TeachersList from "./pages/TeachersList";
import TeacherDetails from "./pages/TeacherDetails";
import SubjectDetails from "./pages/SubjectDetails";
import Contact from "./pages/Contact";
import Subjects from "./pages/Subjects";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import TeacherFAQ from "./pages/TeacherFAQ";
import TeacherDevelopment from "./pages/TeacherDevelopment";
import ShareSuccess from "./pages/ShareSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/teachers" element={<TeachersList />} />
            <Route path="/teachers/:id" element={<TeacherDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subjects/:id" element={<SubjectDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/share-success" element={<ShareSuccess />} />
            <Route path="/faq" element={<TeacherFAQ />} />
            <Route path="/teacher-development" element={<TeacherDevelopment />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
