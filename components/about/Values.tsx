const values = [
  "Biblical Truth",
  "Prayer",
  "Holiness",
  "Faith",
  "Discipleship",
  "Evangelism",
];

export default function Values() {
  return (
    <section className="bg-(--paper-band) border-y border-(--line)">
      <div className="max-w-295 mx-auto px-5 md:px-10 py-14 md:py-16">
        <h2 className="font-semibold text-(--ink) text-center md:text-start text-2xl md:text-[28px] mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-7">
          {values.map((value) => (
            <div key={value} className="border-t border-(--gold)/40 pt-4">
              <p className="text-base text-center md:text-start font-medium text-(--ink)">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
