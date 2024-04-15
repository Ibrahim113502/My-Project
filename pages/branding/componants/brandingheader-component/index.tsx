import BranddetailImage from "../../../../assets/images/Branding-image/Image.png"
import {TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti'
import {BiLogoPinterestAlt} from 'react-icons/bi'
export function Brandingheader() {
    return (
        <>
            <section className="pr-0 pl-0 md:pr-32 md:pl-[45px] md:pb-10 pb-[30px] md:pt-32 pt-[118px]">
                <div className="ml-4">
                    <h6 className="font-semibold text-sm ">Our Service</h6>
                    <h2 className="mt-2 font-bold text-5xl font-xs">Branding.</h2>
                </div>
            </section>
            <section className=" pr-0 pl-0 md:ml-[67px] md:mr-[33px] lg:pl-12 lg:pr-32 ">
                <div className="lg:flex lg:gap-10">
                    <div className=" bottom-0 left-0">
                        <img className="relative object-cover lg:h-96 lg:max-w-xl lg:ml-4" src={BranddetailImage} alt="" />
                        <div className="absolute rounded-md top-[254px] left-[23px] lg:left-[157px] md:top-[284px] md:left-[98px] flex flex-col bg-white ">
                            <TiSocialFacebook  className="p-[3px] w-7 h-7 md:w-9 md:p-[6px] md:h-9"/>
                            <TiSocialTwitter className="p-[3px] w-7 h-7 md:w-9 md:p-[6px] md:h-9" />
                            <BiLogoPinterestAlt className="p-[3px] w-7 h-7 md:w-9 md:p-[6px] md:h-9"/>
                        </div>
                    </div>
                    <div className="p-3 pb-3 md:pr-8">
                        <h1 className="font-semibold text-sm mt-3 md:mt-0">IZHTECH</h1>
                        <h1 className="font-semibold text-3xl md:text-5xl md:mt-0 mt-3"> Your Partner for  Crafting Unforgettable  Brand Identities</h1>
                        <p className="font-normal mt-5 text-sm">At Izh-Tech, we firmly believe that a robust brand forms the very heart of a successful business. Our conviction in this truth is what fuels our passion to provide a comprehensive array of branding and design services aimed at not just helping yo
                            u establish your brand, but nurturing its growth over time.</p>
                        <p className="font-semibold mt-5 text-sm">Our Comprehensive Suite of Branding and Design Services</p>
                        <p className="font-normal  text-sm mb-3 md:mb-0">Our commitment to your brand’s success is reflected in our wide-ranging suite of services.
                            Here’s a closer look at what we offer:</p>
                    </div>
                </div>
            </section>
                   
        </>

);
};
export default Brandingheader; 