import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────────── */
const Hero = () => (
  <section className="section pt-40 bg-surface-elevated border-b border-outline">
    <div className="content-column">
      <p className="t-label mb-6">Deyric Revenue Infrastructure Framework™</p>
      <h1 className="t-display text-primary mb-6">
        Your revenue operations are leaking money at every handoff.
      </h1>
      <p className="t-subhead max-w-[560px] mb-10">
        Deyric designs and deploys AI-powered revenue infrastructure that closes
        the operational gaps between pipeline generation, qualification, nurturing,
        and close — permanently.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://calendly.com/david-deyric/20min-1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Request Infrastructure Audit
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="/case-studies" className="btn-ghost">
          View Deployment Cases
        </a>
      </div>

      <div className="mt-16 pt-10 border-t border-outline grid grid-cols-3 gap-8 max-w-[560px]">
        {[
          { stat: "2–4 wks", label: "Average deployment timeline" },
          { stat: "$50K–$150K", label: "Annual leakage recovered" },
          { stat: "4 layers", label: "DRIF infrastructure model" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-primary font-semibold text-lg mb-1">{item.stat}</p>
            <p className="text-secondary text-xs leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   SECTION 2 — FINANCIAL CONSEQUENCE
───────────────────────────────────────────── */
const FinancialConsequence = () => {
  const rows = [
    {
      process: "Lead response latency",
      mechanism: "Leads responded to after 5 min convert at 8× lower rate",
      exposure: "$18K–$42K / year per AE",
    },
    {
      process: "Manual qualification",
      mechanism: "Sales touches unqualified contacts for avg. 4.2 hrs/week",
      exposure: "$22K–$55K / year per team",
    },
    {
      process: "Nurture sequence gaps",
      mechanism: "40–60% of pipeline goes cold between stage transitions",
      exposure: "$30K–$90K / year in lost ARR",
    },
    {
      process: "Re-engagement absence",
      mechanism: "Churned or lapsed customers receive no structured re-entry",
      exposure: "$15K–$45K / year in recoverable revenue",
    },
    {
      process: "Ops-to-close friction",
      mechanism: "Manual contract, onboarding, and handoff steps add 6–11 days to deal close",
      exposure: "$10K–$30K / year in deal velocity loss",
    },
  ];

  return (
    <section className="section bg-background border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-6">The cost of inaction</p>
        <h2 className="t-headline text-primary mb-4">
          Revenue leakage is structural, not accidental.
        </h2>
        <p className="t-subhead mb-12 max-w-[520px]">
          The following figures are derived from composite analysis across
          mid-market B2B organisations operating without AI-integrated revenue
          infrastructure.
        </p>

        {/* Header row */}
        <div className="data-row pb-3">
          <span className="t-label">Process gap</span>
          <span className="t-label">Leakage mechanism</span>
          <span className="t-label">Annual exposure</span>
        </div>

        {rows.map((row, i) => (
          <div key={i} className="data-row">
            <p className="text-primary text-sm font-medium pr-6 pt-1">{row.process}</p>
            <p className="text-secondary text-sm leading-relaxed pr-6">{row.mechanism}</p>
            <p className="text-primary text-sm font-semibold t-mono">{row.exposure}</p>
          </div>
        ))}

        <div className="mt-8 p-5 bg-surface border border-outline">
          <p className="text-secondary text-sm">
            <span className="text-primary font-semibold">Total modelled exposure:</span>{" "}
            $95K–$262K per year, per organisation. These are not projections.
            They are operational costs already being paid — in lost revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   SECTION 3 — DRIF 4-LAYER MODEL
───────────────────────────────────────────── */
const DRIFModel = () => {
  const layers = [
    {
      index: "Layer 01",
      name: "Acquisition Infrastructure",
      description:
        "Automated outbound prospecting, AI-qualified inbound routing, and programmatic lead scoring. Ensures no qualified prospect is delayed, misrouted, or lost to response latency.",
      components: ["AI outbound sequencing", "Real-time lead scoring", "Inbound routing logic", "Response latency elimination"],
    },
    {
      index: "Layer 02",
      name: "Qualification & Pipeline Intelligence",
      description:
        "Structured ICP matching, conversational qualification agents, and CRM enrichment. Removes human-hours from early-stage pipeline management without reducing conversion quality.",
      components: ["ICP alignment scoring", "AI qualification agents", "CRM auto-enrichment", "Pipeline health dashboards"],
    },
    {
      index: "Layer 03",
      name: "Nurture & Re-Engagement Systems",
      description:
        "Behavioural trigger sequences, multi-channel nurture orchestration, and dormant pipeline reactivation. Operates continuously across the entire addressable contact database.",
      components: ["Trigger-based sequences", "Dormant reactivation", "Multi-channel orchestration", "Engagement scoring"],
    },
    {
      index: "Layer 04",
      name: "Close & Handoff Automation",
      description:
        "Contract generation, onboarding triggers, and ops-to-close workflow automation. Compresses deal velocity and eliminates handoff friction between revenue and delivery teams.",
      components: ["Automated contract generation", "Onboarding sequence triggers", "Cross-team handoff automation", "Close velocity tracking"],
    },
  ];

  return (
    <section className="section bg-surface-elevated border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-6">DRIF Model</p>
        <h2 className="t-headline text-primary mb-4">
          The Deyric Revenue Infrastructure Framework™
        </h2>
        <p className="t-subhead mb-14 max-w-[520px]">
          A four-layer architecture that integrates AI into every stage of the
          revenue cycle. Designed to compound — each layer reinforces the others.
        </p>

        <div className="space-y-px border border-outline">
          {layers.map((layer, i) => (
            <div key={i} className="layer-card border-0 border-b border-outline last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
                <div>
                  <p className="t-label mb-2">{layer.index}</p>
                  <p className="text-primary font-semibold text-base leading-snug">{layer.name}</p>
                </div>
                <div>
                  <p className="text-secondary text-sm leading-relaxed mb-4">{layer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-medium text-secondary border border-outline px-3 py-1"
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
   SECTION 4 — DEPLOYMENT FRAMEWORK
───────────────────────────────────────────── */
const DeploymentFramework = () => {
  const phases = [
    {
      phase: "Phase 01",
      name: "Infrastructure Audit",
      duration: "Days 1–5",
      description:
        "Full diagnostic of existing revenue stack: CRM configuration, pipeline stage logic, tooling integrations, handoff points, and quantification of current leakage per process category.",
      outputs: ["Leakage quantification report", "Stack integration map", "Prioritised intervention list"],
    },
    {
      phase: "Phase 02",
      name: "System Design & Build",
      duration: "Days 6–18",
      description:
        "Architecture and deployment of DRIF layers selected during audit. Includes AI agent configuration, workflow automation build, CRM integration, and testing in a mirrored staging environment.",
      outputs: ["Production-ready AI agents", "Workflow automation suite", "CRM integration layer", "Acceptance testing sign-off"],
    },
    {
      phase: "Phase 03",
      name: "Live Deployment & Calibration",
      duration: "Days 19–28",
      description:
        "Phased production rollout with live monitoring. Calibration of scoring models, sequence performance, and conversion tracking. Handoff to internal operators with documentation and training.",
      outputs: ["Live production deployment", "Performance baseline report", "Operator documentation", "30-day monitoring window"],
    },
  ];

  return (
    <section className="section bg-background border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-6">Deployment process</p>
        <h2 className="t-headline text-primary mb-4">
          Structured deployment in 28 days or fewer.
        </h2>
        <p className="t-subhead mb-14 max-w-[520px]">
          Every engagement follows a fixed three-phase protocol. No extended
          discovery cycles. No scope ambiguity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline border border-outline">
          {phases.map((p, i) => (
            <div key={i} className="bg-surface-elevated p-8">
              <div className="flex items-start justify-between mb-5">
                <p className="t-label">{p.phase}</p>
                <span className="t-mono text-faint">{p.duration}</span>
              </div>
              <p className="text-primary font-semibold text-base mb-3">{p.name}</p>
              <p className="text-secondary text-sm leading-relaxed mb-6">{p.description}</p>
              <ul className="space-y-2">
                {p.outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-xs text-secondary">
                    <span className="text-faint mt-0.5 select-none">—</span>
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
   SECTION 5 — DEPLOYMENT SCENARIOS
───────────────────────────────────────────── */
const DeploymentScenarios = () => {
  const scenarios = [
    {
      sector: "B2B SaaS",
      challenge: "High inbound volume with no qualification layer. Sales team spending >30% of time on unqualified demos.",
      infrastructure: "Layer 01 + 02: AI qualification agent, ICP scoring, automated routing to AE calendar.",
      outcome: "Demo-to-close rate +34%. AE productive hours +12 hrs/week.",
    },
    {
      sector: "Professional Services",
      challenge: "Long sales cycle with 60% of pipeline going cold between proposal and decision.",
      infrastructure: "Layer 03: Behavioural trigger sequences, decision-stage nurture, stakeholder re-engagement.",
      outcome: "Pipeline velocity +28%. Dormant reactivation rate: 18% within 30 days.",
    },
    {
      sector: "Industrial Distribution",
      challenge: "Manual re-order and account management processes across 400+ accounts. No proactive outreach.",
      infrastructure: "Layer 01 + 04: Account health scoring, automated re-order triggers, ops handoff automation.",
      outcome: "Account retention +22%. Ops overhead reduced by 14 hrs/week per account manager.",
    },
  ];

  return (
    <section className="section bg-surface-elevated border-b border-outline">
      <div className="content-column">
        <p className="t-label mb-6">Representative deployments</p>
        <h2 className="t-headline text-primary mb-4">
          Infrastructure deployed across sectors.
        </h2>
        <p className="t-subhead mb-14 max-w-[520px]">
          The following scenarios are representative of typical engagements.
          Specifics vary by organisational context and existing stack configuration.
        </p>

        <div className="space-y-px border border-outline">
          {scenarios.map((s, i) => (
            <div key={i} className="bg-surface-elevated p-8 border-b border-outline last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
                <div>
                  <p className="t-label mb-1">Sector</p>
                  <p className="text-primary font-semibold text-sm">{s.sector}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="t-label mb-2">Challenge</p>
                    <p className="text-secondary text-sm leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <p className="t-label mb-2">Infrastructure deployed</p>
                    <p className="text-secondary text-sm leading-relaxed">{s.infrastructure}</p>
                  </div>
                  <div>
                    <p className="t-label mb-2">Observed outcome</p>
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
   SECTION 6 — AUDIT CTA
───────────────────────────────────────────── */
const AuditCTA = () => (
  <section className="section bg-background">
    <div className="content-column">
      <div className="border border-outline p-10 sm:p-14">
        <p className="t-label mb-5">AI Infrastructure Audit</p>
        <h2 className="t-headline text-primary mb-4 max-w-[480px]">
          Quantify your revenue leakage before committing to infrastructure.
        </h2>
        <p className="t-subhead mb-8 max-w-[480px]">
          The audit is a structured diagnostic engagement: five days, fixed scope,
          documented outputs. You receive a quantified leakage report and a
          prioritised intervention plan — regardless of whether you engage further.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 pt-8 border-t border-outline">
          {[
            { item: "Scope", value: "Full revenue stack diagnostic across all four DRIF layers" },
            { item: "Duration", value: "5 business days from engagement start" },
            { item: "Output", value: "Leakage quantification report + prioritised intervention plan" },
          ].map((d) => (
            <div key={d.item}>
              <p className="t-label mb-2">{d.item}</p>
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
          Request Infrastructure Audit
          <ArrowRight className="h-4 w-4" />
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
      <DRIFModel />
      <DeploymentFramework />
      <DeploymentScenarios />
      <AuditCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
