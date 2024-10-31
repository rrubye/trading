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
      <div className="w-full h-[650px] bg-stone-300 border-r-stone-500 rounded-[10px] md:rounded-[62px]">
        <Image
          className="absolute w-[8%] right-[38%] top-[20%] "
          src={costOne}
          alt=":( image not found"
        />
        <div className="absolute w-[25%] left-[20%] sm:w-[14%] sm:left-[18%] md:w-[14%] md:left-[17%] flex flex-col items-center top-[25%]">
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
          className="absolute hidden sm:block  w-[90%] right-[10%] md:w-[50%] lg:w-[40%] xl:w-[35%] xl:h-[105%] xxl:w-[24%]  xxl:h-[115%]  xxl:right-[16%] bottom-0 "
          src={manPhoto}
          alt=":( image not found"
        />
        <Image
          className="absolute top-[55%] right-[50%] lg:top-[55%] lg:right-[45%] xl:top-[47%] xl:right-[40%] xxl:w-[4%] xxl:right-[33%]  "
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
