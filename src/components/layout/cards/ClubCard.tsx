import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ClubCard() {
  return (
    <Link href="/club/1">
       <Card className="bg-[#EBF3E8]  border-2 border-primary/5 p-3 shadow-none rounded-3xl ">
      <CardHeader className="p-0 relative">
        <Image
          src="https://s3-alpha-sig.figma.com/img/37d1/d9eb/4a82cf115d0d7b691001643c75c98123?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVE9x0SekCXcAGcoHuV~8-4UBeKaru04fu57xe59MQ38HYqlf2CYykrQr7f7lzwHCEvV9qzoLKRFvQW2xGjjeOdfX8hAC8ONumMZnZ~HcMaFb4QsvX0NB2QI4n5P-kDBKIKUfJqDDvPNi6-0Tigc3kWzCVHwbrPUkdFbKf2nLQWO9P45sByZclRAZWfuWoG9usXrSHqV2ZNlj1VD1ULb~tYs0c-BQS1gg7C4T1Pv7Ol37J-hxFJkEldnVdF0XUdNqzxglpPc0woA0TGWs63-ifycO4vl4NWwEfa9Kw33S7xPtM8qI3BfmcZ64-fnIyBNgfYmobBrkJt7cB92ASb1dw__"
          width={800}
          height={400}
          alt="tree"
          className="w-full md:h-64 h-52 object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 right-0 left-0 w-full flex justify-center items-center">
          <div className="border border-gray-200 bg-white w-auto text-green-950 text-sm text-center rounded-2xl p-1 px-4 -mb-3.5">
            Musket,Oman
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-1 mt-7 ">
        <h1 className="md:text-3xl  text-2xl">
          The Power Of Achieve More Together
        </h1>
        <p className="md:text-lg text-gray-500 mt-3">
          Explore the concept of collaboration and its impact on productivity.
        </p>
      </CardContent>
      <CardFooter className="mt-0 mb-1 px-1 py-0 flex justify-between items-center w-full">
        <div className="flex gap-2 justify-between items-center w-full ">
          <p className="text-green-800">500+ Members</p>
          <p className="text-gray-800">2025</p>
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
}

export default ClubCard;
