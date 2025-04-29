
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JoinTeacherHeader } from "@/components/join-teacher/JoinTeacherHeader";
import { TeacherJoinForm } from "@/components/join-teacher/TeacherJoinForm";

const JoinTeacher = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <JoinTeacherHeader />
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <TeacherJoinForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinTeacher;
