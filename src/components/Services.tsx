import React from 'react';
import { Check, ArrowRight, Activity, Cpu, MapPin, Search } from 'lucide-react';
import { Language } from '../types';
import { CORE_SERVICES } from '../data/content';

interface ServicesProps {
  language: Language;
  onOpenAuditModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  language,
  onOpenAuditModal,
}) => {
  const serviceIcons = [
    <Search className="w-5 h-5 text-cyan-400" />,
    <Cpu className="w-5 h-5 text-cyan-400" />,
    <MapPin className="w-5 h-5 text-cyan-400" />,
    <Activity className="w-5 h-5 text-cyan-400" />,
  ];

  return (
    <section id="services" className="py-20 border-b border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              {language === 'en' ? 'Core Capabilities & Deliverables' : 'মূল সার্ভিস ও সেবাসমূহ'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
              {language === 'en' ? (
                <>
                  Two Pillars. <span className="text-cyan-400">Zero Blind Spots.</span>
                </>
              ) : (
                <>
                  দুটি মূল স্তম্ভ। <span className="text-cyan-400">জিরো ব্লাইন্ড স্পট।</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              {language === 'en'
                ? 'High-converting Google Ads campaigns combined with surgical Server-Side GA4 measurement. You will never again wonder which campaign paid for your dinner.'
                : 'হাই-কনভার্টিং গুগল অ্যাডসের সাথে নিখুঁত সার্ভার-সাইড জিএ৪ ট্র্যাকিংয়ের মেলবন্ধন। প্রতিটি ব্যয়ের বিপরীতে নিশ্চিত ক্লায়েন্ট ও স্বচ্ছ রিটার্ন।'}
            </p>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>{language === 'en' ? 'Request Service Consultation' : 'সার্ভিস কনসালটেশন নিন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Core Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header Row: Editorial Number + Icon + Impact Metric */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50">
                      {service.number}
                    </span>
                    <div className="p-1.5 rounded-md bg-slate-800/80">
                      {serviceIcons[index]}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-lg font-bold text-white tabular-nums">
                      {service.impactMetric}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {language === 'en' ? service.impactLabel.en : service.impactLabel.bn}
                    </div>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-5 group-hover:text-cyan-400 transition-colors">
                  {language === 'en' ? service.title.en : service.title.bn}
                </h3>
                
                <p className="text-xs sm:text-sm font-medium text-cyan-400/90 mt-1">
                  {language === 'en' ? service.tagline.en : service.tagline.bn}
                </p>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {language === 'en' ? service.description.en : service.description.bn}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {language === 'en' ? 'Included Deliverables:' : 'সার্ভিসের আওতায় যা যা থাকছে:'}
                  </div>
                  <ul className="space-y-2">
                    {(language === 'en' ? service.deliverables.en : service.deliverables.bn).map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={onOpenAuditModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{language === 'en' ? 'Discuss this service' : 'এই সার্ভিস সম্পর্কে কথা বলুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-slate-500 font-mono">
                  {language === 'en' ? 'Custom Quote' : 'কাস্টম কোট'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
