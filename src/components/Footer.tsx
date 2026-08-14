import { PLUGIN_INFO } from '../data/pluginData';
import { Compass, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white text-base block">{PLUGIN_INFO.name}</span>
              <span className="text-xs text-slate-400">{PLUGIN_INFO.title} برای وردپرس</span>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#hero" className="hover:text-white transition-colors">معرفی</a>
            <a href="#features" className="hover:text-white transition-colors">ویژگی‌های کلیدی</a>
            <a href="#workflow" className="hover:text-white transition-colors">فرآیند تعاملی</a>
            <a href="#installation" className="hover:text-white transition-colors">راهنمای نصب</a>
            <a href="#faq" className="hover:text-white transition-colors">سوالات متداول</a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            صفحه رسمی معرفی افزونه {PLUGIN_INFO.name} ({PLUGIN_INFO.title}) • نسخه {PLUGIN_INFO.version}
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>طراحی‌شده برای مدیریت بهتر محتوای وردپرس</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
