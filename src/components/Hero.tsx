import { PLUGIN_INFO } from '../data/pluginData';
import { ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Cpu, Search, Layers, RefreshCw, BookOpen, ShoppingBag } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Sky Tones */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* WordPress Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/90 text-sky-800 text-xs sm:text-sm font-medium mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="font-semibold text-sky-700">افزونه تخصصی وردپرس</span>
            <span className="text-sky-300">•</span>
            <span>سازگار با وردپرس ۶+ و پیشخوان RTL</span>
          </div>

          {/* Plugin Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-8">
            <span className="block text-slate-900">{PLUGIN_INFO.name}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-sky-600 via-sky-500 to-sky-700 text-2xl sm:text-4xl md:text-5xl font-bold mt-2">
              {PLUGIN_INFO.title}
            </span>
          </h1>

          {/* Dual Target Audience Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto mb-10 text-right">
            {/* For Content Sites */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-sky-100/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100/80 text-sky-700 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/60">
                    برای سایت‌های محتوایی
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  «با افزونه سئونما، ساختار محتوایی سایت وردپرس خود را بررسی کنید، شکاف‌های محتوایی را پیدا کنید و فرصت‌های جدید تولید محتوا را با کمک هوش مصنوعی کشف کنید.»
                </p>
              </div>
            </div>

            {/* For Store / Ecommerce Sites */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-amber-100/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    برای سایت‌های فروشگاهی
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  «فرصت‌های فروش پنهان سایتتان را کشف کنید و با محتوای مرتبط و با کیفیت فروشتان را افزایش دهید.»
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#workflow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 shadow-lg shadow-sky-600/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-sky-200" />
              <span>{PLUGIN_INFO.ctaText}</span>
              <ArrowLeft className="w-5 h-5" />
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-sky-50/60 border border-slate-200 hover:border-sky-300 transition-all duration-200 shadow-2xs"
            >
              <span>{PLUGIN_INFO.secondaryCta}</span>
            </a>
          </div>

          {/* Quick Value Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-sky-100/80">
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/80 border border-slate-100 shadow-2xs text-slate-700 text-xs sm:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>نصب مستقیم در وردپرس</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/80 border border-slate-100 shadow-2xs text-slate-700 text-xs sm:text-sm font-medium">
              <Cpu className="w-4 h-4 text-sky-600 shrink-0" />
              <span>اتصال به ۶ مدل هوش مصنوعی</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/80 border border-slate-100 shadow-2xs text-slate-700 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>سیستم ضدتکرار موضوعات</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/80 border border-slate-100 shadow-2xs text-slate-700 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
              <span>تبدیل مستقیم به پیش‌نویس</span>
            </div>
          </div>

        </div>

        {/* Feature Highlights Banner Card */}
        <div className="mt-14 max-w-5xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xl shadow-sky-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-sky-400 to-sky-600" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">اسکن ساختار محتوایی</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  بررسی خودکار تمام نوشته‌های منتشرشده، برچسب‌ها و دسته‌بندی‌های وردپرس بدون نیاز به وارد کردن دستی.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">شناسایی شکاف‌های محتوا</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  استخراج سوژه‌هایی که رقبا روی آن‌ها مانور می‌دهند اما سایت شما در آن حوزه خلاء محتوایی دارد.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">یک‌کلیک تا پیش‌نویس WP</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  موضوعات تأییدشده مستقیماً به نوشته پیش‌نویس وردپرس تبدیل شده و آماده نگارش نهایی می‌شوند.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
