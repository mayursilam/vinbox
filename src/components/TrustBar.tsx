import React from 'react';
import { Award, Globe2, BookOpenCheck, ThumbsUp } from 'lucide-react';
import { TRUST_STATS, TOOL_COMPATIBILITY_BADGES } from '../data/siteData';

export const TrustBar: React.FC = () => {
  const statIcons = [
    <Award className="w-5 h-5 text-[#0b5d6c]" key="exp" />,
    <Globe2 className="w-5 h-5 text-[#0b5d6c]" key="lang" />,
    <BookOpenCheck className="w-5 h-5 text-[#0b5d6c]" key="projects" />,
    <ThumbsUp className="w-5 h-5 text-[#0b5d6c]" key="sat" />
  ];

  return (
    <section className="bg-white border-b border-zinc-200/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col space-y-1 p-3 rounded-lg hover:bg-[#e8f4f6]/30 transition-colors"
            >
              <div className="flex items-center space-x-2.5 mb-1">
                <div className="p-1.5 rounded-md bg-[#e8f4f6] border border-[#0b5d6c]/20">
                  {statIcons[idx]}
                </div>
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-sans">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm font-semibold text-zinc-800">
                {stat.label}
              </p>
              <p className="text-xs text-zinc-500 leading-snug">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Supported tools marquee / pill bar */}
        <div className="mt-8 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 shrink-0">
            Native File Formats & Toolstack:
          </span>
          <div className="flex flex-wrap gap-2 items-center">
            {TOOL_COMPATIBILITY_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100/90 text-zinc-700 border border-zinc-200/70"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
