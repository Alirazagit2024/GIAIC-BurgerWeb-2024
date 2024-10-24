import Image from "next/image";

export default function Catering() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl py-6 font-bold title-font text-white flex justify-center items-center">
        CATERING SERVICES
      </h1>
      <p className="lg:w-2/3 mx-auto px-4 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
      <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col-reverse gap-4 items-center">
        <div className="lg:flex-grow text-center md:w-1/2 lg:px-10 md:px-16 items-center flex-col md:items-start md:text-left md:mb-0">
          <p className="text-lg text-gray-700 leading-relaxed">
            Looking for catering for your next event? We offer a variety of
            party packages tailored to suit your needs. Whether it&apos;s a small
            gathering or a large celebration, our delicious menu options will
            leave your guests impressed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Contact us for special event services and custom catering solutions
            that will make your celebration truly memorable. Let us handle the
            food while you enjoy the event!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            width={470}
            height={400}
            alt="hero"
            src="/images/catering.png"
          />
        </div>
      </div>
    </section>
  );
}
