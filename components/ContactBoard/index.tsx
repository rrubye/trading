import React from "react";

const ContactBoard: React.FC = () => {
  return (
    <div className="relative w-full  flex flex-col justify-center items-center xxs:px-[5%] lg:px-[2%] xxl:px-[20%] py-[40px] gap-10">
      <h1 className="xxs:text-3xl lg:text-6xl xxs:w-full w-[75%] text-center font-semibold">
        Деньги на карту за 15 минут. Минимум документов. 100% прозрачные
        условия.
      </h1>
      <div className="border-lime-700 text-2xl rounded-2xl border-2 p-9 flex flex-col gap-5">
        <p>
          Если тебе срочно нужны деньги, и нет времени ждать одобрения от
          банков,
        </p>
        <p>
          мы готовы помочь. Наша компания предоставляет займы на выгодных
          условиях. Даже если у тебя сейчас сложная финансовая ситуация или
          плохая кредитная история — это не проблема. Просто заполни заявку, и
          деньги
        </p>
        <p>
          поступят на карту в течение 30 минут* Без скрытых комиссий и сложных
          условий. Ты сам выбираешь удобный срок погашения.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row xxs:gap-2 xl:justify-between items-center">
        <div className="w-full">
          <button
            type="button"
            className="w-full text-neutral-800 xxs:py-6 lg:py-[56px] xl:py-[58px] desktop:py-[72px] xxl:py-[54px] px-5 font-semibold xxs:text-2xl xxl:text-3xl focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-2xl lg:rounded-3xl me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Пройти экспресс скоринг
          </button>
        </div>
        <div className="flex flex-col w-full gap-2">
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold xxs:text-2xl text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            ФИО
          </button>
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold xxs:text-2xl text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            Номер телефона
          </button>
        </div>
        <div className="flex flex-col w-full gap-2">
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 lg:py-[40px] xl:py-6 font-semibold xxs:text-2xl text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            ВК
          </button>
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold xxs:text-2xl text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            Телеграм
          </button>
        </div>
        <div className="xxs:w-full h-full">
          <button
            type="button"
            className="w-full h-full text-wrap text-neutral-800 px-5 xxs:py-6 lg:py-[88px] xl:py-[70px] font-semibold xxs:text-2xl text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            Whats App
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBoard;
