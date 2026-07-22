"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* A "[ screenshot ]" link that pops the image in a retro CRT viewer --
   grayscale + scanlines (see .crt in globals.css), a terminal-style
   title bar, esc / click-away to close. It's a real <a href> to the
   image, so with JS off it just opens the file; JS upgrades it to the
   overlay. */
export default function Screenshot({
  src,
  alt,
  width,
  height,
  name,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  name: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="underline"
      >
        [ screenshot ]
      </a>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshot`}
          onClick={() => setOpen(false)}
          className="term fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full flex-col border border-fg-dim/40"
          >
            {/* terminal-style title bar */}
            <div className="flex items-center justify-between gap-6 border-b border-fg-dim/40 px-2 py-1 text-fg-dim">
              <span className="truncate">{name}.png</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 underline"
              >
                [ esc ]
              </button>
            </div>
            <div className="crt">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="block max-h-[75vh] w-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
