import { Carousel, Card } from "flowbite-react";
import customerpic from "../../../../../public/images/homeBackground/customer/Avatar.png";

function CustomerComponent() {
  return (
    <main className="flex justify-center ">
      <section className="container relative">
        <span className="coustBg absolute top-0 left-0 xl:w-[15vw] lg:w-[28vw] h-[15vh]"></span>
        <span className="coustBg absolute bottom-0 right-0 w-[15vw] h-[15vh]"></span>
        <section>
          <Card className="bg-[#925F8D17]">
            <div className="flex lg:justify-center ">
              <h1 className="text-4xl font-bold lg:text-center ">
                Meet our customers.
              </h1>
            </div>
            <div className=" lg:p-6 flex ">
              <Carousel className="h-[50vh] ">
                <div className="grid grid-flow-row  h-full md:text-center justify-center  dark:text-white lg:w-[17vw] w-full ">
                  <div className="flex md:justify-center lg:p-2 ">
                    <h5 className=" rounded w-fit h-fit bg-[#90919C26]">
                      Design Quality
                    </h5>
                  </div>
                  <p>
                    “The app is a part of our team, helping to crystalize our
                    vision and delivering incredible results in a record time.”
                  </p>
                  <div className="flex md:justify-center">
                    <img
                      src={customerpic}
                      alt=""
                      className="h-[60px] w-[60px] rounded-full object-cover"
                    />
                  </div>
                  <h1 className="font-bold">Colin Lucido</h1>
                  <h3 className="text-[#5F5F6C]">
                    UI Designer ·{" "}
                    <b className="text-[#5F5F6C]">Interactive Media</b>
                  </h3>
                </div>

                <div className="flex h-full items-center justify-center dark:text-white">
                  Slide 2
                </div>

                <div className="flex h-full items-center justify-center dark:text-white">
                  Slide 3
                </div>
              </Carousel>
            </div>
          </Card>
        </section>
      </section>
    </main>
  );
}

export default CustomerComponent;
