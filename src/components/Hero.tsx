import React from 'react';
import { ArrowRight, CheckCircle2, FileCheck, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-zinc-200/70 bg-[#FAFAF9]">
      {/* Subtle geometric dot accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/90 text-xs font-medium text-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              <span className="font-semibold tracking-wide uppercase text-[11px] text-zinc-700">
                Pune, India • Multilingual DTP Hub
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-zinc-900 tracking-tight leading-[1.15]">
              Precision Desktop Publishing for Global Translation & Marketing Agencies.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Vinbox formats complex translated documents across Adobe InDesign, FrameMaker, Illustrator, and QuarkXPress in 100+ languages. We master text expansion, right-to-left mirroring, Indic conjuncts, and CJK typography with guaranteed pre-press compliance.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-all shadow-sm hover:shadow group"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg bg-white border border-zinc-300 text-zinc-800 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 transition-all"
              >
                <span>View Sample Work</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-zinc-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100+ LTR & RTL Scripts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Native InDesign & FM</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2-Hour Quote Response</span>
              </div>
            </div>

            {/* Trust statement */}
            <div className="pt-4 border-t border-zinc-200/80 flex items-center space-x-3 text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>
                Trusted by Language Service Providers, Publishing Houses & Marketing Teams in <strong>Pune, Europe, the Americas & APAC</strong>.
              </span>
            </div>

          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background blur */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-zinc-200 to-indigo-100/60 rounded-2xl blur-xs -z-10 opacity-70"></div>
              
              <div className="bg-white border border-zinc-200/90 rounded-xl shadow-md overflow-hidden">
                
                {/* Visual Header bar */}
                <div className="bg-zinc-900 px-4 py-3 text-white flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span className="font-mono text-zinc-200">Vinbox_DTP_Master_Layout.indd</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-semibold border border-emerald-500/30">
                    QA Passed: 100%
                  </span>
                </div>

                {/* Main Visual Image */}
                <div className="relative aspect-4/3 bg-zinc-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
                    alt="Vinbox DTP typesetting and multilingual layout workstation"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-xs rounded">
                        Simultaneous 14-Language Release
                      </span>
                    </div>
                    <p className="text-xs text-zinc-200 font-medium">
                      Automated IDML ingestion, bidirectional script mirroring & pre-flight print validation.
                    </p>
                  </div>
                </div>

                {/* Sub-card interactive metadata breakdown */}
                <div className="p-4 bg-zinc-50/70 border-t border-zinc-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500 font-medium">Script Engines:</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      <span className="px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700 text-[11px] font-medium">Latin</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700 text-[11px] font-medium">Arabic (RTL)</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700 text-[11px] font-medium">Devanagari</span>
                      <span className="px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700 text-[11px] font-medium">CJK</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-200/60">
                    <span className="text-zinc-500 font-medium">Prepress Standard:</span>
                    <span className="font-mono text-zinc-800 text-[11px] font-semibold flex items-center">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                      PDF/X-4 CMYK + Pantone Bleed
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-200/60">
                    <span className="text-zinc-500 font-medium">Turnaround Speed:</span>
                    <span className="text-indigo-600 font-semibold text-[11px]">
                      Overnight Delivery to US/EU
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Pune Hub Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-zinc-200/90 rounded-lg p-3 shadow-lg flex items-center space-x-3 hidden sm:flex">
                <div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-zinc-900 leading-tight">ISO 9001 & 17100</p>
                  <p className="text-[10px] text-zinc-500">Certified DTP Quality Gate</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
