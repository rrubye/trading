import React from "react";
import Message from "./Message";

const ChatBoard: React.FC = () => {
  return (
    <div
      className="w-full relative flex flex-col items-center bg-cover min-h-[100vh]  lg:px-[20%] py-[10vh] gap-2 border border-white rounded-[50px]"
      style={{ backgroundImage: "url('/assets/bg/question_board.png')" }}
    >
      <h1 className="text-3xl lg:text-6xl text-center font-semibold text-white">
        Часто задаваемые вопросы:
      </h1>
      <div className="flex flex-col">
        <Message
          even="Какие документы нужны для оформления займа?"
          odd="В начале заполни форму для экспрессскоринга. После одобрения менеджером ты получаешь свой займ удобным способом."
        />
        <Message
          even="Могу ли я получить займ, еслиу меня плохая кредитная история?"
          odd="Да! Мы понимаем, что у каждого бывают сложные периоды. Мы готовы предоставить займ даже с негативной кредитной историей."
        />
        <Message
          even="Как быстро я получу деньги?"
          odd="После одобрения заявки деньги поступают на карту в течение нескольких минут."
        />
      </div>
    </div>
  );
};

export default ChatBoard;
