
import React from "react";

interface TeacherRatingProps {
  rating: number;
  reviewsCount: number;
}

export const TeacherRating = ({ rating, reviewsCount }: TeacherRatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 text-yellow-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <div className="text-sm font-medium ms-1">{rating.toFixed(1)}</div>
      </div>
      <div className="text-sm text-gray-500">({reviewsCount} تقييم)</div>
    </div>
  );
};
