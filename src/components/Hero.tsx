import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <ParticlesBackground />

      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <img
          src="/lainan1.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container relative z-10 mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                🔥 Novidades toda semana
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Uma escolha simples. <span className="highlight">Um impacto real.</span> {" "}
              <span className="highlight"></span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Prêmio pra você. Impacto para muitos!
              <br />
              Participe, concorra e ajude a fortalecer projetos sociais pelo Instituto Plural.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Ver Campanha Destaque!
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <img
                src="/lainan1.jpeg"
                alt="Moda Exclusiva"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
