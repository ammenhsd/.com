import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Language } from './types';
import { PERSONAL_INFO } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetNiches } from './components/TargetNiches';
import { Services } from './components/Services';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { ProcessFramework } from './components/ProcessFramework';
import { AeoKnowledgeBase } from './components/AeoKnowledgeBase';
import { ContactSection } from './components/ContactSection';
import { AuditModal } from './components/AuditModal';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [modalInitialBudget, setModalInitialBudget] = useState<number | undefined>(undefined);

  const handleOpenAuditModal = (initialBudget?: number) => {
    setModalInitialBudget(initialBudget);
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
    setModalInitialBudget(undefined);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans ${language === 'bn' ? 'font-bengali' : ''}`}>
      
      {/* Top Bar Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenAuditModal={() => handleOpenAuditModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          language={language}
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        {/* 2. Target Niches for Local Service Providers */}
        <TargetNiches
          language={language}
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        {/* 3. Core Services & Tracking Capabilities */}
        <Services
          language={language}
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        {/* 4. Interactive Ad Waste & ROI Simulator */}
        <RoiCalculator
          language={language}
          onOpenAuditModal={(budget) => handleOpenAuditModal(budget)}
        />

        {/* 5. In-Depth Verified Case Studies */}
        <CaseStudies
          language={language}
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        {/* 6. The 4-Step Local Growth System */}
        <ProcessFramework
          language={language}
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        {/* 7. AEO / GEO Structured FAQ Knowledge Base */}
        <AeoKnowledgeBase language={language} />

        {/* 8. Direct Consultation & Lead Capture */}
        <ContactSection
          language={language}
          prefilledBudget={modalInitialBudget}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenAuditModal={() => handleOpenAuditModal()}
      />

      {/* Interactive Audit Modal Dialog */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
        language={language}
        initialBudget={modalInitialBudget}
      />

      {/* Floating Quick WhatsApp Button */}
      <a
        href={PERSONAL_INFO.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-3.5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-xl shadow-emerald-500/30 font-semibold text-xs transition-all duration-300 hover:scale-110 group"
        title="Chat with Ahmad Shibli on WhatsApp: 01873818927"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageSquare className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

    </div>
  );
}
