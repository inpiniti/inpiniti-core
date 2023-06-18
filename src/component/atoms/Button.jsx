import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button class="py-2 px-3 bg-white text-cyan-600 text-sm font-semibold rounded-md shadow-lg focus:outline-none">
      {children}
    </button>
  );
};
