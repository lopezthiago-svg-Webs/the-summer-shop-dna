import { useState, useEffect, useMemo } from "react";
import { Sparkles, Sun } from "lucide-react";
import Header from "@/components/Header";
import ShippingBanner from "@/components/ShippingBanner";
import ProductCard from "@/components/ProductCard";
import ComboSection from "@/components/ComboSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import DetailModal from "@/components/DetailModal";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CategoryFilter from "@/components/CategoryFilter";
import { Product } from "@/types";
import { PRODUCTS, COMBO } from "@/constants";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(() => {
    return localStorage.getItem("adminMode") === "true";
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(PRODUCTS.map(p => p.category))];
    return cats.filter(Boolean) as string[];
  }, []);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && showBanner) {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBanner]);

  const toggleAdminMode = () => {
    const newValue = !isAdminMode;
    setIsAdminMode(newValue);
    localStorage.setItem("adminMode", String(newValue));
  };

  const handleShowDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Shipping Banner */}
      <ShippingBanner 
        isVisible={showBanner} 
        onClose={() => setShowBanner(false)} 
      />

      {/* Header */}
      <Header 
        isAdminMode={isAdminMode} 
        onAdminToggle={toggleAdminMode}
        bannerVisible={showBanner}
      />

      {/* Main Content */}
      <main className={`transition-all duration-300 ${showBanner ? 'pt-[104px]' : 'pt-16'}`}>
        {/* Hero Section - Compact for Mobile */}
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-outfit font-semibold text-xs md:text-sm mb-4 md:mb-6 animate-bounce-gentle">
              <Sun className="w-3 h-3 md:w-4 md:h-4" />
              Verano 2026 ☀️
            </div>
            <h1 className="font-outfit font-extrabold text-3xl md:text-6xl lg:text-7xl text-foreground mb-4 md:mb-6 leading-tight">
              Lo mejor para tu
              <span className="text-gradient-summer block">verano</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-xl mx-auto">
              Conservadoras, termos y todo lo que necesitás. 
              <span className="font-bold text-primary"> Envío gratis</span> a San Pedro y San Nicolás.
            </p>
          </div>
        </section>

        {/* Combo Section - Sales Anchor */}
        <div id="ofertas">
          <ComboSection combo={COMBO} />
        </div>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="font-outfit font-bold text-xl md:text-3xl text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              Productos
            </h2>
            <span className="text-muted-foreground text-xs md:text-sm bg-muted px-2 py-1 rounded-full">
              {filteredProducts.length} disponibles
            </span>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onShowDetail={handleShowDetail}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Trust Banner */}
        <section className="bg-muted py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              {[
                { emoji: "🚚", title: "Envío Gratis", desc: "San Pedro y San Nicolás" },
                { emoji: "💵", title: "Pago Único", desc: "Sin complicaciones" },
                { emoji: "🔒", title: "Compra Segura", desc: "100% protegida" },
                { emoji: "💬", title: "Atención", desc: "Por WhatsApp" },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center p-3 md:p-4 rounded-2xl bg-background/50 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-2xl md:text-3xl mb-2">{item.emoji}</span>
                  <h3 className="font-outfit font-bold text-foreground text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Detail Modal */}
      <DetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
