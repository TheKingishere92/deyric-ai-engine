import { Link } from "react-router-dom";
import deyricLogo from "@/assets/deyric-logo.png";

const Footer = () => {
  const cols = [
    {
      title: "Company",
      links: [
        { label: "Services", href: "/services" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Request Infrastructure Audit", href: "https://calendly.com/david-deyric/20min-1" },
        { label: "hello@deyric.com", href: "mailto:hello@deyric.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-outline bg-surface-elevated">
      <div className="content-column-wide mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="brand-logo mb-4 inline-flex">
              <img src={deyricLogo} alt="Deyric" className="logo-sm w-auto object-contain" />
              <span className="brand-wordmark">Deyric</span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed mt-3 max-w-[200px]">
              AI revenue infrastructure for mid-market enterprises.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="t-label mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-secondary hover:text-primary text-sm transition-colors"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-secondary hover:text-primary text-sm transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-faint text-xs">© {new Date().getFullYear()} Deyric. All rights reserved.</p>
          <p className="text-faint text-xs">Deyric Revenue Infrastructure Framework™</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
