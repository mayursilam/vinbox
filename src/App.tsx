import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ScriptMatrixSection } from './components/ScriptMatrixSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyModal, TermsModal } from './components/LegalModals';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [calculatorEstimate, setCalculatorEstimate] = useState<{
    serviceType: string;
    pageCount: number;
    languageCount: number;
    timeline: string;
  } | null>(null);

  const handleApplyEstimate = (data: {
    serviceType: string;
    pageCount: number;
    languageCount: number;
    timeline: string;
  }) => {
    setCalculatorEstimate(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust / Credibility Metrics Bar */}
        <TrustBar />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Interactive Script & Text Expansion Matrix */}
        <ScriptMatrixSection />

        {/* 6. Featured Work & Case Studies */}
        <PortfolioSection />

        {/* 7. Process / How It Works */}
        <ProcessSection />

        {/* 8. Interactive DTP Scope Estimator */}
        <QuoteCalculator onApplyEstimate={handleApplyEstimate} />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Final High-Impact CTA */}
        <FinalCTA />

        {/* 12. Contact & RFQ Submission */}
        <ContactSection initialData={calculatorEstimate} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      {/* Legal Dialog Modals */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}
