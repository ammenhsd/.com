import React, { useState } from 'react';
import {
  Stethoscope,
  Wrench,
  Scale,
  Car,
  Sparkles,
  Building2,
  CheckCircle2,
  PhoneCall,
  ArrowUpRight,
  Target,
} from 'lucide-react';
import { Language, NicheInfo } from '../types';
import { TARGET_NICHES } from '../data/content';

interface TargetNichesProps {
  language: Language;
  onOpenAuditModal: () => void;
}

export const TargetNiches: React.FC<TargetNichesProps> = ({
  language,
  onOpenAuditModal,
}) => {
  const [selectedNicheId, setSelectedNicheId] = useState<string>(TARGET_NICHES[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-5 h-5 text-cyan-400" />,
    Wrench: <Wrench className="w-5 h-5 text-cyan-400" />,
    Scale: <Scale className="w-5 h-5 text-cyan-400" />,
    Car: <Car className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
    Building2: <Building2 className="w-5 h-5 text-cyan-400" />,
  };

  const currentNiche = TARGET_NICHES.find((n) => n.id === selectedNicheId) || TARGET_NICHES[0];

  return (
    <section id="niches" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            {language === 'en' ? 'Target Audience & Niches' : 'টার্গেটেড লোকাল ইন্ডাস্ট্রি'}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
            {language === 'en' ? (
              <>
                Engineered Specifically for <span className="text-cyan-400">Local Service Providers & Business Owners.</span>
              </>
            ) : (
              <>
                বিশেষভাবে তৈরি <span className="text-cyan-400">লোকাল সার্ভিস প্রোভাইডার ও বিজনেস ওনারদের জন্য।</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {language === 'en'
              ? 'Local advertising requires a completely different playbook than generic e-commerce. Every campaign is calibrated for immediate radius proximity, phone call triggers, and genuine local high-ticket intent.'
              : 'লোকাল সার্ভিসের বিজ্ঞাপন সাধারণ ই-কমার্সের মতো নয়। এখানে প্রয়োজন নির্দিষ্ট এরিয়া ম্যাপিং, সরাসরি জরুরি ফোন কল নিশ্চিতকরণ এবং অপ্রয়োজনীয় ক্লিক সম্পূর্ণ ফিল্টার করা।'}
          </p>
        </div>

        {/* Niche Navigation / Segmented Tabs (Functional Buttons) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
          {TARGET_NICHES.map((niche) => {
            const isSelected = niche.id === selectedNicheId;
            return (
              <button
                key={niche.id}
                onClick={() => setSelectedNicheId(niche.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg text-center transition-all ${
                  isSelected
                    ? 'bg-slate-800 border border-cyan-500/40 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="mb-1.5">{iconMap[niche.icon]}</div>
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {language === 'en' ? niche.name.en : niche.name.bn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Niche Deep-Dive Bento Card */}
        <div className="mt-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Context & Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <span>{language === 'en' ? 'Core Niche Specialization' : 'মূল ইন্ডাস্ট্রি স্পেশালাইজেশন'}</span>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-400 font-semibold">{currentNiche.avgCpaReduction}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {language === 'en' ? currentNiche.name.en : currentNiche.name.bn}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'en' ? currentNiche.description.en : currentNiche.description.bn}
              </p>

              {/* Strategy Highlights */}
              <div className="pt-2 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {language === 'en' ? 'Execution Strategy:' : 'কার্যকরী ক্যাম্পেইন স্ট্র্যাটেজি:'}
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-sm text-slate-300 flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {language === 'en' ? currentNiche.keyStrategy.en : currentNiche.keyStrategy.bn}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Lead Metrics & Audit CTA */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {language === 'en' ? 'Primary Lead Delivery' : 'প্রধান লিড ফরম্যাট'}
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{language === 'en' ? currentNiche.leadTypes.en : currentNiche.leadTypes.bn}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 mb-1">
                  {language === 'en' ? 'Typical Measured Improvement' : 'গড় প্রমাণিত ফলাফল'}
                </div>
                <div className="font-mono text-2xl font-bold text-cyan-400">
                  {currentNiche.avgCpaReduction}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {language === 'en'
                    ? 'In verified cost-per-lead within first 60 days'
                    : 'প্রথম ৬০ দিনের মধ্যেই ভেরিফায়েড লিড খরচ হ্রাস'}
                </div>
              </div>

              <button
                onClick={onOpenAuditModal}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <span>
                  {language === 'en'
                    ? `Audit My ${currentNiche.name.en.split(' ')[0]} Campaigns`
                    : 'এই ক্যাটাগরিতে ফ্রি অডিট চান?'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
