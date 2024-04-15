import brandImage2 from "../../../../assets/images/Service-page-image/brandImage2.jpg"
import arrowImage from "../../../../assets/images/Service-page-image/arrow.png"
import {CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;
const DigitalMarketing = (props: any) => {
  return (
    <>
      <section className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 flex flex-col-reverse">
        <div className="col-span-1 text-left lg:pl-32 lg:pr-36 md:pl-4 md:pr-4 lg:my-20 mt-4 mb-12 p-[24px]">
          <p className="font-sans text-xs font-normal  pt-3 ">OUR SERVICES</p>
          <h2 style={{
            color: props.serviceData.styles.color, fontSize: props.serviceData.styles.fontsize, fontWeight: props.serviceData.styles.fontweight,
            fontFamily: props.serviceData.styles.fontfamily, fontStyle: props.serviceData.styles.fontstyle,
          }} className="font-sans text-4xl pt-3 font-semibold">{props.serviceData.title}</h2>
          <p className="font-sans text-sm justify-self-center pt-3 font-normal">{props.serviceData.description}</p>
          <div className="flex gap-4 flex-row mt-10">
            <div className="" style={{ width: 75, height: 'auto', }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  root: {},
                  path: {
                    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                    strokeLinecap: 'butt',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    transformOrigin: 'center center',
                  },
                }}
              />
            </div>
            <div className="basis-1/2 font-xs font-semibold mt-2">
              <p>Increased by <br></br>
                the last 2 years.</p>
            </div>
          </div>
          <button className="flex rounded-md text-white text-small font-semibold 
            bg-black  px-3 py-1.5  mt-10">Learn More<img className=" bg-black mt-0.5 ml-2" src={arrowImage} /></button>
        </div>
        <div className=" col-span-1">
          <img src={brandImage2} alt="" className="h-full p-0 w-auto" />
        </div>
      </section>
    </>
  );
};
export default DigitalMarketing;