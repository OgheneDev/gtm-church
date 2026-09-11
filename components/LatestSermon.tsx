"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

// Placeholder — swap for the real latest sermon before this goes live.
const latestSermon = {
  speaker: "Pastor's Full Name",
  title: "Sermon Title Goes Here",
  date: "Sunday, September 7, 2026",
};

export default function LatestSermon() {
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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
    >
      <style>{`
        @keyframes ls-header-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ls-video-in {
          from { opacity: 0; transform: translateX(-24px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes ls-detail-in {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes ls-item-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ls-play-ring {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.35); }
          100% { box-shadow: 0 0 0 14px rgba(255,255,255,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <h2
        className={`font-(family-name:--font-display) font-medium text-3xl md:text-4xl tracking-tight text-(--ink) mb-10 md:mb-12 ${
          inView
            ? "opacity-0 animate-[ls-header-in_0.6s_ease-out_forwards]"
            : "opacity-0"
        } motion-reduce:opacity-100 motion-reduce:animate-none`}
      >
        Grow Through the Word
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
        {/* Video thumbnail */}
        <div
          className={`relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden bg-(--ink) ${
            inView
              ? "opacity-0 animate-[ls-video-in_0.7s_ease-out_0.1s_forwards]"
              : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:animate-none`}
        >
          <button
            type="button"
            aria-label="Play latest sermon"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-(--paper)/95 shadow-lg transition-transform duration-150 group-hover:scale-105">
              <span
                aria-hidden="true"
                className={`absolute inset-0 rounded-full ${
                  inView
                    ? "animate-[ls-play-ring_2.4s_ease-out_1s_infinite]"
                    : ""
                } motion-reduce:animate-none`}
              />
              <Play
                size={22}
                className="ml-1 text-(--ink)"
                fill="currentColor"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>

        {/* Details */}
        <div>
          <span
            className={`block text-[13px] font-semibold tracking-wide text-(--gold) mb-3 ${
              inView
                ? "opacity-0 animate-[ls-detail-in_0.55s_ease-out_0.2s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            Latest Message
          </span>

          <h3
            className={`font-(family-name:--font-display) font-medium text-2xl md:text-[1.75rem] text-(--ink) mb-3 leading-snug ${
              inView
                ? "opacity-0 animate-[ls-detail-in_0.55s_ease-out_0.3s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            {latestSermon.title}
          </h3>

          <p
            className={`text-[15px] text-(--text-muted) mb-1 ${
              inView
                ? "opacity-0 animate-[ls-item-in_0.5s_ease-out_0.4s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            {latestSermon.speaker}
          </p>
          <p
            className={`text-[15px] text-(--text-muted) mb-7 ${
              inView
                ? "opacity-0 animate-[ls-item-in_0.5s_ease-out_0.48s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            {latestSermon.date}
          </p>

          <div
            className={`flex flex-wrap items-center gap-6 ${
              inView
                ? "opacity-0 animate-[ls-item-in_0.5s_ease-out_0.58s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            <Link
              href="/media"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-(--ink) px-7 py-3.5 text-sm text-(--paper) no-underline transition-opacity duration-150 hover:opacity-90"
            >
              Watch Sermon
            </Link>

            <Link
              href="/media"
              className="group inline-flex items-center gap-2 text-sm font-medium text-(--ink) no-underline border-b border-(--gold) pb-0.5"
            >
              View All Sermons
              <ArrowRight
                size={15}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
