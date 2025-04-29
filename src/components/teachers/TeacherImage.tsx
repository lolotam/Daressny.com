
import React from "react";

interface TeacherImageProps {
  image: string;
  name: string;
}

export const TeacherImage = ({ image, name }: TeacherImageProps) => {
  return (
    <div className="aspect-square overflow-hidden relative">
      <img
        src={image || "https://via.placeholder.com/300"}
        alt={`صورة ${name}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
