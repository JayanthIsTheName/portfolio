"use client";

import Image from "next/image";
import { Tabs } from "@/app/components/ui/tabs";

export default function mediclino() {
  const tabs = [
    {
      title: "Page_1",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Home Page</p>
          <DummyContent src="/mediclino/Home screen 2.png"/>
        </div>
      ),
    },
    {
      title: "Page_2",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Med Profile Page</p>
          <DummyContent src="/mediclino/Med profile.png"/>
        </div>
      ),
    },
    {
      title: "Page_3",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Inventory Page</p>
          <DummyContent src="/mediclino/Inventory.png"/>
        </div>
      ),
    },
    {
      title: "Page_4",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-purple-700 to-violet-900">
          <p>Calibration Page</p>
          <DummyContent src="/mediclino/Calibration.png" />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({src}:{src:string}) => {
  return (
    <Image
      src={src}
      alt="image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
