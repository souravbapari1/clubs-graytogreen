import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

function MemberCard() {
  return (
    <div className="bg-primary/10 w-full  rounded-3xl overflow-hidden">
      <Image
        src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
        width={1000}
        height={1000}
        alt=""
        className="md:h-60 h-40 w-full object-cover rounded-3xl shadow-md"
      />
      <div className="w-full px-5 py-5 flex justify-between items-center">
        <div className="">
          <h1 className="font-bold">Zulfa Said</h1>
          <p className="font-extralight text-xs text-gray-500/80">
            Managing Director
          </p>
        </div>
        <Linkedin size={20} className="text-gray-800/80" />
      </div>
    </div>
  );
}

export default MemberCard;
