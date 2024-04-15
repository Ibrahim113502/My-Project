import FwaImg from "../../../../assets/images/AboutUs/aboutAward/FWA.png";
import WImg from "../../../../assets/images/AboutUs/aboutAward/W.png";
import WebbyImg from "../../../../assets/images/AboutUs/aboutAward/webby.png";
import Diamond from "../../../../assets/images/AboutUs/aboutAward/diamond.png";
import Square from "../../../../assets/images/AboutUs/aboutAward/square.png";

function AboutAward() {
  return (
    <main>
      <section className="flex justify-center lg:px-8 xl:px-0">
        <div className="container ">
          <div className="grid p-3 lg-p-0  lg:grid-cols-3 lg:gap-24w-fit lg:pt-24 lg:pb-20">
            <div className="lg:pr-36 p-5 lg:p-0">
              <p className=" font-semibold">AWARDS & HONORS</p>
              <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold pt-4  ">
                The awards won by our works.{" "}
              </h1>
            </div>

            <div className="flex p-5 lg:p-0">
              <p className="lg:pr-36">
                When our team provides design and digital marketing. Applied
                arts can include{" "}
                <b>industrial design, graphic design, fashion design,</b> and
                the decorative arts which traditionally includes craft objects.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:gap-6 gap-2 items-baseline content-end">
              <div className="p-4">
                <img src={WImg} alt="" />
                <p className="pt-4">5x Developer Award</p>
              </div>
              <div className="p-4">
                <img src={WImg} alt="" />
                <p className="pt-4">3x Website of the Day</p>
              </div>
              <div className="p-4 ">
                <img src={FwaImg} alt="" />
                <p className="pt-4">2x Best Website</p>
              </div>
              <div className="p-4 ">
                <img src={WebbyImg} alt="" />
                <p className="pt-4 ">2x Best Homepage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="SectionBg  w-full bg-cover bg-center lg:bg-cover h-[25rem] lg:h-[50rem] bg-no-repeat flex justify-center">
          <div className="flex md:justify-end items-end justify-center container">
            
            <div className=" bg-red-600 text-white grid justify-center  p-10 md:pr-32">
              <div className="flex items-center ">
                <img src={Diamond} alt="" />
                <h1 className="font-bold lg:text-4xl text-3xl">35+</h1>
              </div>
              <p className="pt-2">
                designers <br /> and developers
              </p>
            </div>

            <div className=" bg-black text-white grid justify-center p-[35px] lg:p-[37px]  md:pr-32 lg:pr-32">
              <div className="flex items-center ">
                <img src={Square} alt="" />
                <h1 className="font-bold lg:text-4xl text-3xl">28+</h1>
              </div>
              <p className="pt-2">
                awards for digital <br /> innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutAward;
