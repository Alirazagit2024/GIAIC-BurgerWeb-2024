import BurgerMenu from "../components/burger-menu";
import DrinksMenu from "../components/drinks-menu";
import OurMenu from "../components/our-menu";
import SidesMenu from "../components/pizza-menu";
import Scan from "../components/scan";
import SpecialMenu from "../components/special-menu";

export default function Menu() {
  return (
    <main>
      <OurMenu />
      <Scan />
      <BurgerMenu />
      <SidesMenu />
      <DrinksMenu />
      <SpecialMenu />
    </main>
  );
}
