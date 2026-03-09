import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/* ─── Shared section CTA ───────────────────────── */
const PageCTA = () => (
  <section className="section bg-background">
    <div className="content-column">
      <div className="border border-outline p-12 sm:p-16">
        <p className="t-label mb-8">Start Here</p>
        <h2 className="t-headline mb-6 max-w-[420px]">
          Ready to Fix the Systems Slowing Your Growth?
        </h2>
        <p className="t-subhead mb-12 max-w-[440px]">
          The Revenue Audit identifies exactly where your business is losing
          revenue and delivers a prioritised plan to address it. Delivered in
          five business days.
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
);

/* ─── Pillars ───────────────────────────────────── */
const pillars = [
  {
    number: "01",
    title: "AI Lead Response Systems",
    body: "Most service businesses lose leads by responding too slowly. When a qualified inquiry arrives, every minute of delay reduces the likelihood of conversion. We deploy AI-powered intake and routing systems that ensure every lead is contacted immediately — without adding headcount or relying on manual processes.",
    outcomes: [
      "Same-minute response to new inquiries",
      "Automated qualification and routing",
      "Zero leads missed due to capacity or timing",
    ],
  },
  {
    number: "02",
    title: "Automated Follow-Up Systems",
    body: "A significant share of unconverted prospects are not lost — they simply fall through the cracks due to inconsistent follow-up. We build structured follow-up sequences that maintain contact with every active prospect across every stage of your pipeline, without requiring manual effort from your team.",
    outcomes: [
      "Consistent follow-up across all pipeline stages",
      "Automated re-engagement for dormant prospects",
      "Reduced dependence on manual outreach",
    ],
  },
  {
    number: "03",
    title: "Operational Workflow Optimization",
    body: "Friction between your sales and delivery teams creates unnecessary delays that slow close times and drain team capacity. We identify the manual handoffs, approval bottlenecks, and scheduling inefficiencies that slow your operation, then deploy automated workflows to remove them.",
    outcomes: [
      "Automated scheduling and internal handoffs",
      "Faster proposal and quoting workflows",
      "Freed team capacity for higher-value work",
    ],
  },
];

const Solutions = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      {/* Hero */}
      <section className="section bg-surface-elevated border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">Solutions</p>
          <h1 className="t-display mb-7 max-w-[580px]">
            Systems That Improve How Revenue Moves Through Your Business
          </h1>
          <p className="t-subhead max-w-[500px]">
            Deyric deploys three core solution areas, each targeting a specific
            point of revenue loss in service businesses. Every engagement is
            designed around your existing workflows — not generic templates.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section bg-background border-b border-outline">
        <div className="content-column">
          <div className="space-y-0 divide-y divide-outline border border-outline">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="p-10 sm:p-12">
                <div className="flex items-start gap-6 mb-6">
                  <span className="t-mono text-faint text-sm pt-0.5 shrink-0">
                    {pillar.number}
                  </span>
                  <h2 className="t-headline">{pillar.title}</h2>
                </div>
                <p className="text-secondary text-sm leading-relaxed max-w-[540px] mb-8 pl-[calc(1rem+1.5rem)]">
                  {pillar.body}
                </p>
                <div className="pl-[calc(1rem+1.5rem)] space-y-3">
                  {pillar.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-outline-strong shrink-0 mt-1.5" />
                      <p className="text-secondary text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
    <Footer />
  </div>
);

export default Solutions;
