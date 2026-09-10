const schedule = [
  {
    day: "Sunday",
    items: [
      { time: "10:00am – 11:00am", label: "Intercessory Prayers" },
      { time: "11:00am – 12:00pm", label: "Sunday School" },
      { time: "12:00pm – 2:00pm", label: "Main Service" },
    ],
  },
  {
    day: "Tuesday",
    items: [{ time: "By appointment", label: "Counselling" }],
  },
  {
    day: "Wednesday",
    items: [
      { time: "6:00pm – 8:00pm", label: "Bible Study" },
      { time: "", label: "Breakfast Meeting" },
    ],
  },
  {
    day: "Friday",
    items: [
      { time: "6:00pm – 8:00pm", label: "Prayer Meeting" },
      { time: "", label: "Prayer and Fasting" },
      {
        time: "10:00pm – 3:00am",
        label: "Vigil (last Friday of the month)",
      },
    ],
  },
  {
    day: "Saturday",
    items: [
      { time: "11:00am – 2:00pm", label: "Choir Rehearsal" },
      { time: "2:00pm – 5:00pm", label: "Musical Training (all instruments)" },
    ],
  },
];

export default function WeeklySchedule() {
  return (
    <section className="bg-(--paper-band) border-y border-(--line)">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-14">
        <p className="text-[13px] font-medium text-(--gold) mb-3">Every Week</p>
        <h2 className="font-semibold text-(--ink) text-2xl md:text-[28px] mb-8">
          Weekly Programme
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((d) => (
            <div
              key={d.day}
              className="bg-(--paper) rounded-lg border border-(--line) p-5"
            >
              <h3 className="font-semibold text-(--ink) text-base mb-4 pb-3 border-b border-(--gold)/40">
                {d.day}
              </h3>
              <ul className="space-y-3.5">
                {d.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-0.5">
                    <span className="text-[14.5px] font-medium leading-snug text-(--ink)">
                      {item.label}
                    </span>
                    <span className="text-[13px] text-(--text-muted)">
                      {item.time || "Time to be confirmed"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
