import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

// Placeholder — swap for the real latest sermon before this goes live.
const latestSermon = {
  speaker: "Pastor's Full Name",
  title: "Sermon Title Goes Here",
  date: "Sunday, September 7, 2026",
};

export default function LatestSermon() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <h2 className="font-(family-name:--font-display) font-medium text-3xl md:text-4xl tracking-tight text-(--ink) mb-10 md:mb-12">
        Grow Through the Word
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
        {/* Video thumbnail */}
        <div className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden bg-(--ink)">
          <button
            type="button"
            aria-label="Play latest sermon"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-(--paper)/95 shadow-lg transition-transform duration-150 group-hover:scale-105">
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
          <span className="block text-[13px] font-semibold tracking-wide text-(--gold) mb-3">
            Latest Message
          </span>

          <h3 className="font-(family-name:--font-display) font-medium text-2xl md:text-[1.75rem] text-(--ink) mb-3 leading-snug">
            {latestSermon.title}
          </h3>

          <p className="text-[15px] text-(--text-muted) mb-1">
            {latestSermon.speaker}
          </p>
          <p className="text-[15px] text-(--text-muted) mb-7">
            {latestSermon.date}
          </p>

          <div className="flex flex-wrap items-center gap-6">
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
