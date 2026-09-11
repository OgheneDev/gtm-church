import type { Metadata } from "next";
import MinistriesHero from "@/components/ministries/MinistriesHero";
import MinistryGrid from "@/components/ministries/MinistryGrid";
import { Give } from "@/components/GiveAndFooter";

export const metadata: Metadata = {
  title: "Ministries | CAC Grace & Truth Ministry",
  description:
    "Discover opportunities to grow, serve and build meaningful relationships at CAC Grace & Truth Ministry.",
};

export default function MinistriesPage() {
  return (
    <>
      <MinistriesHero />
      <MinistryGrid />
      <Give />
    </>
  );
}
