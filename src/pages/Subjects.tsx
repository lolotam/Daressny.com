
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SubjectFilters } from '@/components/subjects/SubjectFilters';
import { SubjectsGrid } from '@/components/subjects/SubjectsGrid';
import { EmptySubjectsState } from '@/components/subjects/EmptySubjectsState';
import { subjectsData } from '@/data/subjectsData';
import { useSubjectsFilter } from '@/hooks/useSubjectsFilter';

const Subjects = () => {
  const {
    selectedLevel,
    setSelectedLevel,
    selectedMethod,
    setSelectedMethod,
    searchQuery,
    setSearchQuery,
    filteredSubjects,
    resetFilters
  } = useSubjectsFilter(subjectsData);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">المواد الدراسية المتاحة</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر المادة التي ترغب في دراستها من بين مجموعة واسعة من المواد، مع أفضل المعلمين المتخصصين.
            </p>
          </div>
          
          <SubjectFilters
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          {filteredSubjects.length > 0 ? (
            <SubjectsGrid subjects={filteredSubjects} />
          ) : (
            <EmptySubjectsState resetFilters={resetFilters} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subjects;
