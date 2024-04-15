/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

function Ourservice() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <main className="flex justify-center items-center">
      <section className="container ">
        <div className="grid  lg:flex lg:justify-between lg:p-16 pl-6 py-4 ">
          <div className="">
            <h1 className="text-3xl LG:text-5xl font-bold pb-6 ">
              Get started with <br />
              our service today.
            </h1>
            <h3 className="">
              The app helps teams create, track, and deliver faster.
            </h3>
          </div>
          <div>
            <form
              className="grid lg:flex max-w-md md:flex-col lg:p-4 pt-4 lg:pt-0 text-sm font-semiboldtext-slate-50"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Button.Group className="rounded flex text-center">
                <TextInput
                  id="email"
                  placeholder="yoy@domain.com"
                  required
                  type="email"
                  className=" rounded-l-none"
                  {...register("email", { required: true })}
                />
                <Button
                  type="submit"
                  color="dark"
                  className=" border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 text-slate-50  focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm !rounded flex justify-center "
                >
                  Get a Demo
                </Button>
              </Button.Group>
            </form>
            <p className=" lg:p-6 lg:pt-0 pt-4">
              Already using our service?{" "}
              <a href="">
                <span className="font-bold">Sign In</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ourservice;
