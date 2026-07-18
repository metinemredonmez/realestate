import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { MissionVision } from "@/components/site/mission-vision";
import { Navbar } from "@/components/site/navbar";
import { Projects } from "@/components/site/projects";
import { ValueStrip } from "@/components/site/value-strip";
import { Values } from "@/components/site/values";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <ValueStrip />
      <About />
      <MissionVision />
      <Projects />
      <Values />
      <Contact />
      <Footer />
    </main>
  );
}
