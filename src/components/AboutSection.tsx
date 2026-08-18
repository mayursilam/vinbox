import React from 'react';
import { ArrowRight, Check, MapPin, Sparkles, Building2, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                About Vinbox • Pune, India
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
                Your Dedicated Production Partner for Multilingual Desktop Publishing.
              </h2>
            </div>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
              <p>
                Founded in Pune's thriving technological corridor, Vinbox was built to solve a critical bottleneck for global translation agencies and marketing departments: <strong>post-translation layout distortion</strong>. When copy is translated into German, Arabic, Japanese, or Hindi, standard layouts break, fonts fail, and tables overflow.
              </p>
              <p>
                Our specialized team of DTP operators, font engineers, and pre-press specialists reconstruct your source InDesign, FrameMaker, and Illustrator files. We balance text expansion and contraction, apply language-specific hyphenation dictionaries, and mirror right-to-left layout geometry while strictly preserving your client's visual brand integrity.
              </p>
              <p>
                Operating from Pune (UTC+5:30), we offer global agencies an effortless overnight turnaround advantage. Upload your translated bilingual files at the close of your business day, and receive fully typeset, QA-inspected, press-ready deliverables when your team logs in the next morning.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white border border-zinc-200/80 shadow-2xs">
                <div className="p-1 rounded-md bg-indigo-50 text-indigo-600 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Complex Script Mastery</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Native handling of Arabic RTL, Indic conjuncts, and CJK line rules.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white border border-zinc-200/80 shadow-2xs">
                <div className="p-1 rounded-md bg-indigo-50 text-indigo-600 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Overnight Agency Agility</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Time-zone leverage delivering completed layouts by morning.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="#services"
                className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-indigo-600 transition-colors group"
              >
                <span>Explore all DTP capabilities</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-zinc-300">•</span>
              <a
                href="#contact"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 underline underline-offset-4"
              >
                Schedule an introductory call
              </a>
            </div>

          </div>

          {/* Right Column: Visual and Pune Hub Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm bg-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Vinbox DTP team collaborating on global publishing layouts in Pune"
                className="w-full h-72 sm:h-80 object-cover"
                loading="lazy"
              />
              
              <div className="p-6 bg-white space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div className="flex items-center space-x-2 text-zinc-800 font-semibold text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Vinbox Production Studio</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                    Pune Hub
                  </span>
                </div>

                <div className="space-y-2 text-xs text-zinc-600">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.fullAddress}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>Full-time in-house operators & font engineers (Strict NDA enforcement)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">First-pass pre-press accuracy</span>
                  <span className="font-bold text-emerald-600">{COMPANY_INFO.satisfactionRate}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
