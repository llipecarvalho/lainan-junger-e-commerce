import ProductCard from "./ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/types";

const products: Product[] = productsData;

const ProductGrid = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Produtos em <span className="highlight">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nossa seleção especial de peças que estão fazendo sucesso
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Todos", "Camisetas", "Calças", "Moletons", "Acessórios"].map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${cat === "Todos"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
