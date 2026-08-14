import { useState, useMemo, ReactNode } from 'react';
import { KEY_FEATURES, AI_ENGINES } from '../data/pluginData';
import {
  Search,
  Target,
  Key,
  Brain,
  Sliders,
  Zap,
  Compass,
  CircleDollarSign,
  ShoppingCart,
  Package,
  TrendingUp,
  Lightbulb,
  FileEdit,
  LayoutTemplate,
  RefreshCw,
  ShieldCheck,
  CheckSquare,
  Download,
  Bot,
  Plug,
  Globe,
  Sparkles,
  CheckCircle,
  Layers,
  ShoppingBag,
  Cpu,
  FileText,
} from 'lucide-react';

const ICON_MAP: Record<string, ReactNode> = {
  Search: <Search className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Key: <Key className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Sliders: <Sliders className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  CircleDollarSign: <CircleDollarSign className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Package: <Package className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  FileEdit: <FileEdit className="w-5 h-5" />,
  LayoutTemplate: <LayoutTemplate className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  CheckSquare: <CheckSquare className="w-5 h-5" />,
  Download: <Download className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Plug: <Plug className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
};

type CategoryTab = 'all' | 'content-seo' | 'sales-ecommerce' | 'workflow-management' | 'ai-tech';

interface CategoryMeta {
  id: CategoryTab;
  title: string;
  count: number;
  icon: ReactNode;
  activeColor: string;
}

export function KeyFeatures() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: CategoryMeta[] = [
    {
      id: 'all',
      title: 'همه ویژگی‌ها',
      count: KEY_FEATURES.length,
      icon: <Layers className="w-4 h-4" />,
      activeColor: 'bg-slate-900 text-white shadow-md shadow-slate-900/20',
    },
    {
      id: 'content-seo',
      title: 'تحلیل سئو و محتوا',
      count: KEY_FEATURES.filter((f) => f.category === 'content-seo').length,
      icon: <Search className="w-4 h-4" />,
      activeColor: 'bg-sky-600 text-white shadow-md shadow-sky-600/20',
    },
    {
      id: 'sales-ecommerce',
      title: 'فرصت‌های فروش و ووکامرس',
      count: KEY_FEATURES.filter((f) => f.category === 'sales-ecommerce').length,
      icon: <ShoppingBag className="w-4 h-4" />,
      activeColor: 'bg-amber-600 text-white shadow-md shadow-amber-600/20',
    },
    {
      id: 'workflow-management',
      title: 'مدیریت و اتوماسیون وردپرس',
      count: KEY_FEATURES.filter((f) => f.category === 'workflow-management').length,
      icon: <FileText className="w-4 h-4" />,
      activeColor: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20',
    },
    {
      id: 'ai-tech',
      title: 'هوش مصنوعی و زیرساخت',
      count: KEY_FEATURES.filter((f) => f.category === 'ai-tech').length,
      icon: <Cpu className="w-4 h-4" />,
      activeColor: 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20',
    },
  ];

  const filteredFeatures = useMemo(() => {
    return KEY_FEATURES.filter((feature) => {
      const matchesCategory = selectedCategory === 'all' || feature.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        feature.title.includes(searchQuery) ||
        feature.description.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'content-seo':
        return {
          iconBg: 'bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-600 group-hover:text-white',
          badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
          borderHover: 'hover:border-sky-300 hover:shadow-sky-500/10',
          accent: 'text-sky-600',
        };
      case 'sales-ecommerce':
        return {
          iconBg: 'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white',
          badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
          borderHover: 'hover:border-amber-300 hover:shadow-amber-500/10',
          accent: 'text-amber-600',
        };
      case 'workflow-management':
        return {
          iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
          badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          borderHover: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
          accent: 'text-emerald-600',
        };
      case 'ai-tech':
        return {
          iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
          badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          borderHover: 'hover:border-indigo-300 hover:shadow-indigo-500/10',
          accent: 'text-indigo-600',
        };
      default:
        return {
          iconBg: 'bg-slate-100 text-slate-700 border-slate-200',
          badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
          borderHover: 'hover:border-slate-300',
          accent: 'text-slate-700',
        };
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-50/90 via-sky-50/30 to-slate-50/90 border-y border-sky-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-900 text-xs sm:text-sm font-bold mb-4 border border-sky-200/80 shadow-2xs">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>ویژگی‌های کلیدی سئونما</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
            جعبه‌ابزار جامع برای رشد محتوا و فروش
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            تمام ابزارهایی که برای کشف خلأهای سئو، استخراج کلمات کلیدی، بهینه‌سازی فروش ووکامرس و تبدیل مستقیم به پیش‌نویس وردپرس نیاز دارید در یک محیط روان و قدرتمند گرد هم آمده‌اند.
          </p>
        </div>

        {/* Categories Tab Navigation & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 bg-white/80 p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 shadow-xs backdrop-blur-xs">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 w-full lg:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? cat.activeColor
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.title}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="w-full lg:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در بین ۲۱ ویژگی..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/80 focus:bg-white focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-slate-800 transition-all placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredFeatures.map((feature, idx) => {
            const styles = getCategoryStyles(feature.category);
            const isHighlighted = feature.highlighted;

            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-white border-2 border-sky-300 shadow-md shadow-sky-500/5 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/15'
                    : `bg-white/95 border border-slate-200/90 shadow-2xs hover:shadow-lg ${styles.borderHover}`
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Badge + Category Indicator */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${styles.iconBg}`}
                    >
                      {ICON_MAP[feature.iconName] || <Sparkles className="w-5 h-5" />}
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {feature.badge && (
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${styles.badgeBg}`}
                        >
                          {feature.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-sky-600 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium">
                    {feature.category === 'content-seo' && '🔍 سئو و استراتژی محتوا'}
                    {feature.category === 'sales-ecommerce' && '💰 رشد فروش و ووکامرس'}
                    {feature.category === 'workflow-management' && '⚙️ مدیریت در وردپرس'}
                    {feature.category === 'ai-tech' && '🤖 هوش مصنوعی و فنی'}
                  </span>
                  <span className="font-mono text-slate-300 font-semibold">#{(idx + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-800 mb-1">ویژگی‌ای با این عبارت پیدا نشد</h4>
            <p className="text-sm text-slate-500 mb-4">لطفاً عبارت دیگری را جستجو کنید یا فیلتر دسته‌بندی را تغییر دهید.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
            >
              نمایش تمام ۲۱ ویژگی
            </button>
          </div>
        )}

        {/* Dedicated Showcase: AI Engines Support */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 mb-3">
                <Bot className="w-3.5 h-3.5" />
                <span>انعطاف در انتخاب مدل و سرور</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                پشتیبانی از انواع سرویس‌ها و مدل‌های پیشرفته هوش مصنوعی
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                سئونما به هیچ مدل خاصی وابسته نیست. شما می‌توانید با کلید اختصاصی خود از محبوب‌ترین سرویس‌های هوش مصنوعی دنیا استفاده کنید یا سرور اختصاصی خود را متصل نمایید.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 text-xs text-sky-300 font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>بدون نیاز به اشتراک اجباری خارجی</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_ENGINES.map((engine) => (
              <div
                key={engine.name}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-sky-500/60 hover:bg-slate-800 transition-all duration-200 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-sm">{engine.name}</span>
                    {engine.isCustom && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-900/60 text-sky-300 border border-sky-700/50 font-medium">
                        Custom API
                      </span>
                    )}
                  </div>
                  <span className="block text-xs font-semibold text-sky-400 mb-1">{engine.logo}</span>
                  <p className="text-xs text-slate-400 leading-normal">{engine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
