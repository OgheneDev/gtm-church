"use client";

import { useEffect, useRef, useState } from "react";
import { monthlyTheme, upcomingEvents } from "@/lib/content";

export default function AnnouncementsStrip() {
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
      { threshold: 0.4, rootMargin: "0px 0px -40px 0px" },
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
        @keyframes strip-item-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-(--line)/50">
          {/* Monthly Theme */}
          <div
            className={`flex-1 min-w-45 pt-3 md:pt-0 first:pt-0 ${
              inView
                ? "opacity-0 animate-[strip-item-in_0.45s_ease-out_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            <span className="block text-[11px] font-semibold tracking-wider text-[#8a7a52] uppercase mb-1">
              {monthlyTheme.label}
            </span>
            <p className="text-sm sm:text-base font-medium text-(--ink) leading-snug">
              {monthlyTheme.title}
            </p>
          </div>

          {/* Upcoming Events */}
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title || index}
              style={
                inView
                  ? { animationDelay: `${0.08 + (index + 1) * 0.08}s` }
                  : undefined
              }
              className={`flex-1 min-w-45 pt-4 md:pt-0 md:pl-8 first:pt-0 ${
                inView
                  ? "opacity-0 animate-[strip-item-in_0.45s_ease-out_forwards]"
                  : "opacity-0"
              } motion-reduce:opacity-100 motion-reduce:animate-none`}
            >
              <span className="block text-[11px] font-semibold tracking-wider text-[#8a7a52] uppercase mb-1">
                Upcoming
              </span>
              <p className="text-sm sm:text-base font-medium text-(--ink) leading-snug">
                <span>{event.title}</span>
                <span className="block sm:inline text-xs sm:text-sm font-normal text-(--ink)/70 sm:ml-2">
                  &mdash; {event.when}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
