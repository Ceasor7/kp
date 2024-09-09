import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";

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
    </main>
  );
}
