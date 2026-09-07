import Link from "next/link";
import { giving, site } from "@/lib/content";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import Image from "next/image";

const LOGO_URL =
  "https://res.cloudinary.com/dgc8cd67w/image/upload/v1788767437/outdor_pannel_qk6nti.avif";

export function Give() {
  return (
    <section className="w-full border-t border-(--line) bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
          {/* Verse Text */}
          <blockquote className="max-w-2xl">
            <p className="font-(family-name:--font-display) italic text-lg md:text-xl lg:text-2xl text-(--ink) leading-relaxed mb-2 md:mb-0">
              &ldquo;{giving.verse}&rdquo;
              <span className="block sm:inline text-base md:text-lg text-(--text-muted) sm:ml-2 not-italic mt-2 sm:mt-0">
                &mdash; {giving.reference}
              </span>
            </p>
          </blockquote>

          {/* Action Link */}
          <div className="shrink-0">
            <Link
              href="/give"
              className="inline-flex items-center text-sm md:text-base font-medium text-(--ink) border-b-2 border-(--gold) pb-1 whitespace-nowrap transition-all duration-200 hover:text-(--gold) hover:opacity-80"
            >
              Give now
              <svg
                className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-(--ink) text-(--paper-band) pt-14 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-(--paper-band)/15">
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col items-start space-y-4 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <div className="relative h-16 w-30 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={LOGO_URL}
                  alt={site.name || "Church Logo"}
                  fill
                  className="object-contain object-left"
                  sizes="176px"
                  priority
                />
              </div>
            </Link>

            <div>
              <p className="font-(family-name:--font-display) text-xl font-medium tracking-wide">
                {site.name}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-(--paper-band)/70 max-w-xs leading-relaxed">
                A place of grace, truth, and community. Join us in worship and
                grow together in faith.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={site.socials?.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-(--paper-band) hover:bg-(--gold) hover:text-(--ink) transition-all duration-200"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={site.socials?.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-(--paper-band) hover:bg-(--gold) hover:text-(--ink) transition-all duration-200"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={site.socials?.youtube || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-(--paper-band) hover:bg-(--gold) hover:text-[var(--ink)] transition-all duration-200"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href={site.socials?.twitter || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[var(--paper-band)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-200"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--paper-band)]/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/sermons"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Sermons & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/give"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Give / Tithing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4 md:col-span-1">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">
              Find & Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[var(--paper-band)]/80">
              <li className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {site.address.line1}, {site.address.line2}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HiOutlinePhone className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <a
                  href={`tel:${site.phone?.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiOutlineMail className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <a
                  href={`mailto:${site.email || "info@gtmbirmingham.com"}`}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  {site.email || "info@gtmbirmingham.com"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Times / Extra Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">
              Service Hours
            </h4>
            <div className="text-xs sm:text-sm text-[var(--paper-band)]/80 space-y-2">
              <div>
                <p className="font-semibold text-(--paper-band)">
                  Sunday Worship
                </p>
                <p className="text-(--paper-band)/70">
                  10:00 AM &mdash; 12:30 PM
                </p>
              </div>
              <div className="pt-1">
                <p className="font-semibold text-[var(--paper-band)]">
                  Midweek Prayer
                </p>
                <p className="text-[var(--paper-band)]/70">Wednesday 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--paper-band)]/60 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="hover:text-[var(--paper-band)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--paper-band)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
