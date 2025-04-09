import React from "react";

const Button = ({ type = "primary", onClick, className, children }) => {
  const baseStyles =
    "px-5 py-[0.4rem] rounded-lg font-bold transition-all duration-200 cursor-pointer";

  const styles = {
    primary: `bg-primary text-white hover:bg-blue-600`,
    success: `bg-lightGreen text-white hover:bg-darkGreen`,
    outlined: `border border-primary text-primary hover:bg-primary hover:text-white`,
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
