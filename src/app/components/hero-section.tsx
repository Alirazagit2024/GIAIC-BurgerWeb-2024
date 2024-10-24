import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex mt-7 px-5 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:px-10 md:px-16 flex justify-around flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white title-mobile">
            Welcome to BURGER LAB
          </h1>
          <p className="mb-8 leading-relaxed italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed placerat, justo id consectetur malesuada, velit felis
            ullamcorper odio, vel sagittis neque tellus at neque. Maecenas non
            nisi et massa pulvinar bibendum. Integer volutpat justo vel nunc
            iaculis, a pharetra odio malesuada. Sed at libero vel sapien
            vulputate efficitur. Sed et faucibus arcu.
          </p>
          <div className="flex flex-col gap-3 space-y-4 sm:flex-row sm:justify-center text-center sm:space-y-0">
            <button className="flex justify-center items-center font-bold text-shadow text-white bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 hover:text-black transition-colors rounded-3xl text-lg">
              Order Now
            </button>
            <button className=" flex justify-center items-center font-bold text-shadow text-black bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-500 hover:text-white transition-colors rounded-3xl text-lg">
              View Menu
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white text-center title-tab">
            Welcome to BURGER LAB
          </h1>
          <Image
            className="object-cover object-center rounded water"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            width={470}
            height={400}
            alt="hero"
            src="/images/burger4.png"
          />
        </div>
      </div>
    </section>
  );
}
