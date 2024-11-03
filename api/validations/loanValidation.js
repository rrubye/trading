const validateLoanData = (data) => {
    const errors = {};
  
    // Validate string fields: they must not be empty
    const stringFields = [
      'first_name',
      'last_name',
      'middle_name',
      'email',
      'dob',
      'phone_number',
      'passport_number',
      'passport_division',
      'passport_issued_by',
    ];
    
    stringFields.forEach((field) => {
      if (!data[field] || typeof data[field] !== 'string' || data[field].trim() === '') {
        errors[field] = `${field} should be a non-empty string`;
      }
    });
  
    // Validate number fields: they must not be zero
    const numberFields = ['monthly_income', 'loan_amount_expected'];
    
    numberFields.forEach((field) => {
      if (typeof Number(data[field]) !== 'number' || data[field] === 0) {
        errors[field] = `${field} should be a number greater than 0`;
      }
    });
  
    // Return errors if any, or null if validation passed
    return Object.keys(errors).length > 0 ? errors : null;
  };
  
  module.exports = validateLoanData;
