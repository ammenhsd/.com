import React, { useState } from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, TrendingUp, BarChart3, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { SocialDock } from './SocialDock';

interface HeroProps {
  language: Language;
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenAuditModal }) => {
  const [photoBackdrop, setPhotoBackdrop] = useState<'obsidian' | 'electric' | 'slate'>('electric');

  const backdropGradients = {
    obsidian: 'from-slate-900 via-slate-950 to-slate-900',
    electric: 'from-cyan-950/80 via-slate-950 to-blue-950/80',
    slate: 'from-slate-800/80 via-slate-950 to-slate-900',
  };

  const backdropAura = {
    obsidian: 'bg-slate-700/20',
    electric: 'bg-cyan-500/25',
    slate: 'bg-blue-500/20',
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:py-24 border-b border-slate-800/80 bg-grid-pattern">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Local Value Proposition & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Editorial Kicker (Zero-Pill: Clean unboxed metadata) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              <span>{language === 'en' ? 'Google Ads & GA4 Analytics Specialist' : 'গুগল অ্যাডস ও জিএ৪ অ্যানালিটিক্স স্পেশালিস্ট'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{language === 'en' ? 'Local Service Growth' : 'লোকাল সার্ভিস গ্রোথ'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] text-balance">
              {language === 'en' ? (
                <>
                  Turn High-Intent Local Searches Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Booked Clients & Predictable Revenue.</span>
                </>
              ) : (
                <>
                  হাই-ইনটেন্ট গুগল সার্চকে রূপান্তর করুন আপনার লোকাল বিজনেসের <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">নিশ্চিত বুকিং ও নিয়মিত বিক্রয়ে।</span>
                </>
              )}
            </h1>

            {/* Clear, un-hyped explanation of how Ahmed solves the pain point */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {language === 'en' ? (
                <>
                  I engineer high-converting Google Search, Local Service Ads (LSA), and airtight Server-Side GA4 tracking for local business owners. Stop burning budget on irrelevant clicks; get transparent call tracking, lower CPA, and measurable local return.
                </>
              ) : (
                <>
                  আমি লোকাল বিজনেস ওনারদের জন্য তৈরি করি হাই-কনভার্টিং গুগল সার্চ ক্যাম্পেইন, লোকাল সার্ভিসেস অ্যাডস (LSA) এবং নিখুঁত সার্ভার-সাইড জিএ৪ ট্র্যাকিং। ভুল ক্লিকে বাজেট অপচয় বন্ধ করে সরাসরি ফোন কল ও ভেরিফায়েড লিড নিশ্চিত করুন।
                </>
              )}
            </p>

            {/* Trust Bullet Proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'en' ? 'Verified Google Partner & GA4 Certified' : 'গুগল পার্টনার ও জিএ৪ সার্টিফাইড স্পেশালিস্ট'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'en' ? 'Server-Side Tagging (iOS 14.5+ immune)' : 'সার্ভার-সাইড ট্র্যাকিং (১০০% সিগন্যাল নির্ভুলতা)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'en' ? 'Dynamic Call Tracking & CRM Lead Sync' : 'ডায়নামিক কল ট্র্যাকিং ও সিআরএম ইন্টিগ্রেশন'}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{language === 'en' ? '380% Average Verified Client ROAS' : 'গড়ে ৩৮০% ভেরিফায়েড ক্লায়েন্ট আরওএএস'}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap"
              >
                <span>{language === 'en' ? 'Schedule Free 30-Min Discovery Audit' : 'ফ্রি ৩০-মিনিট ডিসকভারি অডিট বুক করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500/60 rounded-lg hover:bg-slate-800 transition-all whitespace-nowrap group"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{language === 'en' ? 'Book Slot via Calendly' : 'Calendly-তে শিডিউল করুন'}</span>
              </a>
            </div>

            {/* Clickable Animated Platform Channels (Zero raw usernames shown) */}
            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">
                    {language === 'en' ? 'Connect Directly:' : 'সরাসরি যোগাযোগ:'}
                  </span>
                </div>
                <SocialDock variant="hero" />
              </div>
            </div>

            {/* Social Proof Context */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">
                {language === 'en' ? 'Accepting 3 new local accounts for Q4/2026' : 'চলতি কোয়ার্টারে ৩টি নতুন লোকাল অ্যাকাউন্টের কাজ নেওয়া হচ্ছে'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300 font-mono">
                WhatsApp: {PERSONAL_INFO.whatsappNumber}
              </span>
            </div>
          </div>

          {/* Right Column: Ahmed Shibli Portrait with Professional Studio Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Studio Atmosphere Aura */}
              <div
                className={`absolute -inset-4 rounded-3xl blur-2xl transition-all duration-700 opacity-60 ${backdropAura[photoBackdrop]}`}
              />

              {/* Main Photo Frame */}
              <div
                className={`relative rounded-2xl border border-slate-700/80 bg-gradient-to-b ${backdropGradients[photoBackdrop]} p-3 shadow-2xl overflow-hidden transition-all duration-500`}
              >
                {/* Background Studio Light Disc behind his shoulders */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Bar inside portrait card: Official AS Monogram & Verified Badge */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <img
                      src={PERSONAL_INFO.logoUrl}
                      alt="AS Ahmad Shibli Mark"
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-cyan-500/40"
                    />
                    <span className="text-xs font-semibold text-slate-200">
                      {PERSONAL_INFO.logoText}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>Verified Specialist</span>
                  </div>
                </div>

                {/* Portrait Image Container */}
                <div className="relative mt-2 overflow-hidden rounded-xl bg-slate-900/60 aspect-[4/5] flex items-end justify-center group">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt="Ahmad Shibli - Google Ads and Analytics Specialist"
                    className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02] drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Rim Scrim for flawless bottom blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 pointer-events-none" />

                  {/* Floating Proof Card 1: ROAS */}
                  <div className="absolute bottom-4 left-3 right-3 sm:right-auto sm:left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-lg p-2.5 shadow-xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">
                        {language === 'en' ? 'Average Client Return' : 'গড় ক্লায়েন্ট আরওএএস'}
                      </div>
                      <div className="text-sm font-bold text-white font-mono tabular-nums flex items-center gap-1">
                        <span>380% ROAS</span>
                        <span className="text-[10px] text-cyan-400 font-sans font-normal">
                          ({language === 'en' ? 'Local Niches' : 'লোকাল'})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Proof Badge 2: Signal Integrity */}
                  <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-md px-2.5 py-1 shadow-lg text-[11px] text-slate-200 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>100% GA4 Signal</span>
                  </div>
                </div>

                {/* Studio Lighting Style Controller */}
                <div className="mt-3 pt-2.5 px-2 flex items-center justify-between border-t border-slate-800/80 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Studio Tone:</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setPhotoBackdrop('electric')}
                      className={`px-2 py-0.5 text-[11px] rounded transition-colors ${
                        photoBackdrop === 'electric'
                          ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Electric Cyan
                    </button>
                    <button
                      onClick={() => setPhotoBackdrop('obsidian')}
                      className={`px-2 py-0.5 text-[11px] rounded transition-colors ${
                        photoBackdrop === 'obsidian'
                          ? 'bg-slate-800 text-slate-200 font-medium border border-slate-600'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Obsidian
                    </button>
                    <button
                      onClick={() => setPhotoBackdrop('slate')}
                      className={`px-2 py-0.5 text-[11px] rounded transition-colors ${
                        photoBackdrop === 'slate'
                          ? 'bg-blue-900/40 text-blue-300 font-medium border border-blue-700/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Deep Navy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Proof & Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
              {PERSONAL_INFO.adSpendManaged}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">
              {language === 'en' ? 'PPC Ad Spend Managed' : 'পরিচালিত মোট অ্যাড বাজেট'}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tabular-nums tracking-tight">
              {PERSONAL_INFO.avgClientRoas}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">
              {language === 'en' ? 'Average Client ROAS' : 'গড় ক্লায়েন্ট আরওএএস রিটার্ন'}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
              {PERSONAL_INFO.trackingAccuracy}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">
              {language === 'en' ? 'Tracking Signal Integrity' : 'ট্র্যাকিং সিগন্যাল নির্ভুলতা'}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400 tabular-nums tracking-tight">
              15+
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">
              {language === 'en' ? 'Local Service Niches Scaled' : 'লোকাল সার্ভিস ইন্ডাস্ট্রি'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
