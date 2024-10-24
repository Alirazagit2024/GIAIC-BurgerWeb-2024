import LocationContact from "../components/location-contact";
import Map from "../components/map-contact";
import Working from "../components/working-contact";

export default function Contact() {
  return (
    <main>
      <Map />
      <LocationContact />
      <Working />
    </main>
  );
}
