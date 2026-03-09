import { Link } from "react-router-dom";
import deyricLogo from "@/assets/deyric-logo.png";

const Footer = () => {
  const cols = [
    {
      title: "Company",
      links: [
        { label: "Solutions", href: "/solutions" },
        { label: "Approach",  href: "/approach" },
        { label: "Results",   href: "/results" },
        { label: "About",     href: "/about" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Book a Revenue Audit", href: "https://calendly.com/david-deyric/20min-1" },
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
      <div className="content-column-wide mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">
          <div>
            <Link to="/" className="brand-logo mb-5 inline-flex">
              <img src={deyricLogo} alt="Deyric" className="logo-sm w-auto object-contain" />
              <span className="brand-wordmark">Deyric</span>
            </Link>
            <p className="text-secondary text-xs leading-relaxed mt-4 max-w-[190px]">
              AI revenue optimisation for service businesses.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="t-label mb-5">{col.title}</p>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-secondary hover:text-primary text-xs transition-colors"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-secondary hover:text-primary text-xs transition-colors"
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

        <div className="rule pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-faint text-xs">© {new Date().getFullYear()} Deyric. All rights reserved.</p>
          <p className="text-faint text-xs tracking-wide">Deyric Revenue Optimisation Framework™</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
