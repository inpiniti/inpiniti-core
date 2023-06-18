import React from "react";

export const Footer = ({ children, ...props }) => {
  return (
    <div class="flex-none items-center justify-center rounded-lg bg-indigo-500 p-4 shadow-lg">
      {children}
      Footer
    </div>
  );
};
