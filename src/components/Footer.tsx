import { Link } from "react-router-dom";

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
    <footer className="bg-surface-elevated border-t border-outline">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
                Deyric
              </div>
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              AI that makes business simple.
            </p>
          </div>

          {/* Footer Links */}
          {footerCols.map((col, index) => (
            <div key={index}>
              <h4 className="text-primary font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        className="text-secondary hover:text-primary transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-secondary hover:text-primary transition-colors text-sm"
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

        <div className="border-t border-outline mt-12 pt-8">
          <p className="text-muted text-sm text-center">
            © Deyric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;