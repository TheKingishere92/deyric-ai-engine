import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesGrid = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold text-[hsl(var(--accent))] uppercase tracking-wider mb-4">
            Our solution
          </p>
          <h2 className="heading-lg text-primary mb-6">
            We build AI systems that automate your operations and fill your pipeline
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            From voice agents to full workflow automation, we deploy production-ready AI that delivers measurable ROI within weeks — not months.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Without */}
            <div className="bg-surface-elevated rounded-2xl p-8 border border-outline">
              <h3 className="text-lg font-bold text-primary mb-6">Without Deyric</h3>
              <ul className="space-y-4">
                {[
                  "Manual follow-ups and scheduling",
                  "Data scattered across tools",
                  "High operational overhead",
                  "Waiting for leads to come in",
                  "Disconnected sales & ops",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary text-sm sm:text-base">
                    <span className="text-[hsl(var(--error))] mt-0.5 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With */}
            <div className="bg-[hsl(var(--text-primary))] rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6">With Deyric</h3>
              <ul className="space-y-4">
                {[
                  "AI agents handle calls, bookings & follow-ups",
                  "Unified data across every system",
                  "Costs drop by $50K–$150K/year",
                  "Proactive pipeline generation",
                  "Marketing, sales & ops in perfect sync",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                    <span className="text-[hsl(var(--accent))] mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[hsl(var(--accent-strong))] transition-all duration-300 hover:scale-105 group"
            >
              Book your free strategy call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
