import React from "react";
import Image from "next/image";
import topTitle from "@/public/assets/images/title_top.png";
import line from "@/public/assets/icons/yellow_line.png";
import Button from "./Button";
import alertBox from "@/public/assets/icons/alert_board.png";
import hands from "@/public/assets/icons/hands.png";
import clock from "@/public/assets/icons/clock.png";

const WorkFlow: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col items-center border border-t-4 border-t-neutral-300 gap-20 pb-20">
      <Image src={topTitle} alt=":( image not found" />
      <h1 className="xxs:text-3xl lg:text-6xl text-center font-semibold">
        Просто и быстро — займ онлайн за <b>3</b> шага!
      </h1>
      <div className="w-full relative">
        <div className="absolute left-[-2%] top-[-10%] sm:left-[0%] sm:top-[-10%] md:left-[5%] md:top-[-40%] lg:left-[5%] lg:top-[-15%] xl:left-[10%] desktop:top-16 xxl:left-[15%]  xl:top-0  xxl:top-[40%]">
          <Button position={true} title={"Заполни заявку и укажи свои данные"}>
            <Image
              className="w-[40%] md:w-[40%]"
              src={alertBox}
              alt=":( img not found"
            ></Image>
          </Button>
        </div>
        <div className="absolute left-[31%] top-[-50%] xs:left-[35%] xs:top-[-30%] sm:left-[36%] sm:top-[-15%] md:left-[42%] md:top-[-60%] lg:left-[42%] lg:top-[-30%] xl:left-[44%] desktop:top-8 xxl:left-[45%]  xl:top-[-20%] xxl:top-[25%]">
          <Button position={true} title={"Подтверждение займа"}>
            <Image
              className="w-[70%] md:w-[70%]"
              src={hands}
              alt=":( img not found"
            ></Image>
          </Button>
        </div>
        <div className="absolute right-[-2%] top-[-85%] sm:right-[0%] sm:top-[-60%] md:right-[5%] md:top-[-55%] lg:right-[5%] lg:top-[-30%] xl:right-[5%] xxl:right-[15%] xl:top-[-30%] desktop:top-[-20%] xxl:top-[-15%]">
          <Button position={false} title={"Одобрение в течении30 минут"}>
            <Image
              className="w-[55%] md:w-[55%]"
              src={clock}
              alt=":( img not found"
            ></Image>
          </Button>
        </div>
        <Image className="w-full" src={line} alt=":( img no found" />
      </div>
      <p className="xxs:w-full xl:w-[68%] pt-10 px-5 text-neutral-800  text-2xl text-center">
        Всё максимально просто. Мы понимаем, что время — это деньги, поэтому у
        нас ты можешь получить займ без справок и лишних документов. Не важно,
        какая у тебя кредитная история. Мы доверяем нашим клиентам.
      </p>
    </div>
  );
};

export default WorkFlow;
