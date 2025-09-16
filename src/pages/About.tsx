import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Lightbulb, Shield, Clock, Trophy } from "lucide-react";

const About = () => {
  const values = [
    { title: "Execution", body: "Ship working systems, fast.", icon: Zap },
    { title: "Innovation", body: "Pragmatic AI, not hype.", icon: Lightbulb },
    { title: "Trust", body: "Clear scope, no surprises.", icon: Shield },
    { title: "Speed", body: "Tight loops, visible progress.", icon: Clock },
    { title: "Dominance", body: "Own your category with systems.", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="heading-xl text-primary mb-8">Operators, not theorists.</h1>
              <p className="text-xl text-secondary leading-relaxed mb-8">
                We wire together the systems that actually move your business. Global-first, 
                premium execution, measurable outcomes.
              </p>
              <ul className="space-y-4">
                <li className="text-secondary flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Global delivery with timezone-aware collaboration
                </li>
                <li className="text-secondary flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Sprints, SLAs, and transparent reporting
                </li>
                <li className="text-secondary flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Security, compliance, and reliability baked in
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-lg text-primary text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="glass border-outline text-center glow-hover">
                      <CardHeader>
                        <div className="mx-auto p-3 rounded-xl bg-accent/10 border border-accent/20 w-fit mb-4">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-primary text-lg">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary text-sm leading-relaxed">
                          {value.body}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          headline="AI that makes business simple."
          primaryCta={{ label: "Talk to an operator", href: "/contact#book" }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default About;