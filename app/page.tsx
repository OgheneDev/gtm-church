import Hero from "@/components/Hero";
import ServiceTimes from "@/components/ServiceTimes";
import AnnouncementsStrip from "@/components/AnnouncementsStrip";
import About from "@/components/About";
import { Give } from "@/components/GiveAndFooter";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Ministries from "@/components/Ministries";
import LatestSermon from "@/components/LatestSermon";
import FinalCta from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ServiceTimes />
        <About />
        <WhatWeBelieve />
        <Ministries />
        <AnnouncementsStrip />
        <LatestSermon />
        <Give />
        <FinalCta />
      </main>
    </>
  );
}
