import React from "react";
import Link from "next/link";

const linkList = ["главная", "займы", "скоринг", "контакты"];

const LinkList: React.FC = () => {
  const spreadLinks = () =>
    linkList.map((item: string) => (
      <Link className="text-gray-700 text-3xl" key={item} href={""}>
        {item}
      </Link>
    ));
  return (
    <div className="relative w-full px-[100px] py-[40px] flex justify-between">
      <div className="flex justify-between w-[60%]">{spreadLinks()}</div>
      <Link className="text-gray-700 text-3xl" href={""}>
        о компании
      </Link>
    </div>
  );
};

export default LinkList;
