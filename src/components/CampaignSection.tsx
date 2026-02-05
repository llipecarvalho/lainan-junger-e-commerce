
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Trophy, Timer } from "lucide-react";
import productsData from "@/data/products.json";

const CampaignSection = () => {
    // We just use the length of products to determine how many cards to show (8)
    const numberOfCampaigns = 8;
    const items = Array.from({ length: numberOfCampaigns }, (_, i) => i + 1);

    return (
        <section id="campanhas" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
                        Campanhas
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Não perca esta oportunidade!
                    </p>
                </div>

                {/* Campaigns Grid - 4 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mx-auto">
                    {items.map((id, index) => {
                        // Generate consistent dates based on index
                        const date = new Date();
                        date.setDate(date.getDate() + (index * 2) + 1);
                        const dateStr = date.toLocaleDateString("pt-BR");

                        return (
                            <div key={id} className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group flex flex-col">
                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1 h-full relative">
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-1.5 py-0 text-[10px] font-bold uppercase tracking-wide border border-primary/20 shadow-sm">
                                            Em Andamento
                                        </Badge>
                                    </div>

                                    <div className="mt-2 mb-6">
                                        <h3 className="text-xl font-bold text-foreground mb-2">Edição #{String(id).padStart(3, '0')}</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>Sorteio: {dateStr} às 19h</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto space-y-4">
                                        <div className="flex flex-col gap-0 border-t border-border pt-4 relative items-center">
                                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Por apenas</span>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-sm font-bold text-primary">R$</span>
                                                <span className="text-4xl font-black text-primary tracking-tight" style={{ textShadow: "0 2px 10px rgba(220, 38, 38, 0.2)" }}>0,22</span>
                                            </div>
                                        </div>

                                        {/* Button - Bottom */}
                                        <Button className="w-full font-bold shadow-md shadow-primary/10 group-hover:shadow-primary/25 bg-primary hover:bg-primary/90 text-primary-foreground transition-all">
                                            Participar
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Last Winners Section */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold">
                            Últimos <span className="text-primary">Ganhadores</span>
                        </h3>
                    </div>

                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg p-8 flex flex-col items-center text-center gap-6">
                        <div className="w-full flex flex-col gap-6">
                            <div className="border-b border-border pb-6">
                                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h4 className="text-2xl font-bold mb-2">Edição #159</h4>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-muted-foreground">Ganhador:</span>
                                    <span className="font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-sm">Não Sorteado</span>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Prêmio Acumulado</p>
                                    <p className="text-4xl font-bold text-primary">R$ 50.000,00</p>
                                </div>
                                <div className="bg-card border-2 border-dashed border-muted-foreground/20 p-4 rounded-xl">
                                    <p className="text-muted-foreground font-medium">Próximo Sorteio</p>
                                    <p className="text-xl font-bold text-foreground">Amanhã, 19h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CampaignSection;
