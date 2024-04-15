/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "flowbite-react";

function GuideCard(props: any) {
  const cardDitails = props.cartValue;
  return (
    <main className="z-40">
      <Card className=" bg-[#F5F1F5]  lg:p-4 ">
        <div className="pb-16 flex justify-between ">
          <div className="flex">
            <img
              src={cardDitails.img}
              alt=""
              className="h-[60px] w-[60px] rounded-full object-cover"
            />
            <div className="pl-4">
              <p>{cardDitails.content}</p>
              <h1 className=" font-bold">{cardDitails.Name}</h1>
            </div>
          </div>
        </div>
        <div className="grid  gap-4">
          <p className="font-bold ">{cardDitails.date}</p>
          <h1 className="font-bold text-2xl">{cardDitails.heading}</h1>
          <div className="grid grid-flow-col gap-2">
            <button className="bg-[#90919C26] p-2 font-bold">Case Study</button>
            <button className="bg-[#90919C26] p-2 font-bold">
              Perspectives
            </button>
          </div>
        </div>
      </Card>
    </main>
  );
}

export default GuideCard;
