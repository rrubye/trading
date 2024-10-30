import React from "react";

const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="w-full pt-[110px]">{children}</div>;
};

export default PageProvider;
