/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import "../../../../App.css";
import { Button, TextInput } from "flowbite-react";

function DemoSection() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <main className="flex justify-center relative lg:m-6">
      <span className="VectordemoSec absolute bottom-[5rem]  h-[456.27px] md:w-[456.27px]"></span>
      <section className="container flex item-center justify-center p-4 lg:p-0 ">
        <div className="lg:w-1/3 bg-transparent columns-3xl md:p-4 p-2 ">
          <h1 className="font-bold text-4xl  pb-2">
            We are{" "}
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500  text-cente text-4xl">
              izh tech
            </span>
            ,<br />
            Innovation ahead
          </h1>
          <p>
            Helping SaaS teams to increase e-commerce conversions, reduce bounce
            rate, and <b>scale up fast</b>.
          </p>
          <form
            className="flex max-w-md flex-col pt-2  text-sm font-semiboldtext-slate-50  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex  sm:lg:gap-0  rounded ">
              <TextInput
                id="email"
                placeholder="yoy@domain.com"
                required
                type="email"
                {...register("email", { required: true })}
              />
              <Button
                type="submit"
                color="dark"
                className=" border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 text-slate-50  focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 text-sm rounded-lg flex justify-center "
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default DemoSection;
