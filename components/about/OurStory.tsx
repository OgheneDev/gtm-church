const paragraphs = [
  "CAC Grace & Truth started as an apostolic centre to reach the continent of Europe with the message of the Supernatural.",
  // Note: the 2008 inauguration date isn't on the live site — confirm before publishing.
  "Officially inaugurated in 2008, the ministry is part of Christ Apostolic Church Worldwide. Since then it has grown to four branches across the United Kingdom, all committed to making disciples of men and women and helping them discover God's will and His purpose for their lives through the preaching and teaching of the Word and the impartation of the Spirit.",
];

export default function OurStory() {
  return (
    <section className="bg-(--paper-band) border-y border-(--line)">
      <div className="max-w-295 mx-auto px-5 md:px-10 py-14 md:py-16">
        <h2 className="font-semibold text-(--ink) text-center md:text-start text-2xl md:text-[28px] mb-6">
          Our Story
        </h2>
        <div className="max-w-[42em] space-y-3.5">
          {paragraphs.map((p) => (
            <p
              key={p}
              className="text-center md:text-start text-sm md:text-base leading-relaxed text-(--text-muted)"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
