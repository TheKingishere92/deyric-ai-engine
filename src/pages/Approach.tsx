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
          Begin With a Revenue Audit
        </h2>
        <p className="t-subhead mb-12 max-w-[440px]">
          The Revenue Audit is a five-day diagnostic that maps how opportunities
          move through your business and identifies where revenue is being lost.
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

/* ─── DRIF layers ───────────────────────────────── */
const drifLayers = [
  {
    code: "D",
    name: "Demand Capture",
    description:
      "Capture and respond to inquiries instantly. No lead is delayed, misrouted, or lost due to slow or manual intake processes.",
  },
  {
    code: "R",
    name: "Relationship Nurturing",
    description:
      "Ensure consistent follow-up with every prospect across every stage of the pipeline, without relying on manual effort from your team.",
  },
  {
    code: "I",
    name: "Internal Workflow",
    description:
      "Streamline scheduling, routing, and operational handoffs. Remove the friction between your sales and delivery teams.",
  },
  {
    code: "F",
    name: "Feedback Intelligence",
    description:
      "Gain clear visibility into response speed, pipeline movement, and conversion performance across your entire operation.",
  },
];

/* ─── Engagement phases ─────────────────────────── */
const phases = [
  {
    number: "1",
    name: "Revenue Audit",
    description:
      "A five-day diagnostic that maps how opportunities move through your business — from first inquiry to closed contract. We identify specific bottlenecks across acquisition, qualification, follow-up, and conversion.",
  },
  {
    number: "2",
    name: "System Design",
    description:
      "We design AI-powered systems tailored to the specific workflows and gaps identified in the audit. No generic templates. Every solution is built around your existing processes and tools.",
  },
  {
    number: "3",
    name: "Implementation",
    description:
      "Systems are deployed in a live environment within two to four weeks. We manage the full technical build — integration, testing, and handoff — without disrupting your existing operations.",
  },
  {
    number: "4",
    name: "Optimization",
    description:
      "A 30-day calibration window follows every deployment. We monitor performance, identify friction points, and refine systems until they are running at full capacity.",
  },
];

const Approach = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      {/* Hero */}
      <section className="section bg-surface-elevated border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">Approach</p>
          <h1 className="t-display mb-7 max-w-[560px]">
            A Structured Methodology for Revenue System Improvement
          </h1>
          <p className="t-subhead max-w-[500px]">
            Every engagement follows the same structured process: diagnose the
            system, design the solution, implement with precision, and optimize
            for performance.
          </p>
        </div>
      </section>

      {/* DRIF Framework */}
      <section className="section bg-background border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">DRIF Framework</p>
          <h2 className="t-headline mb-6 max-w-[440px]">
            The Revenue Infrastructure Framework
          </h2>
          <p className="t-subhead mb-16 max-w-[500px]">
            Most service businesses rely on a chain of systems that move
            opportunities toward revenue. When any part of that chain breaks
            down, revenue is lost. Deyric strengthens this chain using the DRIF
            framework.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline border border-outline">
            {drifLayers.map((layer) => (
              <div key={layer.code} className="bg-surface-elevated p-9">
                <div className="flex items-center gap-3 mb-5">
                  <span className="t-mono text-faint text-xs">{layer.code}</span>
                  <p className="text-primary font-semibold text-sm">{layer.name}</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section bg-surface-elevated border-b border-outline">
        <div className="content-column">
          <p className="t-label mb-8">Engagement Process</p>
          <h2 className="t-headline mb-16 max-w-[400px]">
            Four phases. 30 days to full deployment.
          </h2>

          <div className="space-y-0 divide-y divide-outline border border-outline">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="p-9 grid grid-cols-[48px_1fr] gap-8 items-start"
              >
                <span className="t-mono text-faint text-lg font-light pt-0.5">
                  {phase.number}
                </span>
                <div>
                  <p className="text-primary font-semibold text-sm mb-3 leading-snug">
                    {phase.name}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed max-w-[440px]">
                    {phase.description}
                  </p>
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

export default Approach;
