// components/Beliefs.tsx
const beliefs = [
  {
    title: "Our Mission",
    // Draft placeholder — confirm real wording with church leadership.
    body: "To reach people with the gospel and help them grow into their God-given purpose, in Walsall, Birmingham and beyond.",
  },
  {
    title: "Our Vision",
    // Draft placeholder — confirm real wording with church leadership.
    body: "A church family where every generation encounters God and is equipped to make a lasting difference in their community.",
  },
  {
    title: "Statement of Faith",
    // Draft placeholder — confirm real wording with church leadership.
    body: "We hold to the core beliefs of the Christ Apostolic Church, including the authority of Scripture, salvation through Christ, and the present-day work of the Holy Spirit.",
  },
  {
    title: "Our Tenets",
    // Draft placeholder — confirm real wording with church leadership.
    body: "Holiness, prayer, and the preaching of the Word as the foundation of everyday life for every member.",
  },
];

// NOTE: the current live site has these four headers with NO text under
// them at all. The copy above is a draft placeholder only, meant to show
// the layout — it must be replaced with the church's actual, approved
// wording before this page goes live. Hence the visible tag below.
export default function Beliefs() {
  return (
    <section className="bg-[#F3ECDA] border-y border-[#1B2340]/10">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-14">
        <span className="inline-block text-[11px] text-[#8a7a52] bg-[#B98C33]/15 px-2.5 py-1 rounded-sm mb-7">
          Draft copy — pending final wording from the church
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {beliefs.map((item) => (
            <div key={item.title}>
              <h2 className="font-semibold text-[#1B2340] text-lg mb-2.5">
                {item.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#4A4A45]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
