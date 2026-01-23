import { useState } from "react";
import { Palmtree, Home, Flower2, Fish, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Playa / Camping": <Palmtree className="w-4 h-4" />,
  "Bazar / Hogar": <Home className="w-4 h-4" />,
  "Jardín": <Flower2 className="w-4 h-4" />,
  "Pesca": <Fish className="w-4 h-4" />,
};

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {/* All Button */}
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full font-outfit font-semibold text-sm transition-all duration-300",
          "hover:scale-[1.02] active:scale-[0.98]",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          selectedCategory === null
            ? "bg-gradient-summer text-white shadow-lg shadow-primary/30"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
      >
        <LayoutGrid className="w-4 h-4" />
        <span className="hidden sm:inline">Todos</span>
      </button>
      
      {/* Category Buttons */}
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full font-outfit font-semibold text-sm transition-all duration-300",
            "hover:scale-[1.02] active:scale-[0.98]",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "animate-fade-in",
            selectedCategory === category
              ? "bg-gradient-summer text-white shadow-lg shadow-primary/30"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
          style={{ animationDelay: `${(index + 1) * 50}ms` }}
        >
          {categoryIcons[category] || <LayoutGrid className="w-4 h-4" />}
          <span className="hidden sm:inline">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
