import React from "react";
import Form from "@/components/ui/Form";

const LoanPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-5 w-full md:w-[70%] lg:w-[50%] xl:w-[30%] flex flex-col">
        <Form />
      </div>
    </div>
  );
};

export default LoanPage;
