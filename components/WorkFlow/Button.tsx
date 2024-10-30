import React from "react";

const Button: React.FC<{
  children: React.ReactNode;
  title: string;
  position: boolean;
}> = ({ children, title, position }) => {
  return (
    <div className="w-[300px] justify-center items-center flex flex-col gap-4">
      {position && (
        <h4 className="text-neutral-800 text-2xl text-center font-semibold">
          {title}
        </h4>
      )}
      <div className="w-[220px] h-[220px] flex justify-center items-center rounded-full bg-white">
        <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full border-8 bg-lime-700 border-yellow-300">
          {children}
        </div>
      </div>
      {!position && (
        <h4 className="text-neutral-800 text-2xl text-center font-semibold">
          {title}
        </h4>
      )}
    </div>
  );
};

export default Button;
