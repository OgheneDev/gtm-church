import Image from "next/image";
import Link from "next/link";
import { ministries } from "@/lib/content";

export default function MinistryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {ministries.map((m) => (
          <article key={m.name} className="group flex flex-col h-full">
            {/* Image Container with Hover Zoom */}
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#eae6da]/50 mb-5 border border-black/5">
              {m.image ? (
                <Image
                  src={m.image}
                  alt={`Photo of ${m.name} ministry`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-[#eae6da] rounded-xl m-2 bg-white/50">
                  <svg
                    className="w-6 h-6 text-(--text-muted)/40 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs font-medium text-(--text-muted)/60 uppercase tracking-wider">
                    Photo needed
                  </span>
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="flex flex-col grow">
              <h3 className="text-xl font-bold text-(--ink) mb-2.5 transition-colors group-hover:text-(--gold)">
                {m.name}
              </h3>

              <p className="text-[15px] leading-relaxed text-(--text-muted) mb-5">
                {m.description}
              </p>

              {/* Metadata Block */}
              <div className="flex flex-col gap-2.5 mb-6 text-[13px] text-(--text-muted)/80">
                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 shrink-0 mt-0.5 text-(--gold)"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-(--ink)">
                      For:{" "}
                    </strong>
                    {m.whoFor}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 shrink-0 mt-0.5 text-(--gold)"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-(--ink)">
                      Meets:{" "}
                    </strong>
                    To be confirmed — ask us on your visit
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <Link
                href="/visit-us"
                className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-(--ink) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--gold) rounded-sm group/link"
              >
                <span className="border-b-2 border-transparent group-hover/link:border-(--gold) transition-colors pb-0.5">
                  Join now
                </span>
                <svg
                  className="w-4 h-4 text-(--gold) transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
