
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface FileUploaderProps {
  accept: string;
  maxSize: number; // in MB
  label: string;
  onUpload?: (file: File) => void;
  currentFile?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  accept,
  maxSize,
  label,
  onUpload,
  currentFile
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(currentFile || null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setError(null);
    
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`الملف كبير جداً. الحد الأقصى هو ${maxSize} ميجابايت.`);
      return;
    }

    // Check file type
    if (!file.type.match(accept.replace(/\*/g, '.*'))) {
      setError(`نوع الملف غير مدعوم. الأنواع المدعومة هي ${accept}.`);
      return;
    }

    // Create preview if it's an image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }

    // Call onUpload callback if provided
    if (onUpload) {
      onUpload(file);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const clearFile = () => {
    setFilePreview(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    if (onUpload) {
      onUpload(new File([], ""));
    }
  };

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive ? 'border-brand-blue bg-blue-50' : 'border-gray-300'
        } ${error ? 'border-red-400' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />
        
        {!filePreview && !currentFile ? (
          <div className="flex flex-col items-center justify-center py-4">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="mb-2 text-sm text-gray-500">
              {label}
            </p>
            <p className="text-xs text-gray-500">
              اسحب وأفلت أو
            </p>
            <Button
              type="button"
              onClick={onButtonClick}
              variant="outline"
              className="mt-2"
            >
              تصفح
            </Button>
          </div>
        ) : (
          <div className="relative">
            {accept.includes('image') ? (
              <img
                src={filePreview || currentFile}
                alt="Preview"
                className="mx-auto max-h-40 rounded"
              />
            ) : (
              <div className="bg-gray-100 p-4 rounded flex items-center justify-center">
                <span className="text-gray-600">تم اختيار الملف</span>
              </div>
            )}
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute top-0 left-0 bg-white rounded-full w-8 h-8 -mt-2 -ml-2 shadow"
              onClick={clearFile}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
      
      <div className="text-xs text-gray-500 mt-2">
        الحد الأقصى للحجم: {maxSize} ميجابايت. الأنواع المدعومة: {accept.replace(/\*/g, 'all ')}
      </div>
    </div>
  );
};
