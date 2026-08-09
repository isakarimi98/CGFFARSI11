import { useState, ChangeEvent } from 'react';
import { SCREENSHOT_SLOTS } from '../data/pluginData';
import { ScreenshotSlot } from '../types';
import {
  Image as ImageIcon,
  Upload,
  Maximize2,
  X,
  CheckCircle2,
  Monitor,
} from 'lucide-react';

export function ScreenshotsShowcase() {
  const [slots, setSlots] = useState<ScreenshotSlot[]>(SCREENSHOT_SLOTS);
  const [activeModalSlot, setActiveModalSlot] = useState<ScreenshotSlot | null>(null);

  // Allow uploading custom real screenshot file for browser preview
  const handleImageUpload = (slotId: string, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSlots((prev) =>
        prev.map((s) => (s.id === slotId ? { ...s, customImageUrl: imageUrl } : s))
      );
      if (activeModalSlot?.id === slotId) {
        setActiveModalSlot((prev) => (prev ? { ...prev, customImageUrl: imageUrl } : null));
      }
    }
  };

  const removeCustomImage = (slotId: string) => {
    setSlots((prev) =>
      prev.map((s) => (s.id === slotId ? { ...s, customImageUrl: undefined } : s))
    );
    if (activeModalSlot?.id === slotId) {
      setActiveModalSlot((prev) => (prev ? { ...prev, customImageUrl: undefined } : null));
    }
  };

  return (
    <section id="screenshots" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-3">
            <Monitor className="w-3.5 h-3.5 text-sky-600" />
            <span>پیشخوان وردپرس</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            مشاهده تصاویر محیط واقعی افزونه
          </h2>
        </div>

        {/* Grid of Screenshot Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col"
            >
              {/* Fake Browser / WordPress Admin Window Header Frame */}
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
                  Screenshot {slot.slotNumber}
                </span>
              </div>

              {/* Placeholder Card Body or Custom Image View */}
              <div className="relative aspect-16/10 bg-slate-100/90 flex flex-col items-center justify-center p-6 border-b border-slate-100 overflow-hidden group">
                {slot.customImageUrl ? (
                  <>
                    <img
                      src={slot.customImageUrl}
                      alt={slot.title}
                      className="w-full h-full object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => setActiveModalSlot(slot)}
                        className="p-2.5 rounded-xl bg-white text-slate-900 hover:bg-sky-50 shadow-md transition-colors"
                        title="بزرگ‌نمایی"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => removeCustomImage(slot.id)}
                        className="p-2.5 rounded-xl bg-rose-600 text-white hover:bg-rose-700 shadow-md transition-colors"
                        title="حذف تصویر"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3 border border-sky-200/80 group-hover:scale-110 transition-transform duration-200">
                      <ImageIcon className="w-7 h-7" />
                    </div>
                    <span className="block font-bold text-slate-800 text-sm mb-1">
                      تصویر محیط افزونه
                    </span>
                    <span className="inline-block text-xs text-slate-500 mb-3 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      جایگاه شماره {slot.slotNumber}
                    </span>
                    <p className="text-[11px] text-slate-400">
                      ابعاد پیشنهادی: {slot.suggestedDimensions}
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-2">
                      <button
                        onClick={() => setActiveModalSlot(slot)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-sky-700 border border-sky-200 hover:bg-sky-50 transition-colors shadow-2xs"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>جزئیات و بزرگ‌نمایی</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Slot Info Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
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

                {/* Upload Action Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800 font-semibold py-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>بارگذاری تصویر این بخش</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(slot.id, e)}
                    />
                  </label>
                  <span className="text-[11px] text-slate-400">فرمت PNG / JPG</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Slot Details */}
      {activeModalSlot && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveModalSlot(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                جایگاه اسکرین‌شات شماره {activeModalSlot.slotNumber}
              </span>
              <span className="text-xs text-slate-400">
                ابعاد پیشنهادی: {activeModalSlot.suggestedDimensions}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {activeModalSlot.title}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {activeModalSlot.description}
            </p>

            {/* Display custom image or clean upload zone inside modal */}
            <div className="border-2 border-dashed border-sky-200 rounded-2xl bg-slate-50 p-6 text-center min-h-[300px] flex flex-col items-center justify-center mb-6">
              {activeModalSlot.customImageUrl ? (
                <div className="relative w-full h-full">
                  <img
                    src={activeModalSlot.customImageUrl}
                    alt={activeModalSlot.title}
                    className="max-h-[400px] mx-auto object-contain rounded-xl shadow-md"
                  />
                  <p className="text-xs text-emerald-600 font-semibold mt-3 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    تصویر واقعی بارگذاری شد
                  </p>
                </div>
              ) : (
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-4 border border-sky-200">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">
                    بارگذاری اسکرین‌شات واقعی این بخش
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                    جهت مشاهده ظاهر نهایی صفحه معرفی با تصویر واقعی افزونه خود، می‌توانید فایل اسکرین‌شات را انتخاب کنید.
                  </p>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold shadow-sm transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>انتخاب تصویر از کامپیوتر</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(activeModalSlot.id, e)}
                    />
                  </label>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModalSlot(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
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
