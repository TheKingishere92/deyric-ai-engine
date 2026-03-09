import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      {/* Hero */}
      <section className="section bg-surface-elevated border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">About</p>
          <h1 className="t-display mb-7 max-w-[560px]">
            Most Businesses Lose Revenue Through Operational Inefficiency, Not
            Lack of Demand
          </h1>
          <p className="t-subhead max-w-[500px]">
            Deyric is an AI consulting firm that specialises in diagnosing and
            fixing the operational systems that determine how revenue moves
            through a service business.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-background border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">Philosophy</p>
          <h2 className="t-headline mb-10 max-w-[420px]">
            The problem is rarely insufficient marketing
          </h2>

          <div className="space-y-0 divide-y divide-outline border border-outline">
            {[
              {
                title: "Diagnose before deploying",
                body: "We begin every engagement with a structured audit that maps how opportunities move through your business. Systems are designed around what the data shows — not assumptions about what should be fixed.",
              },
              {
                title: "AI as a tool, not a product",
                body: "Artificial intelligence is a means to an end. We deploy AI where it demonstrably improves response speed, consistency, or capacity — and we avoid deploying it where simpler solutions are more effective.",
              },
              {
                title: "Precision over scale",
                body: "Deyric works with a limited number of businesses at any one time. This allows us to deliver the depth of analysis and implementation quality that a generalist firm cannot.",
              },
              {
                title: "Outcomes over deliverables",
                body: "The measure of a successful engagement is not the systems we build — it is the business performance improvements those systems create. We define success in terms of measurable operational outcomes.",
              },
            ].map((item, i) => (
              <div key={i} className="p-9">
                <p className="text-primary font-semibold text-sm mb-3 leading-snug">
                  {item.title}
                </p>
                <p className="text-secondary text-sm leading-relaxed max-w-[520px]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section bg-surface-elevated border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">Focus</p>
          <h2 className="t-headline mb-6 max-w-[400px]">
            Built specifically for service businesses
          </h2>
          <p className="t-subhead mb-14 max-w-[480px]">
            Revenue system failures follow predictable patterns in service
            businesses. Deyric focuses exclusively on this category because the
            problems — and the solutions — are consistent enough to deploy with
            precision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline border border-outline">
            {[
              {
                label: "Sector focus",
                value: "Professional and B2B service businesses",
              },
              {
                label: "Engagement type",
                value: "Diagnostic audit followed by system implementation",
              },
              {
                label: "Deployment timeline",
                value: "Two to four weeks from audit to live systems",
              },
              {
                label: "Optimization period",
                value: "30-day calibration window post-deployment",
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface-elevated p-9">
                <p className="t-label mb-3">{item.label}</p>
                <p className="text-primary text-sm font-medium leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background">
        <div className="content-column">
          <div className="border border-outline p-12 sm:p-16">
            <p className="t-label mb-8">Start Here</p>
            <h2 className="t-headline mb-6 max-w-[400px]">
              Begin With a Revenue Audit
            </h2>
            <p className="t-subhead mb-12 max-w-[440px]">
              The Revenue Audit is a five-day diagnostic that identifies exactly
              where your business is losing revenue and delivers a prioritised
              plan to address it. No commitment required beyond the audit itself.
            </p>
            <a
              href="https://calendly.com/david-deyric/20min-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Revenue Audit
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
