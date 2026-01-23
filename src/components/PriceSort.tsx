import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

export type SortOrder = "none" | "asc" | "desc";

interface PriceSortProps {
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

const PriceSort = ({ sortOrder, onSortChange }: PriceSortProps) => {
  const handleClick = () => {
    const nextOrder: SortOrder = 
      sortOrder === "none" ? "asc" : 
      sortOrder === "asc" ? "desc" : "none";
    onSortChange(nextOrder);
  };

  const getIcon = () => {
    switch (sortOrder) {
      case "asc":
        return <ArrowUp className="w-4 h-4" />;
      case "desc":
        return <ArrowDown className="w-4 h-4" />;
      default:
        return <ArrowUpDown className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (sortOrder) {
      case "asc":
        return "Menor precio";
      case "desc":
        return "Mayor precio";
      default:
        return "Ordenar";
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200
        ${sortOrder !== "none" 
          ? "bg-primary text-primary-foreground shadow-md" 
          : "bg-muted text-muted-foreground hover:bg-muted/80"
        }
      `}
    >
      {getIcon()}
      <span className="hidden sm:inline">{getLabel()}</span>
    </button>
  );
};

export default PriceSort;
