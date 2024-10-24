import Catering from "../components/catering-services";
import Delivery from "../components/delivery-options";
import MenuOverview from "../components/menu-overview";
import Service from "../components/service-section";
import SpeacialEvents from "../components/speacial-events";

export default async function Services() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <main>
      <Service/>
      <MenuOverview/>
      <Catering/>
      <Delivery/>
      <SpeacialEvents/>
    </main>
  );
}
