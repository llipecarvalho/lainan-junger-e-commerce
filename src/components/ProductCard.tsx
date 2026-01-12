import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  discount,
}: ProductCardProps) => {
  return (
    <div className="card-product group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        {discount && <span className="badge-discount">-{discount}%</span>}
        {isNew && !discount && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full">
            NOVO
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="icon" className="bg-primary hover:bg-primary/90 rounded-full">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full border-foreground/20 bg-background/50 hover:bg-background">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
        <h3 className="font-semibold text-foreground line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="price-current">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          {originalPrice && (
            <span className="price-original">
              R$ {originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
