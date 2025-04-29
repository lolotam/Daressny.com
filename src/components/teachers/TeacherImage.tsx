
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeacherImageProps {
  image: string;
  name: string;
}

export const TeacherImage = ({ image, name }: TeacherImageProps) => {
  // Extract initials from name for the fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="aspect-square overflow-hidden relative">
      {image ? (
        <img
          src={image}
          alt={`صورة ${name}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="text-4xl font-bold text-gray-500">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
};
