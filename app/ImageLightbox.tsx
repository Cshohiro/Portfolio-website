"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
}

export default function ImageLightbox({ src, alt }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={`${alt}を拡大表示`}
        className="group block w-full overflow-hidden border border-[color:var(--color-border)] bg-white text-left transition hover:border-[color:var(--color-border-strong)] focus:outline-none focus-visible:border-[color:var(--color-accent)]"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-[lightboxFade_180ms_ease-out_forwards]"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="拡大画像を閉じる"
            className="absolute right-4 top-4 border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:border-[color:var(--color-accent)]"
            onClick={() => setOpen(false)}
          >
            Close
          </button>

          <div
            className="max-h-[86vh] w-full max-w-6xl overflow-hidden bg-white p-2 shadow-2xl animate-[lightboxZoom_220ms_ease-out_forwards]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1200}
              className="max-h-[82vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
