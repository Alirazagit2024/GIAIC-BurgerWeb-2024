import Feature from "./components/feature-cards";
import Aboutus from "./components/about-us";
import Hero from "./components/hero-section";
import Customer from "./components/customor-review";
import Special from "./components/special-offers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Aboutus />
      <Customer />
      <Special />
    </main>
  );
}
