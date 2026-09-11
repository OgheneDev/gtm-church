"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";

const LOGO_URL =
  "https://res.cloudinary.com/dgc8cd67w/image/upload/v1788767437/outdor_pannel_qk6nti.avif";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape key, outside click, and scroll lock while the menu is open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: { key: string }) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: { target: any }) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Subtle shadow/elevation once the page has scrolled past the top.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-(--line) bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-md transition-shadow duration-300 animate-[header-in_0.5s_ease-out] motion-reduce:animate-none ${
        scrolled ? "shadow-[0_6px_20px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      <style>{`
        @keyframes header-in {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logo-pop {
          0% { opacity: 0; transform: scale(0.7) rotate(-6deg); }
          60% { opacity: 1; transform: scale(1.06) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes nav-item-in {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes icon-swap {
          0% { opacity: 0; transform: rotate(-90deg) scale(0.5); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        @keyframes mobile-panel-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobile-item-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes underline-glow {
          0%, 100% { box-shadow: 0 0 0 rgba(0,0,0,0); }
          50% { box-shadow: 0 0 6px var(--gold); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div className="wrap flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center gap-3 text-xl font-semibold text-(--ink) no-underline transition-opacity duration-150 hover:opacity-80 [font-family:var(--font-display)]"
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg animate-[logo-pop_0.6s_cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:animate-none">
            <Image
              src={LOGO_URL}
              alt=""
              fill
              sizes="65px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-(--ink) hidden md:block">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item, i) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`relative py-1.5 text-[15px] no-underline transition-colors duration-150 opacity-0 animate-[nav-item-in_0.45s_ease-out_forwards] motion-reduce:opacity-100 motion-reduce:animate-none after:absolute after:-bottom-px after:left-0 after:h-0.5 after:rounded after:bg-(--gold) after:transition-all after:duration-200 after:content-[''] ${
                  active
                    ? "font-semibold text-(--ink) after:w-full after:animate-[underline-glow_2.2s_ease-in-out_infinite]"
                    : "font-medium text-(--text) after:w-0 hover:text-(--ink) hover:after:w-full focus-visible:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            style={{ animationDelay: `${site.nav.length * 60}ms` }}
            className="inline-block rounded-sm bg-(--ink) px-7 py-2 text-sm font-medium text-white no-underline opacity-0 animate-[nav-item-in_0.45s_ease-out_forwards] transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:translate-y-0 motion-reduce:opacity-100 motion-reduce:animate-none"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-(--ink) transition-colors duration-150 hover:bg-black/5 md:hidden"
        >
          <span
            key={open ? "close" : "open"}
            className="inline-flex animate-[icon-swap_0.25s_ease-out] motion-reduce:animate-none"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      {/* Mobile nav — grid-rows trick animates height without a hardcoded value */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className={`overflow-hidden ${
            open ? "animate-[mobile-panel-in_0.3s_ease-out]" : ""
          } motion-reduce:animate-none`}
        >
          <div className="flex flex-col border-t border-(--line) px-6 pb-5">
            {site.nav.map((item, i) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  style={
                    open ? { animationDelay: `${80 + i * 50}ms` } : undefined
                  }
                  className={`border-b border-(--line) py-4 text-base no-underline transition-all duration-150 hover:pl-1 hover:text-(--ink) ${
                    open
                      ? "opacity-0 animate-[mobile-item-in_0.35s_ease-out_forwards]"
                      : ""
                  } motion-reduce:opacity-100 motion-reduce:animate-none ${
                    active
                      ? "font-semibold text-(--ink)"
                      : "font-medium text-(--text)"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              style={
                open
                  ? { animationDelay: `${80 + site.nav.length * 50}ms` }
                  : undefined
              }
              className={`mt-5 w-full rounded-md bg-(--ink) px-5 py-2.5 text-center text-sm font-medium text-white no-underline transition-opacity duration-150 hover:opacity-90 ${
                open
                  ? "opacity-0 animate-[mobile-item-in_0.35s_ease-out_forwards]"
                  : ""
              } motion-reduce:opacity-100 motion-reduce:animate-none`}
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
