import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { FREE_SHIPPING_THRESHOLD } from "@/constants/constants";

const CartSummary = () => {
    const { getSubtotal, getShipping, getTotal, getItemCount } = useCart();

    const subtotal = getSubtotal();
    const shipping = getShipping();
    const total = getTotal();
    const itemCount = getItemCount();

    const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;
    const hasFreeShipping = shipping === 0 && subtotal > 0;

    return (
        <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>

            <div className="space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                        Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'itens'})
                    </span>
                    <span className="font-medium">R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className="font-medium">
                        {hasFreeShipping ? (
                            <span className="text-green-500">Grátis</span>
                        ) : (
                            `R$ ${shipping.toFixed(2).replace(".", ",")}`
                        )}
                    </span>
                </div>

                {!hasFreeShipping && remainingForFreeShipping > 0 && subtotal > 0 && (
                    <div className="bg-primary/10 border border-primary/20 rounded-md p-3">
                        <p className="text-xs text-primary">
                            Faltam <strong>R$ {remainingForFreeShipping.toFixed(2).replace(".", ",")}</strong> para ganhar frete grátis!
                        </p>
                    </div>
                )}

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
            </div>

            <Button className="w-full mt-6 btn-primary" disabled={itemCount === 0}>
                Finalizar Compra
            </Button>

            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Troca grátis em até 30 dias</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Entrega rápida para todo Brasil</span>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
