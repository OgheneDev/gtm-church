import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWeBelieve() {
  return (
    <section className="w-full bg-(--paper-band) border-y border-(--line)">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-(family-name:--font-display) font-medium text-3xl md:text-4xl tracking-tight text-(--ink) mb-5">
          Rooted in God&apos;s Word
        </h2>

        <p className="text-[15px] sm:text-base leading-[1.75] text-(--text-muted) mb-8 max-w-[36em] mx-auto">
          We are a Bible-believing Christian church committed to the teaching of
          Scripture, the work of the Holy Spirit, and the Gospel of Jesus
          Christ.
        </p>

        <Link
          href="/about"
          className="group inline-flex items-center gap-2 text-sm font-medium text-(--ink) no-underline border-b border-(--gold) pb-0.5"
        >
          What We Believe
          <ArrowRight
            size={15}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
