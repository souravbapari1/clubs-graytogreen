import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

function MemberCard() {
  return (
    <div className="bg-primary/10 w-full p-2 rounded-3xl border-2 border-[#DDE5DA] overflow-hidden">
      <Image
        src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
        width={1000}
        height={1000}
        alt=""
        className="md:h-60 h-40 w-full object-cover rounded-3xl shadow-md"
      />
      <div className="w-full px-5 py-5 flex justify-between items-center">
        <div className="">
          <h1 className="font-light text-xl text-[#336940]">Zulfa Said</h1>
          <p className="font-extralight text-xs text-gray-500/80">
            Managing Director
          </p>
        </div>
        <Linkedin size={20} className="bg-[#336940] text-xl p-[1px] rounded-[4px] text-white" />
      </div>
    </div>
  );
}

export default MemberCard;
