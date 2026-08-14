import { useState } from 'react';
import { PLUGIN_INFO } from '../data/pluginData';
import { X, Download, CheckCircle2, Copy, Check, ArrowLeft, ShieldCheck, Key } from 'lucide-react';

interface PluginDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PluginDownloadModal({ isOpen, onClose }: PluginDownloadModalProps) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const pluginCodeSnippet = `/*
 * نام افزونه: ${PLUGIN_INFO.name}
 * نسخه: ${PLUGIN_INFO.version}
 * نسخه وردپرس: ${PLUGIN_INFO.wpVersion}
 */`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pluginCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatedDownload = () => {
    setDownloaded(true);
    // Create a dummy text blob representing the plugin package info for user test download
    const blob = new Blob([`Plugin Name: ${PLUGIN_INFO.name}\nTitle: ${PLUGIN_INFO.title}\nVersion: ${PLUGIN_INFO.version}\nWordPress: ${PLUGIN_INFO.wpVersion}`], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'seonama-content-assistant-plugin.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-600/20 font-bold">
            <Download className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-sky-700 font-semibold block">افزونه استاندارد وردپرس</span>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
              {PLUGIN_INFO.name}
            </h3>
            <span className="text-xs text-slate-500 font-medium">{PLUGIN_INFO.title}</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          جهت راه‌اندازی افزونه، فایل Zip را دانلود کرده و مستقیماً در پیشخوان سایت وردپرسی خود بارگذاری کنید.
        </p>

        {/* Download Box */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-600 pb-3 border-b border-slate-200/80">
            <span>نسخه انتشار: <strong className="text-slate-900">{PLUGIN_INFO.version}</strong></span>
            <span>سازگاری: <strong className="text-slate-900">{PLUGIN_INFO.wpVersion}</strong></span>
            <span>زبان: <strong className="text-sky-700">فارسی و RTL</strong></span>
          </div>

          <button
            onClick={handleSimulatedDownload}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-md shadow-sky-600/20 transition-all"
          >
            <Download className="w-5 h-5" />
            <span>{downloaded ? 'فایل دانلود شد (مجدد دانلود کنید)' : 'دانلود مستقیم فایل افزونه (ZIP)'}</span>
          </button>
        </div>

        {/* Installation Checklist */}
        <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>بارگذاری در پیشخوان: <strong>افزونه‌ها &gt; افزودن &gt; بارگذاری افزونه</strong></span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>وارد کردن کلید API در منوی تنظیمات (Gemini, OpenAI, DeepSeek و ...)</span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>کلیک روی دکمه اسکن هوشمند سایت و مدیریت فرصت‌های محتوا</span>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-700 transition-colors font-medium"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'کپی شد!' : 'کپی اطلاعات افزونه'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
          >
            بستن
          </button>
        </div>

      </div>
    </div>
  );
}
