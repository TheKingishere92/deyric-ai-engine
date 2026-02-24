import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pillars = () => {
  const challenges = [
    {
      number: "01",
      title: "Operational costs are unpredictable and rising",
      description:
        "We help businesses automate repetitive workflows so costs stay flat while output scales.",
    },
    {
      number: "02",
      title: "Your sales and ops teams operate in silos",
      description:
        "We build integrated AI systems where sales, support, and operations share data and act in sync.",
    },
    {
      number: "03",
      title: "Manual processes are slowing your growth",
      description:
        "It's 2025. Manual data entry, scheduling, and follow-ups should be handled by AI. We make that happen.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface-elevated">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-bold text-[hsl(var(--accent))] uppercase tracking-wider mb-4">
            Sound familiar?
          </p>
          <h2 className="heading-lg text-primary mb-6">
            Most businesses have the expertise. They just lack the systems to scale it.
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            We see it every day — talented teams held back by manual processes, disconnected tools, and wasted hours. Here's where we help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-outline hover-lift group"
            >
              <span className="text-xs font-bold text-[hsl(var(--accent))] tracking-wider mb-4 block">
                / Challenge {challenge.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-primary leading-tight mb-4">
                {challenge.title}
              </h3>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[hsl(var(--accent-strong))] transition-all duration-300 hover:scale-105 group"
          >
            See our solutions
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://calendly.com/david-deyric/20min-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-[hsl(var(--accent))] transition-colors px-4 py-4"
          >
            Curious? Book a demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
