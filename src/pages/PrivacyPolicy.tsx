import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you fill out a contact form, 
              request a quote, or communicate with us. This may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Address and zip code</li>
              <li>Information about your energy usage and home</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your solar quote requests</li>
              <li>Communicate with you about our products and services</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personally identifiable information 
              to outside parties. This does not include trusted third parties who assist us in 
              operating our website, conducting our business, or servicing you, so long as those 
              parties agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p className="text-muted-foreground">
              We implement a variety of security measures to maintain the safety of your personal 
              information when you enter, submit, or access your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> privacy@sunpowerelite.com
              <br />
              <strong>Phone:</strong> (800) SUN-POWER
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
