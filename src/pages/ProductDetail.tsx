import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";
import { useProducts } from "@/hooks/useProducts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getProductById, getRelatedProducts } = useProducts();
    const { addToCart, isInCart } = useCart();
    const { isFavorite, toggleFavorite } = useFavorites();

    const product = getProductById(Number(id));
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
                    <Button onClick={() => navigate("/")} className="btn-primary">
                        Voltar para Home
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    const relatedProducts = getRelatedProducts(product.id);
    const images = product.images || [product.image];

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedSize, selectedColor);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Voltar
                    </button>
                </div>

                {/* Product Details */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-secondary">
                            <img
                                src={images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        {images.length > 1 && (
                            <div className="grid grid-cols-4 gap-2">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                                ? "border-primary"
                                                : "border-transparent hover:border-border"
                                            }`}
                                    >
                                        <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Category & Badges */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-muted-foreground uppercase tracking-wider">
                                {product.category}
                            </span>
                            {product.isNew && (
                                <span className="bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full">
                                    NOVO
                                </span>
                            )}
                            {product.discount && (
                                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                    -{product.discount}%
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(product.rating!)
                                                    ? "fill-primary text-primary"
                                                    : "text-muted-foreground"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    {product.rating} ({product.reviewCount} avaliações)
                                </span>
                            </div>
                        )}

                        {/* Price */}
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-primary">
                                R$ {product.price.toFixed(2).replace(".", ",")}
                            </span>
                            {product.originalPrice && (
                                <span className="text-xl text-muted-foreground line-through">
                                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        {product.description && (
                            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                        )}

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium mb-2">Tamanho</label>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-md border-2 transition-all ${selectedSize === size
                                                    ? "border-primary bg-primary/10 text-primary font-semibold"
                                                    : "border-border hover:border-primary/50"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium mb-2">Cor</label>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 rounded-md border-2 transition-all ${selectedColor === color
                                                    ? "border-primary bg-primary/10 text-primary font-semibold"
                                                    : "border-border hover:border-primary/50"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Quantidade</label>
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </Button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </Button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Button onClick={handleAddToCart} className="flex-1 btn-primary">
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                {isInCart(product.id) ? "Adicionar Mais" : "Adicionar ao Carrinho"}
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => toggleFavorite(product)}
                                className={isFavorite(product.id) ? "border-primary bg-primary/10" : ""}
                            >
                                <Heart
                                    className={`h-5 w-5 ${isFavorite(product.id) ? "fill-primary text-primary" : ""}`}
                                />
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                            <div className="text-center">
                                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                                <p className="text-xs text-muted-foreground">Frete Grátis +R$199</p>
                            </div>
                            <div className="text-center">
                                <RefreshCw className="h-8 w-8 mx-auto mb-2 text-primary" />
                                <p className="text-xs text-muted-foreground">Troca em 30 dias</p>
                            </div>
                            <div className="text-center">
                                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                                <p className="text-xs text-muted-foreground">Compra Segura</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <div className="mb-16">
                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                            <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                                Descrição
                            </TabsTrigger>
                            <TabsTrigger value="specs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                                Especificações
                            </TabsTrigger>
                            <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
                                Avaliações ({product.reviewCount || 0})
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="mt-6">
                            <div className="prose prose-invert max-w-none">
                                <p>{product.description || "Descrição detalhada do produto em breve."}</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="specs" className="mt-6">
                            <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-border">
                                    <span className="text-muted-foreground">Categoria</span>
                                    <span className="font-medium">{product.category}</span>
                                </div>
                                {product.sizes && (
                                    <div className="flex justify-between py-2 border-b border-border">
                                        <span className="text-muted-foreground">Tamanhos Disponíveis</span>
                                        <span className="font-medium">{product.sizes.join(", ")}</span>
                                    </div>
                                )}
                                {product.colors && (
                                    <div className="flex justify-between py-2 border-b border-border">
                                        <span className="text-muted-foreground">Cores Disponíveis</span>
                                        <span className="font-medium">{product.colors.join(", ")}</span>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                        <TabsContent value="reviews" className="mt-6">
                            <p className="text-muted-foreground">Sistema de avaliações em breve.</p>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            Produtos <span className="text-gradient">Relacionados</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard key={relatedProduct.id} {...relatedProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetail;
