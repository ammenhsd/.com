import React from 'react';
import { Mail, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/content';
import { SocialDock } from './SocialDock';

interface FooterProps {
  language: Language;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenAuditModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-500 to-blue-500">
                <img
                  src={PERSONAL_INFO.logoUrl}
                  alt="Ahmad Shibli Logo"
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                />
              </div>
              <div>
                <div className="font-display font-bold text-base text-white">
                  {language === 'en' ? PERSONAL_INFO.name : PERSONAL_INFO.nameBengali}
                </div>
                <div className="text-xs text-slate-400">
                  {language === 'en' ? PERSONAL_INFO.titleEn : PERSONAL_INFO.titleBn}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {language === 'en'
                ? 'Helping local service business owners capture high-intent customers, reduce cost-per-lead, and achieve 100% transparent tracking ROI.'
                : 'লোকাল বিজনেস ওনারদের জন্য হাই-ইনটেন্ট কাস্টমার লিড জেনারেশন এবং স্বচ্ছ সার্ভার-সাইড ট্র্যাকিং সল্যুশন।'}
            </p>

            <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Google Partner & GA4 Certified Consultant</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {language === 'en' ? 'Navigation' : 'ন্যাভিগেশন'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#niches" className="hover:text-cyan-400 transition-colors">
                  {language === 'en' ? 'Local Service Niches' : 'টার্গেটেড লোকাল ইন্ডাস্ট্রি'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {language === 'en' ? 'Core Services & GA4' : 'সার্ভিসসমূহ ও ট্র্যাকিং'}
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-cyan-400 transition-colors">
                  {language === 'en' ? 'Client Case Studies' : 'প্রমাণিত কেস স্টাডি'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  {language === 'en' ? 'Ad Waste Simulator' : 'অপচয় বাজেট ক্যালকুলেটর'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  {language === 'en' ? 'AEO / SEO Knowledge Base' : 'প্রশ্নোত্তর ও নলেজ বেস'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-4 space-y-3.5">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {language === 'en' ? 'Direct Channels & Socials' : 'যোগাযোগ মাধ্যম ও সোশ্যাল'}
            </div>
            
            {/* Clickable Animated Logos (Zero usernames exposed) */}
            <div className="pt-0.5">
              <SocialDock variant="footer" />
            </div>

            <ul className="space-y-2 text-xs sm:text-sm pt-1">
              <li>
                <a
                  href={PERSONAL_INFO.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: {PERSONAL_INFO.whatsappNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email: {PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li className="text-slate-400 text-xs">
                {language === 'en' ? PERSONAL_INFO.locationEn : PERSONAL_INFO.locationBn}
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenAuditModal}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                {language === 'en' ? 'Request 25-Point Audit' : 'ফ্রি অ্যাকাউন্ট অডিট নিন'}
              </button>
              <a
                href={PERSONAL_INFO.calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500 rounded-lg hover:text-white transition-colors"
              >
                Calendly
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.logoText}). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              SEO, AEO & GEO Compliant Architecture
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
