import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import ShippingBanner from "@/components/ShippingBanner";
import ProductCard from "@/components/ProductCard";
import ComboSection from "@/components/ComboSection";
import DetailModal from "@/components/DetailModal";
import Footer from "@/components/Footer";
import { Product } from "@/types";
import { PRODUCTS, COMBO } from "@/constants";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(() => {
    return localStorage.getItem("adminMode") === "true";
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      />

      {/* Main Content */}
      <main className={`pt-20 ${showBanner ? 'mt-10' : ''} transition-all duration-300`}>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded-full font-outfit font-semibold text-sm mb-6 animate-bounce-gentle">
              <Sparkles className="w-4 h-4" />
              Temporada Verano 2025
            </div>
            <h1 className="font-outfit font-extrabold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Tu mejor versión
              <span className="text-gradient-summer block">bajo el sol</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Descubrí nuestra colección de verano con los mejores precios. 
              Envío gratis en compras mayores a $25.000.
            </p>
          </div>
        </section>

        {/* Combo Section - Sales Anchor */}
        <ComboSection combo={COMBO} />

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-outfit font-bold text-2xl md:text-3xl text-foreground">
              Productos destacados
            </h2>
            <span className="text-muted-foreground text-sm">
              {PRODUCTS.length} productos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onShowDetail={handleShowDetail}
              />
            ))}
          </div>
        </section>

        {/* Trust Banner */}
        <section className="bg-muted py-12 mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { emoji: "🚚", title: "Envío Gratis", desc: "+$25.000" },
                { emoji: "💳", title: "3 Cuotas", desc: "Sin interés" },
                { emoji: "🔒", title: "Compra Segura", desc: "100% protegida" },
                { emoji: "💬", title: "Atención", desc: "Por WhatsApp" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-3xl mb-2">{item.emoji}</span>
                  <h3 className="font-outfit font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

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
