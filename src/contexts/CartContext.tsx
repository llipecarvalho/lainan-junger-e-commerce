import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '@/types/types';
import { STORAGE_KEYS, FREE_SHIPPING_THRESHOLD, DEFAULT_SHIPPING_COST } from '@/constants/constants';
import { toast } from 'sonner';

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getItemCount: () => number;
    getSubtotal: () => number;
    getShipping: () => number;
    getTotal: () => number;
    isInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart from localStorage:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(items));
    }, [items]);

    const addToCart = (
        product: Product,
        quantity: number = 1,
        selectedSize?: string,
        selectedColor?: string
    ) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(
                (item) =>
                    item.product.id === product.id &&
                    item.selectedSize === selectedSize &&
                    item.selectedColor === selectedColor
            );

            if (existingItemIndex > -1) {
                // Update quantity if item already exists
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += quantity;
                toast.success('Quantidade atualizada no carrinho');
                return newItems;
            } else {
                // Add new item
                toast.success('Produto adicionado ao carrinho');
                return [...prevItems, { product, quantity, selectedSize, selectedColor }];
            }
        });
    };

    const removeFromCart = (productId: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
        toast.success('Produto removido do carrinho');
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setItems((prevItems) =>
            prevItems.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        toast.success('Carrinho limpo');
    };

    const getItemCount = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const getSubtotal = () => {
        return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const getShipping = () => {
        const subtotal = getSubtotal();
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : DEFAULT_SHIPPING_COST;
    };

    const getTotal = () => {
        return getSubtotal() + getShipping();
    };

    const isInCart = (productId: number) => {
        return items.some((item) => item.product.id === productId);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getItemCount,
                getSubtotal,
                getShipping,
                getTotal,
                isInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
