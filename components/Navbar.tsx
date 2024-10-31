import React from "react";
import Image from "next/image";
import IconSrc from "@/public/assets/icons/logo.png";
import TitleDark from "@/public/assets/icons/title_dark.png";

const Navbar: React.FC<{
  open: boolean;
  setOpen: (param: boolean) => void;
}> = ({ open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[100vw] h-[110px] fixed flex justify-between items-center xxs:pl-2 pr-5 md:px-[100px] border-b-slate-200 border-2 bg-white z-50">
      <div className="flex gap-2">
        <Image src={IconSrc} width={60} height={50} alt=":( img not found" />

        <div className="flex items-center">
          <Image
            className="hidden md:inline-block"
            src={TitleDark}
            width={200}
            height={21}
            alt=":( img not found"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <h1 className="text-lime-600 text-2xl font-bold">+7 000 000 000</h1>
        <svg
          onClick={handleClick}
          className="lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="30px"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
