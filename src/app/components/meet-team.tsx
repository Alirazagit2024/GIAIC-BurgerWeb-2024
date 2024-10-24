import Image from "next/image";

export default function MeetTeam() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-7 text-white">
            MEET THE TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap  gap-4 justify-center items-center">
          <div className="w-full max-w-sm py-4 border border-gray-200 flex flex-col justify-center items-center rounded-3xl hover">
            <a href="#">
              <Image
                src="/images/h-chef.png"
                style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
                className="h-100"
                width={200}
                height={200}
                alt="Flowbite Logo"
              />
            </a>
            <div className="px-5 py-5 text-center">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  John Doe
                </h5>
                <p className="italic">&quot;Head Chef&quot;</p>
              </a>
              <p className="lg:w-3/3 mx-auto leading-relaxed text-base">
                Leads the kitchen, ensuring quality, creativity, and consistency
                in every meal.
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm py-5 border border-gray-200 flex flex-col justify-center items-center rounded-3xl hover">
            <a href="#">
              <Image
                src="/images/s-chef.png"
                style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
                className="h-100"
                width={200}
                height={200}
                alt="Flowbite Logo"
              />
            </a>
            <div className="px-5 py-5 text-center">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Bella
                </h5>
                <p className="italic">&quot;Sous Chef&quot;</p>
              </a>
              <p className="lg:w-3/3 mx-auto leading-relaxed text-base">
                Supports the head chef, ensuring kitchen efficiency and
                excellent food quality.
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm border py-4 border-gray-200 flex flex-col justify-center items-center rounded-3xl hover">
            <a href="#">
              <Image
                src="/images/manager.png"
                style={{ filter: "drop-shadow(3px 3px 10px #ffffff)" }}
                className="h-100"
                width={200}
                height={200}
                alt="Flowbite Logo"
              />
            </a>
            <div className="px-5 py-5 text-center">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Emily Johnson
                </h5>
                <p className="italic">&quot;Manager&quot;</p>
              </a>
              <p className="lg:w-3/3 mx-auto leading-relaxed text-base">
                Oversees daily operations, prioritizing customer satisfaction
                and a positive dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
