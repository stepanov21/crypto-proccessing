import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
};

export default layout;
