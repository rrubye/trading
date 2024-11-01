import React from "react";

const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="w-full pt-[110px] h-min:h-[100vh]">{children}</div>;
};

export default PageProvider;
