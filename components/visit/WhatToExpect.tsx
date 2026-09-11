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
      <div className="max-w-300 mx-auto px-5 md:px-10 py-20 md:py-24">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-center text-center md:items-start md:text-start">
          <p className="text-[12px] font-bold tracking-wider text-(--gold) mb-3">
            First Time Here?
          </p>
          <h2 className="font-bold text-(--paper) text-3xl md:text-4xl mb-4 tracking-tight">
            What to Expect
          </h2>
          <p className="text-base leading-relaxed text-(--paper)/70 max-w-[42em]">
            You don&apos;t need to know exactly what to expect. Come as you are,
            meet our church family, and join us in worship.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-(--line) bg-white/5 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-(--gold)/50 hover:bg-white/10 hover:shadow-xl hover:shadow-(--gold)/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--gold)/10 text-(--gold) mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Icon size={24} aria-hidden="true" strokeWidth={1.5} />
              </div>

              <h3 className="font-semibold text-(--paper) text-lg mb-2.5 transition-colors duration-300 group-hover:text-white">
                {title}
              </h3>

              <p className="text-[14.5px] leading-relaxed text-(--paper)/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
