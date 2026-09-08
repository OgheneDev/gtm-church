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
    <section className="bg-[#F3ECDA] border-y border-[#1B2340]/10">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-14">
        <h2 className="font-semibold text-[#1B2340] text-2xl mb-8">
          Weekly programme
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {schedule.map((d) => (
            <div key={d.day}>
              <h3 className="font-semibold text-[#1B2340] text-base mb-2.5 pb-2 border-b border-[#1B2340]/15">
                {d.day}
              </h3>
              <ul className="space-y-1.5">
                {d.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-[#4A4A45] leading-snug"
                  >
                    {item.time && (
                      <span className="text-[#8a7a52] mr-1.5">{item.time}</span>
                    )}
                    {item.label}
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
