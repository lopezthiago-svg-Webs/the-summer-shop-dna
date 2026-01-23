import { useState, useEffect } from "react";
import { Rocket, Home, Tag } from "lucide-react";
import logo from "@/assets/logo-oferton.png";

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

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
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
            className="flex items-center gap-1 group focus:outline-none"
          >
            <img 
              src={logo} 
              alt="El Ofertón" 
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Inicio</span>
            </button>
            <button
              onClick={() => scrollToSection("ofertas")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Tag className="w-4 h-4" />
              <span className="hidden sm:inline">Ofertas</span>
            </button>
            
            {isAdminMode && (
              <button
                onClick={() => window.open("https://lovable.dev", "_blank")}
                className="flex items-center gap-2 bg-foreground text-background px-3 py-2 rounded-2xl font-outfit font-semibold text-sm hover:opacity-90 transition-opacity animate-scale-in"
              >
                <Rocket className="w-4 h-4" />
                <span className="hidden md:inline">Deploy</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
