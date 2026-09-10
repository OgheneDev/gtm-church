export default function LocationMap() {
  return (
    <section className="bg-(--paper-band) border-y border-(--line)">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-16">
        <p className="text-[13px] font-medium text-(--gold) mb-3">Find Us</p>
        <h2 className="font-semibold text-(--ink) text-2xl md:text-[28px] mb-8">
          Our Zonal Headquarters
        </h2>

        <div className="rounded-lg overflow-hidden border border-(--line)">
          <iframe
            title="CAC Grace & Truth, Walsall — 75 Stafford Street, WS2 8DU"
            src="https://www.google.com/maps?q=75+Stafford+Street,+Walsall,+WS2+8DU&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </div>
      </div>
    </section>
  );
}
