import React from "react";

export const Layout = ({ children, ...props }) => {
  return (
    <div class="mx-auto flex h-[calc(100vh-2rem)] flex-col space-y-4 font-mono text-sm font-bold leading-6 text-white">
      <div class="flex-none items-center justify-center rounded-lg bg-indigo-500 p-4 shadow-lg">
        Header
      </div>
      <div class="flex flex-1 items-center justify-center gap-4 rounded-lg">
        <div class="flex h-full w-14 flex-none items-center justify-center rounded-lg bg-gradient-to-t from-cyan-500 to-blue-500 shadow-lg p-4">
          Nav
        </div>
        <div class="flex flex-1 h-full items-center justify-center rounded-lg bg-gradient-to-t from-cyan-500 to-blue-500 shadow-lg p-4">
          Content
        </div>
      </div>
      <div class="flex-none items-center justify-center rounded-lg bg-indigo-500 p-4 shadow-lg">
        Footer
      </div>
      {children}
    </div>
  );
};
