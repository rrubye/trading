"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string; // Add the placeholder prop
  type?: "text" | "number" | "date" | "email"; // Add type options
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text", // Default type is text
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    onChange(moment(date).format("YYYY-MM_DD"));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <label
        className={`text-gray-700 text-xl font-semibold ${
          error ? "text-red-500 text-xl font-semibold" : ""
        }`}
      >
        {label}
      </label>
      {type == "date" ? (
        <React.Fragment>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd" // Display format
            placeholderText="YYYY-MM-DD"
            customInput={
              <input
                type="text"
                className={`border w-full ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                value={
                  selectedDate ? moment(selectedDate).format("YYYY-MM-DD") : ""
                }
                readOnly
              />
            }
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            type={type}
            value={value}
            onChange={handleChange}
            className={`border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-md p-2`}
            placeholder={placeholder}
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </React.Fragment>
      )}
    </div>
  );
};

export default Input;
