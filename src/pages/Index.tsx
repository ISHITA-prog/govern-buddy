import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import DashboardPreview from "@/components/DashboardPreview";
import ServicesGrid from "@/components/ServicesGrid";
import SchemeAwareness from "@/components/SchemeAwareness";
import ChatbotSection from "@/components/ChatbotSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      <HeroSection />
      <FeatureHighlights />
      <DashboardPreview />
      <ServicesGrid />
      <SchemeAwareness />
      <ChatbotSection />
      <Footer />
    </div>
  );
};

export default Index;
