import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { SocialDock } from './SocialDock';

interface ContactSectionProps {
  language: Language;
  prefilledBudget?: number;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  prefilledBudget,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    monthlyBudget: prefilledBudget ? `$${prefilledBudget.toLocaleString()}` : '$3,000 - $5,000',
    primaryGoal: 'lead-generation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Outreach & Specialist Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              {language === 'en' ? 'Direct Consultation' : 'সরাসরি যোগাযোগ'}
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {language === 'en' ? (
                <>
                  Ready to Stop Wasting Budget & <span className="text-cyan-400">Scale Your Local Clients?</span>
                </>
              ) : (
                <>
                  বাজেট অপচয় বন্ধ করে <span className="text-cyan-400">লোকাল বিজনেস স্কেল করতে প্রস্তুত?</span>
                </>
              )}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Fill out the form to schedule a 30-minute private strategy call, or reach out directly on WhatsApp for an immediate response.'
                : 'নিচের ফর্মটি পূরণ করে একটি ৩০ মিনিটের ফ্রি স্ট্র্যাটেজি সেশন নির্ধারণ করুন, অথবা তাৎক্ষণিক তথ্যের জন্য সরাসরি হোয়াটসঅ্যাপে নক দিন।'}
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              
              {/* WhatsApp Quick Direct Card */}
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/10 flex items-center justify-between group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">
                      {language === 'en' ? 'Direct WhatsApp & Call' : 'হোয়াটসঅ্যাপ ও সরাসরি কল'}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      {PERSONAL_INFO.whatsappNumber}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-semibold flex items-center gap-1 group-hover:bg-emerald-400 transition-colors">
                  <span>Chat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Calendly Booking Card */}
              <a
                href={PERSONAL_INFO.calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 flex items-center justify-between group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">
                      {language === 'en' ? 'Schedule Instant Slot' : 'তাৎক্ষণিক স্লট নির্বাচন'}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {language === 'en' ? 'Live Calendly Booking' : 'ক্যালেন্ডলিতে বুকিং'}
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center gap-1 group-hover:bg-cyan-300 transition-colors">
                  <span>Select Date</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Google%20Ads%20%26%20Analytics%20Consultation%20Inquiry`}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">
                      {language === 'en' ? 'Direct Email' : 'অফিশিয়াল ইমেইল'}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              </a>

            </div>

            {/* Clickable Animated Platform Logos (No raw usernames shown) */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                {language === 'en' ? 'Clickable Profiles & Channels:' : 'কানেক্ট করার প্ল্যাটফর্মসমূহ:'}
              </div>
              <SocialDock variant="contact" />
            </div>

            {/* Trust Assurances */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{language === 'en' ? 'Specialist Guarantees:' : 'আমার প্রতিশ্রুতি:'}</span>
              </div>
              <p>• {language === 'en' ? 'Zero aggressive sales pitches. Strictly technical audit analysis.' : 'কোনো অযাচিত সেলস প্রেসার নেই। সম্পূর্ণ নিখুঁত টেকনিক্যাল অডিট ও পরামর্শ।'}</p>
              <p>• {language === 'en' ? 'Confidential non-disclosure of your ad account & client metrics.' : 'আপনার অ্যাড অ্যাকাউন্ট ও ক্লায়েন্ট তথ্যের শতভাগ গোপনীয়তা রক্ষা।'}</p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Audit Form */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
            
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {language === 'en' ? 'Consultation Request Received!' : 'আপনার রিকোয়েস্ট সফলভাবে গৃহীত হয়েছে!'}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {language === 'en'
                    ? `Thank you, ${formData.name || 'there'}. Ahmed Shibli will review your business details and reach out within 3 business hours via email or WhatsApp.`
                    : `ধন্যবাদ ${formData.name || ''}। আহমেদ শিবলী ব্যক্তিগতভাবে আপনার তথ্য পর্যালোচনা করে পরবর্তী ৩ ঘণ্টার মধ্যে যোগাযোগ করবেন।`}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        businessName: '',
                        monthlyBudget: '$3,000 - $5,000',
                        primaryGoal: 'lead-generation',
                        message: '',
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {language === 'en' ? 'Submit another request' : 'আরেকটি রিকোয়েস্ট সাবমিট করুন'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-white">
                    {language === 'en' ? 'Request Free 25-Point Audit & Strategy' : 'ফ্রি ২৫-পয়েন্ট অডিট ও স্ট্র্যাটেজি রিকোয়েস্ট'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {language === 'en'
                      ? 'Tell me a bit about your local business so I can prepare your audit blueprint.'
                      : 'আপনার লোকাল ব্যবসা সম্পর্কে প্রাথমিক কিছু তথ্য দিন যেন কার্যকর অডিট প্রস্তুত করা যায়।'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {language === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'e.g. David Miller' : 'যেমনঃ রফিকুল ইসলাম'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {language === 'en' ? 'Business Email *' : 'ব্যবসায়িক ইমেইল *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="owner@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {language === 'en' ? 'Phone or WhatsApp Number *' : 'ফোন বা হোয়াটসঅ্যাপ নাম্বার *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {language === 'en' ? 'Business Name & Website' : 'ব্যবসার নাম বা ওয়েবসাইট'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Plumbing (apexplumbing.com)"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {language === 'en' ? 'Monthly Google Ads Budget' : 'মাসিক গুগল অ্যাডস বাজেট'}
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                    >
                      <option value="Under $1,500">Under $1,500 / mo</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000 / mo</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000 / mo</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000 / mo</option>
                      <option value="$10,000+">$10,000+ / mo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {language === 'en' ? 'Primary Goal' : 'মূল লক্ষ্য'}
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                    >
                      <option value="lead-generation">
                        {language === 'en' ? 'More Inbound Phone Calls & Leads' : 'বেশি ফোন কল ও কোয়ালিটি লিড'}
                      </option>
                      <option value="cut-wasted-spend">
                        {language === 'en' ? 'Cut Wasted Spend & Lower CPA' : 'বাজেট অপচয় বন্ধ ও সিপিএ কমানো'}
                      </option>
                      <option value="ga4-tracking">
                        {language === 'en' ? 'Fix Server-Side GA4 & Call Tracking' : 'সার্ভার-সাইড জিএ৪ ও কল ট্র্যাকিং ফিক্স'}
                      </option>
                      <option value="new-campaign">
                        {language === 'en' ? 'Launch Brand New Google Ads Account' : 'নতুন গুগল অ্যাডস অ্যাকাউন্ট লঞ্চ'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {language === 'en' ? 'Notes on Current Bottlenecks (Optional)' : 'বর্তমান সমস্যা বা বিস্তারিত নোট (ঐচ্ছিক)'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      language === 'en'
                        ? 'Briefly describe your current ads, service area, or biggest challenge...'
                        : 'আপনার সার্ভিস এরিয়া বা বর্তমান ক্যাম্পেইনের কোনো সমস্যা সংক্ষেপে লিখতে পারেন...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'en' ? 'Preparing request...' : 'প্রক্রিয়াকরণ হচ্ছে...'}</span>
                  ) : (
                    <>
                      <span>{language === 'en' ? 'Claim My Free Strategy Audit' : 'ফ্রি স্ট্র্যাটেজি অডিট বুক করুন'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
