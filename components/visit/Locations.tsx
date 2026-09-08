const locations = [
  {
    name: "Walsall Branch",
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
    name: "Birmingham Branch",
    tag: "Lodge Road, Hockley",
    lines: [
      "Christ Apostolic Church",
      "Grace and Truth",
      "407 Lodge Road, Hockley",
      "Birmingham, B18 5PW",
    ],
    phone: "0121 572 4166",
  },
  {
    name: "Birmingham Branch",
    tag: "Lee Bank",
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
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16">
      <h2 className="font-semibold text-[#1B2340] text-2xl mb-2">
        Our locations
      </h2>
      <p className="text-[15px] text-[#4A4A45] mb-10 max-w-[42em]">
        One ministry, three locations across the West Midlands — the Walsall
        address below is our zonal headquarters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {locations.map((loc, i) => (
          <div key={i} className="border-t border-[#1B2340]/15 pt-5">
            {loc.tag && (
              <span className="inline-block text-[11px] font-medium text-[#8a7a52] bg-[#B98C33]/15 px-2.5 py-1 rounded-sm mb-3">
                {loc.tag}
              </span>
            )}
            <h3 className="font-semibold text-[#1B2340] text-[15px] mb-2">
              {loc.name}
            </h3>
            <p className="text-[14px] leading-relaxed text-[#4A4A45] mb-2">
              {loc.lines.map((line, j) => (
                <span key={j}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            {loc.phone && (
              <p className="text-[14px] text-[#1B2340]">{loc.phone}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
