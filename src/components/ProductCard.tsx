import { useState } from "react";
import { ChevronLeft, ChevronRight, Info, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, generateWhatsAppLink } from "@/constants";

interface ProductCardProps {
  product: Product;
  onShowDetail: (product: Product) => void;
  index?: number;
}

const ProductCard = ({ product, onShowDetail, index = 0 }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const hasDiscount = discount > 0;

  return (
    <div 
      className="card-product group"
      style={{ 
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${index * 100}ms forwards`
      }}
    >
      {/* Image Gallery */}
      <div className="relative aspect-[4/3] overflow-hidden image-shine">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 badge-sale animate-pulse-glow shadow-lg">
            {product.badge}
          </div>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 right-3 bg-foreground text-background font-outfit font-bold text-xs px-2.5 py-1.5 rounded-full shadow-lg">
            -{discount}%
          </div>
        )}

        {/* Image Navigation */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/95 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/95 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Image Dots - More visible */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-2 py-1.5 rounded-full">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImage 
                      ? "bg-primary w-5" 
                      : "bg-white/70 w-2 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-outfit font-bold text-base md:text-lg text-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {product.description}
        </p>

        {/* Price - Aggressive Psychology */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="price-sale text-2xl md:text-3xl">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="price-original">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Action Buttons - Mobile Optimized */}
        <div className="flex gap-2">
          <a
            href={generateWhatsAppLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-buy flex-1 flex items-center justify-center gap-2 text-sm py-3.5"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-bold">COMPRAR</span>
          </a>
          <button
            onClick={() => onShowDetail(product)}
            className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors active:scale-95"
            aria-label="Ver detalles"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
