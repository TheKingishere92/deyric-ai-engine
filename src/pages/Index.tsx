import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────── */
const Hero = () => (
  <section className="section pt-44 bg-surface-elevated border-b border-outline">
    <div className="content-column">
      <div className="section-label">
        <span className="t-label">AI Revenue Optimization · Service Businesses</span>
      </div>
      <h1 className="t-display mb-7 max-w-[640px]">
        Most service businesses lose $95K–$262K per year through gaps they haven't diagnosed.
      </h1>
      <p className="t-subhead max-w-[520px] mb-12">
        Deyric audits where revenue is leaking across your acquisition, qualification,
        follow-up, and conversion workflows — then deploys AI-powered systems that close
        each gap with measurable precision.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://calendly.com/david-deyric/20min-1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book a Revenue Audit
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <a href="/case-studies" className="btn-ghost">
          View Client Results
        </a>
      </div>

      <div className="mt-20 pt-10 border-t border-outline grid grid-cols-3 gap-10 max-w-[520px]">
        {[
          { stat: "2–4 wks", label: "Typical system deployment" },
          { stat: "$50K–$150K", label: "Avg. annual revenue recovered" },
          { stat: "4 layers", label: "Optimisation framework depth" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-primary font-semibold text-xl mb-1.5 tracking-tight">{item.stat}</p>
            <p className="text-secondary text-xs leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION 2 — REVENUE LEAK DIAGNOSIS
───────────────────────────────────────────── */
const FinancialConsequence = () => {
  const rows = [
    {
      process: "Slow lead response",
      mechanism: "Leads contacted after 5 minutes convert at 8× lower rates — most service businesses respond in hours",
      exposure: "$18K–$42K / yr",
    },
    {
      process: "Unqualified sales activity",
      mechanism: "Sales and account teams spend an average of 4.2 hrs/week on contacts outside the ideal client profile",
      exposure: "$22K–$55K / yr",
    },
    {
      process: "Pipeline drop-off",
      mechanism: "40–60% of active prospects go quiet between initial contact and decision — without a structured follow-up system",
      exposure: "$30K–$90K / yr",
    },
    {
      process: "No re-engagement process",
      mechanism: "Former clients and lapsed prospects receive no structured outreach — recoverable revenue is left on the table",
      exposure: "$15K–$45K / yr",
    },
    {
      process: "Operational handoff delays",
      mechanism: "Manual quoting, onboarding, and internal handoff steps add 6–11 days to average deal close time",
      exposure: "$10K–$30K / yr",
    },
  ];

  return (
    <section className="section bg-background border-b border-outline">
      <div className="content-column">
        <div className="section-label">
          <span className="t-label">Revenue Leak Diagnosis</span>
        </div>
        <h2 className="t-headline mb-4 max-w-[480px]">
          Where your business is losing revenue right now.
        </h2>
        <p className="t-subhead mb-14 max-w-[480px]">
          These are not edge cases. Each gap below reflects a structural pattern
          present in the majority of service businesses operating without optimised
          sales workflows or automated client management systems.
        </p>

        <div className="data-row pb-3">
          <span className="t-label">Operational gap</span>
          <span className="t-label">How revenue leaks</span>
          <span className="t-label text-right">Annual exposure</span>
        </div>

        {rows.map((row, i) => (
          <div key={i} className="data-row">
            <p className="text-primary text-sm font-medium pr-8 pt-0.5">{row.process}</p>
            <p className="text-secondary text-sm leading-relaxed pr-8">{row.mechanism}</p>
            <p className="text-primary text-sm font-semibold t-mono text-right">{row.exposure}</p>
          </div>
        ))}

        <div className="mt-10 p-6 bg-surface border border-outline">
          <p className="text-secondary text-sm leading-relaxed">
            <span className="text-primary font-semibold">Total modelled exposure:</span>{" "}
            $95K–$262K per year, per business. These are not projections.
            They represent revenue already being lost through gaps in how the business operates.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 3 — HOW WE FIX IT
───────────────────────────────────────────── */
const OptimisationFramework = () => {
  const layers = [
    {
      index: "Layer 01",
      name: "Lead Acquisition & Response",
      description:
        "Automated outreach, intelligent inbound routing, and fast-response systems that ensure every qualified prospect is contacted within minutes — not hours. No lead is delayed, misrouted, or lost.",
      components: ["Automated outbound sequences", "Inbound lead routing", "Response speed systems", "Lead qualification scoring"],
    },
    {
      index: "Layer 02",
      name: "Sales Qualification & Pipeline Management",
      description:
        "Structured client profiling, conversational qualification workflows, and CRM enrichment. Removes low-value activity from your team's time without compromising conversion quality.",
      components: ["Client fit assessment", "Qualification automation", "CRM data enrichment", "Pipeline health tracking"],
    },
    {
      index: "Layer 03",
      name: "Follow-Up & Re-Engagement Systems",
      description:
        "Behavioural trigger sequences, structured multi-channel follow-up, and dormant client reactivation. Operates continuously across your full contact base without manual effort.",
      components: ["Trigger-based follow-up", "Dormant client reactivation", "Multi-channel coordination", "Engagement monitoring"],
    },
    {
      index: "Layer 04",
      name: "Conversion & Client Onboarding Automation",
      description:
        "Proposal generation, onboarding workflows, and internal handoff automation. Compresses time-to-close and removes friction between your sales and delivery teams.",
      components: ["Automated proposal workflows", "Onboarding sequence triggers", "Internal handoff systems", "Conversion velocity tracking"],
    },
  ];

  return (
    <section className="section bg-surface-elevated border-b border-outline">
      <div className="content-column">
        <div className="section-label">
          <span className="t-label">How We Fix It</span>
        </div>
        <h2 className="t-headline mb-4 max-w-[440px]">
          Four systems. One integrated framework.
        </h2>
        <p className="t-subhead mb-16 max-w-[480px]">
          The Deyric Revenue Optimization Framework™ addresses every stage where
          service businesses lose revenue — from first contact to closed deal
          and beyond.
        </p>

        <div className="border border-outline divide-y divide-outline">
          {layers.map((layer, i) => (
            <div key={i} className="layer-card">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                <div className="pt-0.5">
                  <p className="t-label mb-2.5">{layer.index}</p>
                  <p className="text-primary font-semibold text-sm leading-snug">{layer.name}</p>
                </div>
                <div>
                  <p className="text-secondary text-sm leading-relaxed mb-5">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-medium text-secondary border border-outline px-3 py-1 bg-surface"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 4 — OUR PROCESS
───────────────────────────────────────────── */
const DeploymentFramework = () => {
  const phases = [
    {
      phase: "Phase 01",
      name: "Revenue Audit",
      duration: "Days 1–5",
      description:
        "A structured diagnostic of how your business currently acquires, qualifies, follows up, and closes clients. We identify where revenue is being lost and quantify the cost of each gap.",
      outputs: ["Revenue leakage report", "Workflow gap analysis", "Prioritised improvement plan"],
    },
    {
      phase: "Phase 02",
      name: "System Design & Build",
      duration: "Days 6–18",
      description:
        "Design and deployment of the optimisation layers identified in the audit. Includes workflow automation, AI-assisted systems, CRM integration, and testing before go-live.",
      outputs: ["Live automation workflows", "AI-assisted sales systems", "CRM integration layer", "Pre-launch testing sign-off"],
    },
    {
      phase: "Phase 03",
      name: "Go-Live & Calibration",
      duration: "Days 19–28",
      description:
        "Phased rollout with live performance monitoring. Calibration of systems based on real-world data. Handoff to your team with documentation, training, and a 30-day support window.",
      outputs: ["Production deployment", "Performance benchmarks", "Team documentation & training", "30-day monitoring window"],
    },
  ];

  return (
    <section className="section bg-background border-b border-outline">
      <div className="content-column">
        <div className="section-label">
          <span className="t-label">Our Process</span>
        </div>
        <h2 className="t-headline mb-4">
          Audit. Build. Deploy. 28 days.
        </h2>
        <p className="t-subhead mb-16 max-w-[480px]">
          A fixed three-phase engagement with defined scope, clear outputs,
          and no extended discovery phases. You know what you're getting before we start.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline border border-outline">
          {phases.map((p, i) => (
            <div key={i} className="bg-surface-elevated p-9">
              <div className="flex items-start justify-between mb-6">
                <p className="t-label">{p.phase}</p>
                <span className="t-mono text-faint">{p.duration}</span>
              </div>
              <p className="text-primary font-semibold text-sm mb-3 leading-snug">{p.name}</p>
              <p className="text-secondary text-sm leading-relaxed mb-7">{p.description}</p>
              <ul className="space-y-2.5">
                {p.outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-xs text-secondary">
                    <span className="text-faint mt-0.5 select-none shrink-0">—</span>
                    {o}
                  </li>
                ))}
              </ul>
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
const ClientScenarios = () => {
  const scenarios = [
    {
      sector: "Consulting Firm",
      challenge: "High inbound enquiry volume with no qualification process. Partners spending significant time on prospects outside their ideal client profile.",
      systems: "Layer 01 + 02: Automated enquiry routing, client fit scoring, calendar booking without manual coordination.",
      outcome: "Qualified meeting rate +34%. Partner time on unqualified prospects reduced by 12 hrs/week.",
    },
    {
      sector: "Marketing Agency",
      challenge: "Long proposal cycles with 60% of pipeline going cold between initial call and contract sign-off.",
      systems: "Layer 03: Structured follow-up sequences, decision-stage re-engagement, automated proposal reminders.",
      outcome: "Pipeline conversion rate +28%. Dormant prospect reactivation: 18% within 30 days.",
    },
    {
      sector: "B2B Services",
      challenge: "Manual account management across 400+ clients. No proactive outreach system. Re-orders reliant on client-initiated contact.",
      systems: "Layer 01 + 04: Account health monitoring, automated re-engagement triggers, internal handoff automation.",
      outcome: "Client retention +22%. Account manager admin reduced by 14 hrs/week per person.",
    },
  ];

  return (
    <section className="section bg-surface-elevated border-b border-outline">
      <div className="content-column">
        <div className="section-label">
          <span className="t-label">Business Impact</span>
        </div>
        <h2 className="t-headline mb-4 max-w-[480px]">
          Measurable outcomes across service business types.
        </h2>
        <p className="t-subhead mb-16 max-w-[480px]">
          Representative results from typical engagements. Specifics vary by
          business model, team size, and existing infrastructure.
        </p>

        <div className="border border-outline divide-y divide-outline">
          {scenarios.map((s, i) => (
            <div key={i} className="p-9">
              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8">
                <div className="pt-0.5">
                  <p className="t-label mb-2">Business type</p>
                  <p className="text-primary font-semibold text-sm">{s.sector}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <p className="t-label mb-3">Challenge</p>
                    <p className="text-secondary text-sm leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <p className="t-label mb-3">Systems deployed</p>
                    <p className="text-secondary text-sm leading-relaxed">{s.systems}</p>
                  </div>
                  <div>
                    <p className="t-label mb-3">Result</p>
                    <p className="text-primary text-sm leading-relaxed font-medium">{s.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 6 — FINAL CALL TO ACTION
───────────────────────────────────────────── */
const AuditCTA = () => (
  <section className="section bg-background">
    <div className="content-column">
      <div className="border border-outline p-12 sm:p-16">
        <div className="section-label">
          <span className="t-label">Start Here</span>
        </div>
        <h2 className="t-headline mb-5 max-w-[440px]">
          Find out exactly where your revenue is leaking — in five business days.
        </h2>
        <p className="t-subhead mb-12 max-w-[440px]">
          The Revenue Audit is a structured diagnostic with a clear deliverable:
          a quantified leakage report and a prioritised plan to fix it.
          No commitment beyond the audit required.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 pt-10 border-t border-outline">
          {[
            { item: "Scope", value: "Full diagnostic across acquisition, qualification, follow-up, and conversion" },
            { item: "Duration", value: "5 business days from engagement start" },
            { item: "Output", value: "Revenue leakage report and prioritised improvement roadmap" },
          ].map((d) => (
            <div key={d.item}>
              <p className="t-label mb-2.5">{d.item}</p>
              <p className="text-secondary text-sm leading-relaxed">{d.value}</p>
            </div>
          ))}
        </div>

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
      <FinancialConsequence />
      <OptimisationFramework />
      <DeploymentFramework />
      <ClientScenarios />
      <AuditCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
