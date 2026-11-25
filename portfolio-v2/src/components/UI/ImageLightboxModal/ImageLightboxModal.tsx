"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface ImageLightboxModalProps {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
  viewLabel?: string;
  closeLabel?: string;
  triggerVariant?: "overlay" | "button";
  icon?: string;
}

export function ImageLightboxModal({
  src,
  alt,
  caption,
  subcaption,
  viewLabel = "View image",
  closeLabel = "Close",
  triggerVariant = "overlay",
  icon = "lucide:maximize-2",
}: ImageLightboxModalProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {triggerVariant === "overlay" ? (
        <button
          type="button"
          onClick={openModal}
          aria-label={viewLabel}
          title={viewLabel}
          className="absolute right-3 top-3 z-10 inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xs transition-colors hover:bg-[#0C82FF]"
        >
          <Icon icon={icon} className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{viewLabel}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={openModal}
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0C82FF] px-4 py-2 text-xs font-medium text-white shadow-xs shadow-[#0C82FF]/20 transition-colors hover:bg-[#0C82FF]/90 sm:w-auto"
        >
          <Icon icon={icon} className="h-4 w-4" />
          <span>{viewLabel}</span>
        </button>
      )}

      {/* Portal Lightbox Modal rendered directly in document.body */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={closeModal}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs transition-opacity duration-200 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl transition-all duration-200 ease-out ${
                visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-3.5">
                <div className="min-w-0">
                  {caption && (
                    <h4 className="truncate text-sm font-semibold text-white">
                      {caption}
                    </h4>
                  )}
                  {subcaption && (
                    <p className="truncate text-xs text-slate-400">
                      {subcaption}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label={closeLabel}
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  <Icon icon="lucide:x" className="h-4 w-4" />
                  <span>{closeLabel}</span>
                </button>
              </div>

              {/* Full Image Container */}
              <div className="relative h-[65vh] w-full bg-slate-950 sm:h-[75vh]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain p-3"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}