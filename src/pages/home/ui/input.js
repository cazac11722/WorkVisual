import React from "react";

const Input = ({ type = "text", defaultValue, onBlur }) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      onBlur={onBlur}
      className="border rounded px-2 py-1 w-full"
    />
  );
};

export default Input;
