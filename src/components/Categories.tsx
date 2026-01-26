import categoriesData from "@/data/categories.json";
import { Category } from "@/types/types";

const categories: Category[] = categoriesData;

const Categories = () => {
  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Explore por <span className="highlight">Categoria</span>
          </h2>
          <p className="text-muted-foreground">
            Encontre exatamente o que você procura
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.slice(0, 4).map((category) => (
            <a
              key={category.name}
              href="#"
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} produtos</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
