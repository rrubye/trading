import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  title: string;
  position: boolean;
}> = ({ children, title, position }) => {
  return (
    <div className="w-[120px] md:w-[175px] xl:w-[300px] justify-center items-center flex flex-col gap-4">
      {position && (
        <h4 title={title} className="text-neutral-800 hidden md:block md:text-md lg:text-lg xl:text-2xl text-center">
          {title}
        </h4>
      )}
      <div className="w-[100px] h-[100px] md:w-[165px] md:h-[165px] lg:w-[165px]  lg:h-[165px] xl:w-[220px] xl:h-[220px] flex justify-center items-center rounded-full bg-white">
        <div className="flex justify-center items-center w-[90px] h-[90px] md:w-[150px]  md:h-[150px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px]  rounded-full bg-lime-700">
          {children}
        </div>
      </div>
      {!position && (
        <h4 className="text-neutral-800 hidden md:block text-md lg:text-lg xl:text-2xl text-center">
          {title}
        </h4>
      )}
    </div>
  );
};

export default Button;
