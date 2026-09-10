export default function WhatWeBelieve() {
  return (
    <section className="bg-(--ink) py-14 md:py-16">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <p className="text-[13px] font-medium text-(--gold) mb-3">Foundation</p>
        <h2 className="font-semibold text-(--paper) text-2xl md:text-[28px] mb-4">
          What We Believe
        </h2>
        <p className="text-base leading-relaxed text-(--paper)/70 max-w-[42em] mb-6">
          We hold to the core beliefs of the Christ Apostolic Church — the
          authority of Scripture, salvation through Christ, and the present-day
          work of the Holy Spirit.
        </p>

        <details className="group max-w-[42em] border-t border-white/15">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium text-(--paper)">
            Read our Statement of Faith
            <span className="ml-4 text-(--gold) transition-transform duration-150 group-open:rotate-45 text-lg leading-none">
              +
            </span>
          </summary>
          {/*
            NOTE: the live site's "Statement of Faith" and "Our Tenets"
            sections currently have no body text at all — this is
            placeholder copy only. Replace with the church's actual,
            approved statement before publishing.
          */}
          <div className="pb-6 text-[15px] leading-relaxed text-(--paper)/70 space-y-3">
            <p>
              We believe in the divine inspiration and authority of the Holy
              Scriptures, salvation by grace through faith in the Lord Jesus
              Christ, and the ongoing work of the Holy Spirit in the life of
              every believer.
            </p>
            <p>
              We hold to holiness, prayer, and the preaching of the Word as the
              foundation of everyday life for every member of the church.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
