import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button class="border w-full hover:bg-neutral-100 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-neutral-400">
      {children}
    </button>
  );
};
