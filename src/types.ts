export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export interface Product {
  id: string;
  categoryId: string;
  title: string;
  description: string | null;
  price: string;
  oldPrice: string | null;
  image: string;
  tag: string | null;
  isFeatured: boolean;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
