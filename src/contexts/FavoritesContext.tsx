import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types/types';
import { STORAGE_KEYS } from '@/constants/constants';
import { toast } from 'sonner';

interface FavoritesContextType {
    favorites: Product[];
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (productId: number) => void;
    isFavorite: (productId: number) => boolean;
    toggleFavorite: (product: Product) => void;
    getFavoriteCount: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const savedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        if (savedFavorites) {
            try {
                setFavorites(JSON.parse(savedFavorites));
            } catch (error) {
                console.error('Error loading favorites from localStorage:', error);
            }
        }
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (product: Product) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((fav) => fav.id === product.id)) {
                return prevFavorites;
            }
            toast.success('Adicionado aos favoritos');
            return [...prevFavorites, product];
        });
    };

    const removeFromFavorites = (productId: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((product) => product.id !== productId)
        );
        toast.success('Removido dos favoritos');
    };

    const isFavorite = (productId: number) => {
        return favorites.some((product) => product.id === productId);
    };

    const toggleFavorite = (product: Product) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const getFavoriteCount = () => {
        return favorites.length;
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                isFavorite,
                toggleFavorite,
                getFavoriteCount,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavoritesContext must be used within a FavoritesProvider');
    }
    return context;
};
