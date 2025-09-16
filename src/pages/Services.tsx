import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      anchor: "automations",
      title: "Deyric Automations",
      summary: "From chatbots to invoicing and smart follow-ups — ship automations that pay for themselves.",
      packages: [
        {
          name: "Starter",
          priceNote: "Setup $2k–$3.5k",
          retainer: "$600–$1k/mo",
          bullets: ["Chatbot + scheduling", "Email/SMS follow-ups", "Simple CRM wiring"]
        }
      ]
    },
    {
      anchor: "voice",
      title: "Voice & Call Agents",
      summary: "AI receptionists, appointment setters, multilingual callers, collections.",
      packages: [
        {
          name: "Core",
          priceNote: "Setup $3.5k–$7k",
          retainer: "$800–$1.5k/mo",
          bullets: ["Inbound routing", "Outbound sequences", "CRM logging", "Analytics"]
        }
      ]
    },
    {
      anchor: "solutions",
      title: "AI Solutions",
      summary: "CRMs, lead hubs, analytics dashboards, funnels, optimizers, HR screeners.",
      packages: [
        {
          name: "Pro",
          priceNote: "Setup $4k–$15k+",
          retainer: "$1.2k–$2.5k/mo",
          bullets: ["Custom dashboards", "Attribution", "Compliance workflows", "Performance tuning"]
        }
      ]
    },
    {
      anchor: "industry",
      title: "Industry Packages",
      summary: "Ready-to-deploy bundles tailored for your vertical.",
      packages: [
        {
          name: "Auto Dealer Suite",
          priceNote: "Custom",
          bullets: ["Lead capture → test-drive flow", "Stock sync", "WhatsApp/Email automations"]
        },
        {
          name: "Global Real Estate",
          priceNote: "Custom",
          bullets: ["Listing funnels", "Qualification bots", "CRM + calendar automations"]
        }
      ]
    },
    {
      anchor: "advisory",
      title: "Deyric Advisory",
      summary: "Strategy, enablement, optimization, fractional CTO, and white-label execution.",
      packages: [
        {
          name: "Retainer",
          priceNote: "$3k–$12k+/mo",
          bullets: ["Roadmapping", "Vendor selection", "Reviews & sprints", "On-call support"]
        }
      ]
    },
    {
      anchor: "labs",
      title: "Deyric Labs (Future)",
      summary: "Our R&D pipeline of proprietary AI products and platforms.",
      packages: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container mx-auto px-6 text-center">
            <h1 className="heading-xl text-primary mb-6">Services</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              World-class AI execution across automations, voice agents, solutions, and advisory.
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-16">
              {services.map((service, index) => (
                <div key={index} id={service.anchor} className="scroll-mt-32">
                  <Card className="glass border-outline">
                    <CardHeader>
                      <CardTitle className="text-primary text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-secondary text-lg">
                        {service.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {service.packages.length > 0 && (
                        <div className="space-y-6">
                          {service.packages.map((pkg, pkgIndex) => (
                            <div key={pkgIndex} className="glass-subtle rounded-lg p-6">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h4 className="text-primary font-semibold text-lg">{pkg.name}</h4>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 md:mt-0">
                                  <Badge variant="outline" className="glass text-accent border-accent/50">
                                    {pkg.priceNote}
                                  </Badge>
                                  {pkg.retainer && (
                                    <Badge variant="secondary" className="glass">
                                      {pkg.retainer}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <ul className="space-y-2">
                                {pkg.bullets.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="text-secondary flex items-start gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Ready to execute?"
          primaryCta={{ label: "Book a Strategy Call", href: "/contact#book" }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Services;