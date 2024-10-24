import Image from "next/image";

export default function Mission() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white text-center">
        MISSION & VISION
      </h1>
      <p className="lg:w-2/3 mx-auto px-4 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom.
      </p>
      <div className="container px-4 py-7 mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 text-center">
          <div className="sm:w-1/2 w-full mb-10 p-4 rounded-3xl hover border border-gray-200">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                width={100}
                height={100}
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/mission.webp"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Our Mission
            </h2>
            <p className="leading-relaxed text-base">
              Our mission is to serve the best burgers made with the freshest
              ingredients, ensuring every bite is packed with flavor. We strive
              for customer satisfaction, creating a memorable dining experience
              that keeps our customers coming back for more.
            </p>
          </div>
          <div className="sm:w-1/2 w-full mb-10 p-4 rounded-3xl hover border border-gray-200">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                width={100}
                height={100}
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/vision.webp"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
              Our Vision
            </h2>
            <p className="leading-relaxed text-base">
              We aim to expand our brand globally while upholding our commitment
              to quality and service. Our goal is to share our passion for food
              by bringing our delicious burgers to burger lovers everywhere,
              creating memorable experiences around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
