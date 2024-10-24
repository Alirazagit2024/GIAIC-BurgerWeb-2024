export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative py-6 mb-8 bg-dark"
      style={{
        backgroundImage: "url('/images/bg-story.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Background ke liye opacity */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <h2 className="text-center text-3xl font-bold mb-8 text-white">
          OUR STORY 🍔
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-[1280px]">
            <p className="text-center text-lg mb-6 text-gray-300">
              Our journey began in a small kitchen, where we were fully focused
              on creating the <strong>perfect burger</strong> 🍔. We spent
              countless hours experimenting with{" "}
              <strong>flavors and ingredients</strong>, and there were days when
              we’d spend the whole day tweaking just one recipe to get the taste{" "}
              <em>just right</em> 🌟.
            </p>
            <p className="text-center text-lg mb-6 text-gray-300">
              What sets us apart from other burger joints is our commitment to
              using only <strong>fresh ingredients</strong> 🥗 and crafting our
              own recipes. There’s no room for{" "}
              <strong>frozen or processed</strong> ❌ items in our kitchen.
              Every burger we serve features:
            </p>
            <ul className="list-disc list-inside text-lg mb-6 text-gray-300">
              <li>Freshly baked buns 🥖</li>
              <li>Juicy, hand-formed patties 🍔</li>
              <li>Sauces made in-house, packed with unique flavors 🌶️</li>
            </ul>
            <p className="text-center text-lg mb-6 text-gray-300">
              Initially, only our family and friends knew about our recipes. But
              when they tasted our burgers, they said,{" "}
              <strong>“These are the best burgers in town!”</strong> 🌟 That’s
              when we decided to open our burger joint, and before long, people
              started coming because:
            </p>
            <ul className="list-disc list-inside text-lg mb-6 text-gray-300">
              <li>The taste was different 🥇</li>
              <li>
                There was <strong>no compromise on quality</strong> 💯
              </li>
              <li>
                Our <strong>customer service</strong> was friendly and
                personalized 😊
              </li>
            </ul>
            <p className="text-center text-lg mb-6 text-gray-300">
              Today, our joint is not only known for its burgers, but also for
              the <strong>experience</strong> 🌈. People don’t just come here to
              eat, they come to enjoy, to relax, and they often bring their
              friends along. And that&apos;s what sets us apart — it&apos;s not just a
              meal, it&apos;s an experience 🍽️.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
