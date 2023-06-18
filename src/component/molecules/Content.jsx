import React from "react";

export const Content = ({ children, ...props }) => {
  return (
    <div class="flex flex-1 items-center justify-center gap-4 rounded-lg">
      {children}
    </div>
  );
};
