import React from "react";
import Form from "@/components/ui/Form";
import Image from "next/image";
import costOne from "@/public/assets/images/cost1.png";
import costTwo from "@/public/assets/images/cost2.png";
import costThree from "@/public/assets/images/cost3.png";
import costFour from "@/public/assets/images/cost4.png";
import costFive from "@/public/assets/images/cost5.png";
import manPhoto from "@/public/assets/images/man.png";

const LoanPage: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        className="fixed hidden lg:block w-[12%] right-[10%] top-[20%] "
        src={costOne}
        alt=":( image not found"
      />
      <Image
        className="fixed hidden lg:block w-[8%] left-[5%] top-[40%] "
        src={costTwo}
        alt=":( image not found"
      />
      <Image
        className="fixed hidden lg:block w-[6%] left-[15%] top-[70%] "
        src={costThree}
        alt=":( image not found"
      />
      <Image
        className="fixed hidden lg:block w-[6%] right-[10%] top-[50%] "
        src={costFour}
        alt=":( image not found"
      />
      <Image
        className="fixed hidden lg:block w-[5%] right-[20%] top-[80%] "
        src={costFive}
        alt=":( image not found"
      />
      <Image
        className="fixed hidden xl:block right-5 bottom-0 w-[20%] "
        src={manPhoto}
        alt=":( image not found"
      />
      <div className="p-5 w-full md:w-[70%] lg:w-[50%] xl:w-[30%] flex flex-col">
        <Form />
      </div>
    </div>
  );
};

export default LoanPage;
