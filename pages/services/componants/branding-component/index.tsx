import brandImage from "../../../../assets/images/Service-page-image/brandImage.jpg"
import arrowImage from "../../../../assets/images/Service-page-image/arrow.png"
import Brandingaccordian from "../../data/Brandingaccordian"
import circlefour from "../../../../assets/images/Service-page-image/CirclesFour.png"
import flagImage from "../../../../assets/images/Service-page-image/FlagBanner.png"
const Branding = (props: any) => {
    return (
        <>
            <section className="md:grid md:grid-cols-2 flex flex-col">
                <div className=" col-span-1 relative">
                    <img src={brandImage} alt="" className="h-full p-0 w-auto " />
                    <div className="absolute bg-blue-950 bg-opacity-96 grid text-white content-end pr-[9px] pl-[6px] py-[5px] right-[142px] lg:right-[263px] lg:pl-10 lg:pt-10 lg:pb-10 lg:pr-24  bottom-0">
                        <div className="flex flex-row gap-2 text-end">
                            <div>
                                <img src={circlefour} alt="" />
                            </div>
                            <div>
                                <p className="font-bold text-4xl -mt-1 "> 35</p>
                            </div>
                            <div className="font-bold text-2xl -mt-1">
                                <p> +</p>
                            </div>
                        </div>
                        <p className="sm:font-medium md:font-semibold mt-1 md:mt-3">designers<br />
                            and developers</p>
                    </div>
                    <div className="absolute bg-gradient-to-tl from-blue-600 via-pink-500 to-yellow-300 grid text-white content-end mt-[0.465px] pt-[5px] pr-[9px] pl-[6px] pb-[5px]  lg:pl-10 lg:pt-10 lg:right- lg:pb-10 lg:pr-24 bottom-0 right-0">
                        <div className="flex flex-row gap-2 text-end ">
                            <div className=" mt-1">
                                <img src={flagImage} alt="" />
                            </div>
                            <div>
                                <p className="font-bold text-4xl -mt-[5px] "> 28</p>
                            </div>
                            <div className="font-bold text-2xl mt-1 md:mt-3 lg:mt-0">
                                <p> +</p>
                            </div>
                        </div>
                        <p className="md:font-semibold font-medium md:mt-[1px] lg:mt-[10.465px]">awards for digital<br />innovation</p>
                    </div>
                </div>
                <div className="md:col-span-1 sm:row-span-1 text-left  lg:pl-24 lg:pr-36 pt-4 pb-8 lg:py-20 p-[24px]">
                    <p className="font-sans text-xs font-normal">OUR SERVICES</p>
                    <h2 style={{
                        color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
                        fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
                    }} > {props.serviceData.title}</h2>
                    <p className="font-sans text-sm justify-self-center pt-3 font-normal">{props.serviceData.description}</p>
                    <Brandingaccordian />
                    <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  px-3 py-1.5">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
                </div>
            </section >
        </>

    );
};

export default Branding;
