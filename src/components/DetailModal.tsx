import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ShoppingCart, MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, generateWhatsAppLink, WHATSAPP_NUMBER } from "@/constants";

interface DetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const DetailModal = ({ product, isOpen, onClose }: DetailModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setCurrentImage(0);
  }, [product]);

  if (!isOpen || !product) return null;

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const askQuestion = () => {
    const message = encodeURIComponent(
      `¡Hola! 👋 Tengo una consulta sobre:\n\n📦 ${product.name}\n\n¿Podrían ayudarme?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-card rounded-4xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 aspect-square flex-shrink-0">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 badge-sale">
                {product.badge}
              </div>
            )}

            {/* Discount */}
            <div className="absolute top-4 right-16 md:right-4 bg-foreground text-background font-outfit font-bold px-3 py-1 rounded-full">
              -{discount}%
            </div>

            {/* Image Navigation */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 shadow-lg flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Thumbnails */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                        idx === currentImage 
                          ? "border-primary scale-110" 
                          : "border-transparent opacity-70"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">
              {product.category}
            </p>
            
            <h2 className="font-outfit font-extrabold text-2xl md:text-3xl text-foreground mb-3">
              {product.name}
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.longDescription || product.description}
            </p>

            {/* Price */}
            <div className="bg-muted rounded-3xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="price-original text-sm">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-xs font-bold">
                  -{discount}% OFF
                </span>
              </div>
              <span className="price-sale text-4xl">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={generateWhatsAppLink(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-buy flex items-center justify-center gap-3 text-lg py-4"
              >
                <ShoppingCart className="w-5 h-5" />
                ¡Lo quiero!
              </a>
              <button
                onClick={askQuestion}
                className="flex items-center justify-center gap-2 bg-muted text-foreground font-outfit font-semibold rounded-2xl py-3 hover:bg-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Hacer una pregunta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
