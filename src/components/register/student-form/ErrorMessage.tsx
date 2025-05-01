
import React from "react";

interface ErrorMessageProps {
  message: string | null;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  
  return (
    <div className="p-3 border border-red-300 bg-red-50 text-red-800 rounded">
      {message}
    </div>
  );
};
