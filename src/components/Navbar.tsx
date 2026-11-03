import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#featured' },
    { label: 'Journey', href: '#process' },
    { label: 'About', href: '#why-cp' },
    { label: 'Commercial', href: '#commercial' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0b1220]/90 backdrop-blur-md py-3.5 border-b border-[#f4eee2]/10 shadow-2xl'
          : 'bg-[#0b1220]/60 backdrop-blur-sm py-4 border-b border-[#f4eee2]/10'
      }`}
    >
      <div className="page-wrap flex items-center justify-between h-[64px] sm:h-[72px]">
        {/* Official Brand SVG Logo */}
        <a className="inline-flex shrink-0 items-center" href="/">
          <img
            src="/brand/cp-group-logo-reverse.svg"
            alt="CP Group, CP Real Estate, We build trust"
            width={1290}
            height={680}
            className="h-10 sm:h-12 lg:h-[58px] w-auto"
          />
          <span className="sr-only">, home</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#f4eee2]/85 hover:text-[#f4eee2] transition-colors relative py-1 link-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Enquire now */}
        <div className="flex items-center gap-4">
          <a
            href="#visit"
            className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 active:translate-y-px whitespace-nowrap bg-[#b89a5e] text-[#0b1220] hover:bg-[#d8c08a]"
          >
            <span>Enquire now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f4eee2] hover:text-[#b89a5e] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0b1220]/98 border-b border-[#f4eee2]/10 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#f4eee2]/90 hover:text-[#b89a5e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#f4eee2]/10 flex flex-col gap-4">
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#b89a5e] text-[#0b1220] font-medium uppercase tracking-[0.2em] text-[12px]"
            >
              Enquire now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
