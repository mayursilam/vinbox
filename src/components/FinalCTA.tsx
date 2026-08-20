import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#063740] text-white relative overflow-hidden border-b border-[#0b5d6c]/30">
      {/* Background radial accent */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#09afa6 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-teal-100 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#09afa6]"></span>
          <span>Open for Global Translation &amp; Agency Sprints</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Elevate Your Multilingual Desktop Publishing?
          </h2>
          <p className="text-base sm:text-lg text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            Send us your sample layout or active project files. We will review font compatibility, text expansion metrics, and provide an accurate quote and timeline within 2 hours.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-[#09afa6] text-zinc-950 font-bold text-sm hover:bg-[#07968e] transition-all shadow-lg hover:shadow-xl group"
          >
            <span>Request Instant Project Quote</span>
            <ArrowRight className="w-4 h-4 ml-2 text-zinc-950 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
          >
            <span>Explore Agency Portfolio</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-100/70">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-[#09afa6]" />
            <span>2-Hour Response Time Guarantee</span>
          </div>
          <span className="text-teal-400/40 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-[#09afa6]" />
            <span>Strict Bilateral NDA Compliance</span>
          </div>
          <span className="text-teal-400/40 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5">
            <Mail className="w-4 h-4 text-teal-200" />
            <span>{COMPANY_INFO.email}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
