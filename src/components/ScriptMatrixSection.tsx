import React, { useState } from 'react';
import { SCRIPT_FAMILIES_DATA } from '../data/siteData';
import { Globe, ArrowRightLeft, Type, Sparkles, Check } from 'lucide-react';

export const ScriptMatrixSection: React.FC = () => {
  const [activeScriptId, setActiveScriptId] = useState<string>(SCRIPT_FAMILIES_DATA[0].id);

  const activeFamily = SCRIPT_FAMILIES_DATA.find((s) => s.id === activeScriptId) || SCRIPT_FAMILIES_DATA[0];

  return (
    <section id="scripts" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            DTP Linguistic Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Interactive Script & Text Expansion Matrix.
          </h2>
          <p className="text-base text-zinc-600 mt-3">
            Every writing system possesses unique typographical physics. See how Vinbox balances font metrics, expansion buffers, and bidirectional flow across 100+ global languages.
          </p>
        </div>

        {/* Script Selection Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 gap-2 no-scrollbar border-b border-zinc-200/70">
          {SCRIPT_FAMILIES_DATA.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveScriptId(item.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer border-b-2 ${
                activeScriptId === item.id
                  ? 'border-indigo-600 text-zinc-900 bg-white shadow-2xs'
                  : 'border-transparent text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100/60'
              }`}
            >
              {item.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Deep Dive Box */}
        <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Rules & Technical Handling */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 mb-2">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{activeFamily.expansionFactor}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  {activeFamily.name}
                </h3>
              </div>

              {/* Supported Script Pills */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Target Scripts in this Matrix:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeFamily.scripts.map((script) => (
                    <span
                      key={script}
                      className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-medium border border-zinc-200/60"
                    >
                      {script}
                    </span>
                  ))}
                </div>
              </div>

              {/* DTP Handling Rules */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Vinbox Typesetting Rules &amp; Pre-Press Safeguards:
                </span>
                <div className="space-y-2">
                  {activeFamily.specialHandling.map((rule, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-zinc-700">
                      <div className="p-0.5 rounded bg-emerald-50 text-emerald-600 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Font Notes */}
              <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200/70 text-xs text-zinc-600 flex items-start space-x-2.5">
                <Type className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-zinc-800">Typographical Font Compliance: </span>
                  <span>{activeFamily.fontNotes}</span>
                </div>
              </div>

            </div>

            {/* Right: Interactive Layout Comparison Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 sm:p-6 rounded-xl bg-[#FAFAF9] border border-zinc-200/80 space-y-4">
                
                <div className="flex items-center justify-between text-xs pb-3 border-b border-zinc-200/60">
                  <span className="font-semibold uppercase tracking-wider text-zinc-500">
                    Typesetting Preview
                  </span>
                  <span className="text-indigo-600 font-mono text-[11px] flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                    Auto-Adjusted Metrics
                  </span>
                </div>

                {/* Source English */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Source English Header</span>
                    <span className="font-mono text-zinc-500">Latin (100% base)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-zinc-200 text-sm font-semibold text-zinc-800">
                    "{activeFamily.sampleOriginal}"
                  </div>
                </div>

                {/* Localized Equivalent */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Vinbox Localized &amp; Typeset Rendering</span>
                    <span className="font-mono text-emerald-600 font-semibold">Zero Text Clipping</span>
                  </div>
                  <div className="p-4 rounded-lg bg-white border-2 border-indigo-100 text-sm font-semibold text-zinc-900 shadow-2xs">
                    <p className="text-base sm:text-lg leading-relaxed text-indigo-950 font-medium">
                      {activeFamily.sampleLocalized}
                    </p>
                  </div>
                </div>

                {/* Technical Callout */}
                <div className="text-[11px] text-zinc-500 leading-relaxed pt-2 flex items-center space-x-2">
                  <ArrowRightLeft className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>
                    Our DTP specialists in Pune inspect baseline grids, diacritics clearance, and hyphenation break algorithms for this script family before delivering print-ready PDFs.
                  </span>
                </div>

              </div>

              {/* Quick action link */}
              <div className="text-right">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-zinc-900 hover:text-indigo-600 inline-flex items-center underline underline-offset-4"
                >
                  Request a sample layout in your target language →
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
