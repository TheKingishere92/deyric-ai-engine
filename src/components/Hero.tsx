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
        <div className="mb-6 animate-fade-in-scale opacity-0" style={{ animationDelay: '0.2s' }}>
          <Badge variant="outline" className="glass text-primary border-primary/50 px-3 py-2 text-xs sm:text-sm hover-lift animate-pulse-glow">
            Limited build slots open this month
          </Badge>
        </div>

        {/* Eyebrow */}
        <div className="mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase animate-text-shimmer bg-gradient-to-r from-accent via-accent-alt to-accent bg-[length:200%_100%] bg-clip-text text-transparent">
            World-Class AI Execution
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-6 max-w-4xl mx-auto animate-fade-in-scale opacity-0 leading-tight" style={{ animationDelay: '0.6s' }}>
          We build AI systems that deliver{" "}
          <span className="gradient-hero bg-clip-text text-transparent relative">
            human results
            <div className="absolute inset-0 gradient-hero bg-clip-text text-transparent animate-pulse opacity-50"></div>
          </span>.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 px-4" style={{ animationDelay: '0.8s' }}>
          Operators who wire your funnels, CRMs, automations, voice agents, and dashboards 
          into a single growth engine.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-scale opacity-0 px-4" style={{ animationDelay: '1.0s' }}>
          <Button size="lg" className="glass button-magnetic gradient-hero text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold touch-manipulation relative overflow-hidden group" asChild>
            <Link to="/contact#book">
              <span className="relative z-10">Book a Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-alt to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="glass hover-lift px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg touch-manipulation" asChild>
            <Link to="/services">See Services</Link>
          </Button>
        </div>

        {/* Proof Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="glass text-primary px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium animate-badge-entrance opacity-0 hover-lift" 
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float opacity-0 animate-fade-in-scale" style={{ animationDelay: '1.5s' }}>
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full opacity-60 animate-pulse-glow" />
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-alt rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent-strong rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>
      </div>
    </section>
  );
};

export default Hero;