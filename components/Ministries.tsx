"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ministries = [
  {
    name: "Kid's Ministry",
    description: "Helping children grow in faith and understand God's Word.",
  },
  {
    name: "Hospitality Ministry",
    description:
      "Welcomes worshippers at the door and cares for guests during the service.",
  },
  {
    name: "Choir Ministry",
    description:
      "Leads the congregation in praise and worship through music and song.",
  },
];

export default function Ministries() {
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
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
        @keyframes min-header-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes min-card-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes min-border-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div
        className={`mb-10 md:mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${
          inView
            ? "opacity-0 animate-[min-header-in_0.6s_ease-out_forwards]"
            : "opacity-0"
        } motion-reduce:opacity-100 motion-reduce:animate-none`}
      >
        <h2 className="font-(family-name:--font-display) font-medium text-3xl md:text-4xl tracking-tight text-(--ink)">
          Ministries
        </h2>
        <p className="text-[15px] text-(--text-muted) sm:max-w-xs sm:text-right">
          A place to belong and grow, whatever stage of life you're in.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mb-12">
        {ministries.map((m, i) => (
          <div
            key={m.name}
            style={
              inView ? { animationDelay: `${0.12 + i * 0.08}s` } : undefined
            }
            className={`group relative border-t border-(--line) pt-5 transition-colors duration-150 hover:border-(--gold) overflow-hidden ${
              inView
                ? "opacity-0 animate-[min-card-in_0.5s_ease-out_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            <span
              style={
                inView
                  ? { animationDelay: `${0.12 + i * 0.08 + 0.1}s` }
                  : undefined
              }
              className={`absolute top-0 left-0 h-px w-full bg-(--gold) origin-left scale-x-0 ${
                inView ? "animate-[min-border-grow_0.5s_ease-out_forwards]" : ""
              } motion-reduce:scale-x-100 motion-reduce:animate-none`}
            />
            <div className="mb-2 flex items-baseline gap-2.5">
              <h3 className="text-lg font-semibold text-(--ink)">{m.name}</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-(--text-muted)">
              {m.description}
            </p>
          </div>
        ))}
      </div>

      <div
        style={
          inView
            ? { animationDelay: `${0.12 + ministries.length * 0.08 + 0.1}s` }
            : undefined
        }
        className={`w-fit ${
          inView
            ? "opacity-0 animate-[min-header-in_0.5s_ease-out_forwards]"
            : "opacity-0"
        } motion-reduce:opacity-100 motion-reduce:animate-none`}
      >
        <Link
          href="/ministries"
          className="group inline-flex items-center gap-2 text-sm font-medium text-(--ink) no-underline border-b border-(--gold) pb-0.5"
        >
          Explore All Our Ministries
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
