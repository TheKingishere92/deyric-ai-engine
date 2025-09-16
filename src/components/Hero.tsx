import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const badges = ["10× faster delivery", "24/7 automation", "47% conversion gains"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,18,0.35), rgba(10,10,18,0.75)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Availability Badge */}
        <div className="mb-6 animate-fade-up">
          <Badge variant="outline" className="glass text-primary border-primary/50 px-3 py-2 text-xs sm:text-sm">
            Limited build slots open this month
          </Badge>
        </div>

        {/* Eyebrow */}
        <div className="mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase">
            World-Class AI Execution
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-6 max-w-4xl mx-auto animate-fade-up leading-tight" style={{ animationDelay: '0.2s' }}>
          We build AI systems that deliver{" "}
          <span className="gradient-hero bg-clip-text text-transparent">human results</span>.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up px-4" style={{ animationDelay: '0.3s' }}>
          Operators who wire your funnels, CRMs, automations, voice agents, and dashboards 
          into a single growth engine.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up px-4" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="glass glow-hover gradient-hero text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold touch-manipulation" asChild>
            <Link to="/contact#book">Book a Strategy Call</Link>
          </Button>
          <Button size="lg" variant="outline" className="glass glow-hover px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg touch-manipulation" asChild>
            <Link to="/services">See Services</Link>
          </Button>
        </div>

        {/* Proof Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-fade-up px-4" style={{ animationDelay: '0.5s' }}>
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="glass text-primary px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium">
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default Hero;