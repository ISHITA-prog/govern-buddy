import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import ServicesGrid from "@/components/ServicesGrid";
import SchemeAwareness from "@/components/SchemeAwareness";
import ChatbotSection from "@/components/ChatbotSection";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      <HeroSection />
      <FeatureHighlights />
      <ServicesGrid />
      <SchemeAwareness />
      <InvestorSection />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
