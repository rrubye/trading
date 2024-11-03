"use client";
import React, { useState } from "react";
import Input from "../Input";
import icon from "@/public/assets/icons/logo-1.png";
import Image from "next/image";
import axios from "axios";
import { baseURL, camelToSnake } from "@/consts";
import toast from "react-hot-toast";
import { validateForm } from "@/components/Validation/FormValidation";

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    monthlyIncome: "",
    passportNumber: "",
    passportDivision: "",
    passportIssuedBy: "",
    loanAmountExpected: "",
  });
  
  const [errors, setErrors] = useState<any>({});

  const handleClick = () => {
    const newErrors = validateForm(formValues); // Validate form values

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if there are any
      return; // Stop execution if there are errors
    }

    // If validation passes, make API call

    const payload = camelToSnake(formValues)
    axios
      .post(baseURL + "/loan/register", payload)
      .then((res) => {
        toast.success("Ваш запрос на оплату был успешным. Пожалуйста, подождите, пока не будет одобрено");
        console.log(res.data);
        // Clear input fields on success
        setFormValues({
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          dob: "",
          phoneNumber: "",
          monthlyIncome: "",
          passportNumber: "",
          passportDivision: "",
          passportIssuedBy: "",
          loanAmountExpected: "",
        });
        setErrors({});
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>, field: string) => (value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value })); // Update form values
    setErrors((prev) => ({ ...prev, [field]: undefined })); // Clear error message for this field
  };

  return (
    <div className="flex flex-col shadow-2xl px-5 rounded-lg pb-5 justify-center">
      <div className="w-full flex justify-center">
        <Image className="w-[40%]" src={icon} alt=":( imag not found" />
      </div>
      <h1 className="text-4xl bg-clip-text text-transparent text-center bg-gradient-to-r from-lime-700 via-lime-200 to-lime-700">
        Заявка на займ
      </h1>

      <Input
        label="Имя"
        value={formValues.firstName}
        onChange={handleChange(setFormValues, "firstName")}
        error={errors.firstName}
        placeholder="Введите ваше имя" // Add placeholder
      />
      <Input
        label="Фамилия"
        value={formValues.lastName}
        onChange={handleChange(setFormValues, "lastName")}
        error={errors.lastName}
        placeholder="Введите вашу фамилию" // Add placeholder
      />
      <Input
        label="Отчество"
        value={formValues.middleName}
        onChange={handleChange(setFormValues, "middleName")}
        // error={errors.middleName}
        placeholder="Введите ваше отчество" // Add placeholder
      />
      <Input
        label="Электронная почта"
        value={formValues.email}
        onChange={handleChange(setFormValues, "email")}
        error={errors.email}
        placeholder="Введите вашу электронную почту" // Add placeholder
      />
      <Input
        label="Дата рождения"
        value={formValues.dob}
        onChange={handleChange(setFormValues, "dob")}
        error={errors.dob}
        type="date"
        placeholder="YYYY-MM-DD"
      />
      <Input
        label="Номер телефона"
        value={formValues.phoneNumber}
        onChange={handleChange(setFormValues, "phoneNumber")}
        error={errors.phoneNumber}
        placeholder="Введите номер телефона" // Add placeholder
      />
      <Input
        label="Ежемесячный доход"
        value={formValues.monthlyIncome}
        onChange={handleChange(setFormValues, "monthlyIncome")}
        error={errors.monthlyIncome}
        type="number"
        placeholder="Введите ежемесячный доход" // Add placeholder
      />
      <Input
        label="Серия и номер паспорта"
        value={formValues.passportNumber}
        onChange={handleChange(setFormValues, "passportNumber")}
        error={errors.passportNumber}
        placeholder="Введите серию и номер паспорта" // Add placeholder
      />
      <Input
        label="Отдел паспорта"
        value={formValues.passportDivision}
        onChange={handleChange(setFormValues, "passportDivision")}
        error={errors.passportDivision}
        placeholder="Введите отдел паспорта" // Add placeholder
      />
      <Input
        label="Паспорт выдан"
        value={formValues.passportIssuedBy}
        onChange={handleChange(setFormValues, "passportIssuedBy")}
        error={errors.passportIssuedBy}
        placeholder="Введите, кто выдал паспорт" // Add placeholder
      />
      <Input
        label="Ожидаемая сумма кредита"
        value={formValues.loanAmountExpected}
        onChange={handleChange(setFormValues, "loanAmountExpected")}
        error={errors.loanAmountExpected}
        type="number"
        placeholder="Введите ожидаемую сумму кредита" // Add placeholder
      />

      <button
        type="button"
        onClick={handleClick}
        className="w-full focus:outline-none my-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-lime-700 dark:hover:bg-lime-700 dark:focus:ring-lime-800 text-lg font-semibold"
      >
        Регистрация
      </button>
    </div>
  );
};

export default Form;
