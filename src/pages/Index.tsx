import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ServicesGrid from "@/components/ServicesGrid";
import ProofMetrics from "@/components/ProofMetrics";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Users } from "lucide-react";

const Index = () => {
  const casePreview = [
    {
      title: "Auto Dealer AI Suite",
      summary: "Lead response time cut from hours to seconds. Test-drives up 38%.",
      link: "/case-studies/auto-dealer"
    },
    {
      title: "Global Real Estate Pipeline", 
      summary: "Unified funnel + CRM automations. Close rate up 21%.",
      link: "/case-studies/real-estate"
    }
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
        <section className="py-16 sm:py-24 bg-surface-elevated">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4">Recent wins</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {casePreview.map((caseStudy, index) => (
                <Link key={index} to={caseStudy.link} className="group">
                  <Card className="glass border-outline glow-hover cursor-pointer h-full touch-manipulation">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                          <TrendingUp className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <CardTitle className="text-primary text-lg sm:text-xl leading-tight">{caseStudy.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-secondary text-sm sm:text-base leading-relaxed">
                        {caseStudy.summary}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Plug into the future with AI."
          subheadline="Let's wire your systems into a predictable growth engine."
          primaryCta={{ label: "Start your build sprint", href: "/contact#book" }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
