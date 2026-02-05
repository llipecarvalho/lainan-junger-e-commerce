import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CampaignSection from "@/components/CampaignSection";
import LegalitySection from "@/components/LegalitySection";
import Biography from "@/components/Biography";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CampaignSection />
        <LegalitySection />
        <Biography />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
