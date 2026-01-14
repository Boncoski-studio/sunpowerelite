import { PenTool, FileCheck, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PenTool,
    number: "01",
    title: "Custom Design",
    description:
      "We analyze your roof, energy usage, and goals to create a personalized solar system designed for maximum efficiency.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Permits & Paperwork",
    description:
      "Our team handles all city permits, HOA approvals, and utility interconnection paperwork. You don't lift a finger.",
  },
  {
    icon: Zap,
    number: "03",
    title: "1-Day Installation",
    description:
      "Our certified technicians install your premium panels in just one day. Flip the switch and start saving immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Going solar has never been easier. Our streamlined process gets you 
            saving money in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent">
                  <ArrowRight className="absolute right-0 -top-2 w-4 h-4 text-primary/50" />
                </div>
              )}

              <div className="text-center group">
                {/* Step Number */}
                <span className="inline-block text-6xl md:text-7xl font-extrabold text-primary/10 mb-2 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary text-primary-foreground mb-4 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
