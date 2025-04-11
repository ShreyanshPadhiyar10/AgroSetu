'use client'
import { useRef } from "react";

const OtpInput = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    // Move to next input
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Optional: backspace to previous input
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex space-x-3">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          className="w-11 h-11 rounded-xl bg-gray-100 text-center text-black text-xl focus:outline-none focus:ring-2 focus:ring-lightGreen"
          onChange={(e) => handleChange(e, i)}
          ref={(el) => (inputRefs.current[i] = el)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
