
import { useState, useMemo } from 'react';
import { SubjectType } from '@/data/subjectsData';

export const useSubjectsFilter = (subjects: SubjectType[]) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedMethod, setSelectedMethod] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSubjects = useMemo(() => {
    return subjects.filter(subject => {
      const matchesLevel = selectedLevel === 'all' || subject.levels.includes(selectedLevel);
      const matchesMethod = selectedMethod === 'all' || subject.teachingMethods.includes(selectedMethod);
      const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesLevel && matchesMethod && matchesSearch;
    });
  }, [subjects, selectedLevel, selectedMethod, searchQuery]);

  const resetFilters = () => {
    setSelectedLevel('all');
    setSelectedMethod('all');
    setSearchQuery('');
  };

  return {
    selectedLevel,
    setSelectedLevel,
    selectedMethod,
    setSelectedMethod,
    searchQuery,
    setSearchQuery,
    filteredSubjects,
    resetFilters
  };
};
