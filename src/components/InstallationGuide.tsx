import { QUICK_STEPS } from '../data/pluginData';
import { Download, Key, Search, ArrowLeft } from 'lucide-react';

interface InstallationGuideProps {
  onCtaClick: () => void;
}

export function InstallationGuide({ onCtaClick }: InstallationGuideProps) {
  return (
    <section id="installation" className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
            سریع و آسان
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            راهنمای راه‌اندازی سریع در وردپرس
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            کمتر از ۳ دقیقه زمان برای فعال‌سازی کامل افزونه در پیشخوان وردپرس نیاز دارید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {QUICK_STEPS.map((step, idx) => {
            const icons = [
              <Download className="w-6 h-6 text-sky-600" key="1" />,
              <Key className="w-6 h-6 text-sky-600" key="2" />,
              <Search className="w-6 h-6 text-sky-600" key="3" />,
            ];

            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {icons[idx]}
                    </div>
                    <span className="text-3xl font-extrabold text-sky-200 font-mono">
                      0{step.step}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {idx < QUICK_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowLeft className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-all hover:-translate-y-0.5"
          >
            <span>دانلود و شروع کار با افزونه</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
