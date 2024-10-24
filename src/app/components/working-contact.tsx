import Image from "next/image";

export default function Working() {
  return (
    <section className="text-gray-600 body-font px-4">
      <h1 className="sm:text-3xl text-2xl mt-4 py-6 font-bold title-font text-white flex justify-center items-center">
        WORKING HOURS
      </h1>
      <p className="lg:w-2/3 mx-auto mb-6 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom.
      </p>
      <div className="container mx-auto flex px-1 mb-10 md:flex-row flex-col-reverse   items-center gap-8">
        <div className="lg:flex-grow text-center md:w-1/2 lg:px-10 md:px-16 items-center flex-col md:items-start md:text-left md:mb-0">
          <div className="border-2 border-white text-white rounded-3xl shadow-md p-4">
            <p className="text-center text-lg ">
              We are open to serve you during the following hours:
            </p>
            <div className=" p-6 md:p-8">
              <ul className=" text-center">
                <li className="mb-2">
                  <span className="font-bold">Monday - Friday:</span> 6:00 PM -
                  3:00 AM
                </li>
                <li className="mb-2">
                  <span className="font-bold">Saturday - Sunday:</span> 6:00 PM
                  - 4:00 AM
                </li>
              </ul>
            </div>
            <p className="text-center text-lg">
              We are closed on major public holidays like Christmas and New
              Year&apos;s Day.
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            width={440}
            height={440}
            alt="hero"
            src="/images/clock.gif"
          />
        </div>
      </div>
    </section>
  );
}
