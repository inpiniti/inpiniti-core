import React from "react";

export const Aside = ({ children, ...props }) => {
  return (
    <div class="flex h-full w-14 flex-none items-center justify-center rounded-lg bg-gradient-to-t from-cyan-500 to-blue-500 shadow-lg p-4">
      {children}
      Aside
    </div>
  );
};
