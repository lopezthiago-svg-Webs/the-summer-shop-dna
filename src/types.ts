export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice: number;
  images: string[];
  badge?: string;
  category: string;
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  items: string[];
  savings: number;
}
