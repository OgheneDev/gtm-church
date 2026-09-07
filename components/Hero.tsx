"use client";

import Link from "next/link";
import { ArrowRight, Play, Clock, MapPin, ExternalLink } from "lucide-react";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-12 lg:py-20">
      {/* faint ambient wash, built from an existing token, not a new accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-140 bg-[radial-gradient(closest-side,var(--paper-band),transparent)] opacity-70"
      />

      <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Left Column: Hero Content */}
        <div className="hero-settle flex flex-col items-start">
          <div className="mb-5 inline-flex mx-auto md:mx-0 items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--gold)_25%,transparent)] bg-[color-mix(in_srgb,var(--gold)_12%,transparent)] px-3.5 py-1.5 text-[10px] md:text-[12px] font-semibold tracking-wide text-(--gold)">
            <span className="h-1.5 w-1.5 rounded-full bg-(--gold)" />
            <span>Christ Apostolic Church &middot; Walsall, UK</span>
          </div>

          <h1 className="mb-5 max-w-[12ch] text-center md:text-start text-[clamp(36px,5vw,56px)] font-semibold leading-[1.12] tracking-[-0.02em] text-(--ink) [font-family:var(--font-display)]">
            {site.tagline}
          </h1>

          <p className="mb-9 max-w-[32em] text-center md:text-start text-[17px] leading-[1.65] text-(--text-muted)">
            {site.intro}
          </p>

          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/visit"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-(--ink) px-7 py-3.5 text-sm text-(--paper) no-underline shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:w-auto"
            >
              <span>Visit us this Sunday</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href="/media"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-(--line) bg-transparent px-5 py-3.5 text-sm font-medium text-(--ink) no-underline transition-colors duration-150 hover:border-(--ink) hover:bg-[color-mix(in_srgb,var(--ink)_4%,transparent)] sm:w-auto"
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              <span>Watch online</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Service & Location Card */}
        <div className="hero-settle relative isolate flex flex-col overflow-hidden rounded-xl border border-white/10 bg-(--ink) p-6 text-(--paper) shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] sm:p-8 [animation-delay:120ms]">
          {/* decorative gold light, tucked in a corner rather than washed across the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-(--gold) opacity-[0.16] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.75 bg-linear-to-r from-transparent via-(--gold) to-transparent"
          />

          <div className="relative z-10 flex flex-col gap-6">
            <span className="text-[17px] font-semibold text-(--gold) [font-family:var(--font-display)]">
              Sunday worship
            </span>

            <div className="flex flex-col divide-y divide-white/10">
              <div className="flex items-start gap-3.5 pb-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,transparent)]">
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

              <div className="flex items-start gap-3.5 pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,transparent)]">
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
              className="group flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/8 p-3 text-sm text-(--paper) no-underline transition-colors duration-150 hover:border-[color-mix(in_srgb,var(--gold)_40%,transparent)] hover:bg-white/16"
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
