import React from "react";
import Link from "next/link";
import { linkList } from "@/consts";

const LinkList: React.FC = () => {
  const spreadLinks = () =>
    linkList.slice(0, -1).map((item: {label: string, path: string}) => (
      <Link className="text-gray-700 text-3xl" key={item.label} href={item.path}>
        {item.label}
      </Link>
    ));
  return (
    <div className="translate-x-0 xxs:hidden xxs:duration-300 xxs:translate-y-[-100%] lg:duration-300 lg:translate-y-0 lg:flex  relative w-full px-[100px] py-[40px]  justify-between">
      <div className="flex justify-between lg:w-[100%] xl:w-[60%]">
        {spreadLinks()}
        <Link className="text-gray-700 text-3xl xl:hidden" href={linkList[linkList.length-1].path}>
          {linkList[linkList.length - 1].label}
        </Link>
      </div>
      <Link className="text-gray-700 text-3xl hidden xl:block" href={linkList[linkList.length-1].path}>
        {linkList[linkList.length - 1].label}
      </Link>
    </div>
  );
};

export default LinkList;
