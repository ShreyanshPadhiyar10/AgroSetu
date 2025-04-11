'use client'
import React from "react";

const TextInput = ({ label, className = "", type = "text", placeholder, ...rest }) => {

  const baseStyle = "w-full px-4 mt-1.5 text-blue-950 py-2 bg-gray-100 rounded-lg placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-lightGreen";

  return (
    <div className="mb-3">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <div className="relative flex items-center">
        <textarea
          type="text"
          rows={"5"}
          placeholder={placeholder}
          className={`${baseStyle} ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextInput;
