import { Instagram } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Biography = () => {
    return (
        <section id="bio" className="relative py-20 bg-background/30 backdrop-blur-md border-t border-white/10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <ParticlesBackground />
            </div>
            <div className="container relative z-10 mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-border group mx-auto">
                            <img
                                src="/lainan1.jpeg"
                                alt="Biografia"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left max-w-md mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-wide">
                            SOBRE MIM
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                            <p>
                                Lainan Junger é criadora de conteúdo e comunicadora digital, com atuação focada em lifestyle, esportes e experiências que conectam pessoas, lugares e histórias. Seu trabalho une autenticidade, sensibilidade estética e comunicação estratégica, sempre buscando traduzir vivências reais em conteúdos relevantes e envolventes.
                            </p>
                            <p>
                                Com olhar atento para tendências e comportamento, Lainan desenvolve projetos que valorizam identidade, propósito e conexão com o público. Sua presença digital é marcada pela naturalidade, pela construção de narrativas visuais consistentes e pela capacidade de gerar identificação, seja em produções autorais ou em parcerias com marcas.
                            </p>
                            <p>
                                Atualmente, atua na criação de conteúdos multiplataforma, explorando temas que transitam entre cotidiano, viagens, esporte e bem-estar, sempre com foco em impacto, credibilidade e proximidade.
                            </p>
                        </div>

                        <div className="pt-4 flex justify-center md:justify-start">
                            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                                <Instagram className="w-5 h-5" />
                                <span>@seu.instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Biography;
