import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Scripts Matrix', href: '#scripts' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Estimate Tool', href: '#estimator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top micro bar for global agencies */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-1.5 px-4 border-b border-zinc-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-zinc-200 font-medium">Pune Delivery Hub:</span>
              <span>Accepting Global Agency Projects</span>
            </span>
            <span className="text-zinc-500">|</span>
            <span className="flex items-center space-x-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Response Time: &lt; 2 Hours</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center space-x-1 text-zinc-400">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-zinc-300">100+ Languages</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-zinc-200/80 py-3'
            : 'bg-[#FAFAF9] border-b border-zinc-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-bold tracking-tight text-lg shadow-xs group-hover:bg-indigo-600 transition-colors">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-zinc-900 leading-none">
                  VINBOX
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-zinc-500 mt-0.5">
                  DTP & Localisation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 group-hover:w-full transition-all duration-200 ease-out"></span>
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-hidden"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-lg">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-center"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
              <div className="flex items-center justify-center space-x-4 pt-2 text-xs text-zinc-500">
                <span>Pune, India Hub</span>
                <span>•</span>
                <span>projects@vinbox.in</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
