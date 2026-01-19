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
      "https://drive.google.com/thumbnail?id=14C-VlU95AU_xTwib-fWPUvAjGL2iJR1G&sz=w1200",
      "https://drive.google.com/thumbnail?id=14W_KeDMBcy7JsLR28QVGrEvr-NLgUSTX&sz=w1200",
      "https://drive.google.com/thumbnail?id=1LtPxl1cYxSuNP6qnj7QNLCayInG3qE90&sz=w1200"
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
  },
  {
    id: "4",
    name: "Botella Térmica 2L",
    description: "Mantiene frío o caliente por horas",
    longDescription: "Botella térmica de 2 litros con doble pared de acero inoxidable. Mantiene bebidas frías hasta 24 horas o calientes hasta 12 horas. Tapa hermética y asa de transporte.",
    price: 12500,
    originalPrice: 12500,
    images: [
      "https://drive.google.com/thumbnail?id=1nGO7qe4eusTeoGi6Gqb1R3fZleL_e_JS&sz=w1200"
    ],
    category: "Playa / Camping"
  },
  {
    id: "5",
    name: "Botella Térmica 1L",
    description: "Compacta y práctica",
    longDescription: "Botella térmica de 1 litro, perfecta para llevar a todos lados. Acero inoxidable de alta calidad. Ideal para el día a día, gimnasio o trabajo.",
    price: 8900,
    originalPrice: 8900,
    images: [
      "https://drive.google.com/thumbnail?id=1BStZ4spTh5MgtQTZ1Mki8rqpWy7CEOGM&sz=w1200"
    ],
    category: "Playa / Camping"
  },
  {
    id: "6",
    name: "Manguera de Jardín",
    description: "Resistente y flexible",
    longDescription: "Manguera de jardín de alta resistencia, flexible y duradera. Ideal para riego y limpieza. No se enreda y soporta alta presión de agua.",
    price: 14500,
    originalPrice: 18000,
    images: [
      "https://drive.google.com/thumbnail?id=1SaLF4GFnw3AcmuyZMV0SEVjeEOxlsbQC&sz=w1200"
    ],
    badge: "OFERTA 🔥",
    category: "Jardín"
  },
  {
    id: "7",
    name: "Dispenser de Cristal",
    description: "Elegante y funcional",
    longDescription: "Dispenser de cristal con capacidad para bebidas. Perfecto para fiestas, reuniones o decoración. Incluye grifo de acero inoxidable.",
    price: 18900,
    originalPrice: 18900,
    images: [
      "https://drive.google.com/thumbnail?id=1xCRDTUaU5wT2WyhOCDdodlE0FmQohUcW&sz=w1200"
    ],
    category: "Bazar / Hogar"
  },
  {
    id: "8",
    name: "Caja de Herramientas",
    description: "Organización profesional",
    longDescription: "Caja de herramientas resistente con múltiples compartimentos. Ideal para organizar todas tus herramientas. Material de alta resistencia y cierre seguro.",
    price: 32000,
    originalPrice: 45000,
    images: [
      "https://drive.google.com/thumbnail?id=15iCJ17RUttXST3KzJcR4q8JMWSJkeI-x&sz=w1200"
    ],
    badge: "SUPER OFERTA 🔥",
    category: "Herramientas"
  },
  {
    id: "9",
    name: "Jarra Veraniega",
    description: "Ideal para bebidas frescas",
    longDescription: "Jarra veraniega perfecta para servir jugos, limonadas y bebidas refrescantes. Diseño moderno y práctico para tus reuniones de verano.",
    price: 9900,
    originalPrice: 9900,
    images: [
      "https://drive.google.com/thumbnail?id=1mcgHEbl2OxCQeMHmGVYwrfLOtsCBQNlZ&sz=w1200"
    ],
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
