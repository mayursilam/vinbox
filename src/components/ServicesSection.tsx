import React, { useState } from 'react';
import { 
  Layout, 
  FlipHorizontal, 
  FileText, 
  Palette, 
  MonitorPlay, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Wrench,
  PackageCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'FlipHorizontal':
        return <FlipHorizontal className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0b5d6c]">
            Core DTP Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mt-2">
            Engineered Desktop Publishing for Every Language &amp; Format.
          </h2>
          <p className="text-base text-zinc-600 mt-3">
            From single marketing leaflets to 1,000-page automotive workshop manuals, we deliver print-ready and digital localized files that match your source design flawlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#FAFAF9] border border-zinc-200/80 hover:border-[#0b5d6c]/40 hover:shadow-xs transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Icon & Title */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-zinc-800 group-hover:text-[#0b5d6c] group-hover:border-[#0b5d6c]/30 transition-colors shadow-2xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Tools mini-pills */}
                <div className="pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1.5">
                    Supported Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-white text-zinc-700 text-xs border border-zinc-200/70"
                      >
                        {tool}
                      </span>
                    ))}
                    {service.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded bg-zinc-200/60 text-zinc-600 text-xs">
                        +{service.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-zinc-200/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-zinc-900 hover:text-[#0b5d6c] flex items-center transition-colors cursor-pointer group-hover:underline"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-zinc-400 group-hover:text-[#0b5d6c] group-hover:translate-x-0.5 transition-all" />
                </button>
                <span className="text-[11px] text-zinc-400 font-mono">
                  ISO-QA
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast CTA bar */}
        <div className="mt-12 p-6 rounded-xl bg-[#063740] border border-[#0b5d6c]/40 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-semibold text-white">
              Have a custom or legacy layout format?
            </h4>
            <p className="text-xs text-zinc-300 mt-0.5">
              We handle legacy PageMaker, QuarkXPress 4-2024, CorelDRAW, CAD schematics, and custom XML templates.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-[#09afa6] text-zinc-950 text-xs font-bold hover:bg-[#07968e] transition-colors shadow-xs"
          >
            Consult Our DTP Engineers
          </a>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#e8f4f6] border border-[#0b5d6c]/20 text-[#0b5d6c]">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b5d6c]">
                  Service Breakdown
                </span>
                <h3 className="text-xl font-bold text-zinc-900">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 text-sm text-zinc-600">
              <p className="leading-relaxed text-zinc-700">
                {selectedService.fullDesc}
              </p>

              {/* Supported Tools */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                <div className="flex items-center space-x-2 text-zinc-900 font-semibold text-xs uppercase tracking-wide">
                  <Wrench className="w-4 h-4 text-zinc-500" />
                  <span>Production Software &amp; Engine Versions</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedService.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-white text-zinc-800 text-xs font-medium border border-zinc-200 shadow-2xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-zinc-900 font-semibold text-xs uppercase tracking-wide">
                  <PackageCheck className="w-4 h-4 text-zinc-500" />
                  <span>Standard Package Deliverables</span>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {selectedService.keyDeliverables.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-[#09afa6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular For */}
              <div className="p-3.5 rounded-lg bg-teal-50/60 border border-[#0b5d6c]/20 text-xs text-[#063740]">
                <span className="font-bold text-[#0b5d6c]">Common Application Scenarios: </span>
                <span>{selectedService.popularFor}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500">
                Turnaround: 24–48h for standard batches
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#0b5d6c] text-white hover:bg-[#084955] transition-colors shadow-xs"
              >
                Inquire About This Service
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
