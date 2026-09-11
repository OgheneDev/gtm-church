import Image from "next/image";
import Link from "next/link";
import { ministries } from "@/lib/content";

export default function MinistryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {ministries.map((m) => (
          <div key={m.name} className="flex flex-col">
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-[#eae6da] mb-4">
              {m.image ? (
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] text-(--text-muted)/70 px-4 text-center">
                    Photo needed
                  </span>
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-(--ink) mb-2">
              {m.name}
            </h3>
            <p className="text-[14px] leading-relaxed text-(--text-muted) mb-3">
              {m.description}
            </p>
            <p className="text-[13px] text-(--text-muted)/80 mb-1">
              <span className="font-medium text-(--ink)">
                Who it&apos;s for:{" "}
              </span>
              {m.whoFor}
            </p>
            <p className="text-[13px] text-(--text-muted)/80 mb-4">
              <span className="font-medium text-(--ink)">Meets: </span>
              To be confirmed — ask us on your visit
            </p>

            <Link
              href="/visit-us"
              className="mt-auto inline-flex w-fit items-center text-sm font-medium text-(--ink) border-b border-(--gold) pb-0.5 no-underline"
            >
              Join now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
