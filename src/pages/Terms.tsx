import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12 md:py-16">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>

          <p className="text-muted-foreground mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Services Description
            </h2>
            <p className="text-muted-foreground">
              SunPower Elite provides solar panel installation services, financing options, 
              and related energy solutions for residential properties. All quotes provided 
              through our website are estimates and subject to on-site verification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-muted-foreground mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate and complete information when requesting quotes</li>
              <li>Not use the website for any unlawful purpose</li>
              <li>Not attempt to gain unauthorized access to any portion of the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              The content, organization, graphics, design, and other matters related to this 
              website are protected under applicable copyrights and other proprietary laws. 
              Copying, redistribution, use or publication of any such matters or any part of 
              the website is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Warranty Disclaimer
            </h2>
            <p className="text-muted-foreground">
              All solar installations come with our 25-Year Performance Guarantee. Specific 
              warranty terms will be provided in your installation contract. The information 
              on this website is provided "as is" without warranty of any kind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              SunPower Elite shall not be liable for any damages arising out of or in connection 
              with the use of this website. This includes, but is not limited to, direct, indirect, 
              incidental, punitive, and consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              7. Contact Information
            </h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:
              <br />
              <strong>Email:</strong> legal@sunpowerelite.com
              <br />
              <strong>Phone:</strong> (800) SUN-POWER
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
