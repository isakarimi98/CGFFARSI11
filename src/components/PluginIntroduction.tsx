import { 
  Sparkles, 
  HelpCircle, 
  Layers, 
  Target, 
  Search, 
  TrendingUp, 
  ShoppingBag, 
  FileEdit, 
  BrainCircuit, 
  CheckCircle2, 
  ArrowLeft,
  ChevronLeft,
  Flame,
  LineChart,
  Compass
} from 'lucide-react';
import { PLUGIN_INFO } from '../data/pluginData';

export function PluginIntroduction() {
  const growthPillars = [
    {
      title: 'رشد محتوا و سئو',
      icon: <Search className="w-6 h-6 text-sky-600" />,
      accentBg: 'bg-sky-50',
      borderColor: 'border-sky-200/80',
      badge: 'شکاف‌های محتوایی',
      badgeColor: 'bg-sky-100/80 text-sky-800 border-sky-200',
      desc: 'شکاف‌های موجود در پوشش موضوعی سایت را پیدا کنید و موضوعات جدیدی را که می‌توانند به توسعه استراتژی محتوایی شما کمک کنند، شناسایی کنید.',
      detail: 'سئونما برای هر فرصت، اطلاعاتی مانند موضوع پیشنهادی، کلمات کلیدی، اولویت و دلیل پیشنهاد را در اختیار شما قرار می‌دهد تا بتوانید درباره ارزش واقعی آن تصمیم بگیرید.',
    },
    {
      title: 'رشد فروش و درآمد',
      icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
      accentBg: 'bg-amber-50',
      borderColor: 'border-amber-200/80',
      badge: 'ویژه ووکامرس و خدمات',
      badgeColor: 'bg-amber-100/80 text-amber-800 border-amber-200',
      desc: 'اگر سایت شما فروشگاهی است، فرصت‌های رشد فقط به تولید مقاله محدود نمی‌شوند.',
      detail: 'سئونما می‌تواند ظرفیت‌های موجود در محصولات و ساختار فروشگاه را بررسی کند و فرصت‌هایی مانند فروش مکمل، فروش بیشتر، بسته‌های محصول و سایر اقدامات تجاری را پیشنهاد دهد.',
    },
    {
      title: 'رشد هدفمند و اولویت‌دار',
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      accentBg: 'bg-emerald-50',
      borderColor: 'border-emerald-200/80',
      badge: 'تخصیص بهینه منابع',
      badgeColor: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
      desc: 'پیدا کردن فرصت به‌تنهایی کافی نیست. وقتی چندین فرصت مختلف در اختیار دارید، باید بدانید کدام‌یک ارزش بیشتری برای اجرا دارد.',
      detail: 'سئونما با اولویت‌بندی هوشمند فرصت‌ها و ارائه دلایل استراتژیک، کمک می‌کند انرژی و منابع خود را روی موارد ارزشمندتر و اثرگذارتر متمرکز کنید.',
    },
  ];

  const workflowSteps = [
    { step: '۱', label: 'تحلیل سایت', desc: 'اسکن مقالات، دسته‌ها و محصولات' },
    { step: '۲', label: 'کشف فرصت', desc: 'شناسایی خلأها و سوژه‌های طلایی' },
    { step: '۳', label: 'اولویت‌بندی', desc: 'دسته‌بندی بر اساس اثرگذاری و ارزش' },
    { step: '۴', label: 'تصمیم‌گیری', desc: 'تأیید، ویرایش یا رد بر اساس استراتژی' },
    { step: '۵', label: 'اجرا', desc: 'تبدیل ۱-کلیک به پیش‌نویس وردپرس' },
    { step: '۶', label: 'رشد پایدار', desc: 'افزایش ورودی سئو و نرخ تبدیل فروش' },
  ];

  return (
    <section id="intro" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden font-['Vazirmatn',sans-serif]">
      {/* Subtle Background Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs sm:text-sm font-bold mb-4 border border-sky-200/90 shadow-2xs">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>معرفی و فلسفه افزونه {PLUGIN_INFO.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.25] mb-6">
            فرصت‌هایی که در سایتتان دیده نمی‌شوند را پیدا کنید
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            رشد یک سایت فقط با تولید محتوای بیشتر یا اضافه کردن محصولات جدید اتفاق نمی‌افتد. گاهی مهم‌ترین فرصت‌های رشد، همین حالا در سایت شما وجود دارند؛ اما پیدا کردن آن‌ها با بررسی دستی صدها مقاله، صفحه، دسته‌بندی و محصول کار ساده‌ای نیست.
          </p>
        </div>

        {/* Core Narrative 1: The Daily Dilemma & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left/Main Column: What is Seonama */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-7 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-950/15 border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold mb-5 border border-sky-400/30">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>دستیار هوشمند کشف فرصت‌های رشد</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                سئونما؛ تحلیل ساختار سایت به کمک هوش مصنوعی
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                <strong className="text-white font-bold">سئونما</strong> یک افزونه هوشمند وردپرس برای <strong className="text-sky-300 font-bold">کشف فرصت‌های رشد سایت</strong> است که با استفاده از هوش مصنوعی، ساختار و محتوای سایت شما را بررسی می‌کند و فرصت‌هایی را که می‌توانند به رشد محتوا، سئو، فروش و درآمدزایی کمک کنند، شناسایی می‌کند.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/90 flex items-center gap-3 text-xs sm:text-sm text-sky-300 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>تحلیل عمیق بر مبنای داده‌های واقعی وردپرس شما</span>
            </div>
          </div>

          {/* Right Column: The 2 Recurring Questions */}
          <div className="lg:col-span-5 bg-gradient-to-b from-sky-50/70 to-slate-50/80 rounded-3xl p-7 sm:p-9 border border-sky-100 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-3">
                پایان سردرگمی در برنامه‌ریزی
              </span>
              <h4 className="text-xl font-black text-slate-900 mb-4 leading-snug">
                به‌جای اینکه هر بار از خودتان بپرسید:
              </h4>

              <div className="space-y-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60 font-bold">
                    ؟
                  </div>
                  <span className="font-extrabold text-slate-800 text-sm sm:text-base">
                    «حالا چه محتوایی تولید کنم؟»
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200/60 font-bold">
                    ؟
                  </div>
                  <span className="font-extrabold text-slate-800 text-sm sm:text-base">
                    «برای رشد سایت قدم بعدی چیست؟»
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-600 text-white shadow-md shadow-sky-600/20">
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                سئونما به شما کمک می‌کند فرصت‌های موجود را پیدا کنید، اهمیت آن‌ها را بسنجید و با آگاهی کامل برای اجرای آن‌ها تصمیم بگیرید.
              </p>
            </div>
          </div>

        </div>

        {/* Core Narrative 2: Real Site Structure vs Generic Ideas */}
        <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200/80 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3 text-sky-700 font-bold text-xs sm:text-sm">
              <Layers className="w-4 h-4" />
              <span>تفاوت رویکرد سئونما</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-snug">
              از ایده‌های عمومی تا فرصت‌های مخصوص سایت شما
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-rose-700 text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  مشکل ابزارهای معمول تولید ایده
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  یکی از مشکلات ابزارهای معمول این است که پیشنهادهای آن‌ها کلی، مستقل از محتوای قبلی و بدون درک از نقاط قوت یا خلأهای سایت شما هستند.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md shadow-sky-500/5">
                <div className="flex items-center gap-2 font-bold text-sky-700 text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  رویکرد اختصاصی سئونما
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  سئونما فرصت‌ها را با توجه به <strong>ساختار واقعی سایت شما</strong> (محتواها، موضوعات، دسته‌بندی‌ها و محصولات فروشگاه) شناسایی می‌کند.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-sky-100/60 border border-sky-200/80 text-center">
              <p className="text-sky-950 font-bold text-sm sm:text-base">
                نتیجه، یک فهرست ساده از «ایده مقاله» نیست؛ بلکه مجموعه‌ای از <span className="text-sky-700 underline decoration-sky-400 font-black">فرصت‌های قابل بررسی برای رشد واقعی سایت</span> است.
              </p>
            </div>
          </div>
        </div>

        {/* Core Narrative 3: The 3 Growth Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-2 inline-block">
              استراتژی همه‌جانبه
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
              سه مسیر برای رشد بهتر سایت
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthPillars.map((pillar, i) => (
              <div
                key={i}
                className={`p-7 rounded-3xl bg-white border ${pillar.borderColor} shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.accentBg} flex items-center justify-center shrink-0 border border-slate-100`}>
                      {pillar.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h4>

                  <p className="text-sm font-semibold text-slate-800 mb-3 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>طراحی شده برای نتایج ملموس</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Narrative 4: From Discovery to WordPress Draft Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold mb-4">
              <FileEdit className="w-3.5 h-3.5" />
              <span>اتوماسیون عملیاتی</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              از کشف فرصت تا اجرای آن
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              سئونما در مرحله پیشنهاد متوقف نمی‌شود. پس از بررسی فرصت‌ها می‌توانید آن‌ها را مدیریت و تعیین تکلیف کنید؛ فرصت‌های مناسب را تأیید کنید، موارد نامرتبط را کنار بگذارید و در صورت نیاز فرصت‌های تأییدشده را وارد مرحله اجرا کنید.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تبدیل مستقیم فرصت محتوایی به <strong>پیش‌نویس نوشته وردپرس</strong> برای شروع سریع تولید محتوا</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>بررسی پیشنهادهای تجاری و بسته‌های محصول برای اجرای سریع در فروشگاه</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
            <div className="text-xs text-sky-200 font-bold mb-2">فرآیند سریع در وردپرس:</div>
            <div className="space-y-3 font-semibold text-xs sm:text-sm text-white">
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                <span>۱. بررسی دلیل و کلمات کلیدی</span>
                <span className="text-sky-300 font-mono text-xs">تحلیل هوش مصنوعی</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                <span>۲. تأیید فرصت با ۱ کلیک</span>
                <span className="text-emerald-300 font-mono text-xs">تأیید کاربر</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-between">
                <span>۳. ساخت خودکار پیش‌نویس (Draft)</span>
                <span className="text-emerald-200 font-mono text-xs">نوشته وردپرس</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Narrative 5: Co-Pilot Philosophy */}
        <div className="max-w-4xl mx-auto text-center mb-20 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 mx-auto flex items-center justify-center mb-4">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            یک دستیار هوشمند برای تصمیم‌گیری بهتر
          </h3>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            سئونما قرار نیست جایگزین شما یا متخصص سئو و بازاریابی باشد. نقش آن ساده‌تر و کاربردی‌تر است:
          </p>
          <div className="inline-block p-4 px-6 rounded-2xl bg-white border-2 border-sky-400 shadow-md text-sky-950 font-black text-base sm:text-lg mb-6">
            «پیدا کردن فرصت‌هایی که بررسی آن‌ها ارزش دارد.»
          </div>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            شما تصمیم می‌گیرید کدام فرصت مناسب کسب‌وکار شماست، کدام را اجرا کنید و کدام را کنار بگذارید. به این ترتیب، هوش مصنوعی به‌جای تصمیم‌گیری به‌جای شما، تبدیل به یک <strong>ابزار تحلیل و کشف فرصت</strong> می‌شود.
          </p>
        </div>

        {/* Core Narrative 6: Step Growth Framework + Final Punchline */}
        <div className="bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-sky-900/10 text-center">
          <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 text-white">
            سایتتان را فقط تحلیل نکنید؛ از آن فرصت بسازید
          </h3>
          <p className="text-sky-100 text-sm sm:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
            هر مقاله، محصول، دسته‌بندی و صفحه‌ای که در سایت دارید می‌تواند بخشی از یک مسیر بزرگتر برای رشد باشد. سئونما کمک می‌کند این مسیر را بهتر و روشن‌تر ببینید:
          </p>

          {/* 6-Step Visual Pathway */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 max-w-5xl mx-auto">
            {workflowSteps.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex flex-col items-center justify-center text-center">
                <span className="w-6 h-6 rounded-full bg-white/20 text-white text-xs font-black flex items-center justify-center mb-2">
                  {s.step}
                </span>
                <span className="font-extrabold text-sm text-white block mb-1">{s.label}</span>
                <span className="text-[10px] text-sky-100 leading-tight">{s.desc}</span>
              </div>
            ))}
          </div>

          <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            اگر می‌خواهید به‌جای تولید محتوای تصادفی و اجرای اقدامات پراکنده، با دیدی روشن‌تر برای رشد سایت تصمیم بگیرید، <strong className="text-white font-bold">سئونما می‌تواند نقطه شروع این مسیر باشد.</strong>
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-900 font-black text-sm sm:text-base shadow-lg shadow-sky-950/20">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>سئونما؛ فرصت‌های پنهان سایتتان را کشف کنید.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
