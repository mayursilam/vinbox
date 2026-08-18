import React, { useState } from 'react';
import { Calculator, Clock, Users, FileCheck2, ArrowRight, Sparkles } from 'lucide-react';

interface QuoteCalculatorProps {
  onApplyEstimate: (data: {
    serviceType: string;
    pageCount: number;
    languageCount: number;
    timeline: string;
  }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onApplyEstimate }) => {
  const [docType, setDocType] = useState<string>('InDesign Marketing Collateral / Catalog');
  const [pages, setPages] = useState<number>(32);
  const [langCount, setLangCount] = useState<number>(4);
  const [scriptComplexity, setScriptComplexity] = useState<'Standard' | 'RTL/Asian' | 'Mixed'>('Standard');
  const [turnaroundPriority, setTurnaroundPriority] = useState<'Standard (48-72h)' | 'Rush Overnight (24h)' | 'Enterprise Sprint'>('Standard (48-72h)');

  // Dynamic estimate calculations
  const totalVolumePages = pages * langCount;
  
  let estimatedDays = '2–3 business days';
  if (totalVolumePages > 800) {
    estimatedDays = turnaroundPriority.includes('Rush') ? '4–5 business days (Scaled Pod)' : '7–9 business days';
  } else if (totalVolumePages > 200) {
    estimatedDays = turnaroundPriority.includes('Rush') ? '2 business days' : '3–4 business days';
  } else {
    estimatedDays = turnaroundPriority.includes('Rush') ? '24–36 hours' : '48 hours';
  }

  let teamPod = '1 Dedicated DTP Specialist + 1 QA Inspector';
  if (totalVolumePages > 500 || turnaroundPriority.includes('Rush')) {
    teamPod = '3 DTP Specialists + 1 Font Engineer + 1 QA Lead';
  } else if (totalVolumePages > 150) {
    teamPod = '2 DTP Specialists + 1 QA Inspector';
  }

  const handleApply = () => {
    onApplyEstimate({
      serviceType: docType,
      pageCount: pages,
      languageCount: langCount,
      timeline: turnaroundPriority
    });

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-16 md:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Interactive Planning Tool
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Instant DTP Scope &amp; Production Estimator.
          </h2>
          <p className="text-base text-zinc-600 mt-3">
            Quickly model project velocity, team sizing, and deliverables based on your source document volume and target language matrix.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAFAF9] border border-zinc-200/90 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Document Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                1. Source Document Format &amp; Application
              </label>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full bg-white border border-zinc-300 rounded-lg px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 focus:border-transparent font-medium"
              >
                <option value="InDesign Marketing Collateral / Catalog">Adobe InDesign CC (Brochure, Catalog, Annual Report)</option>
                <option value="FrameMaker Heavy Technical Manual">Adobe FrameMaker Book (Automotive/Engineering Manual)</option>
                <option value="Packaging & Regulatory Labels">Adobe Illustrator / Packaging Dielines & Labels</option>
                <option value="E-Learning Interactive Course">Articulate Storyline / Captivate E-Learning Module</option>
                <option value="Figma / Digital Marketing Assets">Figma / Multi-Language Digital Banners & Infographics</option>
                <option value="MS Word / PowerPoint Corporate Deck">Microsoft Office (Word Documentation / PowerPoint Deck)</option>
              </select>
            </div>

            {/* Page Count Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-zinc-700">
                  2. Source Document Page Count
                </label>
                <span className="font-mono font-bold text-sm text-zinc-900 bg-white px-2.5 py-0.5 rounded border border-zinc-200">
                  {pages} {pages === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="300"
                step="1"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                <span>1 page (Flyer)</span>
                <span>50 pages (Brochure)</span>
                <span>150 pages (Catalog)</span>
                <span>300+ pages (Manual)</span>
              </div>
            </div>

            {/* Target Language Count */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-zinc-700">
                  3. Number of Target Languages
                </label>
                <span className="font-mono font-bold text-sm text-zinc-900 bg-white px-2.5 py-0.5 rounded border border-zinc-200">
                  {langCount} {langCount === 1 ? 'Language' : 'Languages'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                step="1"
                value={langCount}
                onChange={(e) => setLangCount(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                <span>1 language</span>
                <span>6 European</span>
                <span>12 Global Tier-1</span>
                <span>24 Multi-Script</span>
              </div>
            </div>

            {/* Script Complexity */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                4. Target Script Profile
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'Standard', label: 'Standard LTR', desc: 'Latin, Cyrillic' },
                  { id: 'RTL/Asian', label: 'Complex Scripts', desc: 'Arabic, Indic, CJK' },
                  { id: 'Mixed', label: 'Global Blend', desc: 'LTR + RTL + Indic' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setScriptComplexity(tier.id as any)}
                    className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                      scriptComplexity === tier.id
                        ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xs'
                        : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{tier.label}</div>
                    <div className={`text-[10px] mt-0.5 ${scriptComplexity === tier.id ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Turnaround Preference */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block">
                5. Turnaround Priority
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  'Standard (48-72h)',
                  'Rush Overnight (24h)',
                  'Enterprise Sprint',
                ].map((prio) => (
                  <button
                    key={prio}
                    type="button"
                    onClick={() => setTurnaroundPriority(prio as any)}
                    className={`p-2.5 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer border ${
                      turnaroundPriority === prio
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                        : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'
                    }`}
                  >
                    {prio}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Output Card (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-sm tracking-tight">Scope Summary</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[11px]">
                  {totalVolumePages} Total Processed Pages
                </span>
              </div>

              {/* Estimated Velocity */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>Estimated Turnaround</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {estimatedDays}
                </p>
                <p className="text-xs text-zinc-400">
                  Calculated for Pune delivery pod with standard two-pass QA.
                </p>
              </div>

              {/* Recommended Team Pod */}
              <div className="space-y-1 pt-3 border-t border-zinc-800">
                <div className="flex items-center space-x-2 text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Allocated Pune Pod</span>
                </div>
                <p className="text-sm font-semibold text-zinc-200">
                  {teamPod}
                </p>
              </div>

              {/* Package Inclusions */}
              <div className="space-y-2 pt-3 border-t border-zinc-800 text-xs text-zinc-300">
                <span className="font-semibold uppercase tracking-wider text-zinc-400 block text-[11px]">
                  Included Deliverables:
                </span>
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Layered source files (INDD / IDML / AI / FM)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Print-ready certified PDF/X-4 with bleed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Signed DTP QA Checklist &amp; Font Package</span>
                  </div>
                </div>
              </div>

              {/* Transfer to Form CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-100 transition-colors shadow-sm cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-indigo-600 mr-2" />
                  <span>Apply Estimate to Quote Request</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Note */}
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-[11px] text-zinc-500 text-center">
              Have unique custom requirements? We provide personalized rate cards for high-volume LSPs and marketing agencies.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
