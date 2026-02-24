import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ServicesGrid from "@/components/ServicesGrid";
import ProofMetrics from "@/components/ProofMetrics";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";

const Index = () => {
  const casePreview = [
    {
      title: "Auto Dealer AI Suite",
      summary: "Lead response time cut from hours to seconds. Test-drives up 38%.",
      link: "/case-studies/auto-dealer",
    },
    {
      title: "Global Real Estate Pipeline",
      summary: "Unified funnel + CRM automations. Close rate up 21%.",
      link: "/case-studies/real-estate",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <Hero />
        <Pillars />
        <ServicesGrid />
        <ProofMetrics />

        {/* Case Studies Preview */}
        <section className="py-20 sm:py-28 bg-surface-elevated">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-bold text-[hsl(var(--accent))] uppercase tracking-wider mb-4">
                Case studies
              </p>
              <h2 className="heading-lg text-primary">Recent wins</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
              {casePreview.map((caseStudy, index) => (
                <Link key={index} to={caseStudy.link} className="group">
                  <div className="bg-background rounded-2xl p-8 border border-outline hover-lift h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-[hsl(var(--accent)/0.1)] group-hover:bg-[hsl(var(--accent)/0.15)] transition-colors">
                        <TrendingUp className="h-6 w-6 text-[hsl(var(--accent))]" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted group-hover:text-[hsl(var(--accent))] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {caseStudy.title}
                    </h3>
                    <p className="text-secondary text-sm sm:text-base leading-relaxed">
                      {caseStudy.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Ready to build your AI-powered operations?"
          subheadline="Stop losing money on manual processes. Let's build a system that scales."
          primaryCta={{
            label: "Book Your Free Strategy Call",
            href: "https://calendly.com/david-deyric/20min-1",
          }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
