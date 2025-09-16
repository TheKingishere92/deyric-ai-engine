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
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">What we build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link key={index} to={service.link} className="group">
                <Card className="glass glow-hover border-outline cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 mb-4 group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="text-primary text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-secondary text-base leading-relaxed">
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