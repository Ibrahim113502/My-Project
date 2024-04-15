import serviceCardImg from "../../../../assets/images/Home/service/Image.png";
import shareLogo from "../../../../assets/images/Home/service/share.png";
import fingerprintLOgo from "../../../../assets/images/Home/service/fingerprint.png";
import collectionLogo from "../../../../assets/images/Home/service/collection.png";
import {Card, Tooltip } from "flowbite-react";
function ServiceCard() {
  return (
    <main className="grid lg:flex w-fit sm:px-3">
      <section className="xl:pr-8">
        <div className="">
          <Card imgAlt="" imgSrc={serviceCardImg}>
            <div className="">
              <h1 className="font-bold pb-4">Website & Mobile</h1>

              <div className=" ">
                <Tooltip content="93%" className="w-fit">
                  <button className="bg-transparent hover:!bg-transparent !border-hidden">
                    <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 lg::w-[60px] w-[250px]">
                      <div className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative"></div>
                    </div>
                  </button>
                </Tooltip>
              </div>

              <p className="pt-4">
                Packed with API features you will love to collaborate with
                issues and change business.
              </p>
            </div>
          </Card>
        </div>
      </section>
      <section>
        <div className="p-4 lg:p-1 lg:pl-5 xl:pl-0 ">
          <div className="xl:pb-14 pb-4 ">
            <img src={fingerprintLOgo} alt="" />
            <h1 className="font-bold pt-2">1. Create a Free Account</h1>
            <p className="xl:pr-16">
              Spaces of each debt in the digital world can help you with overall
              simplest authentic. <b>Go to Sign Up / Create an Account.</b>
            </p>
          </div>
          <div className="xl:pb-14 pb-4 ">
            <img src={shareLogo} alt="" />
            <h1 className="font-bold pt-2 ">
              2. Generate an API key for your app
            </h1>
            <p className="xl:pr-16">
              To achieve best results in digital world can help you with overall
              create an API Key. <b>Spaces of each debt in the.</b>
            </p>
          </div>
          <div className="xl:pb-14 pb-4 ">
            <img src={collectionLogo} alt="" />
            <h1 className="font-bold pt-2">3. That’s it!</h1>
            <p className="xl:pr-16">
              Now you can use the app and improve your scores.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceCard;
