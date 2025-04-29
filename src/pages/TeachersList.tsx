
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TeacherCard } from "@/components/teachers/TeacherCard";
import { TeacherFilter } from "@/components/teachers/TeacherFilter";
import { EmptyState } from "@/components/teachers/EmptyState";
import { filterTeachers, getUniqueSubjects, teachersData } from "@/data/teachersData";
import { useLanguage } from "@/contexts/LanguageContext";

const TeachersList = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [priceSort, setPriceSort] = useState("default");
  const [ratingSort, setRatingSort] = useState("default");
  const location = useLocation();

  // Extract subject ID from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectId = params.get('subject');
    
    if (subjectId) {
      // If there's a subject ID in the URL, set it as the filter
      setSubjectFilter(subjectId);
    }
  }, [location]);
  
  // Get unique subjects for filter
  const subjects = getUniqueSubjects();
  
  // Filter and sort teachers (modify to handle the new default values)
  const filteredTeachers = filterTeachers(
    searchTerm, 
    subjectFilter === "all" ? "" : subjectFilter, 
    priceSort === "default" ? "" : priceSort, 
    ratingSort === "default" ? "" : ratingSort
  );

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSubjectFilter("all");
    setPriceSort("default");
    setRatingSort("default");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">{t('teachersTitle')}</h1>
            <p className="text-gray-600">
              {t('teachersDescription')}
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
                <TeacherCard 
                  key={teacher.id}
                  id={teacher.id}
                  name={teacher.name}
                  subjects={[teacher.subject]}
                  rating={teacher.rating}
                  reviewsCount={teacher.reviews}
                  hourlyRate={teacher.hourlyRate}
                  location="الكويت"
                  availability={teacher.experience}
                  image={teacher.image}
                />
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
