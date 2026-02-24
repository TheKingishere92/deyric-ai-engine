import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTABannerProps {
  headline: string;
  subheadline?: string;
  primaryCta: {
    label: string;
    href: string;
  };
}

const CTABanner = ({ headline, subheadline, primaryCta }: CTABannerProps) => {
  const isExternal = primaryCta.href.startsWith("http") || primaryCta.href.startsWith("mailto:");

  return (
    <section className="py-20 sm:py-28 bg-surface-elevated">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold text-[hsl(var(--accent))] uppercase tracking-wider mb-4">
            Ready to start?
          </p>
          <h2 className="heading-lg text-primary mb-6">{headline}</h2>
          {subheadline && (
            <p className="text-base sm:text-lg text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
          {isExternal ? (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[hsl(var(--accent-strong))] transition-all duration-300 hover:scale-105 group shadow-lg shadow-[hsl(var(--accent)/0.25)]"
            >
              {primaryCta.label}
              <span className="bg-white/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ) : (
            <Link
              to={primaryCta.href}
              className="inline-flex items-center gap-3 bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[hsl(var(--accent-strong))] transition-all duration-300 hover:scale-105 group shadow-lg shadow-[hsl(var(--accent)/0.25)]"
            >
              {primaryCta.label}
              <span className="bg-white/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
