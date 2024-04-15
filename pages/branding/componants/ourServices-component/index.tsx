import BranddetailImage1 from "../../../../assets/images/Branding-image/p5x4IKEkWSo.png"
export function OurServices() {
    return (
        <>
            <section className="lg:py-24 lg:px-24 md:px-0 md:pb-12 mt-20  md:p-0 md:mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 md:gap-12">
                    <div className="col-span-1">
                        <img className="h-[460px]  w-[520px] lg:pl-[65px]" src={BranddetailImage1} alt="" />
                    </div>
                    <div className="col-span-1 text-left lg:mb-20 lg:mt-12 md:mt-4 md:mb-12 mb-8 mt-5 p-4 md:p-0">
                        <p className="font-sans text-xs font-normal">OUR SERVICES</p>
                        <h1 className="font-semibold text-4xl md:text-5xl mt-5">
                            Tailor-Made Solutions for Every Business
                        </h1>
                        <section>
                            <div className="mt-5 border-t border-graypx-1 pt-px opacity-60 bg-[#60606B]"></div>
                        </section>
                        <p className="font-normal  text-sm text-opacity-75  leading-6 tracking-wide mt-8">Whether you’re a burgeoning startup endeavouring to carve out your brand’s presence or a well-established
                            enterprise seeking to invigorate your image, we’re here to provide tailor-made
                            branding solutions tailored to your company’s specific requisites. Our commitment is to work closely with you,
                            ensuring that your brand mirrors your values, aspirations, and vision.</p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default OurServices; 