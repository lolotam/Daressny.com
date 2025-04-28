
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import TeachersList from "./pages/TeachersList";
import Contact from "./pages/Contact";
import Subjects from "./pages/Subjects";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import SuccessStories from "./pages/SuccessStories";
import TeacherFAQ from "./pages/TeacherFAQ";
import TeacherDevelopment from "./pages/TeacherDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/faq" element={<TeacherFAQ />} />
          <Route path="/teacher-development" element={<TeacherDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
