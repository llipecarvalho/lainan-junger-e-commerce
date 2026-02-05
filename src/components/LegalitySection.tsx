import { useState } from "react";
import { ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const LegalitySection = () => {
    const [activeTab, setActiveTab] = useState<"legalidade" | "filantropia">("legalidade");

    return (
        <section className="py-20 bg-background border-t border-border overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Row */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    {/* Left: Titles & Logos */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <p className="text-muted-foreground font-medium mb-2 uppercase tracking-widest text-sm">
                                Legalidade e Transparência
                            </p>
                            <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
                                Saiba da <br />
                                <span className="text-primary">Regulamentação</span>
                            </h2>
                        </div>

                        {/* Logos Placeholder */}
                        <div className="inline-flex items-center gap-6 p-4 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2 px-2">
                                <ShieldCheck className="w-6 h-6 text-foreground" />
                                <span className="font-bold text-sm tracking-tight text-foreground/80">SUSEP</span>
                            </div>
                            <div className="w-px h-6 bg-border" />
                            <div className="flex items-center gap-2 px-2">
                                <span className="font-bold text-xl tracking-tighter text-foreground">kovr</span>
                            </div>
                            <div className="w-px h-6 bg-border" />
                            <div className="flex items-center gap-2 px-2">
                                <HeartHandshake className="w-6 h-6 text-foreground" />
                                <span className="font-bold text-sm leading-none text-foreground/80">Instituto<br />Plural</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Graphic / Visual */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Abstract Red Graphic mimicking the "smoke" */}
                        <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-primary via-background to-background rounded-[4rem] rounded-tr-none border border-primary/20 overflow-hidden shadow-2xl shadow-primary/10">
                            <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />
                            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/30 blur-[100px] rounded-full" />
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/80 to-transparent mix-blend-multiply" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8 bg-background/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                                    <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-md" />
                                    <p className="text-white font-bold text-lg drop-shadow-md">100% Regulamentado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Box */}
                <div className="relative bg-card border border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-xl opacity-50 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Text Content */}
                        <div className="min-h-[160px] flex items-center">
                            {activeTab === "legalidade" ? (
                                <div className="space-y-4 animate-fade-in">
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
                                        O Plural CAP é um Título de Capitalização da Modalidade Filantropia Premiável, emitido pela Kovr Capitalização S.A. e devidamente aprovado pela SUSEP. Ao adquirir este título, você concorre a premiações em dinheiro e cede o direito de resgate ao Instituto Plural, apoiando diretamente projetos beneficentes. Uma iniciativa que une sorte e solidariedade com total segurança jurídica e transparência em todas as etapas.
                                    </p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                                                Ler Regulamento Completo
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold mb-4 text-primary">Ajude o próximo e participe de sorteios</DialogTitle>
                                                <DialogDescription className="text-base leading-relaxed text-justify text-foreground">
                                                    O Plural Cap é um Título de Capitalização de pagamento único, da Modalidade Filantropia Premiável, que une solidariedade e oportunidade de premiação de forma totalmente legal e transparente. Destinado a pessoas que desejam ajudar entidades filantrópicas certificadas nos termos da legislação vigente e participar de sorteios, o produto funciona de forma simples: no momento da aquisição, o direito de resgate é cedido ao Instituto Plural, ampliando seus recursos para projetos de dignidade, saúde e inclusão social. A modalidade trouxe legalidade e segurança jurídica para práticas de arrecadação que antes ocorriam na informalidade, garantindo que os recursos cheguem efetivamente às entidades beneficiadas. Todo o processo é regulamentado e fiscalizado pela SUSEP (Superintendência de Seguros Privados), órgão do Governo Federal responsável por assegurar a conformidade e proteção dos consumidores. As instituições beneficiárias devem ser certificadas como entidades beneficentes de assistência social, conforme determina a legislação brasileira, garantindo idoneidade e aplicação correta dos recursos. Junto à KOVR Capitalização S.A. (CNPJ 93.202.448/0001-79), empresa regularmente autorizada e supervisionada, o produto oferece total rastreabilidade e prestação de contas. Com esses recursos extras, as instituições qualificam seus serviços para milhares de pessoas carentes. Os sorteios incentivam doações, tornando a ajuda simplificada, segura e acessível em diversas regiões do País.
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ) : (
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify animate-fade-in">
                                    O Instituto Plural é uma organização sem fins lucrativos dedicada à inclusão e qualidade de vida. Seus objetivos incluem assistência social, promoção da saúde e defesa das igualdades. Juntos, Elev-C e Instituto Plural compartilham o propósito de construir uma sociedade mais inclusiva. Todo o processo é auditado, garantindo que sua contribuição chegue a quem precisa.
                                </p>
                            )}
                        </div>

                        {/* Buttons / Tabs */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button
                                onClick={() => setActiveTab("legalidade")}
                                className={`h-12 px-8 rounded-xl font-bold transition-all duration-300 ${activeTab === "legalidade"
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105 ring-2 ring-primary ring-offset-2 ring-offset-background"
                                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                Legalidade
                            </Button>
                            <Button
                                onClick={() => setActiveTab("filantropia")}
                                className={`h-12 px-8 rounded-xl font-bold transition-all duration-300 ${activeTab === "filantropia"
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105 ring-2 ring-primary ring-offset-2 ring-offset-background"
                                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                                    }`}
                            >
                                Filantropia
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LegalitySection;
