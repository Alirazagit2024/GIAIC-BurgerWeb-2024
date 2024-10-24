import Image from "next/image";

export default function Special() {
  return (
    <section className="text-gray-600 body-font mt-4">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white text-center">
        SPECIAL OFFERS
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom.
      </p>
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto font-bold">
          <div className="flex-wrap text-white w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-3xl flex flex-col justify-items-center items-center border-2 border-white hover">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl"
              style={{ filter: "blur(5px)" }}
              width={400}
              height={400}
              src="/images/deal01.jpg"
            />
            <div
              className="text-center relative z-10 w-100 px-2 rounded-3xl border-2 border-black rounded-tr-lg rounded-bl-lg"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.8)",
              }}
            >
              <h2 className="text-2xl font-bold title-font mb-2">Deal 01</h2>
              <p className="italic">
                2 Zinger Burger + 1 Jumbo Cold Drink + Chessy Fries
              </p>
              <span className="text-3xl font-bold">
                $299 <del className="italic text-base text-gray-400">$349</del>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 font-bold">
            <div className="px-2 w-full sm:w-1/2 mb-4">
              {" "}
              {/* Margin added */}
              <div className="flex flex-wrap text-white w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl hover">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl"
                  style={{ filter: "blur(3px)" }}
                  width={470}
                  height={400}
                  src="/images/deal02.jpg"
                />
                <div
                  className="text-center relative z-10 w-full rounded-3xl border-2 border-black rounded-tr-lg rounded-bl-lg"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <h2 className="text-xl font-bold title-font mb-2">Deal 02</h2>
                  <p className="italic">
                    1 Large & 2 Small Pizza + 1 Jumbo Cold Drink + Chessy Fries
                  </p>
                  <span className="text-3xl font-bold">
                    $349{" "}
                    <del className="italic text-base text-gray-400">$499</del>
                  </span>
                </div>
              </div>
            </div>
            <div className="px-2 w-full sm:w-1/2 mb-4">
              {" "}
              {/* Margin added */}
              <div className="flex flex-wrap text-white w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl hover">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl"
                  style={{ filter: "blur(3px)" }}
                  width={470}
                  height={400}
                  src="/images/deal03.jpg"
                />
                <div
                  className="text-center relative z-10 w-full rounded-3xl border-2 border-black rounded-tr-lg rounded-bl-lg"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <h2 className="text-xl font-bold title-font mb-2">Deal 03</h2>
                  <p className="italic font-bold">
                    2 Cheese & 1 Zinger Club Sandwich + 1 Jumbo Cold Drink +
                    Fries
                  </p>
                  <span className="text-3xl font-bold">
                    $319{" "}
                    <del className="italic text-base text-gray-400">$379</del>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
