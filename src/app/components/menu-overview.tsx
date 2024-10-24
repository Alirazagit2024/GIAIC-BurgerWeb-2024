import Image from "next/image";

export default function MenuOverview() {
  return (
    <section className="text-gray-600 body-font py-6">
      <h1 className="sm:text-3xl text-2xl py-6 font-bold title-font text-white flex justify-center items-center">
        MENU OVERVIEW
      </h1>
      <p className="lg:w-2/3 mx-auto px-4 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
      <div className="container mx-auto gap-4 flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded water"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            width={440}
            height={400}
            alt="hero"
            src="/images/menu-overview.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 text-center lg:px-10 md:px-16 flex flex-col md:items-start md:text-left md:mb-0 items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer a variety of gourmet burgers, crispy sides, and refreshing
            beverages. Our carefully crafted dishes are made with the finest
            ingredients, ensuring a flavorful experience with every bite.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Explore our delicious menu, packed with mouth-watering options that
            will satisfy your cravings. Whether you&apos;re in the mood for a classic
            burger or something more adventurous, we&apos;ve got something for
            everyone!
          </p>
        </div>
      </div>
    </section>
  );
}
