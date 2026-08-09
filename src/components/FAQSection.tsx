import { useState } from 'react';
import { FAQ_ITEMS } from '../data/pluginData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>پاسخ به ابهامات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            سوالات متداول
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            پاسخ به سوالات رایج درباره افزونه کشف فرصت‌های محتوا در وردپرس
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span className="text-base sm:text-lg leading-snug">{item.question}</span>
                  <div className={`p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-sky-50 text-sky-600 border-sky-200' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/50 pt-4 animate-in fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
