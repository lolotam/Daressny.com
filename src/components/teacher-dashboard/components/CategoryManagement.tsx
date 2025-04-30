
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CategoryManagementProps {
  categories: string[];
}

export const CategoryManagement = ({ categories: initialCategories }: CategoryManagementProps) => {
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(initialCategories);
  
  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (categoryToRemove: string) => {
    setCategories(categories.filter(category => category !== categoryToRemove));
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-bold">إدارة الفئات</h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.filter(cat => cat !== 'all').map((category, index) => (
            <div 
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full flex items-center"
            >
              <span>{category}</span>
              <button 
                className="ml-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300"
                onClick={() => handleRemoveCategory(category)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input 
            placeholder="أضف فئة جديدة" 
            className="max-w-xs" 
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <Button variant="outline" onClick={handleAddCategory}>إضافة</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Input component from the original file
const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Re-export Button to avoid importing it in multiple places
export { Button } from "@/components/ui/button";
