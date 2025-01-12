import { Facebook, Instagram, Link2, Mail, Phone } from "lucide-react";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function ClubSocialLink() {
  return (
    <div className="flex justify-start items-start mt-10 gap-4">
      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
        <Facebook size={19} />
      </div>
      <div className="w-10 h-10 bg-[#D84A67] text-white rounded-full flex justify-center items-center">
        <Instagram size={19} />
      </div>
      <div className="w-10 h-10 bg-[#E44611] text-white rounded-full flex justify-center items-center">
        <Mail size={19} />
      </div>
      <div className="w-10 h-10 bg-primary text-white rounded-full flex justify-center items-center">
        <Phone size={19} />
      </div>
      <div className="w-10 h-10 bg-[#4EA8E1] text-white rounded-full flex justify-center items-center">
        <FaTelegramPlane size={19} />
      </div>
      <div className="w-10 h-10 bg-gray-950 text-white rounded-full flex justify-center items-center">
        <BsTwitterX size={15} />
      </div>
      <div className="w-10 h-10 bg-gray-500 text-white rounded-full flex justify-center items-center">
        <Link2 size={16} />
      </div>
    </div>
  );
}

export default ClubSocialLink;
