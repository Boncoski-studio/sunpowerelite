import { BadgeCheck, Info } from "lucide-react";

export default function IRABanner() {
  return (
    <section className="ira-banner">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-6 h-6 flex-shrink-0" />
            <span className="font-semibold">Inflation Reduction Act 2025</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-current opacity-30" />
          <p className="flex items-center gap-2">
            <span>
              Go Solar and get the <strong>30% Federal Tax Credit (ITC)</strong> back on
              your installation cost.
            </span>
            <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-current/10 hover:bg-current/20 transition-colors">
              <Info className="w-3 h-3" />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
