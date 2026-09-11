"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { site } from "@/lib/content";
import Image from "next/image";

export default function Hero() {
  const LOGO_URL =
    "https://res.cloudinary.com/dgc8cd67w/image/upload/v1788767437/outdor_pannel_qk6nti.avif";

  return (
    <section className="relative isolate overflow-hidden py-12 lg:py-20">
      <style>{`
        @keyframes hero-settle {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-item-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--gold) 45%, transparent); }
          50% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--gold) 0%, transparent); }
        }
        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes ambient-drift {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(10px) scale(1.05); opacity: 0.9; }
        }
        @keyframes logo-in {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      {/* faint ambient wash, now gently drifting instead of static */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-140 bg-[radial-gradient(closest-side,var(--paper-band),transparent)] opacity-70 animate-[ambient-drift_8s_ease-in-out_infinite] motion-reduce:animate-none"
      />

      <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Left Column: Hero Content */}
        <div className="hero-settle flex flex-col items-start opacity-0 animate-[hero-settle_0.6s_ease-out_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
          <div className="mb-5 inline-flex mx-auto md:mx-0 items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--gold)_25%,transparent)] bg-[color-mix(in_srgb,var(--gold)_12%,transparent)] px-3.5 py-1.5 text-[10px] md:text-[12px] font-semibold tracking-wide text-(--gold) opacity-0 animate-[hero-item-in_0.5s_ease-out_0.1s_forwards,badge-pulse_2.4s_ease-in-out_0.7s_infinite] motion-reduce:opacity-100 motion-reduce:animate-none">
            <span className="h-1.5 w-1.5 rounded-full bg-(--gold) animate-[dot-pulse_1.8s_ease-in-out_infinite] motion-reduce:animate-none" />
            <span>Christ Apostolic Church &middot; Walsall, UK</span>
          </div>

          <h1 className="mb-5 md:max-w-[12ch] text-center md:text-start text-[clamp(36px,5vw,56px)] font-semibold leading-[1.12] tracking-[-0.02em] text-(--ink) [font-family:var(--font-display)] opacity-0 animate-[hero-item-in_0.6s_ease-out_0.2s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
            {site.tagline}
          </h1>

          <p className="mb-9 max-w-[32em] text-center md:text-start text-sm leading-[1.65] text-(--text-muted) opacity-0 animate-[hero-item-in_0.6s_ease-out_0.32s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
            {site.intro}
          </p>

          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap opacity-0 animate-[hero-item-in_0.6s_ease-out_0.44s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
            <Link
              href="/visit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-sm bg-(--ink) px-7 py-3.5 text-sm text-(--paper) no-underline shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:w-auto"
            >
              <span>Visit us this Sunday</span>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/media"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-sm border border-(--line) bg-transparent px-5 py-3.5 text-sm font-medium text-(--ink) no-underline transition-colors duration-150 hover:border-(--ink) hover:bg-[color-mix(in_srgb,var(--ink)_4%,transparent)] sm:w-auto"
            >
              <Play
                size={16}
                fill="currentColor"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:scale-110"
              />
              <span>Watch online</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Church Logo */}
        <div className="hero-settle relative isolate flex items-center justify-center rounded-sm overflow-hidden border border-white/10 bg-(--ink) p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] sm:p-8 opacity-0 animate-[hero-settle_0.6s_ease-out_0.15s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
          <Image
            src={LOGO_URL}
            alt="Christ Apostolic Church Walsall logo"
            width={480}
            height={480}
            priority
            className="h-auto w-full max-w-[320px] rounded-sm object-contain opacity-0 animate-[logo-in_0.7s_ease-out_0.35s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none"
          />
        </div>
      </div>
    </section>
  );
}
