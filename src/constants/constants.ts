import { SortOption } from '@/types/types';

// App Configuration
export const APP_NAME = 'Lainan Junger';
export const APP_DESCRIPTION = 'Moda exclusiva com estilo e autenticidade';
export const APP_URL = 'https://lainanjunger.com.br';

// Pagination
export const ITEMS_PER_PAGE = 12;
export const PRODUCTS_PER_ROW = 4;

// Shipping
export const FREE_SHIPPING_THRESHOLD = 199;
export const DEFAULT_SHIPPING_COST = 15;

// LocalStorage Keys
export const STORAGE_KEYS = {
    CART: 'lainan_cart',
    FAVORITES: 'lainan_favorites',
    USER: 'lainan_user',
    THEME: 'lainan_theme',
} as const;

// Sort Options
export const SORT_OPTIONS: SortOption[] = [
    { value: 'relevance', label: 'Mais Relevantes' },
    { value: 'price_asc', label: 'Menor Preço' },
    { value: 'price_desc', label: 'Maior Preço' },
    { value: 'newest', label: 'Mais Novos' },
    { value: 'popular', label: 'Mais Populares' },
    { value: 'discount', label: 'Maior Desconto' },
];

// Product Sizes
export const AVAILABLE_SIZES = ['PP', 'P', 'M', 'G', 'GG', 'XG'];

// Product Colors
export const AVAILABLE_COLORS = [
    { name: 'Preto', hex: '#000000' },
    { name: 'Branco', hex: '#FFFFFF' },
    { name: 'Cinza', hex: '#808080' },
    { name: 'Azul', hex: '#0066CC' },
    { name: 'Vermelho', hex: '#CC0000' },
    { name: 'Verde', hex: '#00AA00' },
];

// Price Ranges
export const PRICE_RANGES = [
    { min: 0, max: 50, label: 'Até R$ 50' },
    { min: 50, max: 100, label: 'R$ 50 - R$ 100' },
    { min: 100, max: 200, label: 'R$ 100 - R$ 200' },
    { min: 200, max: 500, label: 'R$ 200 - R$ 500' },
    { min: 500, max: Infinity, label: 'Acima de R$ 500' },
];

// Social Media
export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/lainanjunger',
    facebook: 'https://facebook.com/lainanjunger',
    twitter: 'https://twitter.com/lainanjunger',
    whatsapp: 'https://wa.me/5511999999999',
};

// Contact
export const CONTACT_INFO = {
    email: 'contato@lainanjunger.com.br',
    phone: '(11) 99999-9999',
    address: 'São Paulo, SP - Brasil',
};

// SEO
export const DEFAULT_META = {
    title: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description: 'Descubra nossa coleção exclusiva de roupas e acessórios. Qualidade premium, preços acessíveis e entrega rápida para todo Brasil.',
    keywords: 'moda, roupas, acessórios, streetwear, fashion, lainan junger',
    ogImage: '/og-image.jpg',
};
