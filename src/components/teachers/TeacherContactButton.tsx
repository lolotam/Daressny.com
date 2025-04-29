
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TeacherContactButtonProps {
  id: number;
}

export const TeacherContactButton = ({ id }: TeacherContactButtonProps) => {
  return (
    <Button className="w-full bg-brand-blue hover:bg-brand-blue text-white" asChild>
      <Link to={`/teachers/${id}`}>
        تواصل مع فريق الدعم
      </Link>
    </Button>
  );
};
