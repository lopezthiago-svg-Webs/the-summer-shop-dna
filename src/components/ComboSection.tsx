import { Check, ShoppingCart, Sparkles, Gift, Flame, Star } from "lucide-react";
import { Combo } from "@/types";
import { formatPrice, generateWhatsAppLink } from "@/constants";

interface ComboSectionProps {
  combo: Combo;
}

const ComboSection = ({ combo }: ComboSectionProps) => {
  return (
    <section className="relative mx-3 md:mx-4 my-6 md:my-8">
      {/* Main Card */}
      <div className="combo-card rounded-3xl md:rounded-4xl overflow-hidden">
        {/* Animated Glow Effects */}
        <div className="combo-glow top-0 right-0 opacity-60" />
        <div className="combo-glow bottom-0 left-0 opacity-40" style={{ animationDelay: '2s' }} />
        
        {/* Decorative Stars */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <Star className="w-6 h-6 md:w-8 md:h-8 text-secondary fill-secondary animate-pulse-scale" />
        </div>
        <div className="absolute top-12 right-12 md:top-20 md:right-20 z-20">
          <Star className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary animate-pulse-scale" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden">
            <div className="image-shine absolute inset-0">
              <img
                src={combo.image}
                alt={combo.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
            {/* Gradient overlay for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/80" />
            
            {/* Floating Badge on Image */}
            <div className="absolute top-4 left-4 md:hidden">
              <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-full font-outfit font-bold text-sm animate-glow">
                <Flame className="w-4 h-4" />
                SUPER OFERTA
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative p-5 md:p-8 lg:p-12 flex flex-col justify-center -mt-20 md:mt-0">
            {/* Badge - Desktop */}
            <div className="hidden md:inline-flex items-center gap-2 bg-gradient-summer text-white px-4 py-2 rounded-full font-outfit font-bold text-sm mb-4 w-fit animate-glow">
              <Flame className="w-4 h-4" />
              SUPER OFERTA DEL VERANO
              <Flame className="w-4 h-4" />
            </div>

            {/* Title with Shimmer */}
            <h2 className="font-outfit font-extrabold text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-4 leading-tight shimmer-text">
              {combo.name}
            </h2>

            <p className="text-white/80 text-sm md:text-lg mb-4 md:mb-6 max-w-md">
              {combo.description}
            </p>

            {/* Items List with Animation */}
            <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 stagger-children">
              {combo.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 md:gap-3 text-white group">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-success flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                    {item.includes("REGALO") ? (
                      <Gift className="w-3.5 h-3.5 md:w-4 md:h-4 text-success-foreground" />
                    ) : (
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success-foreground" />
                    )}
                  </div>
                  <span className={`font-medium text-sm md:text-base ${item.includes("REGALO") ? "text-secondary font-bold" : ""}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price Block - More Dramatic */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 mb-4 md:mb-6 border border-white/20 animate-fade-in">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white/50 line-through text-base md:text-xl">
                  {formatPrice(combo.originalPrice)}
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-bold animate-bounce-gentle">
                  🔥 Ahorrás {formatPrice(combo.savings)}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-outfit font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary animate-pulse-scale">
                  {formatPrice(combo.price)}
                </span>
              </div>
              <p className="text-white/60 text-xs md:text-sm mt-2">
                ✨ Precio único por tiempo limitado
              </p>
            </div>

            {/* CTA Button - Animated */}
            <a
              href={generateWhatsAppLink(combo.name, combo.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-buy w-full md:w-auto inline-flex items-center justify-center gap-3 text-lg md:text-xl px-8 py-5 animate-glow hover:animate-shake"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="font-bold">¡LO QUIERO YA!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;