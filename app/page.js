import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import FoundersScroll from "../components/AutoScroll/FoundersScroll";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <FoundersScroll />
      </section>
      <section>
        <Cta />
      </section>
    </main>
  );
}
