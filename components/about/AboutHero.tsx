const paragraphs = [
  "CAC Grace & Truth started as an apostolic centre to reach the continent of Europe with the message of the Supernatural.",
  "We are committed to making disciples and helping every member discover their God-given purpose, with four branches across the United Kingdom.",
];

export default function AboutHero() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 pt-16 pb-12 animate-[settle_0.7s_ease-out_both]">
      <p className="text-[13px] font-medium text-[#B98C33] mb-4">About Us</p>
      <h1 className="font-semibold text-[#1B2340] text-[32px] md:text-[44px] leading-tight mb-7 max-w-[12em]">
        Who we are
      </h1>
      <div className="max-w-[42em] space-y-3.5">
        {paragraphs.map((p) => (
          <p key={p} className="text-base leading-relaxed text-[#4A4A45]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
