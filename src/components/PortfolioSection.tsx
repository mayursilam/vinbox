import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/siteData';
import { PortfolioItem } from '../types';
import { Layers, ArrowRight, X, Clock, CheckCircle2, FileSpreadsheet } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCase, setSelectedCase] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Technical Manuals', 'Marketing & Collateral', 'Packaging & Retail', 'E-Learning & Digital'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Agency Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
              Proven DTP Excellence Across Global Formats.
            </h2>
            <p className="text-base text-zinc-600 mt-3">
              Explore how our Pune DTP production pod resolves complex layout challenges, rush multi-language releases, and strict regulatory standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-zinc-900 text-white shadow-2xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-200/90 overflow-hidden bg-[#FAFAF9] hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with Category overlay */}
              <div className="relative aspect-16/9 bg-zinc-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 text-zinc-900 shadow-2xs backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900/80 text-zinc-200 backdrop-blur-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-emerald-400" />
                    {item.turnaround}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    {item.clientType}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* Metadata badges */}
                <div className="space-y-3 pt-3 border-t border-zinc-200/60">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-zinc-400 font-medium mr-1">Languages:</span>
                    {item.languages.map((lang) => (
                      <span key={lang} className="px-2 py-0.5 rounded bg-white text-zinc-700 text-[11px] border border-zinc-200">
                        {lang}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-zinc-500 font-mono">
                      {item.pageCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedCase(item)}
                      className="text-xs font-bold text-zinc-900 hover:text-indigo-600 inline-flex items-center group-hover:underline cursor-pointer"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 text-zinc-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedCase && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                {selectedCase.category} • {selectedCase.clientType}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-1">
                {selectedCase.title}
              </h3>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 mb-5 text-xs">
              <div>
                <span className="text-zinc-400 block font-medium">Scope & Volume:</span>
                <span className="font-semibold text-zinc-800">{selectedCase.pageCount}</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-medium">Turnaround Time:</span>
                <span className="font-semibold text-emerald-600">{selectedCase.turnaround}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-zinc-400 block font-medium">Tool Suite:</span>
                <span className="font-semibold text-zinc-800">{selectedCase.toolsUsed.join(', ')}</span>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 text-sm text-zinc-600">
              <div>
                <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">
                  The Production Challenge
                </h4>
                <p className="leading-relaxed bg-amber-50/50 p-3 rounded-lg border border-amber-200/50 text-zinc-700 text-xs">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">
                  Vinbox Engineering Solution
                </h4>
                <p className="leading-relaxed bg-indigo-50/40 p-3 rounded-lg border border-indigo-100 text-zinc-700 text-xs">
                  {selectedCase.solution}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-2">
                  Key Outcomes & Client Metrics
                </h4>
                <div className="space-y-1.5">
                  {selectedCase.results.map((res, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500">
                Need similar formatting for your project?
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
              >
                Discuss Similar Project
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
