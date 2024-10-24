import Image from "next/image";

export default function Aboutus() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4 title-font text-white flex justify-center items-center">
        ABOUT US
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom.
      </p>
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded water"
            style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
            width={470}
            height={400}
            alt="hero"
            src="/images/cheif.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <p className=" leading-relaxed">
            Welcome to [Your Brand Name], where our passion for crafting the
            perfect burger comes to life! Our journey began in [Year/Location],
            inspired by a love for food and a desire to create memorable dining
            experiences. We use only the freshest, locally sourced ingredients,
            ensuring that each burger bursts with flavor. From our signature
            sauces to innovative toppings, every creation reflects our
            commitment to quality and creativity. <br /> At [Your Brand Name],
            we believe that great food brings people together. Our inviting
            atmosphere is designed for friends and family to enjoy delicious
            meals and create lasting memories. With a dedicated team ready to
            serve you, we aim to provide an unforgettable experience that keeps
            you coming back for more. Join us and discover the art of
            burger-making at its finest!
          </p>
        </div>
      </div>
    </section>
  );
}
