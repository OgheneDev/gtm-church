import type { Metadata } from "next";
import VisitHero from "@/components/visit/VisitHero";
import WhatToExpect from "@/components/visit/WhatToExpect";
import WeeklySchedule from "@/components/visit/WeeklySchedule";
import Locations from "@/components/visit/Locations";
import LocationMap from "@/components/visit/LocationMap";
import FAQ from "@/components/visit/FAQ";

export const metadata: Metadata = {
  title: "Visit Us | CAC Grace & Truth Ministry",
  description:
    "Join us in Walsall or Birmingham. Service times, weekly programme, locations, and answers to common questions for CAC Grace & Truth Ministry.",
};

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <WhatToExpect />
      <WeeklySchedule />
      <Locations />
      <LocationMap />
      <FAQ />
    </>
  );
}
