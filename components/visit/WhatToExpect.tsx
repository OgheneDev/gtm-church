import { Music, BookOpen, Users, HandHeart } from "lucide-react";

const cards = [
  {
    icon: Music,
    title: "Worship",
    description: "Experience a time of praise and worship.",
  },
  {
    icon: BookOpen,
    title: "The Word",
    description: "Hear biblical teaching relevant to everyday life.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Meet people and become part of the church family.",
  },
  {
    icon: HandHeart,
    title: "Prayer",
    description: "Join us as we seek God together.",
  },
];

export default function WhatToExpect() {
  return (
    <section className="bg-(--ink)">
      <div className="bg-(--ink) max-w-[1180px] mx-auto px-5 md:px-10 py-16">
        <p className="text-[13px] font-medium text-(--gold) mb-3">
          First Time Here?
        </p>
        <h2 className="font-semibold text-(--paper) text-2xl md:text-[28px] mb-3">
          What to Expect
        </h2>
        <p className="text-[15px] leading-relaxed text-(--paper)/70 mb-10 max-w-[42em]">
          You don&apos;t need to know exactly what to expect. Come as you are,
          meet our church family, and join us in worship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-lg border border-(--line) p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--gold)/10 text-(--gold) mb-4">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-(--paper) text-base mb-2">
                {title}
              </h3>
              <p className="text-[14px] leading-relaxed text-(--paper)/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
