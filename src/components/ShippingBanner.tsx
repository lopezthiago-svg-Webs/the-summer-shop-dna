import { Truck, X } from "lucide-react";

interface ShippingBannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const ShippingBanner = ({ isVisible, onClose }: ShippingBannerProps) => {
  if (!isVisible) return null;

  return (
    <div className="banner-shipping flex items-center justify-center gap-2 relative animate-slide-down">
      <Truck className="w-4 h-4 animate-bounce-gentle" />
      <span className="text-sm md:text-base">
        🎉 ¡ENVÍO GRATIS en compras mayores a $25.000!
      </span>
      <button
        onClick={onClose}
        className="absolute right-4 p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ShippingBanner;
