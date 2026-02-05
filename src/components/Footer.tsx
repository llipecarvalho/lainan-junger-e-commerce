import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Shield, Headphones, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl tracking-wider">
              LAINAN <span className="text-primary">JUNGER</span>
            </h3>
            <p className="text-sm text-muted-foreground text-justify">
              Lainan Junger é criadora de conteúdo digital focada em lifestyle esportes comunicação autêntica estética estratégia conexão marcas humanas
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#campanhas" className="hover:text-primary transition-colors">Campanhas</a></li>
              <li><a href="#bio" className="hover:text-primary transition-colors">Bio</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ajuda</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rastrear Pedido</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                contato@lainanjunger.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-sm text-muted-foreground text-center lg:text-right">
              © 2026 Lainan Junger. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">Compra Segura</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Headphones className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">Suporte 24h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold">Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
