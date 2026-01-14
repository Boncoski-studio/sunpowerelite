import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-emerald-800 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Trust Badge */}
            <div className="trust-badge mb-6 inline-flex">
              <Shield className="w-4 h-4" />
              <span>🇺🇸 Official US Federal Solar Tax Credit Eligible</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Power Your Home.{" "}
              <span className="text-accent">$0 Down.</span>{" "}
              Lifetime Savings.
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Own your energy. Lock in your rates. Save up to 40% immediately on
              your electricity bills with premium solar panels.
            </p>

            {/* Benefits List */}
            <ul className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {["No Upfront Costs", "25-Year Warranty", "Expert Installation"].map(
                (benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                )
              )}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-cta text-lg px-8 py-6 animate-pulse-glow">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Calculate Savings
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                alt="Modern home with solar panels on the roof"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">40%</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Avg. Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">25yr</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Warranty</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">1 Day</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Install Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
