import { ReactNode } from 'react';
import { KEY_FEATURES, AI_ENGINES } from '../data/pluginData';
import {
  Scan,
  Search,
  TrendingUp,
  FileEdit,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Cpu,
  Download,
  Globe,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

const ICON_MAP: Record<string, ReactNode> = {
  Scan: <Scan className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  FileEdit: <FileEdit className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-slate-50/80 border-y border-sky-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold mb-3">
            <span>قدرتمند و کاربردی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            ویژگی‌های کلیدی
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            تمام ابزارهایی که برای کشف، اولویت‌بندی و تبدیل فرصت‌های محتوایی به نوشته وردپرس نیاز دارید در یک افزونه سبک و حرفه‌ای گردآوری شده‌اند.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_FEATURES.map((feature) => {
            const isHighlighted = feature.highlighted;
            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 ${
                  isHighlighted
                    ? 'bg-gradient-to-br from-white via-sky-50/40 to-white border-2 border-sky-300 shadow-lg shadow-sky-500/5 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/15'
                    : 'bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10'
                }`}
              >
                {/* Optional Badge */}
                {feature.badge && (
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
                      {feature.badge}
                    </span>
                  </div>
                )}

                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105 ${
                    isHighlighted
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'bg-sky-50 text-sky-600 border border-sky-100'
                  }`}
                >
                  {ICON_MAP[feature.iconName] || <Sparkles className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dedicated Highlight Box for AI Engines Support */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-sky-200/80 shadow-lg shadow-sky-900/5">
          <div className="max-w-3xl mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800 mb-3">
              اتصال انعطاف‌پذیر
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              انتخاب سرویس هوش مصنوعی دلخواه
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              افزونه به هیچ هوش مصنوعی خاصی وابسته نیست. شما می‌توانید به سادگی کلید API سرویس مورد نظر خود را در تنظیمات وردپرس وارد کنید:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_ENGINES.map((engine) => (
              <div
                key={engine.name}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs border border-sky-200">
                  <CheckCircle className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900 text-sm">{engine.name}</span>
                    {engine.isCustom && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-medium">
                        پیشرفته
                      </span>
                    )}
                  </div>
                  <span className="block text-xs font-semibold text-sky-700 mb-1">{engine.logo}</span>
                  <p className="text-xs text-slate-500 leading-normal">{engine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
