import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types/types";
import { useCart } from "@/hooks/useCart";

interface CartItemProps {
    item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleIncrement = () => {
        updateQuantity(item.product.id, item.quantity + 1);
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            updateQuantity(item.product.id, item.quantity - 1);
        }
    };

    const handleRemove = () => {
        removeFromCart(item.product.id);
    };

    const itemTotal = item.product.price * item.quantity;

    return (
        <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold text-foreground">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.product.category}</p>
                    {item.selectedSize && (
                        <p className="text-sm text-muted-foreground">Tamanho: {item.selectedSize}</p>
                    )}
                    {item.selectedColor && (
                        <p className="text-sm text-muted-foreground">Cor: {item.selectedColor}</p>
                    )}
                </div>

                <div className="flex items-center justify-between mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={handleDecrement}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={handleIncrement}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                        <p className="font-bold text-primary">
                            R$ {itemTotal.toFixed(2).replace(".", ",")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            R$ {item.product.price.toFixed(2).replace(".", ",")} cada
                        </p>
                    </div>
                </div>
            </div>

            {/* Remove Button */}
            <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={handleRemove}
            >
                <Trash2 className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default CartItem;
