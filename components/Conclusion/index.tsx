import React from "react";
import Image from "next/image";
import titleBottom from "@/public/assets/images/title_bottom.png";
import man from "@/public/assets/images/man2.png";
import cost6 from "@/public/assets/images/cost6.png";
import cost7 from "@/public/assets/images/cost7.png";
import cost8 from "@/public/assets/images/cost8.png";

const Conclusion: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col items-center border border-t-4 border-t-neutral-300 gap-20 pb-20">
      <Image src={titleBottom} alt=":( image not found" />
      <h1 className="text-6xl font-semibold">О нас</h1>
      <div className="w-[80%] relative ">
        <Image
          className="absolute bottom-5 left-[-5%]"
          src={cost6}
          alt=":( image not found"
        />
        <Image
          className="absolute top-[-18%] right-[-5%]"
          src={cost8}
          alt=":( image not found"
        />
        <div className="w-full relative bg-lime-700 rounded-[20px] p-1 flex">
          <div className="w-[60%] bg-white p-[60px] flex flex-col gap-12 rounded-[18px]">
            <p className="text-3xl">
              Мы – команда профессионалов, которая помогает молодым людям быстро
              и просто решать финансовые вопросы.
            </p>
            <p className="text-3xl">
              Мы знаем, как важны деньги в трудную минуту, и готовы предложить
              быстрые займы с минимальными требованиями.
            </p>
            <p className="text-3xl">
              Наша главная цель — поддержка и помощь каждому клиенту, независимо
              от его ситуации.
            </p>
          </div>
        </div>
        <Image
          className="absolute bottom-[51%] right-[27%]"
          src={cost7}
          alt=":( image not found"
        />
        <Image
          className="absolute bottom-0 right-[7%]"
          src={man}
          alt=":( image not found"
        />
      </div>
    </div>
  );
};

export default Conclusion;
