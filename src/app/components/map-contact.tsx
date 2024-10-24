export default function Map() {
  return (
    <section className="text-gray-600 body-font mt-6 mb-8 relative mx-2">
      <h2 className="text-center mb-4 text-3xl font-bold text-white md:py">
        CONTACT
      </h2>
      <p className="lg:w-2/3 mx-auto mb-6 leading-relaxed text-base text-center">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom.
      </p>
      <div className="container px-2 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:hidden w-full">
          <h2 className="text-gray-900  font-medium title-font text-center">
            Location
          </h2>
          <div className="bg-gray-300 w-full h-64 rounded-3xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.461997956381!2d67.06481487377532!3d24.882218144389544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb530102b%3A0x899dc4ac84bd5f54!2sGrappetite%20Chowrangi%2C%20Bahadur%20Shah%20Zafar%20Road%2C%20Bahadurabad%20Bahadur%20Yar%20Jang%20CHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1729182253665!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
        <div className="lg:w-2/3 md:w-2/2 w-full bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-6 md:p-10 flex items-end justify-start relative hover md:flex">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            margin-Height="0"
            margin-Width="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.461997956381!2d67.06481487377532!3d24.882218144389544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb530102b%3A0x899dc4ac84bd5f54!2sGrappetite%20Chowrangi%2C%20Bahadur%20Shah%20Zafar%20Road%2C%20Bahadurabad%20Bahadur%20Yar%20Jang%20CHS%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1729182253665!5m2!1sen!2sus"
          ></iframe>
        </div>

        <div className="lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col px-4 py-6 md:py-8 rounded-3xl hover md:ml-auto mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="flex justify-center items-center text-white font-bold bg-yellow-500 border-2 py-2 px-6 focus:outline-none border-yellow-200 hover:bg-gray-100 hover:text-black hover:border-black transition-colors rounded-3xl text-lg">
            Submit
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}
