import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Check, Copy, Share2 } from 'lucide-react';
import { Language, FaqItem } from '../types';
import { FAQ_ITEMS } from '../data/content';

interface AeoKnowledgeBaseProps {
  language: Language;
}

export const AeoKnowledgeBase: React.FC<AeoKnowledgeBaseProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string>(FAQ_ITEMS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Topics', labelBn: 'সব বিষয়' },
    { id: 'strategy', labelEn: 'Campaign Strategy', labelBn: 'ক্যাম্পেইন স্ট্র্যাটেজি' },
    { id: 'tracking', labelEn: 'Tracking & GA4', labelBn: 'ট্র্যাকিং ও জিএ৪' },
    { id: 'budget', labelEn: 'Budget & ROI', labelBn: 'বাজেট ও আরওএএস' },
    { id: 'local', labelEn: 'Local Service Ads', labelBn: 'লোকাল সার্ভিস অ্যাডস' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const questionText = (language === 'en' ? item.question.en : item.question.bn).toLowerCase();
    const answerText = (language === 'en' ? item.directAnswer.en : item.directAnswer.bn).toLowerCase();
    return matchesCategory && (questionText.includes(query) || answerText.includes(query));
  });

  const handleCopy = (faq: FaqItem) => {
    const textToCopy = `${language === 'en' ? faq.question.en : faq.question.bn}\n\n${
      language === 'en' ? faq.directAnswer.en : faq.directAnswer.bn
    }`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(faq.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="faq" className="py-20 border-b border-slate-800/80 bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with SEO/AEO/GEO context */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'AEO & GEO Knowledge Base' : 'এসইও ও এইও নলেজ বেস'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
            {language === 'en' ? (
              <>
                Authoritative Answers on <span className="text-cyan-400">Local Google Ads & Analytics.</span>
              </>
            ) : (
              <>
                লোকাল গুগল অ্যাডস ও অ্যানালিটিক্স সম্পর্কিত <span className="text-cyan-400">প্রয়োজনীয় প্রশ্নোত্তর।</span>
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2.5">
            {language === 'en'
              ? 'Direct, factual, and structured answers optimized for business owners and AI answer engines (Perplexity, ChatGPT, Gemini Search).'
              : 'বিজনেস ওনার ও আধুনিক সার্চ ইঞ্জিনের জন্য সরাসরি ও স্পষ্ট তথ্যবহুল উত্তর।'}
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="mt-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                language === 'en'
                  ? 'Search questions (e.g. server-side, budget, phone calls)...'
                  : 'প্রশ্ন খুঁজুন (যেমন ট্র্যাকিং, বাজেট, ফোন কল)...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {language === 'en' ? cat.labelEn : cat.labelBn}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions */}
        <div className="mt-10 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm bg-slate-900/40 rounded-xl border border-slate-800">
              {language === 'en'
                ? 'No questions matched your search query. Try another term or contact Ahmad directly.'
                : 'আপনার অনুসন্ধানের সাথে কোনো প্রশ্ন মেলেনি। অন্য শব্দ লিখে চেষ্টা করুন অথবা সরাসরি যোগাযোগ করুন।'}
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-900/60 border border-slate-800/90 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-800/30 transition-colors gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded shrink-0">
                        Q
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-white">
                        {language === 'en' ? faq.question.en : faq.question.bn}
                      </span>
                    </div>
                    <div className="text-slate-400 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 space-y-4">
                      {/* Direct Answer Block (Targeted for AEO / AI summaries) */}
                      <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 leading-relaxed font-medium">
                        <span className="font-bold text-white mr-1.5">Direct Answer:</span>
                        {language === 'en' ? faq.directAnswer.en : faq.directAnswer.bn}
                      </div>

                      {/* Supporting Points */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {(language === 'en' ? faq.bulletPoints.en : faq.bulletPoints.bn).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Utility Action */}
                      <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60">
                        <span className="text-[11px] text-slate-400">
                          {language === 'en' ? faq.categoryLabel.en : faq.categoryLabel.bn}
                        </span>
                        <button
                          onClick={() => handleCopy(faq)}
                          className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          {copiedId === faq.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied to clipboard</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Answer</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
