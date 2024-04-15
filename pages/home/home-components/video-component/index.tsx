import "../../../../App.css";
import videoImg from "../../../../assets/images/Home/videoImg/Fill.png";
import mainVideoImg from "../../../../assets/images/Home/videoImg/Image.png";
import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";
import mission from "../../../../assets/images/Home/videoImg/mission.png";
import vision from "../../../../assets/images/Home/videoImg/vision.png";
import values from "../../../../assets/images/Home/videoImg/values.png";
function VideoComponent() {
  return (
    <main className="flex justify-center relative z-20 ">
      <span className="hidden lg:block absolute h-[57vh] xl:w-[10vw] lg:w-[20vw] top-[2rem]  left-[41.25rem]  bg-no-repeat z-20 Intersect"></span>
      <span className="hidden lg:block absolute h-[27vh] xl:w-[10vw] lg:w-[20vw] top-[2rem] left-[841px] bg-no-repeat z-20 VectorVd"></span>
      <section className=" md:container bg-[#f4f8fd] rounded p-4 lg:p-8 ">
        <div className=" container grid grid-flow-row lg:grid-cols-3  justify-center justify-items-center lg:pt-[5rem] pb-[1rem] lg:pr-4 lg:pl-5">
          <div className="lg:gap-6 gap-4 grid justify-start p-3 md:pl-4 lg:pl-0  lg:p-6">
            <div className=" relative w-[93px] h-[93px] ">
              <img src={videoImg} alt="" />
              <span className="text-4xl text-white absolute top-[29px] left-[31px]  ">
                <AiFillCaretRight />
              </span>
            </div>
            <p>#datatracking app</p>
            <h1 className="text-3xl md:text-4xl font-bold">
              The app is great for basic setup and adjusts.
            </h1>
            <h6>
              So how does it work? Let’s check our <b>Getting Started</b>
              tutorial or contact us for a demo.
            </h6>
            <div className="pb-2 lg:pb-0 ">
              <button className="border-2 border-black font-bold rounded p-2">
                Explore Features
              </button>
            </div>
          </div>
          <div className="col-span-2 z-30 p-3 ">
            <img src={mainVideoImg} alt="" className=" rounded" />
          </div>
        </div>
        <div className="grid md:grid-flow-col md:grid-cols-3  justify-center content-end  items-center gap-[3vh] p-3 md:pb-4 lg:pb-0 ">
          <div className=" ">
            <hr className="border-top-1 font-semibold border-black px-6 py-4 lg:p-6" />
            <img src={mission} alt="" className="pb-6 " />
            <h1 className="text-2xl font-bold pb-4">Mission</h1>
            <p className="pb-4">
              Untangling Knots to give Clear Digital Solution
            </p>
            <button className="border-2 bg-black text-white border-black rounded flex content-center items-center px-3 py-1 ">
              <p className="pr-2">Read More</p> <AiOutlineArrowRight />
            </button>
          </div>

          <div className=" ">
            <hr className="border-top-1 font-semibold border-black px-6 py-4 lg:p-6" />
            <img src={vision} alt="" className="pb-6" />
            <h1 className="text-2xl font-bold pb-4">Vision</h1>
            <p className="pb-4">
              Make life simpler by providing complex tech in a simpler way.
            </p>
            <button className="border-2 bg-black text-white border-black rounded flex content-center items-center px-3 py-1 ">
              <p className="pr-4">Read More</p> <AiOutlineArrowRight />
            </button>
          </div>

          <div className="pb-4 md:pb-0  ">
            <hr className="border-top-1 font-semibold border-black px-6 py-4 lg:p-6" />
            <img src={values} alt="" className="pb-6  " />
            <h1 className="text-2xl font-bold pb-4">Values</h1>
            <p className="pb-4">Equally disciplined and relish work ethic.</p>
            <button className="border-2 bg-black text-white border-black rounded flex content-center items-center px-3 py-1 ">
              <p className="pr-4">Read More</p> <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VideoComponent;
