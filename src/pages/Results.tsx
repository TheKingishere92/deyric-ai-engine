import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/* ─── Shared CTA ────────────────────────────────── */
const PageCTA = () => (
  <section className="section bg-background">
    <div className="content-column">
      <div className="border border-outline p-12 sm:p-16">
        <p className="t-label mb-8">Start Here</p>
        <h2 className="t-headline mb-6 max-w-[420px]">
          See Where Your Business Is Losing Revenue
        </h2>
        <p className="t-subhead mb-12 max-w-[440px]">
          The Revenue Audit maps how opportunities move through your business and
          identifies the specific points where revenue is being lost. Delivered
          in five business days.
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

/* ─── Improvement areas ─────────────────────────── */
const improvements = [
  {
    number: "01",
    area: "Lead Response Speed",
    headline: "Faster contact with every new inquiry",
    body: "Businesses that respond to qualified leads within minutes convert at significantly higher rates than those that respond in hours. Most service businesses lack the systems to achieve this consistently. Automated intake and routing reduces the gap between inquiry and first contact from hours to minutes — without adding headcount.",
    indicators: [
      "Reduced time from inquiry to first contact",
      "Consistent response regardless of team availability",
      "No leads missed due to after-hours or peak-volume timing",
    ],
  },
  {
    number: "02",
    area: "Conversion Rates",
    headline: "More prospects moving from inquiry to close",
    body: "A significant share of unconverted prospects are not lost due to price or fit — they go quiet because follow-up was inconsistent or stopped too early. Structured follow-up sequences and re-engagement workflows recover a measurable portion of these prospects and improve overall pipeline conversion rates.",
    indicators: [
      "Improved conversion from qualified lead to meeting",
      "Higher close rate on active pipeline",
      "Recovered prospects from dormant follow-up",
    ],
  },
  {
    number: "03",
    area: "Operational Efficiency",
    headline: "Less time lost to manual internal processes",
    body: "Manual scheduling, quoting, routing, and internal handoffs add unnecessary delays between sales and delivery. These frictions compound across every deal and drain team capacity that could be directed toward higher-value work. Automated workflows remove the bottlenecks that slow close times and reduce the administrative burden on your team.",
    indicators: [
      "Faster movement from proposal to signed agreement",
      "Reduced time spent on scheduling and internal coordination",
      "Team capacity redirected toward client-facing work",
    ],
  },
  {
    number: "04",
    area: "Performance Visibility",
    headline: "Clearer data on where the business stands",
    body: "Without accurate data on response speed, pipeline health, and conversion rates, it is difficult to identify what to improve or measure whether improvements are working. Structured reporting gives leadership clear, actionable visibility into the systems that drive revenue — and the points where those systems are underperforming.",
    indicators: [
      "Real-time visibility into lead response and pipeline movement",
      "Clear conversion data at each stage of the funnel",
      "Reliable baseline to measure the impact of system changes",
    ],
  },
];

const Results = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      {/* Hero */}
      <section className="section bg-surface-elevated border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">Results</p>
          <h1 className="t-display mb-7 max-w-[580px]">
            The Improvements Stronger Systems Create
          </h1>
          <p className="t-subhead max-w-[500px]">
            The outcomes below reflect the types of improvements service
            businesses typically achieve when operational and revenue systems are
            functioning correctly. Results vary by business and starting baseline.
          </p>
        </div>
      </section>

      {/* Improvement areas */}
      <section className="section bg-background border-b border-outline">
        <div className="content-column">
          <div className="space-y-0 divide-y divide-outline border border-outline">
            {improvements.map((item) => (
              <div key={item.number} className="p-10 sm:p-12">
                {/* Area label row */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="t-mono text-faint text-xs shrink-0">
                    {item.number}
                  </span>
                  <p className="t-label">{item.area}</p>
                </div>
                <h2 className="t-headline mb-5 max-w-[440px]">
                  {item.headline}
                </h2>
                <p className="text-secondary text-sm leading-relaxed max-w-[520px] mb-8">
                  {item.body}
                </p>
                <div className="pt-6 border-t border-outline space-y-3">
                  {item.indicators.map((indicator) => (
                    <div key={indicator} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-outline-strong shrink-0 mt-1.5" />
                      <p className="text-secondary text-sm">{indicator}</p>
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

export default Results;
