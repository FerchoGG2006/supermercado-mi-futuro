import { create } from 'zustand';
import type { Category, Product, CartItem } from '../types';

interface StoreState {
  categories: Category[];
  products: Product[];
  cart: CartItem[];
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
  fetchProducts: () => Promise<void>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const API_URL = 'http://localhost:3001/api';

export const useStore = create<StoreState>((set) => ({
  categories: [],
  products: [],
  cart: [],
  isLoading: false,

  addToCart: (product) => set((state) => {
    const existing = state.cart.find(item => item.product.id === product.id);
    if (existing) {
      return { cart: state.cart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
    }
    return { cart: [...state.cart, { product, quantity: 1 }] };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.product.id !== productId)
  })),

  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item => item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item)
  })),

  clearCart: () => set({ cart: [] }),

  fetchCategories: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/categories`);
      if (!response.ok) throw new Error('Failed to load categories');
      const data = await response.json();
      set({ categories: data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error('Failed to load products');
      const data = await response.json();
      set({ products: data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  }
}));
