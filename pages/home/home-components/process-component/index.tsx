import { BsArrowUpRightSquare } from "react-icons/bs";
import { Accordion, useTheme } from "flowbite-react";
function ProcessComponent() {
  const theme = useTheme().theme;
  theme.accordion = {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        off: "rounded-lg border",
        on: "border-b",
      },
    },
    content: {
      base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "bg-transparent dark:bg-transparent",
      },
      heading: "",
      open: {
        off: "",
        on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
      },
    },
  };
  return (
    <main className="relative flex justify-center ">
      <span className="hidden lg:block absolute h-[131px] xl:w-[3vw] lg:w-[6vw] xl:top-[210px] lg:top-[199px]  xl:right-[435px] right-[236px] redLineOne opacity-50"></span>
      <span className=" absolute h-[272px] w-[137px] opacity-50  top-[7vh]  right-[100px] xl:right-[300px]  redLineTwo"></span>
      <span className=" hidden lg:block absolute h-[131px] xl:w-[75vw] w-[100vw] top-[7vh] xl:left-[2vw] left-[-23vw]  redLineThree opacity-50 "></span>
      <section className="container p-4 lg:p-20 z-20">
        <div className="lg:pb-8 pl-[3vw] lg:pl-0" >
          <h5 className="lg:pb-6 pb-3 font-bold">PROCESS</h5>
          <h1 className="text-4xl font-bold lg:pb-6 pb-3">How we do it?</h1>
          <h4 className="lg:pb-6 pb-3">
            Our app works for businesses of all sizes and shapes. <br />
            <b>Starting at just $5 for an agent.</b>
          </h4>
          <button className=" bg-transparent rounded p-1  border-black  border-2">
            <span className="p-2"> Contact Us</span>
          </button>
        </div>

        <div className="grid grid-flow-row lg:gap-8 gap-1 lg:grid-cols-2 pt-3 lg:pt-24">
          <div className="LG:pb-8 ">
            <Accordion collapseAll className=" bg-transparent border-none">
              <Accordion.Panel  >
                <Accordion.Title >
                  <h1 className="font-bold flex items-center text-2xl pb-6 ">
                    <BsArrowUpRightSquare className="mr-3" />
                    Client centric requisites
                  </h1>
                </Accordion.Title>
                <Accordion.Content>
                  <p className="pb-4">
                    We benchmark the requirements by analyzing customers’ needs
                    and put forth practically functional outcomes to make the
                    product scalable.
                  </p>
                  <div className="pb-6">
                    <button className="bg-black text-white p-2  rounded ">
                      Read More
                    </button>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel >
                <Accordion.Title className="border-none">
                  <h1 className="font-bold flex items-center text-2xl pb-6 ">
                    <BsArrowUpRightSquare className="mr-3" />
                    Design
                  </h1>
                </Accordion.Title>
                <Accordion.Content></Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="border-none">
                  <h1 className="font-bold flex items-center text-2xl pb-6 ">
                    <BsArrowUpRightSquare className="mr-3" />
                    What discounts are available?
                  </h1>
                </Accordion.Title>
                <Accordion.Content></Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>

          <div className="lg:pb-8 ">
            <Accordion collapseAll className=" bg-transparent border-none">
              <Accordion.Panel>
                <Accordion.Title className="border-none">
                  <h1 className="font-bold flex items-center text-2xl pb-6 ">
                    <BsArrowUpRightSquare className="mr-3" />
                    Screen Mockups are our mid-fidelity
                  </h1>
                </Accordion.Title >
                <Accordion.Content>
                  <p className="pb-4">
                    To envisage the requirements we formulate an exemplar design
                    to foresee the static upshot of the final product.
                  </p>
                  <div className="pb-6">
                    <button className="bg-black text-white p-2  rounded ">
                      Read More
                    </button>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title className="border-none">
                  <h1 className="font-bold flex items-center text-2xl pb-6 ">
                    <BsArrowUpRightSquare className="mr-3" />
                    Design
                  </h1>
                </Accordion.Title>
                <Accordion.Content></Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="border-none">
                  <h1 className="font-bold flex items-center text-2xl pb-6 ">
                    <BsArrowUpRightSquare className="mr-3" />
                    Development
                  </h1>
                </Accordion.Title>
                <Accordion.Content></Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProcessComponent;
