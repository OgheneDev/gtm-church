import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import Team from "@/components/about/Team";
import { Give } from "@/components/GiveAndFooter";

export const metadata: Metadata = {
  title: "About Us | CAC Grace & Truth Ministry",
  description:
    "Learn about CAC Grace & Truth Ministry — our story, mission, vision, and the beliefs that shape our Walsall, Birmingham community.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Values />
      <WhatWeBelieve />
      <Team />
      <Give />
    </>
  );
}
