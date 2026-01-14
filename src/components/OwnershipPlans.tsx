import { useState } from "react";
import { Check, Star, Zap, Wallet, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { scrollToSection } from "@/lib/utils";

const plans = [
  {
    id: "lease",
    icon: Zap,
    title: "Monthly Lease (PPA)",
    subtitle: "Pay for power, not panels.",
    highlight: "$0 Down",
    features: [
      "No upfront investment",
      "Fixed monthly payments",
      "Free maintenance included",
      "Upgrade eligible after 7 years",
    ],
    popular: false,
  },
  {
    id: "loan",
    icon: CreditCard,
    title: "Solar Loan",
    subtitle: "Own the system. Pay monthly.",
    highlight: "Keep the Tax Credit",
    features: [
      "30% Federal Tax Credit yours",
      "Build home equity",
      "Flexible loan terms (10-25yr)",
      "Payments often less than utility",
    ],
    popular: true,
  },
  {
    id: "purchase",
    icon: Wallet,
    title: "Full Purchase",
    subtitle: "Maximum long-term savings.",
    highlight: "No Monthly Payments",
    features: [
      "Highest lifetime ROI",
      "Immediate property value increase",
      "30% Tax Credit + local rebates",
      "Zero electricity bills",
    ],
    popular: false,
  },
];

export default function OwnershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>("loan");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleLearnMore = (planId: string) => {
    setSelectedPlan(planId);
    scrollToSection("contact");
  };

  return (
    <section id="plans" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Flexible Ownership Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the financing option that fits your budget and goals. 
            Every plan includes our 25-year performance guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            
            return (
              <Card
                key={plan.id}
                onClick={() => handleSelectPlan(plan.id)}
                className={`relative card-hover cursor-pointer transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-accent shadow-xl shadow-accent/10 scale-105"
                    : isSelected
                    ? "border-2 border-primary shadow-lg"
                    : "border border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                )}

                {isSelected && !plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                    <Check className="w-3 h-3 mr-1" />
                    Selected
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mx-auto mb-4 ${
                      plan.popular || isSelected
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <plan.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="text-base">{plan.subtitle}</CardDescription>
                  <p
                    className={`text-lg font-bold mt-2 ${
                      plan.popular || isSelected ? "text-accent" : "text-success"
                    }`}
                  >
                    {plan.highlight}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.popular || isSelected ? "text-accent" : "text-success"
                          }`}
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular || isSelected
                        ? "btn-cta"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(plan.id);
                    }}
                  >
                    Get Quote for This Plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-sm border border-border">
            <Check className="w-5 h-5 text-success" />
            <span className="text-muted-foreground">
              All plans include our <strong className="text-foreground">25-Year Performance Guarantee</strong>. 
              Cancel anytime before installation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
