// components/About.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 lg:gap-16 items-center">
        {/* Image Container */}
        <div className="relative w-full aspect-4/3 rounded-lg md:rounded-xl overflow-hidden bg-[#eae6da] shadow-sm">
          {/* Replace with a real photo of the congregation or building. */}
          <Image
            src="https://static.wixstatic.com/media/77b1e2_7c59786db27c4af89ae79b88f40ffb99~mv2.jpg"
            alt="CAC Grace & Truth congregation"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="font-(family-name:--font-display) font-medium text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight text-(--ink) mb-5 md:mb-6">
            {about.heading}
          </h2>

          <div className="space-y-4 md:space-y-5 mb-7 md:mb-8">
            {about.paragraphs.map((p, index) => (
              <p
                key={index}
                className="text-[15px] sm:text-base leading-[1.75] text-(--text-muted)"
              >
                {p}
              </p>
            ))}
          </div>

          <Link
            href="/about-us"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-(--ink) no-underline border-b border-(--gold) pb-0.5"
          >
            Learn More About Us
            <ArrowRight
              size={15}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
