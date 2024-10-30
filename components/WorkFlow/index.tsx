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
        <h1 className="text-6xl text-center font-semibold">
            Просто и быстро — займ онлайн за <b>3</b> шага!
        </h1>
      <div className="w-full relative">
        <div className="absolute left-[15%] top-[20%] xxl:top-[40%]">
          <Button position={true} title={"Заполни заявку и укажи свои данные"}>
            <Image src={alertBox} alt=":( img not found"></Image>
          </Button>
        </div>
        <div className="absolute left-[45%] top-0 xl:top-[25%]">
          <Button position={true} title={"Подтверждение займа"}>
            <Image src={hands} alt=":( img not found"></Image>
          </Button>
        </div>
        <div className="absolute right-[15%] top-[-15%]">
          <Button position={false} title={"Одобрение в течении30 минут"}>
            <Image src={clock} alt=":( img not found"></Image>
          </Button>
        </div>
        <Image className="w-full" src={line} alt=":( img no found" />
      </div>
      <p className="w-[68%] pt-10 text-neutral-800 text-2xl text-center font-semibold">
        Всё максимально просто. Мы понимаем, что время — это деньги, поэтому у
        нас ты можешь получить займ без справок и лишних документов. Не важно,
        какая у тебя кредитная история. Мы доверяем нашим клиентам.
      </p>
    </div>
  );
};

export default WorkFlow;
