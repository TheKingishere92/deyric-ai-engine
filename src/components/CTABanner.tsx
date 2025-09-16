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
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-primary mb-6">{headline}</h2>
          {subheadline && (
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              {subheadline}
            </p>
          )}
          <Button 
            size="lg" 
            className="glass glow-hover gradient-hero text-white px-8 py-6 text-lg font-semibold" 
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