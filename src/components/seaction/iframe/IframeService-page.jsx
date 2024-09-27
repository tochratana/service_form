let IframeServicePage = () => {
  return (
    <div>
      <div class="flex flex-wrap justify-center items-center h-auto pt-[9%]">
        <div class="w-full md:w-2/5 p-4">
          <h2 class="text-xl md:text-7xl  mb-5 font-pacifico leading-7">
            GET IN TOUCH!
          </h2>
          <form class="space-y-4 font-poppins">
            <div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                class="mt-1 p-4 w-full border rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                class="mt-1 p-4 w-full border rounded-md"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                class="mt-1 p-4 w-full border rounded-md"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              class="px-8 py-4 bg-black dark:bg-amber-500 text-white hover:bg-blue-700"
            >
              submit
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/2 p-4 flex justify-center">
          <div class="rounded-full overflow-hidden aspect-square w-[80vw] md:w-[35rem]">
            <iframe
              class="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.63140468442!2d104.89920651192116!3d11.578259843842227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1726051718014!5m2!1sen!2skh"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IframeServicePage;
