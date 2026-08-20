import React, { useState } from 'react';
import { FAQ_DATA } from '../data/siteData';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Process & Tools', 'Quality & Security', 'Pricing & Delivery'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b5d6c]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Everything You Need to Know About Our DTP Services.
          </h2>
          <p className="text-base text-zinc-600 mt-3">
            Clear, transparent answers on file handoffs, CAT tool integration, turnaround times, and confidentiality.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0b5d6c] text-white shadow-2xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-zinc-200/90 rounded-xl overflow-hidden bg-[#FAFAF9] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-md bg-white border border-zinc-200 text-zinc-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#0b5d6c] text-white border-[#0b5d6c]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support contact note */}
        <div className="mt-10 p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-zinc-700">
            <HelpCircle className="w-5 h-5 text-[#09afa6] shrink-0" />
            <span>
              Have a question not listed here? Our production team responds within 2 hours.
            </span>
          </div>
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=DTP%20Inquiry`}
            className="text-xs font-bold text-[#0b5d6c] hover:text-[#084955] shrink-0 inline-flex items-center space-x-1 underline underline-offset-4"
          >
            <Mail className="w-3.5 h-3.5 mr-1" />
            <span>Email our technical team directly</span>
          </a>
        </div>

      </div>
    </section>
  );
};
