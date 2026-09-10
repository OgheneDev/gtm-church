import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ministries = [
  {
    name: "Children",
    description: "Helping children grow in faith and understand God's Word.",
  },
  {
    name: "Youth",
    description: "Creating a community where young people can grow in Christ.",
  },
  {
    name: "Women",
    description: "Fellowship, encouragement and spiritual growth.",
  },
  {
    name: "Men",
    description: "Building godly men through fellowship and the Word.",
  },
  {
    name: "Young Adults",
    description: "Helping young adults navigate life and faith together.",
  },
  {
    name: "Prayer",
    description: "Coming together in faith and seeking God.",
  },
];

export default function Ministries() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="mb-10 md:mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
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
            className="group border-t border-(--line) pt-5 transition-colors duration-150 hover:border-(--gold)"
          >
            <div className="mb-2 flex items-baseline gap-2.5">
              <h3 className="text-lg font-semibold text-(--ink)">{m.name}</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-(--text-muted)">
              {m.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/ministries"
        className="group inline-flex items-center gap-2 text-sm font-medium text-(--ink) no-underline border-b border-(--gold) pb-0.5"
      >
        Explore Our Ministries
        <ArrowRight
          size={15}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </section>
  );
}
