import Link from "next/link";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const locations = [
  {
    name: "Walsall",
    tag: "Zonal Headquarters",
    lines: [
      "Christ Apostolic Church",
      "Grace & Truth Walsall",
      "75 Stafford Street",
      "Walsall, WS2 8DU",
    ],
    phone: "01922 320288",
  },
  {
    name: "Birmingham — Lodge Road",
    tag: "Hockley",
    lines: [
      "Christ Apostolic Church",
      "Grace and Truth",
      "407 Lodge Road, Hockley",
      "Birmingham, B18 5PW",
    ],
    phone: "0121 572 4166",
  },
  {
    name: "Birmingham — Lee Bank",
    tag: "",
    lines: [
      "Christ Apostolic Church",
      "Lee Bank Business Centre",
      "Birmingham, B1 1HR",
      "United Kingdom",
    ],
    phone: "",
  },
];

export default function Locations() {
  return (
    <section className="max-w-295 mx-auto px-5 md:px-10 py-16">
      <p className="text-[13px] font-medium text-(--gold) mb-3 text-center md:text-start">
        Visit Us
      </p>
      <h2 className="font-semibold text-(--ink) text-center md:text-start text-2xl md:text-[28px] mb-2">
        Our Locations
      </h2>
      <p className="text-[15px] text-center md:text-start text-(--text-muted) mb-10 max-w-[42em]">
        One ministry, three locations across the West Midlands — Walsall is our
        zonal headquarters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {locations.map((loc, i) => {
          const address = loc.lines.join(", ");
          const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
            address,
          )}`;

          return (
            <div
              key={i}
              className="flex flex-col rounded-lg border border-(--line) p-6"
            >
              {loc.tag && (
                <span className="inline-block self-start text-[11px] font-medium text-(--gold) bg-(--gold)/10 px-2.5 py-1 rounded-sm mb-4">
                  {loc.tag}
                </span>
              )}

              <h3 className="font-semibold text-(--ink) text-lg mb-4">
                {loc.name}
              </h3>

              <div className="flex grow flex-col gap-3.5">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-(--gold)"
                    aria-hidden="true"
                  />
                  <p className="text-[14px] leading-relaxed text-(--text-muted)">
                    {loc.lines.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < loc.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>

                {loc.phone && (
                  <div className="flex items-center gap-2.5">
                    <Phone
                      size={16}
                      className="shrink-0 text-(--gold)"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                      className="text-[14px] text-(--ink) hover:text-(--gold) transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                )}
              </div>

              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-(--ink) border-b border-(--gold) pb-0.5"
              >
                Get Directions
                <ExternalLink
                  size={13}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
