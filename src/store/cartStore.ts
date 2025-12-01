import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/data/products";

export interface CartItem extends Product {
    quantity: number;
}

export interface CartStore {
    items: CartItem[];
    addToCart: (product: Product)=> void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            
            addToCart: (product) => {
                const existingItem = get().items.find(item => item.id === product.id);
                if (existingItem) {
                    set({
                        items: get().items.map(item =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    });
                } else {
                    set({ items: [...get().items, { ...product, quantity: 1 }] });
                }
            },

            removeFromCart: (productId) => {
                set({
                    items: get().items.filter(item => item.id !== productId)
                });
            },

            increaseQuantity: (productId) => {
                set({
                    items: get().items.map(item =>
                        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                    )
                });
            },

            decreaseQuantity: (productId) => {
                const item = get().items.find(i => i.id === productId);
                if (item && item.quantity === 1) {
                    set({
                        items: get().items.filter(i => i.id !== productId)
                    });
                } else {
                    set({
                        items: get().items.map(i =>
                            i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
                        )
                    });
                }
            },

            clearCart: () => {
                set({ items: [] });
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);