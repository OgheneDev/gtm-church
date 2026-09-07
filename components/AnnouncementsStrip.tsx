import { monthlyTheme, upcomingEvents } from "@/lib/content";

export default function AnnouncementsStrip() {
  return (
    <section className="w-full bg-(--paper-band) border-y border-(--line)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-(--line)/50">
          {/* Monthly Theme */}
          <div className="flex-1 min-w-45 pt-3 md:pt-0 first:pt-0">
            <span className="block text-[11px] font-semibold tracking-wider text-[#8a7a52] uppercase mb-1">
              {monthlyTheme.label}
            </span>
            <p className="text-sm sm:text-base font-medium text-(--ink) leading-snug">
              {monthlyTheme.title}
            </p>
          </div>

          {/* Upcoming Events */}
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title || index}
              className="flex-1 min-w-45 pt-4 md:pt-0 md:pl-8 first:pt-0"
            >
              <span className="block text-[11px] font-semibold tracking-wider text-[#8a7a52] uppercase mb-1">
                Upcoming
              </span>
              <p className="text-sm sm:text-base font-medium text-(--ink) leading-snug">
                <span>{event.title}</span>
                <span className="block sm:inline text-xs sm:text-sm font-normal text-(--ink)/70 sm:ml-2">
                  &mdash; {event.when}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
