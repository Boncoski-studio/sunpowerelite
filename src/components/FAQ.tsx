import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "savings",
    question: "How much can I really save?",
    answer:
      "Most homeowners save between 50-90% on their electricity bills after going solar. Your exact savings depend on your current energy usage, roof size, sun exposure, and local utility rates. On average, our customers save $1,500-$2,500 per year. Plus, with solar panels increasing home value by 4-6%, you're also building equity. Use our free savings calculator above to get a personalized estimate!",
  },
  {
    id: "tax-credit",
    question: "Is the 30% Tax Credit real?",
    answer:
      "Absolutely! The 30% Federal Solar Investment Tax Credit (ITC) is a real federal incentive established by the Inflation Reduction Act of 2022. It allows you to deduct 30% of the total cost of your solar system from your federal taxes. For example, if your system costs $25,000, you can claim a $7,500 tax credit. This credit is available through 2032, but the sooner you act, the sooner you start saving. Our team will help you understand exactly how to claim this credit.",
  },
  {
    id: "sell-home",
    question: "What happens if I sell my home?",
    answer:
      "Great news—solar panels are a major selling point! Studies show that homes with solar panels sell faster and for more money (up to 4.1% higher sale price according to Zillow). If you own your system outright or have a loan, the panels simply transfer with the home and add value. If you have a lease or PPA, you can either transfer the agreement to the new owner (they inherit your low energy costs!) or buy out the remaining balance. We'll guide you through whichever option works best.",
  },
  {
    id: "installation",
    question: "How long does installation take?",
    answer:
      "The actual installation typically takes just 1-3 days for most residential homes. However, the complete process from signing to powering on usually takes 6-12 weeks. This timeline includes the site survey, custom system design, permitting (which can vary by city), installation, inspection, and utility connection. We handle all the paperwork and keep you updated every step of the way.",
  },
  {
    id: "warranty",
    question: "What warranty do you offer?",
    answer:
      "We stand behind our work with a comprehensive 25-year warranty package. This includes: 25-year manufacturer warranty on panels (guaranteeing at least 80% production), 25-year inverter warranty, 10-year workmanship warranty on installation, and 24/7 monitoring with lifetime system support. If anything goes wrong, we fix it—no questions asked. Your investment is fully protected.",
  },
  {
    id: "roof-condition",
    question: "What if my roof needs repairs?",
    answer:
      "During our free site survey, we assess your roof condition. If repairs are needed, we recommend completing them before installation. In many cases, we can coordinate roof work with our trusted partners, sometimes at a discount. Solar panels actually protect your roof from weather and can extend its lifespan. If your roof is in good condition, solar panels can last through multiple roof replacements with proper planning.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about going solar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
