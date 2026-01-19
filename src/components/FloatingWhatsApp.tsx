import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/constants";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-success text-success-foreground px-4 py-3 md:px-5 md:py-4 rounded-full font-outfit font-bold text-sm md:text-base shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-gentle group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-pulse" />
      <span className="hidden sm:inline">¡Escribinos!</span>
      
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-30" />
    </a>
  );
};

export default FloatingWhatsApp;
