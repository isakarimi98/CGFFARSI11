import { useState, useEffect } from 'react';
import { PLUGIN_INFO } from '../data/pluginData';
import { Compass, Menu, X, Sparkles, Info, Monitor, Wrench, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onCtaClick?: () => void;
}

export function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'معرفی افزونه', href: '#hero', icon: <Info className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" /> },
    { name: 'ویژگی‌های کلیدی', href: '#features', icon: <Sparkles className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" /> },
    { name: 'راهنمای نصب', href: '#installation', icon: <Wrench className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" /> },
    { name: 'سوالات متداول', href: '#faq', icon: <HelpCircle className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md shadow-sky-900/5 border-b border-white/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 md:gap-16 lg:gap-24">
          
          {/* Brand Logo & Title - Distinct Modern Typography with Generous Spacing */}
          <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-sky-500/25 group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shrink-0 border border-white/40">
              <Compass className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            
            {/* Title & Badge Layout */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="font-black text-slate-900 text-lg sm:text-xl lg:text-2xl tracking-tight group-hover:text-sky-600 transition-colors">
                  {PLUGIN_INFO.name}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-100/80 text-sky-800 border border-sky-200/90 shadow-2xs backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  افزونه وردپرس
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 mt-0.5 hidden sm:block">
                {PLUGIN_INFO.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Glassmorphism Card Container */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-bold text-slate-700 hover:text-sky-700 bg-white/40 hover:bg-white hover:shadow-md hover:shadow-sky-500/10 border border-transparent hover:border-sky-200/80 transition-all duration-200 backdrop-blur-sm"
              >
                {link.icon}
                <span className="tracking-tight">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl text-slate-700 hover:text-sky-600 bg-white/80 hover:bg-white backdrop-blur-md transition-all duration-200 border border-slate-200/80 shadow-sm"
            aria-label="منو"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown - Glassmorphism Styled Card */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-3 bg-white/90 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-white/80 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-sm font-bold text-slate-800 hover:text-sky-600 hover:bg-sky-50/80 p-3 rounded-xl border border-slate-100/80 transition-colors"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


