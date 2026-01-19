import { useState, useEffect } from "react";
import { Sun, ShoppingBag, Rocket } from "lucide-react";

interface HeaderProps {
  isAdminMode: boolean;
  onAdminToggle: () => void;
}

const Header = ({ isAdminMode, onAdminToggle }: HeaderProps) => {
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

    // Reset count after 2 seconds of inactivity
    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass shadow-lg py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-summer flex items-center justify-center shadow-button group-hover:scale-110 transition-transform">
              <Sun className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-outfit font-extrabold text-xl md:text-2xl text-gradient-summer">
              TheSummerShop
            </span>
          </button>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            {isAdminMode && (
              <button
                onClick={() => window.open("https://lovable.dev", "_blank")}
                className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-2xl font-outfit font-semibold text-sm hover:opacity-90 transition-opacity animate-scale-in"
              >
                <Rocket className="w-4 h-4" />
                Deploy
              </button>
            )}
            <button className="w-10 h-10 rounded-2xl bg-card shadow-summer flex items-center justify-center hover:shadow-summer-hover transition-all hover:scale-105">
              <ShoppingBag className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
