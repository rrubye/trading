const db = require("../models");
const validateLoanData = require("../validations/loanValidation");
const Loan = db.loan;
const User = db.user;

const loanCtrl = {
  register: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        middle_name,
        email,
        dob,
        phone_number,
        monthly_income,
        passport_number,
        passport_division,
        passport_issued_by,
        loan_amount_expected,
      } = req.body;

      const errors = validateLoanData(req.body);
      if (errors) {
        return res.status(400).json({ message: "Validation failed", errors });
      }

      let user = await User.findOne({ where: { email } });

      if (!user) {
        user = await User.create({
          first_name,
          last_name,
          middle_name,
          email,
          dob,
          phone_number,
          monthly_income,
          passport_number,
          passport_division,
          passport_issued_by,
        });
      }

      const loan = await Loan.create({
        user_id: user.id, // Set user_id based on the existing or new user
        loan_amount_expected,
        request_date: new Date(), // Automatically set the request date to now
        approval_status: false, // Set a default status if required
      });

      res.status(201).json({
        message: "Loan created successfully",
        loan,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the loan" });

      // Add 'async' here
      // User.create({
      //   first_name,
      //   last_name,
      //   middle_name,
      //   email,
      //   dob,
      //   phone_number,
      //   monthly_income,
      //   passport_number,
      //   passport_division,
      //   passport_issued_by,
      // }).then((ok) => {
      //   if (ok)
      //     Loan.create({
      //       loan_amount_expected,
      //     }).then(res.send("success"));
      // });
    }
  },
};

module.exports = loanCtrl;
