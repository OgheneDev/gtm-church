import Link from "next/link";
import { Clock, MapPin, ExternalLink, Video, Calendar } from "lucide-react";

export default function ServiceTimes() {
  return (
    <section className="w-full bg-(--ink) py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-(--gold)">
            <Calendar size={14} aria-hidden="true" strokeWidth={2} />
            Join Us This Week
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-(--paper) md:text-4xl [font-family:var(--font-display)]">
            Service Times &amp; Locations
          </h2>
        </div>

        {/* Joined Cards */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
          {/* Sunday Worship */}
          <div className="flex flex-col bg-(--ink) p-8 sm:p-9">
            <h3 className="mb-7 text-xl font-medium text-(--paper) [font-family:var(--font-display)]">
              Sunday Worship
            </h3>

            <div className="flex flex-grow flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold)">
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

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold)">
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

            <div className="mt-8 border-t border-white/10 pt-6">
              <Link
                href="https://maps.google.com/?q=75+Stafford+Street,+Walsall,+WS2+8DU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-(--gold)/10 px-5 py-2.5 text-sm font-medium text-(--gold) transition-colors hover:bg-(--gold)/15 md:w-auto"
              >
                Get Directions
                <ExternalLink size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Midweek Prayer */}
          <div className="flex flex-col bg-(--ink) p-8 sm:p-9">
            <h3 className="mb-7 text-xl font-medium text-(--paper) [font-family:var(--font-display)]">
              Midweek Prayer
            </h3>

            <div className="flex flex-grow flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold)">
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

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold)">
                  <Video size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-wide text-(--paper)/45">
                    Location
                  </p>
                  <p className="m-0 text-base text-(--paper)/90">
                    Online via Zoom
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <Link
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/5 px-5 py-2.5 text-sm font-medium text-(--paper)/90 transition-colors hover:bg-white/10 md:w-auto"
              >
                Join Meeting
                <ExternalLink size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
