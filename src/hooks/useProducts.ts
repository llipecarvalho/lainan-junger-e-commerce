import { useState, useMemo } from 'react';
import { Product, ProductFilters } from '@/types/types';
import productsData from '@/data/products.json';

export const useProducts = () => {
    const [filters, setFilters] = useState<ProductFilters>({});
    const [sortBy, setSortBy] = useState<string>('relevance');

    const products: Product[] = productsData;

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Filter by search
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchLower) ||
                    product.category.toLowerCase().includes(searchLower) ||
                    product.description?.toLowerCase().includes(searchLower)
            );
        }

        // Filter by category
        if (filters.category && filters.category !== 'Todos') {
            filtered = filtered.filter((product) => product.category === filters.category);
        }

        // Filter by price range
        if (filters.minPrice !== undefined) {
            filtered = filtered.filter((product) => product.price >= filters.minPrice!);
        }
        if (filters.maxPrice !== undefined) {
            filtered = filtered.filter((product) => product.price <= filters.maxPrice!);
        }

        // Filter by sizes
        if (filters.sizes && filters.sizes.length > 0) {
            filtered = filtered.filter((product) =>
                product.sizes?.some((size) => filters.sizes!.includes(size))
            );
        }

        // Filter by colors
        if (filters.colors && filters.colors.length > 0) {
            filtered = filtered.filter((product) =>
                product.colors?.some((color) => filters.colors!.includes(color))
            );
        }

        // Filter by new products
        if (filters.isNew) {
            filtered = filtered.filter((product) => product.isNew);
        }

        // Filter by products with discount
        if (filters.hasDiscount) {
            filtered = filtered.filter((product) => product.discount && product.discount > 0);
        }

        // Sort products
        switch (sortBy) {
            case 'price_asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            case 'popular':
                filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
                break;
            case 'discount':
                filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
                break;
            default:
                // relevance - keep original order
                break;
        }

        return filtered;
    }, [products, filters, sortBy]);

    const getProductById = (id: number): Product | undefined => {
        return products.find((product) => product.id === id);
    };

    const getProductsByCategory = (category: string): Product[] => {
        return products.filter((product) => product.category === category);
    };

    const getRelatedProducts = (productId: number, limit: number = 4): Product[] => {
        const product = getProductById(productId);
        if (!product) return [];

        return products
            .filter((p) => p.id !== productId && p.category === product.category)
            .slice(0, limit);
    };

    return {
        products,
        filteredProducts,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        getProductById,
        getProductsByCategory,
        getRelatedProducts,
    };
};
