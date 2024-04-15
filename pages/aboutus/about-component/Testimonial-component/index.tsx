import { Carousel } from "flowbite-react";
import { AiOutlineArrowRight } from "react-icons/ai";
function AboutTestimonial() {
  return (
    <main className="grid grid-flow-col  justify-center bg-black lg:p-6 xl:p-0">
      <section className="container lg:pt-16 lg:pb-16 lg:px-6 xl:px-0">
        <div className="lg:flex grid ">
          <div className="p-6 lg:pl-0 ">
            <p className="pb-5 uppercase text-[#c3c3c4]">Testimonials</p>
            <hr className="border-[#60606B]" />
            <h1 className="xl:text-5xl lg:text:4xl text-3xl pt-5 font-bold text-[#fefdff]">
              What our clients say about our studio.
            </h1>
            <div className="lg:pt-16 lg:pb-20 pt-4 pb-4">
              <button className="bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 flex justify-center items-center rounded pl-1 pr-1 ">
                <span className="p-2 text-[#fefdff]">More Reviews</span>{" "}
                <AiOutlineArrowRight className="text-[#fefdff]" />
              </button>
            </div>
          </div>

          <div className="lg:p-6  flex ">
            <Carousel className=" lg:h-auto  lg:w-[47vw] h-[54vh] sm:h-[40vh] w-[100vw] ">
              <div className="grid grid-flow-row text-start justify-start lg:justify-center h-auto w-auto text-white ">
                <h3 className="text-[#91929B] w-fit lg:p-2 bg-[#90919C26] ">
                  Customer Support
                </h3>
                <p className="text-[#91929B] pb-6 pt-3">
                  “5 stars WordPress template! If anyone wants an example of
                  what you can do with this theme. I tell you what, there has
                  never been an issue that Cory from the colabrio support team
                  hasn't been able to solve for me.”{" "}
                </p>
                <h1 className="font-bold pb-2">Colin Lucido</h1>
                <p className="text-[#91929B] lg:pb-16">
                  UI Designer ·<b>Interactive Media</b>{" "}
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutTestimonial;
