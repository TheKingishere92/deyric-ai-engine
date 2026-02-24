import { Link } from "react-router-dom";
import deyricLogo from "@/assets/deyric-logo.png";

const Footer = () => {
  const footerCols = [
    {
      title: "Deyric",
      links: [
        { label: "About", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Services", href: "/services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Book a Strategy Call", href: "/contact#book" },
        { label: "WhatsApp", href: "https://wa.me/XXXXXXXXXXX" },
        { label: "Email", href: "mailto:hello@deyric.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-[hsl(var(--text-primary))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src={deyricLogo} alt="Deyric" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-extrabold text-white">Deyric</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              AI that makes business simple.
            </p>
          </div>

          {/* Footer Links */}
          {footerCols.map((col, index) => (
            <div key={index}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Deyric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
