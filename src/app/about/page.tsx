import Gallery from "../components/gallery";
import Team from "../components/meet-team";
import Mission from "../components/mission";
import OurStory from "../components/our-story";

export default function About() {
  return (
    <main>
      <OurStory />
      <Mission />
      <Team />
      <Gallery />
    </main>
  );
}
