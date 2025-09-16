import { Button } from "@/components/ui/button";
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
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6">{headline}</h2>
          {subheadline && (
            <p className="text-base sm:text-lg lg:text-xl text-secondary mb-8 leading-relaxed px-4">
              {subheadline}
            </p>
          )}
          <Button 
            size="lg" 
            className="glass glow-hover gradient-hero text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold touch-manipulation" 
            asChild
          >
            <Link to={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;