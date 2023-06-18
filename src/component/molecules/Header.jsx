import React from "react";

export const Header = ({ children, ...props }) => {
  return (
    <div class="flex flex-nowrap gap-2 w-full overflow-hidden flex-none items-center justify-center rounded-lg border border-inherit p-4 shadow-lg">
      {children}
    </div>
  );
};
