import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Beliefs from "@/components/about/Beliefs";
import Team from "@/components/about/Team";
import { Give } from "@/components/GiveAndFooter";

export const metadata: Metadata = {
  title: "About Us | CAC Grace & Truth Ministry",
  description:
    "Learn about CAC Grace & Truth Ministry — our mission, vision, and the team serving our Walsall, Birmingham community.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Beliefs />
      <Team />
      <Give />
    </>
  );
}
