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

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-(--line) bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-md"
    >
      <div className="wrap flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center gap-3 text-xl font-semibold text-(--ink) no-underline transition-opacity duration-150 hover:opacity-80 [font-family:var(--font-display)]"
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
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
          {site.nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1.5 text-[15px] no-underline transition-colors duration-150 after:absolute after:-bottom-px after:left-0 after:h-0.5 after:rounded after:bg-(--gold) after:transition-all after:duration-200 after:content-[''] ${
                  active
                    ? "font-semibold text-(--ink) after:w-full"
                    : "font-medium text-(--text) after:w-0 hover:text-(--ink) hover:after:w-full focus-visible:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="inline-block rounded-sm bg-(--ink) px-7 py-2 text-sm font-medium text-white no-underline transition-all duration-150 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:translate-y-0"
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
          {open ? <X size={22} /> : <Menu size={22} />}
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
          className="overflow-hidden"
        >
          <div className="flex flex-col border-t border-(--line) px-6 pb-5">
            {site.nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`border-b border-(--line) py-4 text-base no-underline transition-all duration-150 hover:pl-1 hover:text-(--ink) ${
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
              className="mt-5 w-full rounded-md bg-(--ink) px-5 py-2.5 text-center text-sm font-medium text-white no-underline transition-opacity duration-150 hover:opacity-90"
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
