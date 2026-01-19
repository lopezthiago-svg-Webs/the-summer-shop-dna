import { Truck, X, Sparkles } from "lucide-react";

interface ShippingBannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const ShippingBanner = ({ isVisible, onClose }: ShippingBannerProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-orange-500 to-secondary text-primary-foreground py-2.5 px-4 flex items-center justify-center gap-3 animate-slide-down shadow-lg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIgY3g9IjIwIiBjeT0iMjAiIHI9IjMiLz48L2c+PC9zdmc+')] opacity-30" />
      <div className="relative flex items-center gap-2">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <Truck className="w-5 h-5 animate-bounce-gentle" />
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
          <span>🚚 ENVÍO GRATIS</span>
          <span className="hidden sm:inline">•</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
            San Pedro & San Nicolás
          </span>
        </div>
        <Sparkles className="w-4 h-4 animate-pulse" />
      </div>
      <button
        onClick={onClose}
        className="absolute right-2 p-1.5 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Cerrar banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ShippingBanner;
