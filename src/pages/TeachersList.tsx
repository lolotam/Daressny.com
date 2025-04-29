
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TeacherCard } from "@/components/teachers/TeacherCard";
import { TeacherFilter } from "@/components/teachers/TeacherFilter";
import { EmptyState } from "@/components/teachers/EmptyState";
import { filterTeachers, getUniqueSubjects } from "@/data/teachersData";

const TeachersList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [ratingSort, setRatingSort] = useState("");

  // Get unique subjects for filter
  const subjects = getUniqueSubjects();
  
  // Filter and sort teachers
  const filteredTeachers = filterTeachers(searchTerm, subjectFilter, priceSort, ratingSort);

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSubjectFilter("");
    setPriceSort("");
    setRatingSort("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">المعلمين المتميزين</h1>
            <p className="text-gray-600">
              اكتشف نخبة المعلمين المؤهلين في جميع المواد الدراسية
            </p>
          </div>

          {/* Filters */}
          <TeacherFilter
            searchTerm={searchTerm}
            subjectFilter={subjectFilter}
            priceSort={priceSort}
            ratingSort={ratingSort}
            subjects={subjects}
            onSearchChange={setSearchTerm}
            onSubjectChange={setSubjectFilter}
            onPriceSortChange={setPriceSort}
            onRatingSortChange={setRatingSort}
          />

          {/* Teachers List */}
          {filteredTeachers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} {...teacher} />
              ))}
            </div>
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeachersList;
