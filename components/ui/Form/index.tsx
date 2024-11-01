"use client";
import React, { useState } from "react";
import Input from "../Input";
import icon from "@/public/assets/icons/logo-1.png";
import Image from "next/image";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [passportNumber, setPassportBumber] = useState<string>("");
  const [departmentCode, setDepartmentCode] = useState<string>("");
  const [issuedBy, setIssuedBy] = useState<string>("");

  return (
    <div className="flex flex-col shadow-2xl px-5 rounded-lg pb-5 justify-center">
      <div className="w-full flex justify-center">
        <Image className="w-[40%]" src={icon} alt=":( imag not found" />
      </div>
      <h1
        className="text-4xl  bg-clip-text
          text-transparent
          text-center bg-gradient-to-r from-lime-700 via-lime-200 to-lime-700"
          
      >
        Заявка на займ
      </h1>
      <Input label="Фамилия" value={firstName} onChange={setFirstName} />
      <Input label="Имя" value={lastName} onChange={setLastName} />
      <Input label="Отчество" value={middleName} onChange={setMiddleName} />
      <Input label="Дата рождения" value={dob} onChange={setDob} />
      <Input
        label="Серия и номер паспорта"
        value={passportNumber}
        onChange={setPassportBumber}
      />
      <Input
        label="Код подразделения"
        value={departmentCode}
        onChange={setDepartmentCode}
      />
      <Input
        label="Код подразделения"
        value={firstName}
        onChange={setFirstName}
      />
      <Input
        label="Код подразделения"
        value={issuedBy}
        onChange={setIssuedBy}
      />
      <button
        type="button"
        className="w-full focus:outline-none my-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-lime-700 dark:hover:bg-lime-700 dark:focus:ring-lime-800 text-lg font-semibold"
      >
        регистрация
      </button>
    </div>
  );
};

export default Form;
