import BrandingLogo from "../../../../assets/images/Home/content-Img/BrandingLogo.png";
import WebAppLogo from "../../../../assets/images/Home/content-Img/WebAppLogo.png";
import MobileAppLogo from "../../../../assets/images/Home/content-Img/MobileAppLogo.png";
import DigitalMarketingLogo from "../../../../assets/images/Home/content-Img/DigitalMarketingLogo.png";

function ContentComponent() {
  return (
    <main className=" ">
      <section className="  ">
        <div className="  bg-[#F3FEFD] grid grid-cols-2 lg:grid-cols-4 grid-flow-row   content-center justify-center lg:p-11 pt-6   ">
          <div className="text-center  ">
            <a href="#" className="block max-w-sm p-6 bg-[#F3FEFD]">
              <div className="flex justify-center">
                <img src={BrandingLogo} alt="" />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Branding
              </h5>
              <p className="font-normal text-[#010A44] text-base">
                Creating a higher spacing and how people move through a unique.
              </p>
            </a>
          </div>
          <div className="text-center   ">
            <a href="#" className="block max-w-sm p-6  bg-[#F3FEFD]">
              <div className="flex justify-center">
                <img src={WebAppLogo} alt="" />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Web App
              </h5>
              <p className="font-normal text-[#010A44] text-base">
                Make a regular review for the enterprises attributing rewards.
              </p>
            </a>
          </div>
          <div className="text-center  ">
            <a href="#" className="block max-w-sm p-6  bg-[#F3FEFD]">
              <div className="flex justify-center">
                <img src={MobileAppLogo} alt="" />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Mobile App
              </h5>
              <p className="font-normal text-[#010A44] text-base">
                Get a full control of debts in the digital world simplesity.
              </p>
            </a>
          </div>
          <div className="text-center  ">
            <a href="#" className="block max-w-sm p-6  bg-[#F3FEFD]">
              <div className="flex justify-center">
                <img src={DigitalMarketingLogo} alt="" />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Digital Marketing
              </h5>
              <p className="font-normal text-[#010A44] text-base">
                Get a full control of debts in the digital world simplesity.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContentComponent;
