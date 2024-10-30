import React from "react";

const RootLayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="relative w-full flex flex-col">{children}</div>;
};

export default RootLayoutProvider;
