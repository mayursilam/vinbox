import React from 'react';
import { COMPANY_INFO, SERVICES_DATA, TOOL_COMPATIBILITY_BADGES } from '../data/siteData';
import { Mail, Phone, MapPin, ArrowUp, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-200/90 text-zinc-600 text-xs">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/assets/vinbox_logo.png"
                alt="Vinbox DTP & Localisation"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>

            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              Specialized Multilingual Desktop Publishing (DTP) &amp; typesetting agency based in Pune, India. Formatting in InDesign, FrameMaker, and Illustrator across 100+ languages for global agencies.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-zinc-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#09afa6] shrink-0" />
                <span>{COMPANY_INFO.isoStandards}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#0b5d6c] shrink-0" />
                <span>Serving global agencies in US, EU, UK &amp; APAC</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-xs">
              DTP Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-[#0b5d6c] transition-colors block text-xs"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#0b5d6c] transition-colors">About Vinbox</a></li>
              <li><a href="#scripts" className="hover:text-[#0b5d6c] transition-colors">Scripts Matrix</a></li>
              <li><a href="#portfolio" className="hover:text-[#0b5d6c] transition-colors">Portfolio &amp; Work</a></li>
              <li><a href="#process" className="hover:text-[#0b5d6c] transition-colors">Production Process</a></li>
              <li><a href="#estimator" className="hover:text-[#0b5d6c] transition-colors">Scope Estimator</a></li>
              <li><a href="#testimonials" className="hover:text-[#0b5d6c] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#0b5d6c] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-[#0b5d6c] hover:underline font-semibold">Request a Quote</a></li>
            </ul>
          </div>

          {/* Col 4: Pune Hub Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-zinc-900 uppercase tracking-wider text-xs">
              Pune Delivery Hub
            </h4>
            <div className="space-y-2.5 text-zinc-600 text-xs">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#0b5d6c] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0b5d6c] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#0b5d6c] font-medium">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#0b5d6c] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#0b5d6c] font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <div className="pt-2 text-[11px] text-zinc-500">
                <span>Working Hours: Mon–Sat 08:30–21:30 IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Supported tools footer strip */}
        <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div className="flex flex-wrap gap-2">
            {TOOL_COMPATIBILITY_BADGES.slice(0, 8).map((b) => (
              <span key={b} className="px-2 py-0.5 bg-zinc-50 rounded border border-zinc-200/60 text-zinc-600">
                {b}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-zinc-700 hover:text-zinc-950 font-semibold p-1.5 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Sub-footer Bottom Bar */}
      <div className="bg-[#F4F4F2] border-t border-zinc-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Vinbox DTP Services. All rights reserved. Registered in Pune, Maharashtra, India.
          </div>
          <div className="flex items-center space-x-5">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-zinc-900 transition-colors underline cursor-pointer"
            >
              Privacy &amp; Data Security
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-zinc-900 transition-colors underline cursor-pointer"
            >
              Terms of Service &amp; SLA
            </button>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">
              Non-Disclosure Agreement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
