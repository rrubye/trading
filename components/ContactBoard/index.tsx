import React from "react";

const ContactBoard: React.FC = () => {
  return (
    <div className="relative w-full  flex flex-col justify-center items-center px-[20%] py-[40px] gap-10">
      <h1 className="text-6xl w-[75%] text-center font-semibold">
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
      <div className="w-full grid grid-cols-5 gap-4">
        <div className="row-span-2 col-span-2">
          <button
            type="button"
            className="w-full text-neutral-800 py-20 font-semibold text-3xl focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-3xl me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Пройти экспресс скоринг
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            ФИО
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            ВК
          </button>
        </div>
        <div className="row-span-2 col-span-1">
          <button
            type="button"
            className="w-full text-wrap text-neutral-800 py-20 font-semibold text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            Whats App
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            Номер телефона
          </button>
        </div>
        <div>
          <button
            type="button"
            className="w-full text-neutral-800 px-5 py-6 font-semibold text-3xl focus:outline-none bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 rounded-2xl me-2 mb-2 dark:focus:ring-gray-900"
          >
            Телеграм
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBoard;
