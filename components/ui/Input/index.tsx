import React from "react";

const Input: React.FC<{
  label: string;
  value: string;
  onChange: (param: string) => void;
}> = ({ label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="default-input"
        className="block mb-2 text-md text-semi text-gray-900 font-semibold "
      >
       {label}
      </label>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type="text"
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
