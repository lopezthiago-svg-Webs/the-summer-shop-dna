import { Product, Combo } from "./types";

export const WHATSAPP_NUMBER = "5491112345678";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Bikini Tropical Paradise",
    description: "Set completo con diseño exclusivo",
    longDescription: "Bikini de dos piezas con estampado tropical único. Tela de secado rápido con protección UV. Incluye top con tirantes ajustables y bottom de tiro medio. Perfecto para playa o pileta.",
    price: 12990,
    originalPrice: 24990,
    images: [
      "https://images.unsplash.com/photo-1570976447640-ac859083963f?w=400",
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400"
    ],
    badge: "OFERTA 🔥",
    category: "Bikinis"
  },
  {
    id: "2",
    name: "Malla Enteriza Elegance",
    description: "Diseño sofisticado y moderno",
    longDescription: "Malla enteriza con escote en V y espalda descubierta. Moldea la figura y realza tu silueta. Ideal para quienes buscan comodidad sin perder estilo.",
    price: 15990,
    originalPrice: 29990,
    images: [
      "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=400",
      "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=400"
    ],
    badge: "TOP VENTAS",
    category: "Mallas"
  },
  {
    id: "3",
    name: "Shorts Playeros Wave",
    description: "Frescos y cómodos para el verano",
    longDescription: "Shorts de baño con estampado de olas. Secado ultra rápido, bolsillos laterales con cierre y cintura elástica con cordón ajustable.",
    price: 8990,
    originalPrice: 14990,
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"
    ],
    category: "Shorts"
  },
  {
    id: "4",
    name: "Pareo Sunset Dreams",
    description: "Accesorio versátil y elegante",
    longDescription: "Pareo de gasa liviana con degradé de colores atardecer. Se puede usar como falda, vestido o top. Talle único que se adapta a todos los cuerpos.",
    price: 6990,
    originalPrice: 12990,
    images: [
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=400"
    ],
    badge: "NUEVO",
    category: "Accesorios"
  },
  {
    id: "5",
    name: "Bikini Neon Vibes",
    description: "Colores intensos que brillan",
    longDescription: "Bikini en tonos neón que destacan bajo el sol. Diseño brasileño con cobertura media. Incluye top triangular y bottom con tiras laterales ajustables.",
    price: 11990,
    originalPrice: 21990,
    images: [
      "https://images.unsplash.com/photo-1541979144953-c8a11a6cdc38?w=400",
      "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=400"
    ],
    badge: "OFERTA 🔥",
    category: "Bikinis"
  },
  {
    id: "6",
    name: "Ojotas Premium Comfort",
    description: "Máxima comodidad para tus pies",
    longDescription: "Ojotas con plantilla anatómica de memory foam. Suela antideslizante perfecta para pileta. Diseño minimalista que combina con todo.",
    price: 4990,
    originalPrice: 8990,
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400"
    ],
    category: "Calzado"
  }
];

export const COMBO: Combo = {
  id: "combo-1",
  name: "COMBO VERANO TOTAL",
  description: "Todo lo que necesitás para arrasar en la playa",
  price: 29990,
  originalPrice: 52970,
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  items: [
    "Bikini Tropical Paradise",
    "Pareo Sunset Dreams",
    "Ojotas Premium Comfort",
    "Bolso de playa de regalo"
  ],
  savings: 22980
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(price);
};

export const generateWhatsAppLink = (productName: string, price: number): string => {
  const message = encodeURIComponent(
    `¡Hola! 👋 Me interesa comprar:\n\n📦 ${productName}\n💰 Precio: ${formatPrice(price)}\n\n¿Está disponible?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
