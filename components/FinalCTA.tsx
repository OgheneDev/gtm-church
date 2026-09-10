import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative isolate w-full bg-(--paper) py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-0.75 bg-linear-to-r from-transparent via-(--gold) to-transparent"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-(family-name:--font-display) font-medium text-3xl md:text-[2.75rem] tracking-tight text-(--ink) mb-6 leading-[1.15]">
          There&apos;s a place for you here.
        </h2>

        <p className="text-base md:text-lg leading-relaxed text-(--text-muted) mb-10 max-w-[36em] mx-auto">
          Whether you&apos;re joining us for the first time or looking for a
          church family, we&apos;d love to welcome you.
        </p>

        <Link
          href="/visit"
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-(--ink) px-8 py-4 text-sm text-(--paper) no-underline shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
        >
          Plan Your Visit
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
