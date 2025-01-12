import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ClubSocialLink from "../gallery/_components/ClubSocialLink";

function AboutAndJoin() {
  return (
    <div className="bg-primary/10 w-full ">
      <div className="container">
        <div className="w-full grid lg:grid-cols-2 gap-10 py-28">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-800">
              Growing Green Minds: Empowering Sustainability for a Better
              Tomorrow
            </h1>
            <p className="mt-5">
              It is a green initiative to spread environmental awareness in
              schools and environmental communities. The club has contributed to
              sustainability practices by sorting and recycling waste,
              encouraging agriculture, and saving energy. The club has
              contributed to sustainability practices by sorting and recycling
              waste, encouraging agriculture, and saving energy.
            </p>
            <Button className="shadow-none rounded donateBtn px-10 py-5 font-bold mt-6">
              Join us Now
            </Button>
            <div className="">
              <ClubSocialLink />
              <div className="">
                <p className="text-sm mt-8">
                  <span>Address: </span>123 Main Street, City, Country
                </p>
                <p className="text-sm mt-3">
                  <span>Profile PDF: </span> View Document
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-start relative">
            <Image
              src="https://media.istockphoto.com/id/951054404/photo/footpath-through-forest-with-beautiful-sunlight-and-lush-green-trees.jpg?s=612x612&w=0&k=20&c=unrrR2PjJxyCmoxO-eIEUrCllbuFkn0K_J5yTmNcCL0="
              width={1000}
              height={1000}
              alt="club"
              className="w-96 h-64 rounded-lg shadow-md object-cover"
            />
            <div className="w-72   p-5 rounded-2xl rotate-6 rounded-b-none shadow-md shadow-green-300/10 bg-white absolute bottom-0 left-0 mx-auto lg:mb-20 -mb-14 right-0 lg:ml-28 ">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg absolute right-0 top-0 -mt-5 -mr-5 flex justify-center items-center">
                <Image
                  src="/assets/tree.svg"
                  width={1000}
                  height={1000}
                  alt="club"
                  className="w-10 h-10 rounded-full bg-white  object-cover"
                />
              </div>
              <p className="text-md mt-8">
                Founded in 2022 with a mission to promote sustainability
              </p>
              <p className="text-xs mt-2">
                <span className="text-orange-600 font-bold ">240+ Members</span>{" "}
                actively participating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAndJoin;
