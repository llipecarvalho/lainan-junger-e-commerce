import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Camiseta Oversized Premium",
    price: 89.90,
    originalPrice: 129.90,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "Camisetas",
    discount: 30,
  },
  {
    id: 2,
    name: "Calça Jogger Street",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
    category: "Calças",
    isNew: true,
  },
  {
    id: 3,
    name: "Moletom Capuz Essential",
    price: 189.90,
    originalPrice: 249.90,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    category: "Moletons",
    discount: 25,
  },
  {
    id: 4,
    name: "Jaqueta Corta-Vento",
    price: 259.90,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
    category: "Jaquetas",
    isNew: true,
  },
  {
    id: 5,
    name: "Bermuda Cargo Tactical",
    price: 119.90,
    originalPrice: 159.90,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&h=500&fit=crop",
    category: "Bermudas",
    discount: 25,
  },
  {
    id: 6,
    name: "Camiseta Longline Black",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=500&fit=crop",
    category: "Camisetas",
  },
  {
    id: 7,
    name: "Tênis Urban Runner",
    price: 299.90,
    originalPrice: 399.90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
    category: "Calçados",
    discount: 25,
  },
  {
    id: 8,
    name: "Boné Snapback Limited",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
    category: "Acessórios",
    isNew: true,
  },
];

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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                cat === "Todos"
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
          {products.map((product) => (
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
