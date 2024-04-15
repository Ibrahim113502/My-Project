import { Tabs } from "flowbite-react";
import ServiceCard from "../serviceCard";
import { useTheme } from "flowbite-react";

function ServiceComponent() {
  const theme = useTheme().theme;
  theme.tab = {
    base: " flex flex-col lg:flex-row sm:p-4 lg:p-16",
    tablist: {
      base: "flex justify-center lg:justify-start overflow-scroll lg:overflow-hidden lg:flex-col flex-nowarp  w-cover",
      styles: {
        default: "flex flex-row   border-r border-gray-200 dark:border-gray-700",
        underline:
          "flex-nowrap -mb-px lg:border-r border-b  border-gray-200 dark:border-gray-700",
        pills:
          "flex flex-col font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
        fullWidth:
          "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
      },
      tabitem: {
        base: "flex flex-col content-start sm:p-4 rounded-none text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500  focus:outline-none",
        styles: {
          default: {
            base: " ",
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-none",
            active: {
              on: "text-cyan-600 rounded-none lg:border-r-2 border-b-2 border-[#FFD074] active dark:text-cyan-500 dark:border-cyan-500",
              off: "lg:border-r-2 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-none bg-cyan-600 text-white",
              off: "rounded-none hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-0 first:ml-0 w-full rounded-none flex flex-row",
            active: {
              on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
              off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabpanel: "py-3 flex-row",
  };
  return (
    <main className="flex justify-center relative lg:pt-16 pt-4   ">
      <span className="h-[57%] w-[28%] absolute top-1 left-1 yellowround bg-no-repeat "></span>
      <span className="h-[57%] w-[17%] absolute bottom-0 right-0 blueround bg-no-repeat"></span>
      <section className="container bg-[#90919C26] rounded lg:pt-24 pt-3 pb-18 z-40">
        <div className="text-center pb-6">
          <p className="font-bold ">#Our Service</p>
          <h1 className="text-4xl font-bold ">What to expect?</h1>
        </div>

        <div className="p-3 ">
          <Tabs.Group
            aria-label="Tabs with icons"
            style="underline"
            className="  "
          >
            <Tabs.Item active title="Branding " className=" ">
              <div className=" ">
                <ServiceCard />
              </div>
            </Tabs.Item>

            <Tabs.Item title="Web development"></Tabs.Item>
            <Tabs.Item title="Mobile app"></Tabs.Item>
            <Tabs.Item title="Digital marketing"></Tabs.Item>
          </Tabs.Group>
        </div>
      </section>
    </main>
  );
}

export default ServiceComponent;
