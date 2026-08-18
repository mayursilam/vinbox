import React from 'react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, Quote, Building } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAFAF9] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Client Endorsements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Trusted by Localization Leads &amp; Agency Directors.
          </h2>
          <p className="text-base text-zinc-600 mt-3">
            Read what global translation providers, creative agencies, and enterprise brands say about our typographic precision and turnaround speed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-zinc-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center space-x-3.5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-200 shrink-0"
                  loading="lazy"
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-zinc-900 truncate">
                    {t.author}
                  </h4>
                  <p className="text-xs text-zinc-500 truncate">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-indigo-600 font-medium truncate">
                    {t.company} • {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global footprint badge */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          <span>Serving active agency accounts in the United States, United Kingdom, Germany, Switzerland, Japan, and Singapore.</span>
        </div>

      </div>
    </section>
  );
};
