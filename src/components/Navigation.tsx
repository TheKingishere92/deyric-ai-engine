import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import deyricLogo from "@/assets/deyric-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-outline">
      <div className="content-column-wide mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="brand-logo" role="banner">
            <img src={deyricLogo} alt="Deyric" className="logo-sm w-auto object-contain" />
            <span className="brand-wordmark">Deyric</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/david-deyric/20min-1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Audit
            </a>
          </div>

          <button
            className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-outline pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium ${isActive(link.href) ? "text-primary" : "text-secondary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/david-deyric/20min-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
                onClick={() => setIsOpen(false)}
              >
                Request Audit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
