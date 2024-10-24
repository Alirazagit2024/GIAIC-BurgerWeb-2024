import Image from "next/image";

export default function Scan() {
  return (
    <section className="text-gray-600 body-font py-4">
      <h1 className="sm:text-3xl text-center text-2xl py-6 font-bold title-font text-white flex justify-center items-center">
        QUICK SCAN FOR FULL MENU
      </h1>
      <p className="lg:w-2/3 mx-auto px-4 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
      <div className="container mx-auto gap-8 flex px-1 py-2 md:flex-row flex-col justify-around items-center">
        <div className="lg:max-w-lg flex justify-center mt-6 lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-2xl"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            width={320}
            height={320}
            alt="hero"
            src="/images/scan.jpg"
          />
        </div>
        <div className="lg:max-w-lg flex justify-center lg:w-full md:w-1/2 w-5/6">
          <video
            className="rounded-2xl border-2 border-white"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            src="/videos/scan.mp4"
            width={170}
            muted
            autoPlay
            loop
          ></video>
        </div>
      </div>
    </section>
  );
}
