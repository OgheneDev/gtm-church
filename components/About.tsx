"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { about } from "@/lib/content";

export default function About() {
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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-21 py-16 md:py-20 lg:py-24"
    >
      <style>{`
        @keyframes about-img-in {
          from { opacity: 0; transform: translateX(-24px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes about-text-in {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes about-item-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 lg:gap-16 items-center">
        {/* Image Container */}
        <div
          className={`relative w-full aspect-4/3 rounded-lg md:rounded-xl overflow-hidden bg-[#eae6da] shadow-sm ${
            inView
              ? "opacity-0 animate-[about-img-in_0.7s_ease-out_forwards]"
              : "opacity-0"
          } motion-reduce:opacity-100 motion-reduce:animate-none`}
        >
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
          <h1
            className={` text-center md:text-start font-semibold text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight text-(--ink) mb-5 md:mb-6 ${
              inView
                ? "opacity-0 animate-[about-text-in_0.6s_ease-out_0.1s_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
            {about.heading}
          </h1>

          <div className="space-y-4 md:space-y-5 mb-7 md:mb-8">
            {about.paragraphs.map((p, index) => (
              <p
                key={index}
                style={
                  inView
                    ? { animationDelay: `${0.22 + index * 0.1}s` }
                    : undefined
                }
                className={`text-sm text-center md:text-start leading-[1.75] text-(--text-muted) ${
                  inView
                    ? "opacity-0 animate-[about-item-in_0.5s_ease-out_forwards]"
                    : "opacity-0"
                } motion-reduce:opacity-100 motion-reduce:animate-none`}
              >
                {p}
              </p>
            ))}
          </div>

          <div
            style={
              inView
                ? {
                    animationDelay: `${0.22 + about.paragraphs.length * 0.1 + 0.1}s`,
                  }
                : undefined
            }
            className={`w-fit mx-auto md:mx-0 ${
              inView
                ? "opacity-0 animate-[about-item-in_0.5s_ease-out_forwards]"
                : "opacity-0"
            } motion-reduce:opacity-100 motion-reduce:animate-none`}
          >
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
      </div>
    </section>
  );
}
