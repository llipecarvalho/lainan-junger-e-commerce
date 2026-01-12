import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Receba <span className="highlight">ofertas exclusivas</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Cadastre-se e ganhe 10% de desconto na primeira compra. 
            Fique por dentro das novidades e promoções.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-background border-border focus:border-primary"
            />
            <Button className="btn-primary whitespace-nowrap">
              Quero 10% OFF
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Ao se cadastrar, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
