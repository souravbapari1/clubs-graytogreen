import { CheckCircle2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

function ClubObjectives() {
  return (
    <div className="container">
      <div className="w-full grid md:grid-cols-2 gap-5 py-20">
        <div className="w-full flex justify-center items-center">
          <Image
            src="https://media.istockphoto.com/id/670536592/photo/green-forest-in-spring.jpg?s=612x612&w=0&k=20&c=mh3x_eCI7evwjGHO3YuZYTK2l7kImPHI-g53R99sgFI="
            width={1000}
            height={1000}
            alt="image"
            className="w-96 md:h-72 h-52 object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="">
          <h1 className="md:text-3xl text-xl font-semibold">Club Objectives</h1>
          <div className="mt-5 flex flex-col gap-3">
            {Array.from({ length: 4 }).map((_, id) => {
              return (
                <div className="flex  gap-3" key={id}>
                  <div className="w-4 mt-1">
                    <CheckCircle2Icon size={18} className="text-primary" />
                  </div>
                  <p className="text-gray-800 md:text-base text-sm">
                    It is a green initiative to spread environmental awareness
                    in schools and environmental
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubObjectives;
