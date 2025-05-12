
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeacherDetailsProps {
  location: string;
  availability: string;
}

export const TeacherDetails = ({ location, availability }: TeacherDetailsProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="text-sm text-gray-600">
      <p className="flex items-center gap-1.5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {location}
      </p>
      <p className="flex items-center gap-1.5 mt-1">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {availability}
      </p>
    </div>
  );
};
