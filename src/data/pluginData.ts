import { FeatureItem, AIEngine, ScreenshotSlot, FAQItem } from '../types';

export const PLUGIN_INFO = {
  name: 'سئونما',
  title: 'دستیار هوشمند کشف فرصت‌ها',
  fullName: 'افزونه وردپرس سئونما - دستیار هوشمند کشف فرصت‌ها',
  version: '1.2.0',
  wpVersion: 'WordPress 6.0+',
  phpVersion: 'PHP 7.4+',
  tagline: 'افزونه سئونما: دستیار هوشمند کشف فرصت‌ها و تحلیل شکاف‌های محتوا در وردپرس',
  shortDesc: 'با افزونه سئونما، ساختار محتوایی سایت وردپرس خود را بررسی کنید، شکاف‌های محتوایی را پیدا کنید و فرصت‌های جدید تولید محتوا را با کمک هوش مصنوعی کشف کنید.',
  contentSitesDesc: 'با افزونه سئونما، ساختار محتوایی سایت وردپرس خود را بررسی کنید، شکاف‌های محتوایی را پیدا کنید و فرصت‌های جدید تولید محتوا را با کمک هوش مصنوعی کشف کنید.',
  ecommerceSitesDesc: 'فرصت‌های فروش پنهان سایتتان را کشف کنید و با محتوای مرتبط و با کیفیت فروشتان را افزایش دهید',
  ctaText: 'مشاهده فرآیند تعاملی',
  secondaryCta: 'ویژگی‌های کلیدی افزونه',
  // لینک خرید از مارکت ژاکت (قابل ویرایش توسط کاربر)
  zhaketPurchaseUrl: 'https://www.zhaket.com/',
};

export const KEY_FEATURES: FeatureItem[] = [
  // دسته اول: کشف و تحلیل سئو و محتوا
  {
    id: 'smart-discovery',
    title: 'کشف هوشمند فرصت‌های محتوایی',
    description: 'ساختار محتوایی سایت را تحلیل کنید و موضوعات و فرصت‌های جدیدی را که می‌توانند به توسعه استراتژی محتوایی کمک کنند، پیدا کنید.',
    iconName: 'Search',
    badge: 'هوش مصنوعی',
    category: 'content-seo',
    highlighted: true,
  },
  {
    id: 'content-gap-analysis',
    title: 'تحلیل شکاف محتوایی (Content Gap)',
    description: 'موضوعات پوشش‌داده‌نشده و خلأهای موجود در محتوای سایت را شناسایی کنید و برای آن‌ها پیشنهادهای هدفمند دریافت کنید.',
    iconName: 'Target',
    badge: 'سئو عمیق',
    category: 'content-seo',
    highlighted: true,
  },
  {
    id: 'keyword-extraction',
    title: 'استخراج کلمات کلیدی هدف',
    description: 'برای هر فرصت محتوایی، کلمات کلیدی مرتبط را دریافت کنید تا بدانید محتوای پیشنهادی را با چه موضوعات و عباراتی هدف‌گذاری کنید.',
    iconName: 'Key',
    category: 'content-seo',
  },
  {
    id: 'strategic-reason',
    title: 'دلیل استراتژیک برای هر پیشنهاد',
    description: 'فقط یک عنوان دریافت نکنید؛ سئونما توضیح می‌دهد چرا یک فرصت برای سایت شما پیشنهاد شده است تا بتوانید آگاهانه درباره اجرای آن تصمیم بگیرید.',
    iconName: 'Brain',
    badge: 'تحلیل تحلیلی',
    category: 'content-seo',
    highlighted: true,
  },
  {
    id: 'smart-prioritization',
    title: 'اولویت‌بندی هوشمند فرصت‌ها',
    description: 'فرصت‌های کشف‌شده را بر اساس اهمیت دسته‌بندی کنید تا ابتدا روی موارد ارزشمندتر و اثرگذارتر تمرکز کنید.',
    iconName: 'Sliders',
    category: 'content-seo',
  },
  {
    id: 'quick-wins',
    title: 'شناسایی Quick Wins (اقدامات زودهنگام)',
    description: 'اقداماتی را پیدا کنید که اجرای سریع‌تری دارند و می‌توانند در کوتاه‌مدت ارزش مناسبی برای رشد سایت ایجاد کنند.',
    iconName: 'Zap',
    badge: 'زودبازده',
    category: 'content-seo',
    highlighted: true,
  },
  {
    id: 'growth-strategy',
    title: 'راهبرد رشد سایت',
    description: 'فرصت‌های موجود را به یک مسیر عملیاتی تبدیل کنید و برای اقدامات رشد، اولویت و برنامه مشخص داشته باشید.',
    iconName: 'Compass',
    category: 'content-seo',
  },

  // دسته دوم: کشف فرصت‌های فروش و ووکامرس
  {
    id: 'sales-opportunity-discovery',
    title: 'کشف فرصت‌های فروش پنهان',
    description: 'فراتر از سئو و تولید محتوا بروید و فرصت‌های افزایش فروش، بهینه‌سازی مسیر خرید و استفاده بهتر از ظرفیت تجاری سایت را شناسایی کنید.',
    iconName: 'CircleDollarSign',
    badge: 'رشد درآمد',
    category: 'sales-ecommerce',
    highlighted: true,
  },
  {
    id: 'woocommerce-sales-analysis',
    title: 'تحلیل فرصت‌های فروش ووکامرس',
    description: 'محصولات و ساختار فروشگاه را بررسی کنید و فرصت‌های مرتبط با فروش مکمل، فروش بیشتر و اقدامات تجاری را پیدا کنید.',
    iconName: 'ShoppingCart',
    badge: 'ویژه ووکامرس',
    category: 'sales-ecommerce',
    highlighted: true,
  },
  {
    id: 'product-bundle-cross-sell',
    title: 'پیشنهاد Bundle و فروش مکمل',
    description: 'برای محصولات مرتبط، فرصت‌های ایجاد بسته‌های محصول و پیشنهادهای مکمل را شناسایی کنید تا از ظرفیت خرید هر مشتری بهتر استفاده شود.',
    iconName: 'Package',
    badge: 'Cross-Sell / Up-Sell',
    category: 'sales-ecommerce',
  },
  {
    id: 'conversion-rate-optimization',
    title: 'شناسایی فرصت‌های افزایش نرخ تبدیل',
    description: 'فرصت‌هایی را پیدا کنید که می‌توانند به بهبود صفحات محصول، پیشنهاد فروش و تبدیل بازدیدکننده به مشتری کمک کنند.',
    iconName: 'TrendingUp',
    category: 'sales-ecommerce',
  },
  {
    id: 'new-monetization-channels',
    title: 'کشف فرصت‌های درآمدزایی جدید',
    description: 'برای سایت‌های محتوایی و خدماتی نیز ظرفیت‌های احتمالی درآمدزایی مانند محصولات دیجیتال، خدمات، دوره‌ها و مدل‌های درآمدی مرتبط را شناسایی کنید.',
    iconName: 'Lightbulb',
    badge: 'مدل‌های درآمدی',
    category: 'sales-ecommerce',
  },

  // دسته سوم: مدیریت و چرخه کار در وردپرس
  {
    id: 'convert-to-wp-draft',
    title: 'تبدیل فرصت محتوا به پیش‌نویس وردپرس',
    description: 'فرصت محتوایی تأییدشده را مستقیماً به پیش‌نویس نوشته در وردپرس تبدیل کنید تا فرآیند تولید محتوا سریع‌تر شروع شود.',
    iconName: 'FileEdit',
    badge: 'اتوماسیون ۱-کلیک',
    category: 'workflow-management',
    highlighted: true,
  },
  {
    id: 'create-sales-landing-draft',
    title: 'ایجاد پیش‌نویس لندینگ فروش',
    description: 'برای فرصت‌های تجاری مناسب، امکان ایجاد پیش‌نویس صفحه فرود فروش را برای شروع سریع‌تر اجرای ایده فراهم کنید.',
    iconName: 'LayoutTemplate',
    category: 'workflow-management',
  },
  {
    id: 'full-lifecycle-management',
    title: 'مدیریت کامل چرخه فرصت‌ها',
    description: 'فرصت‌ها را بررسی، تأیید، رد، بازگردانی یا حذف کنید و وضعیت آن‌ها را در یک محیط یکپارچه مدیریت کنید.',
    iconName: 'RefreshCw',
    category: 'workflow-management',
  },
  {
    id: 'anti-duplicate-guard',
    title: 'جلوگیری از پیشنهادهای تکراری',
    description: 'موضوعات و فرصت‌هایی که قبلاً تعیین تکلیف یا حذف شده‌اند را مدیریت کنید تا در تحلیل‌های بعدی تمرکز بیشتری روی فرصت‌های جدید باشد.',
    iconName: 'ShieldCheck',
    category: 'workflow-management',
  },
  {
    id: 'bulk-actions',
    title: 'مدیریت گروهی فرصت‌ها',
    description: 'تعداد زیادی فرصت را به‌صورت گروهی تأیید، رد، بازگردانی یا مدیریت کنید و زمان کمتری برای مدیریت نتایج تحلیل صرف کنید.',
    iconName: 'CheckSquare',
    category: 'workflow-management',
  },
  {
    id: 'export-csv-json',
    title: 'خروجی CSV و JSON',
    description: 'اطلاعات فرصت‌های کشف‌شده را برای تحلیل، آرشیو یا استفاده در ابزارهای دیگر در قالب CSV و JSON دریافت کنید.',
    iconName: 'Download',
    category: 'workflow-management',
  },

  // دسته چهارم: هوش مصنوعی و فنی
  {
    id: 'ai-models-selection',
    title: 'انتخاب سرویس و مدل هوش مصنوعی',
    description: 'از سرویس‌های هوش مصنوعی پشتیبانی‌شده (OpenAI, Gemini, Claude, DeepSeek, OpenRouter) استفاده کنید و متناسب با نیاز خود مدل مناسب را انتخاب کنید.',
    iconName: 'Bot',
    badge: 'انعطاف‌پذیر',
    category: 'ai-tech',
    highlighted: true,
  },
  {
    id: 'custom-api-endpoint',
    title: 'پشتیبانی از API سفارشی',
    description: 'در صورت نیاز، اتصال به سرویس یا Endpoint سفارشی را تنظیم کنید و کنترل بیشتری روی مدل هوش مصنوعی مورد استفاده داشته باشید.',
    iconName: 'Plug',
    badge: 'توسعه‌دهندگان',
    category: 'ai-tech',
  },
  {
    id: 'persian-rtl-native',
    title: 'رابط کاربری کاملاً فارسی و راست‌چین',
    description: 'تمام بخش‌های افزونه با تمرکز بر کاربران فارسی‌زبان طراحی شده و برای استفاده در محیط وردپرس فارسی و RTL آماده است.',
    iconName: 'Globe',
    badge: '۱۰۰٪ بومی و RTL',
    category: 'ai-tech',
  },
];

export const AI_ENGINES: AIEngine[] = [
  { name: 'OpenAI', logo: 'GPT-4o & GPT-4o-mini', description: 'مدل‌های قدرتمند OpenAI برای تحلیل عمیق موضوعات' },
  { name: 'Google Gemini', logo: 'Gemini 2.5 & Flash', description: 'سرعت بالا و دقت عالی در استخراج شکاف‌های محتوایی' },
  { name: 'Anthropic Claude', logo: 'Claude 3.5 Sonnet', description: 'کیفیت بالا در درک مفاهیم متنی و ارائه دلایل استراتژیک' },
  { name: 'DeepSeek', logo: 'DeepSeek V3 & R1', description: 'مدل‌های اقتصادی و فوق‌العاده هوشمند برای تحلیل محتوا' },
  { name: 'OpenRouter', logo: 'مجموعه سرویس‌ها', description: 'دسترسی همزمان به ده‌ها مدل متنوع AI با یک کلید API' },
  { name: 'Custom Endpoint', logo: 'سرویس دلخواه / محلی', description: 'امکان اتصال به سرورهای شخصی یا مدل‌های هوش مصنوعی اختصاصی', isCustom: true },
];

export const SCREENSHOT_SLOTS: ScreenshotSlot[] = [
  {
    id: 'slot-1',
    slotNumber: '01',
    title: 'داشبورد افزونه',
    subtitle: 'داشبورد آمار، وضعیت فرصت‌ها و تحلیل دسته‌بندی‌های سایت',
    description: 'نمای خلاصه آمار فرصت‌های محتوایی، پیشنهاد ویژه منتخب با اولویت بالا و وضعیت پوشش موضوعی پست‌های سایت.',
    suggestedDimensions: '800 × 800 پیکسل',
    imageUrl: './screenshots/screenshot-1.svg',
  },
  {
    id: 'slot-2',
    slotNumber: '02',
    title: 'تنظیمات افزونه',
    subtitle: 'پیکربندی کلید API، ارائه‌دهنده سرویس (OpenRouter/OpenAI/Gemini) و مدل AI',
    description: 'نمای تنظیمات افزونه جهت انتخاب ارائه‌دهنده هوش مصنوعی، شناسه مدل، کلید اختصاصی API و تست سریع اتصال.',
    suggestedDimensions: '800 × 800 پیکسل',
    imageUrl: './screenshots/screenshot-2.svg',
  },
  {
    id: 'slot-3',
    slotNumber: '03',
    title: 'صفحه نتایج افزونه',
    subtitle: 'لیست فرصت‌های محتوایی کشف‌شده (فعال) به همراه اولویت و دسته‌بندی',
    description: 'در این بخش، لیست موضوعات جدید پیشنهادی توسط هوش مصنوعی با درجه اولویت (بالا، متوسط، پایین) و دکمه‌های اقدام سریع قابل مشاهده است.',
    suggestedDimensions: '800 × 800 پیکسل',
    imageUrl: './screenshots/screenshot-3.svg',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'سئونما دقیقاً چه کاری انجام می‌دهد؟',
    answer: 'سئونما ساختار سایت را تحلیل می‌کند و با کمک هوش مصنوعی، فرصت‌های مرتبط با محتوا، سئو و در صورت وجود قابلیت مرتبط، فروش و رشد کسب‌وکار را شناسایی و اولویت‌بندی می‌کند.',
  },
  {
    question: 'آیا سئونما فقط برای تولید محتواست؟',
    answer: 'خیر. سئونما علاوه بر فرصت‌های محتوایی، روی فرصت‌های رشد و در نسخه‌های دارای قابلیت فروش، فرصت‌های مرتبط با محصولات و فروش نیز تمرکز دارد.',
  },
  {
    question: 'آیا سئونما خودش تمام محتوا را منتشر می‌کند؟',
    answer: 'خیر. در فرصت‌های محتوایی می‌توانید پیشنهاد مناسب را به پیش‌نویس وردپرس تبدیل کرده و سپس محتوا را بررسی، ویرایش و منتشر کنید.',
  },
  {
    question: 'برای استفاده از هوش مصنوعی به API نیاز دارم؟',
    answer: 'بله. برای تحلیل‌های هوشمند باید یک سرویس و کلید API معتبر از ارائه‌دهندگان پشتیبانی‌شده (مانند OpenAI, Google Gemini, Anthropic Claude, DeepSeek, OpenRouter یا سرور اختصاصی) تنظیم کنید.',
  },
  {
    question: 'آیا هزینه استفاده از API داخل قیمت افزونه است؟',
    answer: 'خیر. هزینه استفاده از سرویس هوش مصنوعی جدا از خرید افزونه است و بر اساس سرویس و مدل انتخابی محاسبه می‌شود.',
  },
  {
    question: 'آیا می‌توانم فرصت‌های نامناسب را حذف یا رد کنم؟',
    answer: 'بله. فرصت‌ها قابل مدیریت هستند و می‌توانید آن‌ها را به‌صورت تک‌به‌تک یا گروهی تأیید، رد، بازگردانی یا حذف کنید.',
  },
  {
    question: 'آیا سئونما برای فروشگاه ووکامرس مناسب است؟',
    answer: 'بله، در صورتی که قابلیت‌های فروش نسخه مورد استفاده فعال باشد، سئونما می‌تواند فرصت‌های مرتبط با محصولات، پیشنهادهای بسته و مکمل (Bundle / Cross-Sell) و افزایش فروش را نیز بررسی کند.',
  },
  {
    question: 'آیا سئونما جایگزین متخصص سئو است؟',
    answer: 'خیر. سئونما یک ابزار هوشمند برای کشف فرصت و تصمیم‌یار است. تصمیم نهایی درباره استراتژی محتوا، سئو، فروش و اجرای پیشنهادها همچنان با شماست.',
  },
  {
    question: 'این افزونه چگونه در وردپرس نصب می‌شود؟',
    answer: 'این پروژه کاملاً یک افزونه استاندارد وردپرس (WordPress Plugin) است. شما فایل فشرده (Zip) آن را مستقیماً در پیشخوان سایت وردپرسی خود در بخش افزونه‌ها بارگذاری و فعال می‌کنید.',
  },
  {
    question: 'آیا رابط کاربری افزونه با زبان فارسی و راست‌چین (RTL) سازگار است؟',
    answer: 'بله، تمام بخش‌ها، فرم‌ها، منوها و گزارش‌های افزونه سئونما به‌طور اختصاصی برای محیط فارسی و راست‌چین وردپرس طراحی و بهینه‌سازی شده‌اند.',
  },
];

export const QUICK_STEPS = [
  {
    step: '۱',
    title: 'نصب افزونه در وردپرس',
    description: 'فایل Zip افزونه را از بخش افزونه‌ها > افزودن در پیشخوان وردپرس بارگذاری و فعال کنید.',
  },
  {
    step: '۲',
    title: 'اتصال کلید API هوش مصنوعی',
    description: 'در منوی تنظیمات افزونه، سرویس AI دلخواه خود (Gemini, OpenAI, DeepSeek و ...) را انتخاب و API Key را وارد کنید.',
  },
  {
    step: '۳',
    title: 'شروع اسکن و کشف فرصت‌ها',
    description: 'روی دکمه «اسکن هوشمند سایت» کلیک کنید تا شکاف‌های محتوایی شناسایی و آماده مدیریت شوند.',
  },
];
