import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PluginIntroduction } from './components/PluginIntroduction';
import { KeyFeatures } from './components/KeyFeatures';
import { InteractiveWorkflow } from './components/InteractiveWorkflow';
import { InstallationGuide } from './components/InstallationGuide';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PluginDownloadModal } from './components/PluginDownloadModal';
import { FloatingBuyButton } from './components/FloatingBuyButton';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-['Vazirmatn',sans-serif] selection:bg-sky-500 selection:text-white dir-rtl" dir="rtl">
      {/* Top Header */}
      <Header onCtaClick={() => setDownloadModalOpen(true)} />

      <main>
        {/* Section 1: Hero */}
        <Hero onCtaClick={() => setDownloadModalOpen(true)} />

        {/* Section 1.5: Detailed Introduction to Plugin */}
        <PluginIntroduction />

        {/* Section 2: Key Features */}
        <KeyFeatures />

        {/* Section 2.5: Interactive Step-by-Step Scan-to-Draft Walkthrough */}
        <InteractiveWorkflow />

        {/* Quick Installation Guide in WordPress */}
        <InstallationGuide onCtaClick={() => setDownloadModalOpen(true)} />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Bottom CTA Banner */}
        <CTASection onCtaClick={() => setDownloadModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Rastchin / Zhaket Purchase Button */}
      <FloatingBuyButton />

      {/* Download / Getting Started Modal */}
      <PluginDownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
