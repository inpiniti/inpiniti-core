import React from "react";

export const Aside = ({ children, ...props }) => {
  return (
    <div class="flex h-full w-64 gap-2 flex-col items-center rounded-lg border border-inherit shadow-lg p-4">
      {children}
    </div>
  );
};
