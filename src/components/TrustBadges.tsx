import { Truck, Shield, CreditCard, RefreshCcw, Headphones, Award } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Para compras acima de R$199",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Site 100% protegido",
  },
  {
    icon: CreditCard,
    title: "Parcelamento",
    description: "Em até 12x sem juros",
  },
  {
    icon: RefreshCcw,
    title: "Troca Fácil",
    description: "Primeira troca grátis",
  },
  {
    icon: Headphones,
    title: "Suporte 24h",
    description: "Atendimento por WhatsApp",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Produtos selecionados",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="trust-badge">
              <div className="trust-icon">
                <badge.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
