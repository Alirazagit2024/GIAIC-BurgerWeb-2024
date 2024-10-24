export default function SpeacialEvents() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl py-6 font-bold title-font text-white flex justify-center items-center">
        SPEACIAL EVENTS
      </h1>
      <p className="lg:w-2/3 mx-auto px-4 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
      <div className="container mx-auto flex px-5 py-6 mb-2 md:flex-row flex-col-reverse justify-around gap-6 items-center">
        <div className="lg:flex-grow text-center md:w-1/2 lg:px-10 md:px-16 flex-col md:items-start md:text-left md:mb-0 items-center ">
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us for exciting burger-making classes where you can learn the
            art of crafting the perfect burger. Our expert chefs will guide you
            through every step, making it a fun and interactive experience for
            everyone, whether you&apos;re a beginner or a foodie enthusiast.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We also host food festivals and other special events throughout the
            year. Stay tuned for updates on upcoming events, and don&apos;t miss the
            chance to be part of our exciting culinary adventures. Discover how
            you can participate and enjoy unforgettable moments with us!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <video
            className="rounded-3xl border-2 border-white"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            src="/videos/s-event.mp4"
            muted
            autoPlay
            loop
          ></video>
        </div>
      </div>
    </section>
  );
}
