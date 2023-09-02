import React from "react";

const InputField = ({ id, placeholder, onChange }) => {
  return (
    <div>
      <label className="flex flex-col relative focus group">
        <input
          onChange={onChange}
          type={id}
          name={id}
          required
          className="border-2 border-gray-300 px-4 py-2 text-xs"
        />
        <span className="absolute text-xs transform translate-y-3 leading-3 left-2 transition group-focus-within:-translate-y-4">
          {placeholder}
        </span>
        {/* <div className="ml-auto text-xs text-gray-500 leading-5">
          * Required
        </div> */}
      </label>
    </div>
  );
};

export default InputField;
