import { PLUGIN_INFO } from '../data/pluginData';
import { ShoppingBag, ExternalLink } from 'lucide-react';

export function FloatingBuyButton() {
  return (
    <div className="fixed bottom-5 left-5 md:bottom-7 md:left-7 z-50 dir-rtl font-['Vazirmatn',sans-serif]">
      <a
        href={PLUGIN_INFO.rastchinPurchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-orange-500/35 hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/40 ring-4 ring-orange-500/10"
        title="خرید مستقیم افزونه از راست‌چین"
      >
        <div className="relative flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-amber-100 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
        </div>
        <span>خرید از راست‌چین</span>
        <ExternalLink className="w-4 h-4 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}

