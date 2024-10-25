export default function Service() {
  return (
    // <section className="bg hero max-w-screen-xl h-screen mx-auto flex items-center justify-center text-white text-center bg-cover bg-center relative">
    //   <div className="glass bg-opacity-80 backdrop-blur-lg p-2 sm:p-8 md:p-10 rounded-xl shadow-lg border border-white border-opacity-20 absolute top-[130px] left-0 right-0 mx-auto w-11/12 max-w-4xl sm:bottom-10 sm:bg-opacity-80 sm:relative">
    //     <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-shadow">
    //       Welcome to Our Services
    //     </h1>
    //     <p className="text-xs sm:text-sm md:text-base lg:text-lg para-shadow">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
    //       doloribus labore error? Commodi temporibus nemo molestiae?
    //       Dignissimos, totam! Maiores nihil ducimus non sit labore mollitia,
    //       dolorum fugit quam facere.
    //     </p>
    //   </div>
    // </section>
    <section
    className="relative bg-dark"
    style={{
      backgroundImage: "url('/images/bg-service.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
    {/* Background ke liye opacity */}
    <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center  py-10 lg:py-40">
    <div className="p-2 sm:p-8 md:p-10 rounded-xl shadow-lg  mx-auto w-11/12 max-w-4xl sm:bottom-10  sm:relative lg:bg-opacity-80 lg:backdrop-blur-lg lg:glass lg:border lg:border-white">
         <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 text-shadow">
           Welcome to Our Services
         </h1>
         <p className="text-xs sm:text-sm md:text-base lg:text-lg para-shadow">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
           doloribus labore error? Commodi temporibus nemo molestiae?
           Dignissimos, totam! Maiores nihil ducimus non sit labore mollitia,
           dolorum fugit quam facere.
         </p>
       </div>
    </div>
  </section>
  );
}
