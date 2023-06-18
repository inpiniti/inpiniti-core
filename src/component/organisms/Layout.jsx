import React from "react";

export const Layout = ({ children, ...props }) => {
  return (
    <div class="mx-auto flex h-[calc(100vh-2rem)] flex-col space-y-4 font-mono text-sm font-bold leading-6 text-neutral-400">
      {children}
    </div>
  );
};
