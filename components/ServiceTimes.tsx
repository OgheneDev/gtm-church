"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Clock, MapPin, ExternalLink, Video, Calendar } from "lucide-react";

export default function ServiceTimes() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Once it's visible, trigger the reveal and stop watching.
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
    <section ref={sectionRef} className="w-full bg-(--ink) py-20 lg:py-28">
      <style>{`
        @keyframes st-header-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes st-card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes st-row-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes st-icon-pop {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes st-cal-nudge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-14 flex flex-col items-center text-center md:items-start md:text-left ${
            inView
              ? "opacity-0 animate-[st-header-in_0.6s_ease-out_forwards]"
              : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:animate-none`}
        >
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-(--gold)">
            <Calendar
              size={14}
              aria-hidden="true"
              strokeWidth={2}
              className={
                inView
                  ? "animate-[st-cal-nudge_2s_ease-in-out_0.6s_infinite] motion-reduce:animate-none"
                  : ""
              }
            />
            Join Us This Week
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-(--paper) md:text-5xl [font-family:var(--font-display)]">
            Service Times &amp; Locations
          </h2>
        </div>

        {/* Joined Cards */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
          {/* Sunday Worship */}
          <div
            className={`flex flex-col bg-(--ink) p-8 sm:p-9 ${
              inView
                ? "opacity-0 animate-[st-card-in_0.55s_ease-out_0.15s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            <h3 className="mb-7 text-xl font-medium text-(--paper) [font-family:var(--font-display)]">
              Sunday Worship
            </h3>

            <div className="flex flex-grow flex-col gap-5">
              <div
                className={`flex items-start gap-3.5 ${
                  inView
                    ? "opacity-0 animate-[st-row-in_0.45s_ease-out_0.32s_forwards]"
                    : "opacity-0"
                } motion-reduce:opacity-100 motion-reduce:animate-none`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold) ${
                    inView
                      ? "animate-[st-icon-pop_0.5s_ease-out_0.4s_backwards]"
                      : "opacity-0"
                  } motion-reduce:opacity-100 motion-reduce:animate-none`}
                >
                  <Clock size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wide text-(--paper)/45">
                    Time
                  </p>
                  <p className="m-0 text-base text-(--paper)/90">
                    10:00 AM &ndash; 12:30 PM
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3.5 ${
                  inView
                    ? "opacity-0 animate-[st-row-in_0.45s_ease-out_0.44s_forwards]"
                    : "opacity-0"
                } motion-reduce:opacity-100 motion-reduce:animate-none`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold) ${
                    inView
                      ? "animate-[st-icon-pop_0.5s_ease-out_0.52s_backwards]"
                      : "opacity-0"
                  } motion-reduce:opacity-100 motion-reduce:animate-none`}
                >
                  <MapPin size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wide text-(--paper)/45">
                    Location
                  </p>
                  <p className="m-0 text-base text-(--paper)/90">
                    75 Stafford Street
                    <br />
                    Walsall, WS2 8DU
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-8 border-t border-white/10 pt-6 ${
                inView
                  ? "opacity-0 animate-[st-row-in_0.45s_ease-out_0.58s_forwards]"
                  : "opacity-0"
              } motion-reduce:opacity-100 motion-reduce:animate-none`}
            >
              <Link
                href="https://maps.google.com/?q=75+Stafford+Street,+Walsall,+WS2+8DU"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-(--gold)/10 px-5 py-2.5 text-sm font-medium text-(--gold) transition-colors hover:bg-(--gold)/15 md:w-auto"
              >
                Get Directions
                <ExternalLink
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Midweek Prayer */}
          <div
            className={`flex flex-col bg-(--ink) p-8 sm:p-9 ${
              inView
                ? "opacity-0 animate-[st-card-in_0.55s_ease-out_0.25s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            <h3 className="mb-7 text-xl font-medium text-(--paper) [font-family:var(--font-display)]">
              Midweek Prayer
            </h3>

            <div className="flex flex-grow flex-col gap-5">
              <div
                className={`flex items-start gap-3.5 ${
                  inView
                    ? "opacity-0 animate-[st-row-in_0.45s_ease-out_0.42s_forwards]"
                    : "opacity-0"
                } motion-reduce:opacity-100 motion-reduce:animate-none`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold) ${
                    inView
                      ? "animate-[st-icon-pop_0.5s_ease-out_0.5s_backwards]"
                      : "opacity-0"
                  } motion-reduce:opacity-100 motion-reduce:animate-none`}
                >
                  <Clock size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wide text-(--paper)/45">
                    Time
                  </p>
                  <p className="m-0 text-base text-(--paper)/90">
                    Wednesdays &bull; 7:00 PM
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3.5 ${
                  inView
                    ? "opacity-0 animate-[st-row-in_0.45s_ease-out_0.54s_forwards]"
                    : "opacity-0"
                } motion-reduce:opacity-100 motion-reduce:animate-none`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold) ${
                    inView
                      ? "animate-[st-icon-pop_0.5s_ease-out_0.62s_backwards]"
                      : "opacity-0"
                  } motion-reduce:opacity-100 motion-reduce:animate-none`}
                >
                  <MapPin size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wide text-(--paper)/45">
                    Location
                  </p>
                  <p className="m-0 text-base text-(--paper)/90">
                    75 Stafford Street
                    <br />
                    Walsall, WS2 8DU
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-8 border-t border-white/10 pt-6 ${
                inView
                  ? "opacity-0 animate-[st-row-in_0.45s_ease-out_0.68s_forwards]"
                  : "opacity-0"
              } motion-reduce:opacity-100 motion-reduce:animate-none`}
            >
              <Link
                href="https://maps.google.com/?q=75+Stafford+Street,+Walsall,+WS2+8DU"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-(--gold)/10 px-5 py-2.5 text-sm font-medium text-(--gold) transition-colors hover:bg-(--gold)/15 md:w-auto"
              >
                Get Directions
                <ExternalLink
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
