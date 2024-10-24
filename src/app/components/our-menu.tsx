export default function OurMenu() {
  return (
    <section
      id="our-story"
      className="relative py-6 mb-16 bg-dark"
      style={{
        backgroundImage: "url('/images/menu-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Background ke liye opacity */}
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center  py-10 lg:py-40">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-shadow">
          OUR MENU
        </h1>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-shadow">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 para-shadow">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col gap-3 space-y-4 sm:flex-row sm:justify-center text-center sm:space-y-0">
          <button className="flex justify-center items-center font-bold text-shadow text-white bg-yellow-500 border-0 py-4 px-8 focus:outline-none hover:bg-gray-100 hover:text-black transition-colors rounded-3xl text-lg">
            Book Table
          </button>
          <button className=" flex justify-center items-center font-bold text-shadow text-black bg-gray-100 border-0 py-4 px-8 focus:outline-none hover:bg-yellow-500 hover:text-white transition-colors rounded-3xl text-lg">
            Download Menu
          </button>
        </div>
      </div>
    </section>
  );
}
