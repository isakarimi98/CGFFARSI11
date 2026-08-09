import { PLUGIN_INFO } from '../data/pluginData';
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onCtaClick: () => void;
}

export function CTASection({ onCtaClick }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 text-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-100 text-xs font-semibold mb-6 backdrop-blur-xs">
          <Sparkles className="w-4 h-4 text-sky-200" />
          <span>آماده ارتقای استراتژی محتوای وردپرس</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          فرصت‌های پنهان محتوای سایت خود را همین امروز کشف کنید
        </h2>

        <p className="text-sky-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          با نصب افزونه «کشف فرصت‌های محتوا»، ساختار سایت را تحلیل کنید، سوژه‌های جدید را بیابید و آن‌ها را مستقیماً به پیش‌نویس وردپرس تبدیل کنید.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#workflow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-sky-900 bg-white hover:bg-sky-50 active:bg-sky-100 shadow-xl transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5 text-sky-600" />
            <span>{PLUGIN_INFO.ctaText}</span>
            <ArrowLeft className="w-5 h-5 text-sky-700" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-sky-100 font-medium pt-6 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-300" />
            نصب آسان روی وردپرس
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-300" />
            پشتیبانی از انواع هوش مصنوعی
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-300" />
            رابط کاربری کاملاً RTL و فارسی
          </span>
        </div>

      </div>
    </section>
  );
}
