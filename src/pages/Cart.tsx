import { ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

const Cart = () => {
    const { items, getItemCount } = useCart();

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Continuar Comprando
                    </a>
                </div>

                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Carrinho de Compras
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        {getItemCount()} {getItemCount() === 1 ? 'item' : 'itens'} no carrinho
                    </p>
                </div>

                {items.length === 0 ? (
                    /* Empty Cart State */
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary mb-6">
                            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
                        <p className="text-muted-foreground mb-8">
                            Adicione produtos ao carrinho para continuar comprando
                        </p>
                        <Button asChild className="btn-primary">
                            <a href="/#produtos">Ver Produtos</a>
                        </Button>
                    </div>
                ) : (
                    /* Cart with Items */
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <CartItem key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} item={item} />
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="lg:col-span-1">
                            <CartSummary />
                        </div>
                    </div>
                )}

                {/* Recommended Products Section */}
                {items.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Você também pode gostar</h2>
                        <p className="text-muted-foreground">
                            Produtos recomendados baseados no seu carrinho
                        </p>
                        {/* TODO: Add recommended products grid */}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
