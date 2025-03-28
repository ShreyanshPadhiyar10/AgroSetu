import React, { useState } from "react";

const InputField = ({ label, type = "text", placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="">
      <label className="text-gray-700 font-medium">{label}</label>
      <div className="relative flex items-center">
        <input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-96 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {type === "password" && (
          <button
            className="absolute right-2 focus:outline-none cursor-pointer h-5 w-5 z-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <i className="fa fa-eye-slash text-black h-5 w-5 !z-10"></i> : <i className="fa-solid fa-eye h-5 w-5"></i>}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
