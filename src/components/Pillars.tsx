import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Wrench } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      title: "Clarity",
      body: "Ruthless scoping to ship the 20% that drives 80% of outcomes.",
      icon: Target,
    },
    {
      title: "Speed", 
      body: "Sprints, SLAs, and tight feedback loops you can track.",
      icon: Zap,
    },
    {
      title: "Execution",
      body: "Done-for-you systems that launch fast and scale globally.",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">All signal. No noise.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card key={index} className="glass border-outline text-center glow-hover">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-2xl bg-accent/10 border border-accent/20 w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-primary text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-secondary text-base leading-relaxed">
                    {pillar.body}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;