import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroVideo from "@/assets/hero-background-video.mp4";

const Hero = () => {
  return (
    <section className="hero-animated relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
        style={{ willChange: 'transform' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(rgba(10,10,18,0.45), rgba(10,10,18,0.60))'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-5xl">
        {/* Promo Badge */}
        <div className="mb-8 animate-fade-in-scale opacity-0" style={{ animationDelay: '0.2s' }}>
          <Badge className="bg-[hsl(var(--accent))] text-white border-0 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide rounded-full shadow-lg shadow-[hsl(var(--accent)/0.3)]">
            First 5 Deployments: 67% Off Setup Fee
          </Badge>
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.05] tracking-tight animate-fade-in-scale opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          Cut Your Operational Costs by{" "}
          <span className="gradient-hero bg-clip-text text-transparent">$50K-$150K</span>{" "}
          Per Year. Guaranteed.
        </h1>

        {/* Subheadline */}
        <p 
          className="text-base sm:text-lg lg:text-xl text-white/75 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 px-2"
          style={{ animationDelay: '0.6s' }}
        >
          We build AI voice agents and workflow systems that replace repetitive work your team 
          shouldn't be doing. Deployed in 2-4 weeks. No long-term contracts.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-scale opacity-0 px-4" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="gradient-hero text-white px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-[hsl(var(--accent)/0.35)] hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.5)] hover:scale-105 transition-all duration-300 touch-manipulation border-0"
            asChild
          >
            <a href="https://calendly.com/david-deyric/20min-1" target="_blank" rel="noopener noreferrer">
              See Live Demo
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-[hsl(var(--accent))] text-[hsl(var(--accent))] px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold rounded-xl hover:bg-[hsl(var(--accent)/0.1)] hover:scale-105 transition-all duration-300 touch-manipulation"
            asChild
          >
            <a href="#savings">Calculate Savings</a>
          </Button>
        </div>

        {/* Proof Points */}
        <p 
          className="text-white/60 text-xs sm:text-sm font-medium tracking-wide animate-slide-up opacity-0"
          style={{ animationDelay: '1.0s' }}
        >
          ✓ 2-4 week deployment &nbsp;|&nbsp; ✓ No setup fee for first 5 clients &nbsp;|&nbsp; ✓ 30-day performance guarantee
        </p>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[hsl(var(--accent))] rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[hsl(var(--accent-alt))] rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[hsl(var(--accent-strong))] rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
