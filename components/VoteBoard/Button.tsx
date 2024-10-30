"use client";
import React, { useEffect } from "react";

const Button: React.FC<{
  titleTop: string;
  titleBottom: string;
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}> = ({ titleTop, titleBottom, children, gradientFrom, gradientTo }) => {
  useEffect(() => {}, [gradientFrom, gradientTo]);

  return (
    <div className="w-[300px] flex flex-col items-center gap-5">
      <h4
        className={
          `text-2xl
          font-semibold
          bg-clip-text
          text-transparent
          text-center bg-gradient-to-r ` +
          "from-" +
          gradientFrom +
          ` ` +
          `to-` +
          gradientTo
        }
      >
        {titleTop}
      </h4>
      <div
        className={
          `flex justify-center items-center w-[220px] h-[220px] rounded-3xl bg-gradient-to-r ` +
          "from-" +
          gradientFrom +
          ` ` +
          `to-` +
          gradientTo
        }
      >
        <div
          className={
            `flex justify-center items-center w-[180px] h-[180px] border-8 border-white rounded-xl bg-gradient-to-r ` +
            "from-" +
            gradientFrom +
            ` ` +
            `to-` +
            gradientTo
          }
        >
          {children}
        </div>
      </div>
      <h4 className="text-xl font-semibold text-neutral-800 text-center">
        {titleBottom}
      </h4>
    </div>
  );
};

export default Button;
