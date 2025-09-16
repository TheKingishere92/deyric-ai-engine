import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      slug: "auto-dealer",
      title: "Auto Dealer AI Suite",
      problem: "Slow response times, missed leads, manual follow-ups.",
      solution: "Voice agent + CRM automations + test-drive funnel.",
      results: [
        { label: "Response time", value: "seconds", icon: Clock },
        { label: "Test-drives", value: "+38%", icon: TrendingUp },
        { label: "Sales cycle", value: "−22%", icon: Clock }
      ]
    },
    {
      slug: "real-estate",
      title: "Global Real Estate Pipeline",
      problem: "Fragmented channels, unqualified leads, no visibility.",
      solution: "Unified lead hub + qualification bot + analytics dashboard.",
      results: [
        { label: "Close rate", value: "+21%", icon: TrendingUp },
        { label: "CPL", value: "−18%", icon: TrendingUp },
        { label: "Team hours saved", value: "40+/mo", icon: Users }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container mx-auto px-6 text-center">
            <h1 className="heading-xl text-primary mb-6">Case Studies</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Real results from AI systems that drive measurable business outcomes.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              {cases.map((caseStudy, index) => (
                <Card key={index} className="glass border-outline glow-hover">
                  <CardHeader>
                    <CardTitle className="text-primary text-2xl mb-2">{caseStudy.title}</CardTitle>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-accent font-semibold mb-2">Challenge</h4>
                        <CardDescription className="text-secondary">
                          {caseStudy.problem}
                        </CardDescription>
                      </div>
                      <div>
                        <h4 className="text-accent font-semibold mb-2">Solution</h4>
                        <CardDescription className="text-secondary">
                          {caseStudy.solution}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-accent font-semibold mb-4">Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {caseStudy.results.map((result, resultIndex) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={resultIndex} className="glass-subtle rounded-lg p-4 text-center">
                            <div className="mx-auto w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                              <IconComponent className="h-5 w-5 text-accent" />
                            </div>
                            <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                            <div className="text-secondary text-sm">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Let's build your win next."
          primaryCta={{ label: "Start a sprint", href: "/contact#book" }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;