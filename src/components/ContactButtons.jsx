"use client";

import { PhoneCall } from "lucide-react";

export const ContactButtons = () => {
  return (
    <div className="fixed w-screen z-[999] bottom-0 flex items-center justify-between lg:justify-start p-4 gap-4">
      <button className="flex items-center bg-white rounded-full p-2 gap-2 border-2 border-black hover:opacity-80 transition-all">
        <PhoneCall />
        <a className="font-semibold" href="tel:+349258885">
          Hotline: 034 925 8885
        </a>
      </button>
      <button
        onClick={() => window.open("https://zalo.me/0349258885")}
        className="flex items-center bg-white rounded-full gap-2 hover:opacity-80 transition-all"
      >
        <img
          className="h-[44px]"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
          alt=""
        />
      </button>
    </div>
  );
};
