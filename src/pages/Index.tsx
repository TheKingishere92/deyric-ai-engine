import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────── */
const Hero = () => (
  <section className="section bg-surface-elevated border-b border-outline">
    <div className="content-column">
      <p className="t-label mb-8">AI Revenue Optimization · Service Businesses</p>

      <h1 className="t-display mb-7 max-w-[600px]">
        Fix the Broken Systems That Slow Down Your Growth
      </h1>

      <p className="t-subhead max-w-[500px] mb-12">
        Deyric analyzes how opportunities move through your business, identifies
        operational bottlenecks, and deploys AI-powered systems that improve
        response speed, follow-up, and conversion.
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

      <div className="mt-14 pt-10 border-t border-outline flex flex-col sm:flex-row gap-6 sm:gap-12">
        {[
          "2–4 week system deployments",
          "DRIF revenue infrastructure framework",
          "AI-driven operational optimization",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--outline-strong))] shrink-0" />
            <p className="text-secondary text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION 2 — DIAGNOSIS
───────────────────────────────────────────── */
const Diagnosis = () => {
  const breakdowns = [
    {
      title: "Slow response to new inquiries",
      body: "Leads contacted after more than five minutes convert at dramatically lower rates. Most service businesses respond in hours.",
    },
    {
      title: "Inconsistent follow-up with prospects",
      body: "Without a structured follow-up system, 40–60% of active prospects go quiet before a decision is made.",
    },
    {
      title: "Manual workflows slowing teams down",
      body: "Quoting, scheduling, routing, and internal handoffs handled manually add days to close time and drain team capacity.",
    },
    {
      title: "Limited visibility into performance",
      body: "Without clear data on response speed, pipeline movement, and conversion rates, it is impossible to identify where to improve.",
    },
  ];

  return (
    <section className="section bg-background border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-8">Diagnosis</p>

        <h2 className="t-headline mb-14 max-w-[440px]">
          Where Business Systems Break Down
        </h2>

        <div className="space-y-0 border border-outline divide-y divide-outline">
          {breakdowns.map((item, i) => (
            <div key={i} className="p-8">
              <p className="text-primary font-semibold text-sm mb-3 leading-snug">{item.title}</p>
              <p className="text-secondary text-sm leading-relaxed max-w-[520px]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-outline">
          <p className="text-secondary text-sm leading-relaxed max-w-[480px]">
            Most businesses try to solve these problems with more marketing.{" "}
            <span className="text-primary font-medium">
              The real solution is fixing the systems behind them.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 3 — DRIF FRAMEWORK
───────────────────────────────────────────── */
const DRIFFramework = () => {
  const layers = [
    {
      name: "Demand Capture",
      description: "Capture and respond to inquiries instantly. No lead is delayed, misrouted, or lost due to slow or manual intake processes.",
    },
    {
      name: "Relationship Nurturing",
      description: "Ensure consistent follow-up with every prospect across every stage of the pipeline, without relying on manual effort.",
    },
    {
      name: "Internal Workflow",
      description: "Streamline scheduling, routing, and operational handoffs. Remove the friction between your sales and delivery teams.",
    },
    {
      name: "Feedback Intelligence",
      description: "Gain clear visibility into response speed, pipeline movement, and conversion performance across your entire operation.",
    },
  ];

  return (
    <section className="section bg-surface-elevated border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-8">DRIF Framework</p>

        <h2 className="t-headline mb-6 max-w-[440px]">
          The Revenue Infrastructure Framework
        </h2>

        <p className="t-subhead mb-16 max-w-[500px]">
          Most service businesses rely on a chain of systems that move
          opportunities toward revenue. When any part of that chain breaks down,
          revenue is lost. Deyric strengthens this chain using the DRIF framework.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline border border-outline">
          {layers.map((layer, i) => (
            <div key={i} className="bg-surface-elevated p-9">
              <div className="flex items-center gap-3 mb-5">
                <span className="t-mono text-faint text-xs">0{i + 1}</span>
                <p className="text-primary font-semibold text-sm">{layer.name}</p>
              </div>
              <p className="text-secondary text-sm leading-relaxed">{layer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 4 — PROCESS
───────────────────────────────────────────── */
const OurProcess = () => {
  const steps = [
    {
      number: "1",
      name: "Revenue Audit",
      description: "Identify where operational bottlenecks exist across acquisition, qualification, follow-up, and conversion. Delivered in five business days.",
    },
    {
      number: "2",
      name: "System Design",
      description: "Design AI-powered systems tailored to the specific workflows and gaps identified in the audit. No generic templates.",
    },
    {
      number: "3",
      name: "Deployment & Optimization",
      description: "Implement and refine systems in a live environment, with performance monitoring and a 30-day calibration window.",
    },
  ];

  return (
    <section className="section bg-background border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-8">Our Approach</p>

        <h2 className="t-headline mb-16 max-w-[360px]">
          Three phases. 28 days.
        </h2>

        <div className="space-y-0 divide-y divide-outline border border-outline">
          {steps.map((step, i) => (
            <div key={i} className="p-9 grid grid-cols-[48px_1fr] gap-8 items-start">
              <span className="t-mono text-faint text-lg font-light pt-0.5">{step.number}</span>
              <div>
                <p className="text-primary font-semibold text-sm mb-3 leading-snug">{step.name}</p>
                <p className="text-secondary text-sm leading-relaxed max-w-[440px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 5 — BUSINESS IMPACT
───────────────────────────────────────────── */
const BusinessImpact = () => {
  const outcomes = [
    {
      title: "Faster response to leads",
      body: "Automated intake and routing systems ensure every qualified inquiry is contacted within minutes, not hours.",
    },
    {
      title: "Higher lead conversion",
      body: "Structured follow-up sequences and re-engagement workflows recover prospects that would otherwise go silent.",
    },
    {
      title: "Reduced operational friction",
      body: "Automated handoffs, scheduling, and proposal workflows compress close times and free team capacity.",
    },
    {
      title: "Better performance visibility",
      body: "Real-time tracking across response speed, pipeline health, and conversion gives leadership clarity to act.",
    },
  ];

  return (
    <section className="section bg-surface-elevated border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-8">Business Impact</p>

        <h2 className="t-headline mb-16 max-w-[400px]">
          What Stronger Systems Improve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline border border-outline">
          {outcomes.map((item, i) => (
            <div key={i} className="bg-surface-elevated p-9">
              <p className="text-primary font-semibold text-sm mb-3 leading-snug">{item.title}</p>
              <p className="text-secondary text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 6 — FINAL CTA
───────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="section bg-background">
    <div className="content-column">
      <div className="border border-outline p-12 sm:p-16">
        <p className="t-label mb-8">Start Here</p>

        <h2 className="t-headline mb-6 max-w-[420px]">
          Ready to Fix the Systems Slowing Your Growth?
        </h2>

        <p className="t-subhead mb-12 max-w-[440px]">
          The Revenue Audit is a five-day diagnostic that identifies exactly where
          your business is losing revenue and delivers a prioritised plan to fix it.
          No commitment required beyond the audit itself.
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

/* ─────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────── */
const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <Hero />
      <Diagnosis />
      <DRIFFramework />
      <OurProcess />
      <BusinessImpact />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
