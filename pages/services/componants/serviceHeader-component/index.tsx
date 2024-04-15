import  vectorImage1 from "../../../../assets/images/Service-page-image/Vector (2).png";
export function ServicesHeader() {
    return (
      
            <section className="justify-start pl-4 pt-[98px] mb-4 md:pb-12  gap-2.5 lg:ml-14 ml-1">
                <div className="relative">
                <img className="hidden sm:block absolute right-0 -top-[145px]  z-20" src= {vectorImage1} alt="" />
                </div>
                <h1 className="font-sans text-4xl  pt-8 font-bold">Our Services</h1>
                <h4 className="font-sans text-xs pt-4 font-normal ">Leave us a little info, and we’ll be in touch.</h4>
                <button className="rounded-md text-white text-small font-semibold bg-black  p-1 mt-4">Contact Us</button>
            </section>

    )
}
