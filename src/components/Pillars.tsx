import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Wrench } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      title: "Execution",
      body: "Execution over talk — systems built fast, not theory.",
      icon: Target,
    },
    {
      title: "Global", 
      body: "Premium UK positioning with global delivery.",
      icon: Zap,
    },
    {
      title: "Premium",
      body: "Two-lane pricing: Quick wins & Enterprise solutions.",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-elevated">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4">Why Deyric?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card key={index} className="glass border-outline text-center glow-hover h-full">
                <CardHeader className="pb-4">
                  <div className="mx-auto p-3 sm:p-4 rounded-2xl bg-accent/10 border border-accent/20 w-fit mb-4">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <CardTitle className="text-primary text-xl sm:text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-secondary text-sm sm:text-base leading-relaxed">
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