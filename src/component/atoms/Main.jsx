import React from "react";

export const Main = ({ children, ...props }) => {
  return (
    <div class="flex flex-1 h-full items-center justify-center rounded-lg bg-gradient-to-t from-cyan-400 to-blue-500 shadow-lg p-4">
      {children}
      Main
    </div>
  );
};
