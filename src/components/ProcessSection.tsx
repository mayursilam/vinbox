import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Precision Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Structured 4-Step Production &amp; QA Process.
          </h2>
          <p className="text-base text-zinc-600 mt-3">
            Every document passes through our ISO-aligned pipeline to guarantee flawless font licensing, zero layout corruption, and 100% pre-press validation.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all relative flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Phase {idx + 1}</span>
                <span>ISO 9001/17100</span>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Box */}
        <div className="mt-12 p-5 rounded-xl bg-white border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-zinc-700">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Dual-Pass Quality Gate:</strong> Technical preflight + side-by-side linguistic overlay before any file is marked complete.
            </span>
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-zinc-900 hover:text-indigo-600 shrink-0 inline-flex items-center"
          >
            <span>Request QA sample checklist</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
