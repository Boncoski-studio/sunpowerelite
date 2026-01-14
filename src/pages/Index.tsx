import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IRABanner from "@/components/IRABanner";
import SavingsCalculator from "@/components/SavingsCalculator";
import OwnershipPlans from "@/components/OwnershipPlans";
import HowItWorks from "@/components/HowItWorks";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

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
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
