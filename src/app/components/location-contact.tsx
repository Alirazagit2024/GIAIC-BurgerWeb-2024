export default function Location() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col text-center w-full py-4">
          <h2 className="text-center mb-4 text-3xl font-bold text-white md:py">
            LOCATION
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep.
          </p>
        </div>
        <div className="t border-2 border-white rounded-3xl p-5 text-center sm:text-start">
          <p className="mb-4">
            {" "}
            <strong className="text-white py-4 text-2xl">
              ☎ PHONE :{" "}
            </strong>{" "}
            +123 456 7890
          </p>
          <p className="mb-4">
            {" "}
            <strong className="text-white py-4 text-2xl">
              ✉ EMAIL :{" "}
            </strong>{" "}
            info@restaurant.com
          </p>
          <p className="mb-4">
            {" "}
            <strong className="text-white py-4 text-2xl">
              🗺 ADDRESS :{" "}
            </strong>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ipsam dolor voluptate nobis consequuntur consequatur est porro
            tenetur cumque id architecto impedit perferendis sapiente, officia
            et dignissimos ea molestiae? Voluptatibus.
          </p>
        </div>
      </div>
    </section>
  );
}
