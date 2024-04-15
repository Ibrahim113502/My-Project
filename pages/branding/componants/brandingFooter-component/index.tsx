import arrowImage from "../../../../assets/images/Branding-image/arrow.png"
export function Brandingfooter() {
    return (
        <>
            <section className=" bg-black text-white flex justify-center lg:px-10 ">
                <div className="container lg:pt-20 lg:pb-20 p-5 lg:p-0">
                    <div className=" grid lg:grid-flow-col  pb-8 justify-between">
                        <div className=" grid gap-4">
                            <p className=" font-semibold uppercase text-[#91929B]">
                                Let’s Collaborate
                            </p>
                            <h1 className="text-4xl font-bold">
                                Send us an email,
                                <br /> to discuss a new project.
                            </h1>
                        </div>

                        <div className="pt-5 lg:pt-11">
                            <button className="bg-gradient-to-tl from-blue-500 via-pink-500 to-yellow-400 flex justify-center items-center rounded pl-1 pr-1 ">
                                <span className="p-2 text-[#fefdff]">Contact Us</span>{" "}
                                <img className="mt-0.5 ml-2" src={arrowImage} />
                            </button>
                        </div>
                    </div>

                    <hr className=" font-semibold" />

                    <div className="grid grid-flow-col col-span-2 pt-6">
                        <div className="lg:pr-[50vw]">
                            <p className="text-[#91929B]">
                                We're{" "}
                                <span className="font-semibold">a team of creatives</span> who
                                are excited about unique ideas and help digital and fin-tech
                                companies
                                <span className="font-semibold">
                                    to create amazing identity.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};
export default Brandingfooter; 