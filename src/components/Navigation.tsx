import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="brand-logo hover-lift transition-transform" role="banner">
            <img
              src={deyricLogo}
              alt="Deyric logo"
              className="logo-sm sm:logo-md lg:logo-lg w-auto object-contain"
            />
            <span className="brand-wordmark">Deyric</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[hsl(var(--accent-strong))] transition-all duration-300 hover:scale-105 group"
            >
              Book a Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -mr-2 text-secondary hover:text-primary transition-colors touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-outline pt-6">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-semibold transition-colors hover:text-primary py-1 touch-manipulation ${
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--accent))] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[hsl(var(--accent-strong))] transition-colors mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
