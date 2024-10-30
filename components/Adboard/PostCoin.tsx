import React from "react";
import Image from "next/image";
import yellowCorner from "@/public/assets/bg/yellow_corner.png";
import greenCorner from "@/public/assets/bg/green_corner.png";
import manPhoto from "@/public/assets/images/man.png";
import costOne from "@/public/assets/images/cost1.png";
import costTwo from "@/public/assets/images/cost2.png";
import costThree from "@/public/assets/images/cost3.png";
import costFour from "@/public/assets/images/cost4.png";
import costFive from "@/public/assets/images/cost5.png";

const PostCoin: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[650px] bg-stone-300 border-r-stone-500 rounded-[62px]">
        <Image
          className="absolute w-[8%] right-[38%] top-[20%] "
          src={costOne}
          alt=":( image not found"
        />
        <div className="absolute w-[14%] left-[15%] flex flex-col items-center top-[25%]">
          <h1 className="text-5xl font-semibold">Быстрый займ</h1>
          <div className="w-[100%] h-1 bg-lime-600 my-2"></div>
          <h3 className="text-center text-2xl">
            без лишних вопросов – реши свои финансовые трудности уже сегодня!
          </h3>
        </div>
        <Image
          className="absolute w-[10%] right-[47%] top-[50%] "
          src={costTwo}
          alt=":( image not found"
        />
        <Image
          className="absolute w-full h-full"
          src={yellowCorner}
          alt=":( image not found"
        />
        <Image
          className="absolute xxs:hidden lg:block lg:w-[40%] xl:w-[30%] xxl:w-[25%]  right-[16%] bottom-0 xl:h-[105%] xxl:h-[115%]"
          src={manPhoto}
          alt=":( image not found"
        />
        <Image
          className="absolute w-[4%] right-[33%] top-[43%] "
          src={costThree}
          alt=":( image not found"
        />
        <Image
          className="absolute w-[9%] right-[19%] top-[31%] "
          src={costFour}
          alt=":( image not found"
        />
        <Image
          className="absolute w-[10%] right-[1%] top-[23%] "
          src={costFive}
          alt=":( image not found"
        />
        <Image
          className="absolute w-[34%] right-0 bottom-0 h-[78%]"
          src={greenCorner}
          alt=":( image not found"
        />
      </div>
    </div>
  );
};

export default PostCoin;
