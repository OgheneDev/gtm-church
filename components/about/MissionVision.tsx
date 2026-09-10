const items = [
  {
    title: "Our Mission",
    body: "To revive the potentials of individuals through prayer, praise and teachings.",
  },
  {
    title: "Our Vision",
    body: "To ignite the heart of humanity back to the Father, unlocking destinies and changing nations.",
  },
];

export default function MissionVision() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {items.map((item) => (
          <div key={item.title}>
            <h2 className="font-semibold text-(--ink) text-2xl md:text-[28px] mb-4">
              {item.title}
            </h2>
            <p className="text-base leading-relaxed text-(--text-muted) max-w-[28em]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
