import React, { useState, useEffect, ReactNode } from 'react';
import { 
  Cpu, 
  Search, 
  Lightbulb, 
  CheckSquare, 
  FileEdit, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft,
  Server,
  Zap,
  Check
} from 'lucide-react';

interface WorkflowStep {
  id: number;
  title: string;
  badge: string;
  icon: ReactNode;
  summary: string;
  details: string[];
  actionLabel: string;
  wpStatus: string;
}

const STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: 'تنظیم سریع موتور AI',
    badge: 'گام اول',
    icon: <Cpu className="w-6 h-6 text-sky-600" />,
    summary: 'اتصال امن به مدل هوش مصنوعی دلخواه شما (Gemini, Claude, OpenAI) در چند ثانیه',
    details: [
      'ورود به تنظیمات اختصاصی افزونه در پیشخوان وردپرس',
      'درج کلید API (با پشتیبانی از نسخه رایگان Gemini و API مستقیم)',
      'تست ارتباط زنده و فعال‌سازی موتور پردازش'
    ],
    actionLabel: 'تست اتصال برقرار شد',
    wpStatus: 'تنظیمات افزونه در پیشخوان وردپرس ذخیره شد'
  },
  {
    id: 2,
    title: 'اسکن ساختار محتوای سایت',
    badge: 'گام دوم',
    icon: <Search className="w-6 h-6 text-amber-500" />,
    summary: 'تحلیل خودکار تمام نوشته‌های منتشر شده، دسته‌بندی‌ها و برچسب‌های موجود در وردپرس',
    details: [
      'بررسی فهرست عناوین موجود جهت جلوگیری از ایجاد محتوای تکراری (Duplicate Content)',
      'شناسایی دسته‌بندی‌های کم‌محتوا یا موضوعات مغفول مانده',
      'پردازش سبک در پس‌زمینه بدون مصرف منابع سرور'
    ],
    actionLabel: 'اسکن کامل ۱۲۰ نوشته انجام شد',
    wpStatus: 'نقشه محتوایی سایت با موفقیت آنالیز شد'
  },
  {
    id: 3,
    title: 'کشف فرصت‌های جدید محتوا',
    badge: 'گام سوم',
    icon: <Lightbulb className="w-6 h-6 text-emerald-600" />,
    summary: 'تولید لیست هوشمند عناوین پیشنهادی بر اساس شکاف‌های محتوایی سایت شما',
    details: [
      'ارائه عناوین دقیق و استاندارد با اولویت‌بندی بر اساس ارزش سئو',
      'ارائه توضیحات کوتاه و کلمات کلیدی پیشنهادی برای هر عنوان',
      'نمایش دلیل استراتژیک هوش مصنوعی برای پیشنهاد هر موضوع'
    ],
    actionLabel: '۱۵ فرصت محتوایی جدید کشف شد',
    wpStatus: 'فهرست فرصت‌ها آماده بررسی است'
  },
  {
    id: 4,
    title: 'غربالگری و انتخاب عناوین',
    badge: 'گام چهارم',
    icon: <CheckSquare className="w-6 h-6 text-indigo-600" />,
    summary: 'بررسی آسان لیست پیشنهادی، تأیید موارد جذاب و رد عناوین نامرتبط',
    details: [
      'انتخاب دسته‌جمعی یا تک‌تک عناوین پیشنهادی',
      'امکان ویرایش عنوان یا افزودن یادداشت اختصاصی برای نویسنده',
      'ثبت تاییدیه نهایی برای تبدیل به نوشته وردپرس'
    ],
    actionLabel: '۴ موضوع منتخب آماده انتقال',
    wpStatus: 'تاییدیه عناوین توسط مدیر ثبت گردید'
  },
  {
    id: 5,
    title: 'ایجاد مستقیم پیش‌نویس در وردپرس',
    badge: 'گام پنجم',
    icon: <FileEdit className="w-6 h-6 text-sky-600" />,
    summary: 'ساخت خودکار نوشته‌های جدید به صورت «پیش‌نویس» در منوی نوشته‌های وردپرس',
    details: [
      'ایجاد نوشته با عنوان، دسته‌بندی پیشنهادی و برچسب‌های مرتبط',
      'درج خلاصه ساختار محتوایی و سرفصل‌ها درون ویرایشگر گوتنبرگ/کلاسیک',
      'آماده‌سازی فوری برای شروع نگارش توسط شما یا نویسندگان سایت'
    ],
    actionLabel: 'پیش‌نویس‌ها در وردپرس ساخته شدند',
    wpStatus: '۴ پیش‌نویس جدید در بخش «نوشته‌ها > همه نوشته‌ها» اضافه شد'
  }
];

export function InteractiveWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = STEPS[activeStep];

  return (
    <section id="workflow" className="py-20 bg-slate-900 text-white relative overflow-hidden dir-rtl font-['Vazirmatn',sans-serif]">
      {/* Background Decorator */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-extrabold border border-sky-400/30 mb-4">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>تجربه کاربری واقعی افزونه</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            فرآیند تعاملی: <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">از اسکن سایت تا ساخت پیش‌نویس</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            مشاهده کنید افزونه چگونه گام‌به‌گام ساختار وردپرس شما را آنالیز کرده و ایده‌های جدید را مستقیماً به بخش پیش‌نویس‌ها منتقل می‌کند.
          </p>
        </div>

        {/* Steps Navigation Bar */}
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-2 sm:p-3 border border-slate-700/80 mb-8 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 border text-center ${
                    isActive
                      ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-600/30 scale-102'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-700/50'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                      isActive ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.badge}
                    </span>
                  </div>
                  <span className="text-xs font-bold truncate w-full">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Viewer Box */}
        <div className="bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-8 md:p-10 shadow-2xl relative">
          
          {/* Top Bar inside Viewer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-700/80">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-500/20 border border-sky-400/30">
                {current.icon}
              </div>
              <div>
                <span className="text-xs font-extrabold text-sky-400 uppercase tracking-wider">{current.badge}</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">{current.title}</h3>
              </div>
            </div>

            {/* Play/Pause & Nav Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
                  isPlaying 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30' 
                    : 'bg-sky-500/20 text-sky-300 border-sky-500/40 hover:bg-sky-500/30'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? 'توقف نمایش خودکار' : 'شروع پخش خودکار'}</span>
              </button>

              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : STEPS.length - 1));
                    setIsPlaying(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="گام قبلی"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold px-2 text-slate-400">{activeStep + 1} / {STEPS.length}</span>
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % STEPS.length);
                    setIsPlaying(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  title="گام بعدی"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Viewer Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Explanations & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-6">
                  {current.summary}
                </p>

                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">اقدامات انجام‌شده در این مرحله:</h4>
                <ul className="space-y-3 mb-6">
                  {current.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Status Banner */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center gap-3">
                <Server className="w-5 h-5 text-sky-400 shrink-0 animate-pulse" />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-slate-400">وضعیت در پیشخوان وردپرس</div>
                  <div className="text-xs font-extrabold text-emerald-400 truncate">{current.wpStatus}</div>
                </div>
              </div>
            </div>

            {/* Right: Simulated Process Console Box */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">WordPress Admin Panel</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-300 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>اکشن فعال: {current.title}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300">
                    <div className="text-[10px] text-slate-500 mb-1">گزارش فرآیند:</div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{current.actionLabel}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar & Next Step button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>پیشرفت فرآیند</span>
                  <span className="font-bold text-sky-400">{((activeStep + 1) / STEPS.length) * 100}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mb-4">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-blue-500 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
                  />
                </div>

                {activeStep < STEPS.length - 1 ? (
                  <button
                    onClick={() => {
                      setActiveStep((prev) => prev + 1);
                      setIsPlaying(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-600/20"
                  >
                    <span>رفتن به گام بعدی ({STEPS[activeStep + 1].badge})</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="text-center py-2 text-xs font-bold text-emerald-400 flex items-center justify-center gap-2 bg-emerald-950/40 rounded-xl border border-emerald-800/50">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>فرآیند با موفقیت تکمیل شد!</span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
