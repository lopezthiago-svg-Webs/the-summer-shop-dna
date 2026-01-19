import { Product, Combo } from "./types";

export const WHATSAPP_NUMBER = "5491139524038";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Conservadora 42L",
    description: "Gran capacidad para playa y camping",
    longDescription: "Conservadora de 42 litros con aislamiento térmico premium. Mantiene tus bebidas y alimentos fríos por más tiempo. Ideal para salidas familiares, camping o días de playa. Incluye asa resistente y tapón de drenaje.",
    price: 23999,
    originalPrice: 28900,
    images: [
      "https://drive.google.com/thumbnail?id=14C-VlU95AU_xTwib-fWPUvAjGL2iJR1G&sz=w1200"
    ],
    badge: "OFERTA 🔥",
    category: "Playa / Camping"
  },
  {
    id: "2",
    name: "Conservadora 22L",
    description: "Perfecta para picnic y salidas",
    longDescription: "Conservadora compacta de 22 litros, ideal para camping y picnic. Fácil de transportar con su asa ergonómica. Mantiene la temperatura por horas. Perfecta para parejas o salidas cortas.",
    price: 19900,
    originalPrice: 19900,
    images: [
      "https://drive.google.com/thumbnail?id=1oowtWZMd74TUmDz3Sh-zoEhB3HkmgU-Y&sz=w1200"
    ],
    category: "Playa / Camping"
  },
  {
    id: "3",
    name: "Pava Mate Eléctrica",
    description: "Acero inoxidable premium",
    longDescription: "Pava eléctrica de acero inoxidable con corte automático. Perfecta para el mate, con pico vertedor especial que no gotea. Capacidad ideal y calentamiento rápido. Base 360° para mayor comodidad.",
    price: 15900,
    originalPrice: 19500,
    images: [
      "https://drive.google.com/thumbnail?id=1a5pbjDVRDeKnuufAPk7H3OqGuX-BUoOa&sz=w1200"
    ],
    badge: "OFERTA 🔥",
    category: "Bazar / Hogar"
  }
];

export const COMBO: Combo = {
  id: "combo-1",
  name: "SUPER COMBO VERANO",
  description: "¡Todo lo que necesitás para disfrutar el verano al máximo!",
  price: 70000,
  originalPrice: 85000,
  image: "https://drive.google.com/thumbnail?id=1f5vLTGc46ShwldZ9bkDDI75oIjkHipVo&sz=w1200",
  items: [
    "Conservadora 42L",
    "Conservadora 22L", 
    "Pava Mate Eléctrica",
    "Termolar 2.5L",
    "Botellas Térmicas 2L y 1L",
    "Botellita Sport (¡REGALO!)"
  ],
  savings: 15000
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
