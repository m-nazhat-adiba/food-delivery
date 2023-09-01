import React from "react";
const VARIANTS = {
  primary: "border-0 bg-[#BE0B05] text-[#ffffff] hover:bg-red-600",
  secondary: "border-0 text-red-700 hover:bg-gray-50 hover:bg-opacity-20",
  link: "border-0 text-black font-medium hover:text-red-700",
};

export const Button = ({ children, variant, target }) => {
  return (
    <div>
      <button
        onClick={target}
        type="button"
        className={`py-3 px-4 rounded-lg font-bold  ${VARIANTS[variant]}`}
      >
        {children}
      </button>
    </div>
  );
};
