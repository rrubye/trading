export const validateForm = (formValues: any) => {
    const errors: any = {};
  
    if (!formValues.firstName) errors.firstName = "Имя не может быть пустым";
    if (!formValues.lastName) errors.lastName = "Фамилия не может быть пустой";
    if (!formValues.middleName) errors.middleName = "Отчество не может быть пустым";
    if (!formValues.email) errors.email = "Электронная почта не может быть пустой";
    if (!formValues.dob) errors.dob = "Дата рождения не может быть пустой";
    if (!formValues.phoneNumber) errors.phoneNumber = "Номер телефона не может быть пустым";
    if (!formValues.monthlyIncome || Number(formValues.monthlyIncome) <= 0) {
      errors.monthlyIncome = "Ежемесячный доход должен быть больше 0";
    }
    if (!formValues.passportNumber) errors.passportNumber = "Серия и номер паспорта не могут быть пустыми";
    if (!formValues.passportDivision) errors.passportDivision = "Отдел паспорта не может быть пустым";
    if (!formValues.passportIssuedBy) errors.passportIssuedBy = "Паспорт выдан не может быть пустым";
    if (!formValues.loanAmountExpected || Number(formValues.loanAmountExpected) <= 0) {
      errors.loanAmountExpected = "Ожидаемая сумма кредита должна быть больше 0";
    }
  
    return errors;
  };