import React, { useState } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/content';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#niches', labelEn: 'Local Niches', labelBn: 'লোকাল ইন্ডাস্ট্রি' },
    { href: '#services', labelEn: 'Services', labelBn: 'সার্ভিসসমূহ' },
    { href: '#cases', labelEn: 'Case Studies', labelBn: 'কেস স্টাডি' },
    { href: '#calculator', labelEn: 'ROI Calculator', labelBn: 'আরওএএস ক্যালকুলেটর' },
    { href: '#system', labelEn: 'Growth System', labelBn: 'গ্রোথ সিস্টেম' },
    { href: '#faq', labelEn: 'AEO / FAQ', labelBn: 'প্রশ্নোত্তর' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Brand Wordmark & Official AS Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group shrink-0 whitespace-nowrap"
          title={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.titleEn}`}
        >
          <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
            <img
              src={PERSONAL_INFO.logoUrl}
              alt="Ahmad Shibli Logo"
              className="w-full h-full object-cover rounded-full bg-slate-900"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
              {language === 'en' ? PERSONAL_INFO.name : PERSONAL_INFO.nameBengali}
            </span>
            <span className="text-xs text-slate-400 tracking-wide">
              {language === 'en' ? 'Google Ads & Analytics' : 'গুগল অ্যাডস ও অ্যানালিটিক্স'}
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-cyan-500/50"
            >
              {language === 'en' ? link.labelEn : link.labelBn}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Toggle & Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle Button */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-700/80 rounded-lg hover:border-cyan-500/60 hover:text-white transition-colors"
            title={language === 'en' ? 'বাংলা ভাষায় পরিবর্তন করুন' : 'Switch to English'}
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold">{language === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenAuditModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all shadow-sm hover:shadow-cyan-500/20 whitespace-nowrap shrink-0"
          >
            <span>{language === 'en' ? 'Claim Free Audit' : 'ফ্রি অডিট নিন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1 transition-colors"
              >
                {language === 'en' ? link.labelEn : link.labelBn}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all"
            >
              <span>{language === 'en' ? 'Claim Free 25-Point Audit' : 'ফ্রি ২৫-পয়েন্ট অডিট নিন'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
