import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-3d-abstract.png";

const Hero = () => {
  const proofPoints = [
    { text: "Specialist in", bold: "AI automation" },
    { text: "All AI & dev skills", bold: "in house" },
    { text: "Proven and", bold: "validated strategies" },
  ];

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] font-extrabold text-primary leading-[1.08] tracking-tight mb-6 animate-fade-in-scale opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              Cut your operational costs by $50K–$150K per year.{" "}
              <span className="text-primary">Guaranteed.</span>
            </h1>

            <p
              className="text-base sm:text-lg text-secondary leading-relaxed mb-8 max-w-xl animate-slide-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              We build AI voice agents and workflow systems that replace
              repetitive work your team shouldn't be doing. Deployed in 2–4
              weeks. No long-term contracts.
            </p>

            {/* CTA */}
            <div
              className="mb-10 animate-fade-in-scale opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="https://calendly.com/david-deyric/20min-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[hsl(var(--accent-strong))] transition-all duration-300 hover:scale-105 group shadow-lg shadow-[hsl(var(--accent)/0.25)]"
              >
                BOOK YOUR FREE STRATEGY CALL
                <span className="bg-white/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* Proof Points */}
            <div
              className="space-y-3 animate-slide-up opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              {proofPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[hsl(var(--accent))] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-secondary">
                    {point.text}{" "}
                    <strong className="text-primary font-bold">
                      {point.bold}
                    </strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            className="hidden lg:flex justify-center items-center animate-fade-in-scale opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src={heroImage}
              alt="AI automation systems"
              className="w-full max-w-lg xl:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
