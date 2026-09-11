"use client";

import Link from "next/link";
import { ArrowRight, Play, Clock, MapPin, ExternalLink } from "lucide-react";
import { site } from "@/lib/content";

export default function Hero() {
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
        @keyframes card-glow-sweep {
          0% { transform: translate(-10%, -10%) rotate(0deg); }
          100% { transform: translate(-10%, -10%) rotate(360deg); }
        }
        @keyframes row-in {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes icon-pop {
          0% { transform: scale(0.6); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
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

          <p className="mb-9 max-w-[32em] text-center md:text-start text-[17px] leading-[1.65] text-(--text-muted) opacity-0 animate-[hero-item-in_0.6s_ease-out_0.32s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
            {site.intro}
          </p>

          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap opacity-0 animate-[hero-item-in_0.6s_ease-out_0.44s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
            <Link
              href="/visit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-(--ink) px-7 py-3.5 text-sm text-(--paper) no-underline shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:w-auto"
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
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-(--line) bg-transparent px-5 py-3.5 text-sm font-medium text-(--ink) no-underline transition-colors duration-150 hover:border-(--ink) hover:bg-[color-mix(in_srgb,var(--ink)_4%,transparent)] sm:w-auto"
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

        {/* Right Column: Service & Location Card */}
        <div className="hero-settle relative isolate flex flex-col overflow-hidden rounded-xl border border-white/10 bg-(--ink) p-6 text-(--paper) shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] sm:p-8 opacity-0 animate-[hero-settle_0.6s_ease-out_0.15s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
          <div className="relative z-10 flex flex-col gap-6">
            <span className="text-[17px] font-semibold text-(--gold) [font-family:var(--font-display)] opacity-0 animate-[hero-item-in_0.5s_ease-out_0.3s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
              Sunday worship
            </span>

            <div className="flex flex-col divide-y divide-white/10">
              <div className="flex items-start gap-3.5 pb-5 opacity-0 animate-[row-in_0.5s_ease-out_0.42s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,transparent)] animate-[icon-pop_0.5s_ease-out_0.5s_backwards] motion-reduce:animate-none">
                  <Clock
                    size={18}
                    className="text-(--gold)"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <span className="mb-0.5 block text-[13px] font-medium text-(--gold) opacity-90">
                    Service time
                  </span>
                  <p className="m-0 text-[15px] leading-relaxed">
                    {site.serviceTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 opacity-0 animate-[row-in_0.5s_ease-out_0.54s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,transparent)] animate-[icon-pop_0.5s_ease-out_0.62s_backwards] motion-reduce:animate-none">
                  <MapPin
                    size={18}
                    className="text-(--gold)"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <span className="mb-0.5 block text-[13px] font-medium text-(--gold) opacity-90">
                    Location
                  </span>
                  <p className="m-0 text-[15px] leading-relaxed">
                    {site.address.line1}, {site.address.line2}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${site.address.line1}, ${site.address.line2}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/8 p-3 text-sm text-(--paper) no-underline transition-colors duration-150 hover:border-[color-mix(in_srgb,var(--gold)_40%,transparent)] hover:bg-white/16 opacity-0 animate-[hero-item-in_0.5s_ease-out_0.68s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none"
            >
              Get directions
              <ExternalLink
                size={14}
                className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
