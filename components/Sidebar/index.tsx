import { linkList } from "@/consts";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SideBar: React.FC<{
  open: boolean;
  setOpen: (param: boolean) => void;
}> = ({ open, setOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const spreadLinks = () =>
    linkList.map((item: string, key: number) => (
      <Link className="text-3xl" key={key} href={""}>
        <li>{item}</li>
      </Link>
    ));

  useEffect(() => {
    if (open) setIsOpen(true);
    else setIsOpen(false);
    console.log(open);
    console.log(isOpen);
  }, [open]);

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div
      className={
        // open
        //   ? "xxs:translate-x-0 xxs:duration-300"
        //   : "xxs:translate-x-[-300px] xxs:duration-300 lg:hidden"
        isOpen
          ? "xxs:translate-x-0 xxs:duration-300 lg:translate-x-[-300px] w-[300px] flex flex-col gap-5 h-full pt-[110px] overflow-auto text-white z-30 bg-zinc-900 fixed top-0 left-0"
          : "xxs:translate-x-[-300px] xxs:duration-300  w-[300px] flex flex-col gap-5 h-full pt-[110px] overflow-auto text-white z-30 bg-zinc-900 fixed top-0 left-0"
      }
    >
      <div className="w-full flex justify-end py-2 pr-2">
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#f44336"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          />
          <path
            fill="#fff"
            d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
          />
          <path
            fill="#fff"
            d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
          />
        </svg>
      </div>
      <div className="w-full px-10 flex flex-col gap-5">{spreadLinks()}</div>
    </div>
  );
};
export default SideBar;
