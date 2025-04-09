"use client";

import React, { useState } from "react";

const baseStyle = "w-full px-4 mt-1.5 text-blue-950 py-2 bg-gray-100 rounded-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-lightGreen";

const PasswordInput = ({ label, placeholder, className = "", ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-gray-700 !m-0 font-medium">{label}</label>}
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`${baseStyle} ${className}`}
          {...rest}
        />
        <button
          className="absolute right-2 focus:outline-none cursor-pointer h-5 w-5 z-10"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <i className="fa fa-eye-slash text-black h-5 w-5"></i> : <i className="fa-solid fa-eye h-5 w-5"></i>}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
