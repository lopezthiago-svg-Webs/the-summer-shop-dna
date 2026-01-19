import { Truck, X, MapPin } from "lucide-react";

interface ShippingBannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const ShippingBanner = ({ isVisible, onClose }: ShippingBannerProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2.5 px-4 flex items-center justify-center gap-2 animate-slide-down shadow-md">
      <Truck className="w-4 h-4 animate-bounce-gentle flex-shrink-0" />
      <div className="flex items-center gap-1 text-xs sm:text-sm font-medium">
        <span className="font-bold">🚚 ENVÍO GRATIS</span>
        <MapPin className="w-3 h-3 hidden sm:inline" />
        <span>San Pedro y San Nicolás</span>
      </div>
      <button
        onClick={onClose}
        className="absolute right-2 p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
        aria-label="Cerrar banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ShippingBanner;
