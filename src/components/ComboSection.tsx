import { Check, ShoppingCart, Sparkles, Gift } from "lucide-react";
import { Combo } from "@/types";
import { formatPrice, generateWhatsAppLink } from "@/constants";

interface ComboSectionProps {
  combo: Combo;
}

const ComboSection = ({ combo }: ComboSectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl md:rounded-4xl mx-3 md:mx-4 my-6 md:my-8 animate-fade-in">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 md:p-12 lg:p-16">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-outfit font-bold text-xs md:text-sm mb-3 md:mb-4 animate-bounce-gentle">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            SUPER AHORRO
          </div>

          {/* Title */}
          <h2 className="font-outfit font-extrabold text-2xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 md:mb-4 leading-tight">
            {combo.name}
          </h2>

          <p className="text-primary-foreground/80 text-sm md:text-lg mb-4 md:mb-6">
            {combo.description}
          </p>

          {/* Items List - Compact for Mobile */}
          <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8">
            {combo.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 md:gap-3 text-primary-foreground">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  {item.includes("REGALO") ? (
                    <Gift className="w-3 h-3 md:w-4 md:h-4 text-success-foreground" />
                  ) : (
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-success-foreground" />
                  )}
                </div>
                <span className="font-medium text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* Price Block */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 mb-4 md:mb-6 border border-primary-foreground/20">
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
              <span className="text-primary-foreground/60 line-through text-sm md:text-lg">
                {formatPrice(combo.originalPrice)}
              </span>
              <span className="bg-primary text-primary-foreground px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold animate-pulse-glow">
                Ahorrás {formatPrice(combo.savings)}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-outfit font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">
                {formatPrice(combo.price)}
              </span>
            </div>
          </div>

          {/* CTA Button - Big for Mobile */}
          <a
            href={generateWhatsAppLink(combo.name, combo.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-buy w-full md:w-auto inline-flex items-center justify-center gap-3 text-base md:text-lg px-6 md:px-8 py-4 md:py-4"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-bold">¡LO QUIERO!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
