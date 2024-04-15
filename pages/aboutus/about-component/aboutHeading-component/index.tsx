import videoImg from "../../../../assets/images/AboutUs/aboutHeading/Image.png";
import capitalImg from "../../../../assets/images/AboutUs/aboutHeading/Column.png";
import {Tooltip } from "flowbite-react";

function AboutHeading() {
  return (
    <main className=" relative">
      <span className="hidden md:block absolute right-0 top-0 h-[306px] w-[21vw] z-20 secOneBg"></span>
      <span className="hidden lg:block absolute xl:left-[38vw]  top-[21vh] xl:top-[18vh] lg:left-[31vw] h-[365px] w-[368px] z-20 blueRound"></span>
      <span className="hidden lg:block absolute left-[799px] bottom-0 h-[20vh] xl:w-[17vw]lg:w-[22vw] vectorBlue z-20 "></span>

      <section className=" flex justify-center  sm:pt-0  lg:px-6 xl:px-0">
        <div className="flex flex-col  container p-5 lg:p-0 ">
          <h1 className="text-3xl xl:text-4xl font-bold pt-5 md:pt-[7rem] lg:pt-[10rem] ">About Us</h1>
          <h3 className="pt-4 xl:pt-6 lg:w-[18vw] xl:w-full lg:font-[12px] xl:font-[19px]">
            Leave us a little info, and we’ll be in touch.
          </h3>
          <div className="pt-4 lg:pb-16 ">
            <button className="bg-black text-white rounded p-2">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className=" ">
        <div className="grid lg:grid-cols-2 lg:gap-x-4 xl:gap-x-20 gap-x-20">
          <div className="pb-5 lg:pb-0">
            <img src={videoImg} alt="" className=" h-auto object-cover w-[100vw]" />
          </div>

          <div className="grid md:grid-cols-2 xl:pr-[7rem] 2xl:pr-[20rem] justify-center md:gap-20 gap-7 content-center items-start lg:p-2 xl:p-0 px-6  ">
            <div className="grid xl:leading-7 justify-start   ">
              <h1 className="text-3xl xl:text-4xl font-bold ">
                Strategy & <br /> Art Direction.
              </h1>
              <p className=" xl:pt-10 pt-7">
                <b>Established stages</b> which reader, taken possession of my
                entire soul, like these sweet mornings of spring of enjoying
                with the theory of ethics.
              </p>
              <p className="xl:pt-10 pt-5">
                Praesent commodo cursus magna, vel scelerisque nisl venenatis
                dapibus posuere velit aliquet.
              </p>
              <div className="grid justify-start xl:pt-16 pt-6">
                <p>Structured Media Insights</p>
                <Tooltip content="93%">
                  <button className="bg-transparent hover:!bg-transparent !border-none !px-0 ">
                    <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 lg:w-[270px] 2xl:w-[290px] md:w-[50vw] w-[85vw]">
                      <div className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[93%] relative "></div>
                    </div>
                  </button>
                </Tooltip>
              </div>
            </div>

            <div className=" ">
              <h1 className="text-3xl xl:text-4xl font-bold">Website UX/UI Design.</h1>
              <p className="xl:pt-10 pt-7  ">
                Each time when our clients want to porta sem malesuada magna
                mollis euismod.{" "}
                <b className="xl:pb-10 pb-6">
                  {" "}
                  Praesent commodo cursus for the scelerisque.
                </b>
              </p>
              <p className="xl:pt-10 pt-5 ">
                Scelerisque nisl consectetur of your posuere erat a ante
                venenatis.
              </p>
            </div>
          </div>

          <div className="grid  items-center justify-center content-center lg:gap-20 pb-0 p-5 lg:p-0">
            <div className="h-auto lg:p-7 xl:p-0 xl:w-[25vw] ">
              <p className="pb-4">CAPABILITIES</p>
              <h1 className="text-3xl lg:text-4xl font-bold pb-4 lg:pb-0">
                We work in the fields of UI/UX design, interiors, photography
                and art direction.
              </h1>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <img src={capitalImg} alt="" className=" h-auto lg:object-cover w-[100vw] " />
          </div>
        </div>

        <div className=""></div>
      </section>
    </main>
  );
}

export default AboutHeading;
