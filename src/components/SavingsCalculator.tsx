import { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(250);

  const calculations = useMemo(() => {
    const inflationRate = 1.04;
    const years = 25;
    
    // Calculate utility cost with 4% annual inflation
    let utilityCost = 0;
    for (let i = 0; i < years; i++) {
      utilityCost += monthlyBill * 12 * Math.pow(inflationRate, i);
    }
    
    // Solar saves 40%
    const solarCost = utilityCost * 0.6;
    const savings = utilityCost - solarCost;
    
    return {
      utilityCost: Math.round(utilityCost),
      solarCost: Math.round(solarCost),
      savings: Math.round(savings),
    };
  }, [monthlyBill]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const maxBarValue = calculations.utilityCost;
  const utilityBarWidth = 100;
  const solarBarWidth = (calculations.solarCost / maxBarValue) * 100;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-accent font-semibold mb-4">
            <Calculator className="w-5 h-5" />
            <span>Smart Savings Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Your 25-Year Savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how much you could save by switching to solar energy. 
            Adjust the slider to match your current monthly electric bill.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary to-emerald-700 text-primary-foreground p-6 md:p-8">
            <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Your Personalized Estimate
            </CardTitle>
            <CardDescription className="text-emerald-100">
              Based on average utility rate increases of 4% annually
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            {/* Slider Input */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-muted-foreground">
                  Your Average Monthly Electric Bill
                </label>
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  ${monthlyBill}
                </span>
              </div>
              <Slider
                value={[monthlyBill]}
                onValueChange={(value) => setMonthlyBill(value[0])}
                min={50}
                max={800}
                step={10}
                className="py-4 touch-pan-x"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$50</span>
                <span>$800</span>
              </div>
            </div>

            {/* Visual Comparison Graph */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">25-Year Cost Comparison</h4>
              
              {/* Utility Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">With Utility Company</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(calculations.utilityCost)}
                  </span>
                </div>
                <div className="h-10 md:h-12 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-lg transition-all duration-500 flex items-center justify-end pr-3"
                    style={{ width: `${utilityBarWidth}%` }}
                  >
                    <span className="text-white text-sm font-medium hidden sm:block">
                      Rising Rates 📈
                    </span>
                  </div>
                </div>
              </div>

              {/* Solar Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">With SunPower Elite</span>
                  <span className="font-semibold text-success">
                    {formatCurrency(calculations.solarCost)}
                  </span>
                </div>
                <div className="h-10 md:h-12 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-lg transition-all duration-500 flex items-center justify-end pr-3"
                    style={{ width: `${solarBarWidth}%` }}
                  >
                    <span className="text-white text-sm font-medium hidden sm:block">
                      Locked Rates ✨
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Result */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 text-center border border-success/20">
              <p className="text-muted-foreground mb-2">Estimated 25-Year Savings</p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-success mb-2">
                {formatCurrency(calculations.savings)}
              </p>
              <p className="text-sm text-muted-foreground">
                That's {formatCurrency(calculations.savings / 25)} per year back in your pocket!
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button className="btn-cta text-lg px-8 py-6">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Your Exact Quote
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Free consultation • No obligation • Takes 2 minutes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
