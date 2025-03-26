import React from "react";

const Button = ({ type = "primary", onClick, className, children }) => {
  const baseStyles =
    "px-5 py-[0.4rem] rounded-lg font-bold transition-all duration-200";

  const styles = {
    primary: `bg-blue-500 text-white hover:bg-blue-600`,
    success: `bg-[#00C846] text-white hover:bg-[#009F38]`,
    outlined: `border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${styles[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
