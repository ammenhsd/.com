import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/content';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialBudget?: number;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  language,
  initialBudget,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState(
    initialBudget ? `$${initialBudget.toLocaleString()}` : '$3,000 - $5,000'
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {language === 'en' ? 'Audit Booked Successfully!' : 'অডিট সফলভাবে বুক হয়েছে!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              {language === 'en'
                ? `Thank you, ${name}. Ahmed Shibli has received your request and will reach out within 3 business hours to begin your 25-point audit.`
                : `ধন্যবাদ ${name}। আহমেদ শিবলী আপনার তথ্য পেয়েছেন এবং ৩ ঘণ্টার মধ্যে যোগাযোগ করবেন।`}
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                {language === 'en' ? 'Close Window' : 'উইন্ডো বন্ধ করুন'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'en' ? 'Confidential Review' : 'গোপনীয় অ্যাকাউন্ট অডিট'}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {language === 'en'
                ? 'Claim Your Free 25-Point Google Ads & Tracking Audit'
                : 'ফ্রি ২৫-পয়েন্ট গুগল অ্যাডস ও ট্র্যাকিং অডিট'}
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              {language === 'en'
                ? 'Discover where budget is leaking and get an exact roadmap to reduce CPA.'
                : 'কোথায় বাজেট লিক হচ্ছে তা চিহ্নিত করুন এবং প্রতি লিডের খরচ কমানোর পরিষ্কার রোডম্যাপ পান।'}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {language === 'en' ? 'Full Name *' : 'আপনার নাম *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'en' ? 'e.g. John Smith' : 'যেমনঃ আহমেদ শিবলী'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {language === 'en' ? 'Email Address *' : 'ইমেইল অ্যাড্রেস *'}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@clinic.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {language === 'en' ? 'Phone / WhatsApp *' : 'ফোন বা হোয়াটসঅ্যাপ *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {language === 'en' ? 'Business Website or Practice Name' : 'ব্যবসার ওয়েবসাইট বা নাম'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. www.metrodenverplumbing.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {language === 'en' ? 'Current Monthly Google Ads Budget' : 'বর্তমান মাসিক অ্যাড বাজেট'}
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500/80 transition-colors"
                >
                  <option value="Under $1,500">Under $1,500 / month</option>
                  <option value="$1,500 - $3,000">$1,500 - $3,000 / month</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000 / month</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000 / month</option>
                  <option value="$10,000+">$10,000+ / month</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'en' ? 'Submitting...' : 'জমা হচ্ছে...'}</span>
                  ) : (
                    <>
                      <span>{language === 'en' ? 'Confirm Free Audit Request' : 'ফ্রি অডিট রিকোয়েস্ট নিশ্চিত করুন'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-xs text-slate-400 space-y-1.5 pt-1">
                <div>
                  {language === 'en' ? (
                    <>Prefer an instant meeting? <a href={PERSONAL_INFO.calendlyLink} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-semibold">Book Live on Calendly →</a></>
                  ) : (
                    <>তাৎক্ষণিক মিটিং স্লট চান? <a href={PERSONAL_INFO.calendlyLink} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-semibold">Calendly-তে বুক করুন →</a></>
                  )}
                </div>
                <div className="text-[11px] text-slate-500">
                  {language === 'en' ? (
                    <>Or WhatsApp directly: <a href={PERSONAL_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono">{PERSONAL_INFO.whatsappNumber}</a></>
                  ) : (
                    <>অথবা সরাসরি হোয়াটসঅ্যাপ: <a href={PERSONAL_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono">{PERSONAL_INFO.whatsappNumber}</a></>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
