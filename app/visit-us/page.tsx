import type { Metadata } from "next";
import VisitHero from "@/components/visit/VisitHero";
import WeeklySchedule from "@/components/visit/WeeklySchedule";
import Locations from "@/components/visit/Locations";
import ContactInfo from "@/components/visit/ContactInfo";

export const metadata: Metadata = {
  title: "Visit Us | CAC Grace & Truth Ministry",
  description:
    "Join us in Walsall or Birmingham. Service times, weekly programme, and locations for CAC Grace & Truth Ministry.",
};

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <WeeklySchedule />
      <Locations />
    </>
  );
}
