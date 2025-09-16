import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Phone, Brain, Building, Users, Zap } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Deyric Automations",
      summary: "Chatbots, scheduling, follow-ups, invoice flows, response bots.",
      link: "/services#automations",
      icon: Bot,
    },
    {
      title: "Voice & Call Agents",
      summary: "Multilingual AI receptionists, appointment setters, collections.",
      link: "/services#voice", 
      icon: Phone,
    },
    {
      title: "AI Solutions",
      summary: "CRMs, lead hubs, dashboards, funnels, marketing optimizers, HR screening.",
      link: "/services#solutions",
      icon: Brain,
    },
    {
      title: "Industry Packages", 
      summary: "Auto Dealer Suite, Global Real Estate, Healthcare, Education, Finance.",
      link: "/services#industry",
      icon: Building,
    },
    {
      title: "Deyric Advisory",
      summary: "Strategy, training, optimization, fractional CTO, white-label.",
      link: "/services#advisory",
      icon: Users,
    },
    {
      title: "Deyric Labs (Future)",
      summary: "Proprietary SaaS & AI data platforms.",
      link: "/services#labs",
      icon: Zap,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4">What we build</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link key={index} to={service.link} className="group">
                <Card className="glass glow-hover border-outline cursor-pointer h-full touch-manipulation">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                    </div>
                    <CardTitle className="text-primary text-lg sm:text-xl leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-secondary text-sm sm:text-base leading-relaxed">
                      {service.summary}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;