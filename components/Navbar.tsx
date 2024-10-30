import React from "react";
import Image from "next/image";
import IconSrc from "@/public/assets/icons/logo.png";
import TitleDark from "@/public/assets/icons/title_dark.png";

const Navbar: React.FC = () => {
  return (
    <div className="w-full z-20 h-[110px] fixed flex justify-between items-center px-[100px] border-b-slate-200 border-2 bg-white">
      <div className="flex gap-2">
        <Image src={IconSrc} width={60} height={50} alt=":( img not found" />
        <div className="flex items-center">
          <Image
            className="inline-block"
            src={TitleDark}
            width={200}
            height={21}
            alt=":( img not found"
          />
        </div>
      </div>
      <h1 className="text-lime-600 text-2xl font-bold">+7 000 000 000</h1>
    </div>
  );
};

export default Navbar;
