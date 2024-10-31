import React from "react";
import Image from "next/image";
import middleTitle from "@/public/assets/images/title_middle.png";
import Button from "./Button";
import fireWheel from "@/public/assets/icons/fire_wheel.png";
import phone from "@/public/assets/icons/phone.png";
import zoonIn from "@/public/assets/icons/zoon_in.png";
import thumb from "@/public/assets/icons/thumb.png";
import celebration from "@/public/assets/icons/celebration.png";

const VoteBoard: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col items-center border border-t-4 border-t-neutral-300 gap-14 ">
      <Image src={middleTitle} alt=":( img not found" />
      <h1 className="xxs:text-3xl lg:text-6xl text-center font-semibold">Почему выбирают нас?</h1>
      <div className="pb-[80px] flex justify-center gap-1 xxl:gap-10 flex-wrap">
        <Button
          titleTop="Быстрота"
          titleBottom="От заявки до получения денег — всего 30 минут."
          gradientFrom="yellow-400"
          gradientTo="yellow-500"
        >
          <Image src={fireWheel} alt=":( img not found"></Image>
        </Button>
        <Button
          titleTop="Минимум условий"
          titleBottom="Пройди экспресс скоринг  наш менеджер свяжется с тобой в течение 15 минут удобным способом."
          gradientFrom="yellow-500"
          gradientTo="green-300"
        >
          <Image src={phone} alt=":( img not found"></Image>
        </Button>
        <Button
          titleTop="Прозрачность"
          titleBottom="Никаких скрытых комиссий или неожиданных процентов."
          gradientFrom="green-300"
          gradientTo="green-400"
        >
          <Image src={zoonIn} alt=":( img not found"></Image>
        </Button>
        <Button
          titleTop="Удобство"
          titleBottom="Выбирай сумму и срок погашения сам."
          gradientFrom="green-400"
          gradientTo="green-500"
        >
          <Image src={thumb} alt=":( img not found"></Image>
        </Button>
        <Button
          titleTop="Доступность"
          titleBottom="Даже если у тебя были финансовые трудности, это не станет преградой."
          gradientFrom="green-500"
          gradientTo="green-600"
        >
          <Image src={celebration} alt=":( img not found"></Image>
        </Button>
      </div>
    </div>
  );
};

export default VoteBoard;
