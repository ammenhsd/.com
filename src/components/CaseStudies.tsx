import React from 'react';
import { Quote, ArrowRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { Language } from '../types';
import { CASE_STUDIES } from '../data/content';

interface CaseStudiesProps {
  language: Language;
  onOpenAuditModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  language,
  onOpenAuditModal,
}) => {
  return (
    <section id="cases" className="py-20 border-b border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              {language === 'en' ? 'Verified Case Studies' : 'প্রমাণিত ক্লায়েন্ট সাফল্য'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
              {language === 'en' ? (
                <>
                  Real Local Businesses. <span className="text-cyan-400">Verifiable Revenue Growth.</span>
                </>
              ) : (
                <>
                  প্রকৃত লোকাল বিজনেস। <span className="text-cyan-400">নিশ্চিত আয়ের প্রবৃদ্ধি।</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              {language === 'en'
                ? 'No vague vanity metrics. Here is how rigorous negative keyword sculpting, geo-fencing, and server-side GA4 tracking scaled actual local practices.'
                : 'কোনো অনুমানভিত্তিক কথা নয়। এখানে দেখুন কীভাবে নেগেটিভ কিওয়ার্ড ফিল্টারিং, লোকাল জিও-ফেন্সিং ও সার্ভার-সাইড ট্র্যাকিং আসল ব্যবসায় মুনাফা এনে দিয়েছে।'}
            </p>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>{language === 'en' ? 'Get Your Growth Plan' : 'আপনার গ্রোথ প্ল্যান নিন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Case Study Cards */}
        <div className="mt-12 space-y-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all hover:border-slate-700/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Context, Before/After & Strategy */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Clean unboxed metadata header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-white">{study.clientName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-cyan-400">{language === 'en' ? study.industry.en : study.industry.bn}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.location}</span>
                  </div>

                  {/* Main Metric Banner */}
                  <div>
                    <div className="font-mono text-3xl sm:text-4xl font-bold text-cyan-400 tabular-nums">
                      {study.heroMetric}
                    </div>
                    <div className="text-sm font-semibold text-white mt-1">
                      {language === 'en' ? study.heroMetricLabel.en : study.heroMetricLabel.bn}
                    </div>
                  </div>

                  {/* Before vs After Comparison Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-red-400/90">
                        {language === 'en' ? 'Initial Bottleneck:' : 'পূর্বের সমস্যা:'}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {language === 'en' ? study.beforeState.en : study.beforeState.bn}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {language === 'en' ? 'Optimized Outcome:' : 'অডিট পরবর্তী ফলাফল:'}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                        {language === 'en' ? study.afterState.en : study.afterState.bn}
                      </p>
                    </div>
                  </div>

                  {/* Strategy Description */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {language === 'en' ? 'Execution Strategy:' : 'কার্যকরী কৌশল:'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {language === 'en' ? study.strategy.en : study.strategy.bn}
                    </p>
                  </div>

                  {/* Tracking Stack - Zero-Pill: Clean unboxed metadata with bullet separators */}
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="font-medium text-slate-500 uppercase tracking-wider text-[11px]">
                      {language === 'en' ? 'Tracking Stack:' : 'ট্র্যাকিং টুলস:'}
                    </span>
                    {study.trackingStack.map((tech, index) => (
                      <React.Fragment key={tech}>
                        {index > 0 && <span aria-hidden="true" className="text-slate-600">·</span>}
                        <span className="font-mono text-slate-300">{tech}</span>
                      </React.Fragment>
                    ))}
                  </div>

                </div>

                {/* Right side: Client Testimonial & Attribution */}
                <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-4">
                    <Quote className="w-8 h-8 text-cyan-400/50" />
                    <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                      "{language === 'en' ? study.quote.en : study.quote.bn}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="font-semibold text-white text-sm">{study.author}</div>
                    <div className="text-xs text-cyan-400 mt-0.5">{study.role}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{study.clientName}</div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
