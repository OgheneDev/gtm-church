const faqs = [
  {
    question: "What time should I arrive?",
    // Note: matches the current Sunday schedule — adjust if timing changes.
    answer:
      "Sunday service runs from 10:00am to 2:00pm, starting with Intercessory Prayers. Arrive by 10:00am if you'd like the full morning, or by 12:00pm for the Main Service.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our zonal headquarters is at 75 Stafford Street, Walsall, WS2 8DU. We also have branches in Birmingham — see our Locations section above for full addresses and directions.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as you are — there's no dress code. Most people dress smart-casual on Sundays, but you're welcome exactly as you're comfortable.",
  },
  {
    question: "Is there children's ministry?",
    // Placeholder — confirm exact structure/age groups with church leadership before publishing.
    answer:
      "Yes, we have a dedicated Children's ministry running alongside our services, helping kids grow in faith in a way that fits their age.",
  },
  {
    question: "Can I join online?",
    answer:
      "Yes — services are streamed via Zoom for anyone who can't join us in person. Check our Announcements page for the current meeting ID.",
  },
];

export default function FAQ() {
  return (
    <section className="md:w-200 mx-auto px-5 md:px-10 py-16">
      <p className="text-[13px] font-medium text-(--gold) mb-3 text-center md:text-start">
        Questions
      </p>
      <h2 className="font-semibold text-(--ink) text-2xl md:text-[28px] mb-8 text-center md:text-start">
        Frequently Asked Questions
      </h2>

      <div className="max-w-[42em] divide-y divide-(--line)">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-(--ink)">
              {faq.question}
              <span className="shrink-0 text-(--gold) text-lg leading-none transition-transform duration-150 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[14.5px] leading-relaxed text-(--text-muted)">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
