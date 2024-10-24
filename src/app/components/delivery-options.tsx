export default function Delivery() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl py-6 font-bold title-font text-white flex justify-center items-center">
        DELIVERY OPTIONS
      </h1>
      <p className="lg:w-2/3 px-4 mx-auto leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
      <div className="container mx-auto flex px-5 py-6 gap-4 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6">
          <video
            className="rounded-3xl border-2 border-white"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            src="/videos/deliver.mp4"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div className="lg:flex-grow text-center md:w-1/2 lg:px-10 md:px-16 flex-col md:items-start md:text-left md:mb-0 items-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            We deliver delicious meals straight to your door, making sure you
            can enjoy your favorite dishes without leaving the comfort of your
            home. Our efficient delivery service ensures that your food arrives
            fresh and hot, ready to satisfy your cravings.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Check out our delivery timings and available areas to see how we can
            serve you better. With affordable delivery fees, we make it easy and
            convenient for you to enjoy our food no matter where you are!
          </p>
        </div>
      </div>
    </section>
  );
}
