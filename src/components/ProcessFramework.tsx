import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { GROWTH_STEPS } from '../data/content';

interface ProcessFrameworkProps {
  language: Language;
  onOpenAuditModal: () => void;
}

export const ProcessFramework: React.FC<ProcessFrameworkProps> = ({
  language,
  onOpenAuditModal,
}) => {
  return (
    <section id="system" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            {language === 'en' ? 'The Local Growth Blueprint' : 'লোকাল গ্রোথ ব্লুপ্রিন্ট'}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
            {language === 'en' ? (
              <>
                A Repeatable 4-Step System for <span className="text-cyan-400">Predictable Local Market Dominance.</span>
              </>
            ) : (
              <>
                লোকাল মার্কেটে আধিপত্য বিস্তারের <span className="text-cyan-400">৪-ধাপের কার্যকর সিস্টেম।</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {language === 'en'
              ? 'We never guess or set-and-forget. Every client follows a disciplined sequence designed to immediately eliminate waste, secure measurement, and scale high-margin customer acquisitions.'
              : 'আমরা কখনোই অনুমানের ওপর কাজ করি না। সুনির্দিষ্ট ও প্রমাণিত ৪টি ধাপ অনুসরণের মাধ্যমে বাজেট অপচয় বন্ধ করে কাঙ্ক্ষিত ফলাফল নিয়ে আসা হয়।'}
          </p>
        </div>

        {/* 4 Steps Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROWTH_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-cyan-400">
                  {item.step}.
                </span>
                <h3 className="font-display text-lg font-bold text-white mt-4">
                  {language === 'en' ? item.title.en : item.title.bn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {language === 'en' ? item.description.en : item.description.bn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>
                  {item.step === '01' && (language === 'en' ? 'Day 1–3 Deliverable' : '১-৩ দিনের কাজ')}
                  {item.step === '02' && (language === 'en' ? 'Day 4–7 Infrastructure' : '৪-৭ দিনের কাজ')}
                  {item.step === '03' && (language === 'en' ? 'Week 2 Campaign Launch' : '২য় সপ্তাহে লাইভ')}
                  {item.step === '04' && (language === 'en' ? 'Weekly Scaling Cycle' : 'সাপ্তাহিক অপটিমাইজেশন')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {language === 'en'
                ? 'Want to see this framework applied to your local business?'
                : 'আপনার লোকাল বিজনেসে এই সিস্টেম কীভাবে কাজ করবে জানতে চান?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {language === 'en'
                ? 'I will personally inspect your current campaigns and local zip-code competitors.'
                : 'আমি ব্যক্তিগতভাবে আপনার বর্তমান অ্যাকাউন্ট ও লোকাল প্রতিযোগীদের ক্যাম্পেইন নিরীক্ষা করে দেব।'}
            </p>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>{language === 'en' ? 'Claim Step 1 Audit For Free' : 'স্টেপ ১ অডিট ফ্রি নিন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
