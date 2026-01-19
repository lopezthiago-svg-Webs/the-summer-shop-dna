import { useState, useEffect } from "react";
import { Sun, Rocket, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/constants";

interface HeaderProps {
  isAdminMode: boolean;
  onAdminToggle: () => void;
  bannerVisible?: boolean;
}

const Header = ({ isAdminMode, onAdminToggle, bannerVisible = false }: HeaderProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 5) {
      onAdminToggle();
      setClickCount(0);
    }

    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-background border-b border-border shadow-sm ${
        bannerVisible ? "top-10" : "top-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-gradient-summer flex items-center justify-center shadow-button group-hover:scale-110 transition-transform">
              <Sun className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <span className="font-outfit font-extrabold text-lg md:text-2xl text-gradient-summer">
              TheSummerShop
            </span>
          </button>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            {isAdminMode && (
              <button
                onClick={() => window.open("https://lovable.dev", "_blank")}
                className="flex items-center gap-2 bg-foreground text-background px-3 py-2 rounded-2xl font-outfit font-semibold text-sm hover:opacity-90 transition-opacity animate-scale-in"
              >
                <Rocket className="w-4 h-4" />
                <span className="hidden md:inline">Deploy</span>
              </button>
            )}
            {/* WhatsApp Button - Mobile CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-success text-success-foreground px-3 py-2 rounded-2xl font-outfit font-bold text-sm hover:scale-105 transition-transform shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
