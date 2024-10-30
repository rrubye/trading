import React from "react";
import Image from "next/image";
import DarkMark from "@/public/assets/icons/title_light.png";

const FooterBar: React.FC = () => {
  return (
    <div
      className="w-full bg-cover min-h-[50vh] px-[10%] py-[10vh] flex flex-wrap gap-10"
      style={{ backgroundImage: "url('/assets/bg/footer_bg.png')" }}
    >
      <div className="w-[20%] flex flex-col gap-5">
        <Image src={DarkMark} alt=":( img not found" />
        <h1 className="text-lime-700 text-3xl">+7000 000 000</h1>
        <p className="text-white text-3xl">
          Звонок бесплатный. По вопросам займов обращаться на электронную почту
          или в чат поддержки.
        </p>
      </div>
      <div className="w-[15%] flex flex-col gap-4">
        <p className="text-white text-3xl">О компании</p>
        <p className="text-white text-3xl">Документы</p>
        <p className="text-white text-3xl">Адреса</p>
        <p className="text-white text-3xl">Отзывы</p>
        <p className="text-white text-3xl">Контакты</p>
      </div>
      <div className="w-[15%] flex flex-col gap-4">
        <p className="text-white text-3xl">Все займы</p>
        <p className="text-white text-3xl">До зарплаты 16</p>
        <p className="text-white text-3xl">До зарплаты 30</p>
        <p className="text-white text-3xl">Первый займ</p>
        <p className="text-white text-3xl">В день рождения</p>
      </div>
      <div className="w-[15%] flex flex-col gap-4">
        <p className="text-white text-3xl">Как получить</p>
        <p className="text-white text-3xl">Как оплатить </p>
        <p className="text-white text-3xl">Вопрос - ответ</p>
        <p className="text-white text-3xl">Акции</p>
        <p className="text-white text-3xl">Пожаловаться</p>
      </div>
      <div className="w-[25%] flex flex-col">
        <p className="text-white text-3xl">
          Свидетельство о государственной регистрации Свидетельство о внесении в
          реестр МФО Членство в СРО Союз «Микрофинансовый Альянс» Реквизиты
          Устав Cогласие на обработку персональных данных
        </p>
      </div>
    </div>
  );
};

export default FooterBar;
