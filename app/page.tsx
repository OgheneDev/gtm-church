import Hero from "@/components/Hero";
import AnnouncementsStrip from "@/components/AnnouncementsStrip";
import About from "@/components/About";
import { Give } from "@/components/GiveAndFooter";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AnnouncementsStrip />
        <About />
        <Give />
      </main>
    </>
  );
}
