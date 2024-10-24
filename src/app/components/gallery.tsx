import Image from "next/image";

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mt-10 mb-10 mx-auto flex justify-center items-center flex-wrap">
        <div className="mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white text-center">
            GALLERY
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-0">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={140}
                height={140}
                alt="gallery"
                className="w-full object-cover h-full object-center block g rounded-3xl hover border border-gray-200"
                src="/images/gallery1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={100}
                height={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block g rounded-3xl hover border border-gray-200"
                src="/images/gallery2.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={100}
                height={100}
                alt="gallery"
                className="w-full h-full object-cover object-center block g rounded-3xl hover border border-gray-200"
                src="/images/gallery4.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={100}
                height={100}
                alt="gallery"
                className="w-full h-full object-cover object-center block g rounded-3xl hover border border-gray-200"
                src="/images/gallery3.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={100}
                height={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block g rounded-3xl hover border border-gray-200"
                src="/images/gallery5.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={100}
                height={100}
                alt="gallery"
                className="w-full object-cover h-full object-center block g rounded-3xl hover border border-gray-200"
                src="/images/gallery6.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
