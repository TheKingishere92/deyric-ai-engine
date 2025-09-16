import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "",
    interests: [] as string[],
    message: ""
  });

  const contactOptions = [
    {
      label: "Book a Strategy Call",
      href: "https://calendly.com/your-handle/strategy-call",
      emphasis: true,
      icon: Calendar,
      description: "15-minute strategy session"
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/XXXXXXXXXXX",
      icon: MessageCircle,
      description: "Quick questions & updates"
    },
    {
      label: "Email",
      href: "mailto:hello@deyric.com",
      icon: Mail,
      description: "Detailed project briefs"
    }
  ];

  const budgetOptions = ["$2k–$5k", "$5k–$15k", "$15k–$50k", "$50k+"];
  const interestOptions = ["Automations", "Voice/Call Agent", "Dashboards", "CRM/Funnels", "Industry Package", "Advisory"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container mx-auto px-6 text-center">
            <h1 className="heading-xl text-primary mb-6">Start your build sprint</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Pick the fastest way to get moving.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {contactOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <a key={index} href={option.href} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className={`glass border-outline text-center glow-hover cursor-pointer ${
                        option.emphasis ? "border-accent/50" : ""
                      }`}>
                        <CardHeader>
                          <div className="mx-auto p-4 rounded-2xl bg-accent/10 border border-accent/20 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                            <IconComponent className="h-8 w-8 text-accent" />
                          </div>
                          <CardTitle className="text-primary text-xl">{option.label}</CardTitle>
                          <CardDescription className="text-secondary">
                            {option.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </a>
                  );
                })}
              </div>

              {/* Contact Form */}
              <div id="book" className="scroll-mt-32">
                <Card className="glass border-outline">
                  <CardHeader>
                    <CardTitle className="text-primary text-2xl">Tell us about your goals</CardTitle>
                    <CardDescription className="text-secondary">
                      Share some details and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-primary">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="glass border-outline"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-primary">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="glass border-outline"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company" className="text-primary">Company *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="glass border-outline"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="website" className="text-primary">Website</Label>
                          <Input
                            id="website"
                            type="url"
                            value={formData.website}
                            onChange={(e) => setFormData({...formData, website: e.target.value})}
                            className="glass border-outline"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="budget" className="text-primary">Budget Range *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                          <SelectTrigger className="glass border-outline">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-primary">What do you want to build? *</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {interestOptions.map((option) => (
                            <Badge
                              key={option}
                              variant={formData.interests.includes(option) ? "default" : "outline"}
                              className={`cursor-pointer transition-colors ${
                                formData.interests.includes(option) 
                                  ? "bg-accent text-white" 
                                  : "glass border-outline hover:border-accent/50"
                              }`}
                              onClick={() => {
                                if (formData.interests.includes(option)) {
                                  setFormData({
                                    ...formData,
                                    interests: formData.interests.filter(i => i !== option)
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    interests: [...formData.interests, option]
                                  });
                                }
                              }}
                            >
                              {option}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-primary">Context / Goals *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="glass border-outline min-h-24"
                          placeholder="Tell us about your business goals, current challenges, and what success looks like..."
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="glass glow-hover gradient-hero text-white w-full">
                        Submit
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;