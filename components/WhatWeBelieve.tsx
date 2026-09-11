"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWeBelieve() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-(--paper-band) border-y border-(--line)"
    >
      <style>{`
        @keyframes wwb-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wwb-line-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2
          className={`font-semibold text-3xl md:text-4xl tracking-tight text-(--ink) mb-5 ${
            inView
              ? "opacity-0 animate-[wwb-in_0.6s_ease-out_forwards]"
              : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:animate-none`}
        >
          Rooted in God&apos;s Word
        </h2>

        <p
          className={`text-sm leading-[1.75] text-(--text-muted) mb-8 max-w-[36em] mx-auto ${
            inView
              ? "opacity-0 animate-[wwb-in_0.6s_ease-out_0.12s_forwards]"
              : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:animate-none`}
        >
          We are a Bible-believing Christian church committed to the teaching of
          Scripture, the work of the Holy Spirit, and the Gospel of Jesus
          Christ.
        </p>

        <div
          className={`inline-block ${
            inView
              ? "opacity-0 animate-[wwb-in_0.6s_ease-out_0.24s_forwards]"
              : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:animate-none`}
        >
          <Link
            href="/about-us"
            className="group relative inline-flex items-center gap-2 text-sm font-medium text-(--ink) no-underline pb-0.5"
          >
            What We Believe
            <ArrowRight
              size={15}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-(--gold) origin-left ${
                inView
                  ? "scale-x-0 animate-[wwb-line-grow_0.5s_ease-out_0.5s_forwards]"
                  : "scale-x-0"
              } motion-reduce:scale-x-100 motion-reduce:animate-none group-hover:scale-x-100 transition-transform duration-200`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
