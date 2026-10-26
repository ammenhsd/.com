import React, { useState } from 'react';
import { Calculator, AlertTriangle, ArrowRight, DollarSign, TrendingUp, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface RoiCalculatorProps {
  language: Language;
  onOpenAuditModal: (initialBudget?: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  language,
  onOpenAuditModal,
}) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(3500);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(1200);
  const [nicheCategory, setNicheCategory] = useState<'home' | 'dental' | 'legal' | 'auto' | 'b2b'>('home');

  // Realistic industry waste percentages for un-optimized local accounts
  const wasteMultiplier = 0.32; // ~32% of budget lost on loose broad match, negative leakage, out-of-radius clicks
  const monthlyWasted = Math.round(monthlySpend * wasteMultiplier);
  const annualWasted = monthlyWasted * 12;

  // Estimated recovered leads if reallocated with high-intent keywords
  const avgCpaEstimates = {
    home: 65,
    dental: 85,
    legal: 140,
    auto: 45,
    b2b: 110,
  };

  const estimatedCpa = avgCpaEstimates[nicheCategory];
  const recoveredLeadsPerMonth = Math.max(1, Math.round(monthlyWasted / estimatedCpa));
  
  // Conservative 25% close rate on qualified inbound calls
  const closedJobsPerMonth = Math.max(1, Math.round(recoveredLeadsPerMonth * 0.25));
  const newMonthlyRevenue = closedJobsPerMonth * avgCustomerValue;
  const newAnnualRevenue = newMonthlyRevenue * 12;

  return (
    <section id="calculator" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>{language === 'en' ? 'Interactive Ad Waste & Growth Simulator' : 'ইন্টারেক্টিভ অ্যাড অপচয় ও গ্রোথ ক্যালকুলেটর'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
            {language === 'en' ? (
              <>
                How Much Ad Spend Is Your Local Business <span className="text-red-400">Silently Leaking?</span>
              </>
            ) : (
              <>
                আপনার লোকাল বিজনেসের কত টাকা <span className="text-red-400">নীরবে অপচয় হচ্ছে?</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {language === 'en'
              ? 'Most un-audited local Google Ads accounts burn between 28% and 40% of their monthly spend on loose search queries, irrelevant out-of-town clicks, and duplicate tracking. See what happens when that spend is recaptured.'
              : 'অডিট ছাড়া পরিচালিত অধিকাংশ লোকাল গুগল অ্যাডস অ্যাকাউন্টের ২৮% থেকে ৪০% বাজেট নষ্ট হয় ভুল সার্চ কুয়েরি, সার্ভিস এরিয়ার বাইরের ক্লিক এবং ভুয়া ট্র্যাকিংয়ের কারণে। নিচের ক্যালকুলেটরে যাচাই করুন আপনার সম্ভাব্য অপচয়।'}
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            
            {/* Slider 1: Monthly Ad Spend */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="monthly-spend" className="text-sm font-semibold text-slate-200">
                  {language === 'en' ? 'Monthly Google Ads Spend:' : 'মাসিক গুগল অ্যাডস বাজেট:'}
                </label>
                <span className="font-mono text-lg font-bold text-cyan-400 tabular-nums">
                  ${monthlySpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                id="monthly-spend"
                type="range"
                min={1000}
                max={25000}
                step={500}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full mt-3 accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>$1,000</span>
                <span>$10,000</span>
                <span>$25,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Customer / Job Value */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="customer-value" className="text-sm font-semibold text-slate-200">
                  {language === 'en' ? 'Average Customer / Job Value:' : 'গড় প্রতি কাস্টমার বা কাজের মূল্য:'}
                </label>
                <span className="font-mono text-lg font-bold text-cyan-400 tabular-nums">
                  ${avgCustomerValue.toLocaleString()}
                </span>
              </div>
              <input
                id="customer-value"
                type="range"
                min={200}
                max={8000}
                step={100}
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full mt-3 accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>$200 (Emergency visit)</span>
                <span>$3,500</span>
                <span>$8,000+ (Implant/HVAC)</span>
              </div>
            </div>

            {/* Category Selector */}
            <div>
              <label className="text-sm font-semibold text-slate-200 block mb-2">
                {language === 'en' ? 'Select Your Service Category:' : 'আপনার ব্যবসার ধরন সিলেক্ট করুন:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'home', labelEn: 'HVAC / Plumbing', labelBn: 'হোম সার্ভিস / এসি' },
                  { id: 'dental', labelEn: 'Dental / Clinic', labelBn: 'ডেন্টাল / ক্লিনিক' },
                  { id: 'legal', labelEn: 'Legal / Attorney', labelBn: 'আইনজীবী / ল' },
                  { id: 'auto', labelEn: 'Auto / Detailing', labelBn: 'অটো রিপেয়ার' },
                  { id: 'b2b', labelEn: 'Commercial B2B', labelBn: 'কমার্শিয়াল B2B' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setNicheCategory(item.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors text-center ${
                      nicheCategory === item.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold'
                        : 'bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {language === 'en' ? item.labelEn : item.labelBn}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {language === 'en'
                  ? 'Based on actual audit data from 40+ local accounts. Common leaks include: phrase match overreach, broad search expansion, and un-tracked calls.'
                  : '৪০টির বেশি লোকাল অ্যাকাউন্টের অডিট ডেটার ওপর ভিত্তি করে প্রণীত। মূল অপচয় হয় ব্রড ম্যাচ এক্সপ্যানশন ও ভুল লোকেশন সেটিংসে।'}
              </span>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {language === 'en' ? 'Audit Recovery Projection' : 'সম্ভাব্য অপচয় ও রিকভারি প্রজেকশন'}
                </span>
                <span className="text-xs text-cyan-400 font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>32% Avg Recovery</span>
                </span>
              </div>

              {/* Stat 1: Wasted Ad Spend */}
              <div className="mt-6">
                <div className="text-xs text-slate-400">
                  {language === 'en' ? 'Estimated Monthly Wasted Ad Spend:' : 'আনুমানিক মাসিক অপচয় হওয়া বাজেট:'}
                </div>
                <div className="font-mono text-3xl sm:text-4xl font-bold text-red-400 mt-1 tabular-nums">
                  ${monthlyWasted.toLocaleString()} <span className="text-base text-slate-400 font-sans font-normal">/ month</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  ≈ ${annualWasted.toLocaleString()} {language === 'en' ? 'drained per year' : 'প্রতি বছর নষ্ট হয়'}
                </div>
              </div>

              {/* Stat 2: Recovered Leads & Revenue */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400">
                    {language === 'en' ? 'New Inbound Calls / Mo:' : 'নতুন ইনবাউন্ড কল/মাস:'}
                  </div>
                  <div className="font-mono text-2xl font-bold text-white mt-1 tabular-nums">
                    +{recoveredLeadsPerMonth} {language === 'en' ? 'calls' : 'টি কল'}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'en' ? 'Targeted local searchers' : 'হাই-ইনটেন্ট লোকাল ক্লায়েন্ট'}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400">
                    {language === 'en' ? 'Recaptured Revenue / Yr:' : 'উদ্ধারকৃত বার্ষিক রেভিনিউ:'}
                  </div>
                  <div className="font-mono text-2xl font-bold text-cyan-400 mt-1 tabular-nums">
                    +${newAnnualRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'en' ? 'At 25% close rate' : '২৫% বুকিং কনভার্সনে'}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => onOpenAuditModal(monthlySpend)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>
                  {language === 'en'
                    ? `Audit My $${monthlySpend.toLocaleString()}/Mo Spend For Free`
                    : `আমার $${monthlySpend.toLocaleString()} বাজেট ফ্রি অডিট করুন`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                {language === 'en'
                  ? 'Includes search terms audit, negative keywords pack, and GA4 tag health check.'
                  : 'সার্চ টার্ম অডিট, নেগেটিভ কিওয়ার্ড লিস্ট ও জিএ৪ ট্র্যাকিং হেলথ চেক অন্তর্ভুক্ত।'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
