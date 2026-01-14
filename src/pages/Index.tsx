import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IRABanner from "@/components/IRABanner";
import SavingsCalculator from "@/components/SavingsCalculator";
import OwnershipPlans from "@/components/OwnershipPlans";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import StatsStrip from "@/components/StatsStrip";
import FAQ from "@/components/FAQ";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import ChatSupportBubble from "@/components/ChatSupportBubble";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <IRABanner />
        <SavingsCalculator />
        <OwnershipPlans />
        <HowItWorks />
        <Testimonials />
        <StatsStrip />
        <FAQ />
        <LeadCaptureForm />
      </main>
      <Footer />
      <ChatSupportBubble />
    </div>
  );
};

export default Index;
