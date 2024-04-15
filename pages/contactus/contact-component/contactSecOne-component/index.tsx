function ContactSecOne() {
  return (
    <main className="flex justify-center relative">
      <span className="hidden sm:block absolute right-0 top-0 h-[306px] w-[21vw] z-20 secOneBg"></span>
      <section className="  container  sm:pt-20 sm:pl-6 lg:px-6 p-6 sm:p-0">
        <div className="flex flex-col sm:pt-12 pl-[1vw] sm:p-0 ">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold pt-16  flex ">Contact Us</h1>
          <h3 className="lg:pt-5 pt-3 ">
            Leave us a little info,and we'll be in touch
          </h3>
          <div className="pt-4 sm:pb-16 flex ">
            <button className="bg-black text-white rounded p-2">
              Send Us an Email
            </button>
          </div>
          <div className="flex pt-4 pb-3  ">
            <a href="">
              <h1>
                <b>Home /</b>
              </h1>
            </a>
            <a href="">
              <h1>Contact Us</h1>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSecOne;
