import React from "react";

const Message: React.FC<{ even: string; odd: string }> = ({ even, odd }) => {
  return (
    <div className="flex relative my-[120px]">
      <div  className="bg-yellow-400 w-[50vw] lg:w-[40vw] xl:w-[30vw] text-sm md:text-xl absolute right-0 md:right-[150%] p-5 border-yellow-400 rounded-2xl">
        {even}
      </div>
      <div className="bg-white w-[55vw] lg:w-[40vw] xl:w-[30vw] text-sm md:text-xl absolute left-[-40px] top-[50px]  p-5 rounded-2xl">
        {odd}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Message;
