import { Check, ShoppingCart, Sparkles } from "lucide-react";
import { Combo } from "@/types";
import { formatPrice, generateWhatsAppLink } from "@/constants";

interface ComboSectionProps {
  combo: Combo;
}

const ComboSection = ({ combo }: ComboSectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-4xl mx-4 my-8">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-12 lg:p-16">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-outfit font-bold text-sm mb-4 animate-bounce-gentle">
            <Sparkles className="w-4 h-4" />
            SUPER OFERTA
          </div>

          {/* Title */}
          <h2 className="font-outfit font-extrabold text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
            {combo.name}
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-6">
            {combo.description}
          </p>

          {/* Items List */}
          <ul className="space-y-3 mb-8">
            {combo.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-primary-foreground">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-success-foreground" />
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* Price Block */}
          <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-6 mb-6 border border-primary-foreground/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary-foreground/60 line-through text-lg">
                {formatPrice(combo.originalPrice)}
              </span>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                Ahorrás {formatPrice(combo.savings)}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-outfit font-extrabold text-5xl md:text-6xl text-primary">
                {formatPrice(combo.price)}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={generateWhatsAppLink(combo.name, combo.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-buy inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <ShoppingCart className="w-5 h-5" />
            ¡QUIERO EL COMBO!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComboSection;
