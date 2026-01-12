import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                🔥 Novidades toda semana
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Vista-se com <span className="highlight">estilo</span> e{" "}
              <span className="highlight">autenticidade</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Descubra nossa coleção exclusiva de roupas e acessórios. 
              Qualidade premium, preços acessíveis e entrega rápida para todo Brasil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Ver Coleção
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary">
                Ofertas da Semana
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span> Frete Grátis +R$199
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span> Troca Fácil
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span> Pagamento Seguro
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=750&fit=crop"
                alt="Moda Exclusiva"
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                <p className="text-sm text-muted-foreground">Nova Coleção</p>
                <p className="text-xl font-bold">Até 40% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
