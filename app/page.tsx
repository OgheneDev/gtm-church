import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementsStrip from "@/components/AnnouncementsStrip";
import About from "@/components/About";
import { Give, Footer } from "@/components/GiveAndFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnnouncementsStrip />
        <About />
        <Give />
      </main>
      <Footer />
    </>
  );
}
