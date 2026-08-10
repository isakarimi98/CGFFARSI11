import { useState } from 'react';
import { SCREENSHOT_SLOTS } from '../data/pluginData';
import { ScreenshotSlot } from '../types';
import {
  Maximize2,
  X,
  Monitor,
} from 'lucide-react';

export function ScreenshotsShowcase() {
  const [activeModalSlot, setActiveModalSlot] = useState<ScreenshotSlot | null>(null);

  return (
    <section id="screenshots" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Monitor className="w-3.5 h-3.5 text-sky-600" />
            <span>تصاویر پیشخوان وردپرس</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            تصاویر اسکرین‌شات محیط واقعی افزونه
          </h2>
        </div>

        {/* Grid of 3 Screenshot Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCREENSHOT_SLOTS.map((slot) => (
            <div
              key={slot.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col"
            >
              {/* WordPress Admin Window Header Frame */}
              <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mr-2 border-r border-slate-700 pr-2">
                    WordPress Admin / {slot.title}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800/60">
                  تصویر {slot.slotNumber}
                </span>
              </div>

              {/* Clean Image Container - Fixed 1:1 Square Ratio */}
              <div 
                onClick={() => setActiveModalSlot(slot)}
                className="relative aspect-square w-full bg-slate-50 flex items-center justify-center overflow-hidden cursor-pointer group"
              >
                <img
                  src={slot.imageUrl}
                  alt={slot.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                />
                
                {/* Clean Hover Overlay with Zoom Button */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-slate-900 shadow-md flex items-center gap-2 text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4 text-sky-600" />
                    <span>مشاهده تصویر کامل</span>
                  </div>
                </div>
              </div>

              {/* Card Info Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {slot.title}
                  </h3>
                  <p className="text-xs text-sky-700 font-medium mb-2">
                    {slot.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {slot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for High-Res View */}
      {activeModalSlot && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 max-h-[92vh] flex flex-col overflow-y-auto">
            <button
              onClick={() => setActiveModalSlot(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
              title="بستن"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                تصویر محیط افزونه - {activeModalSlot.title}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              {activeModalSlot.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-5">
              {activeModalSlot.subtitle}
            </p>

            {/* Display full screenshot in fixed 1:1 Square Frame */}
            <div className="rounded-2xl bg-slate-900/5 p-3 border border-slate-200 overflow-hidden mb-6 flex items-center justify-center">
              <div className="relative w-full max-w-[560px] aspect-square mx-auto flex items-center justify-center bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden p-1">
                <img
                  src={activeModalSlot.imageUrl}
                  alt={activeModalSlot.title}
                  className="w-full h-full object-contain rounded-lg bg-slate-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                {activeModalSlot.description}
              </p>
              <button
                onClick={() => setActiveModalSlot(null)}
                className="px-6 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors shrink-0"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
