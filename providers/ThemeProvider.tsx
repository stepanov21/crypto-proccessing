"use client";
import { useTheme } from "@/zustand/store";
import React, { ReactNode } from "react";

const ThemeProvider = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const dark = useTheme((state) => state.dark);
  console.log(dark);

  return (
    <body
      className={`${className} ${dark && "bg-white"}`}
      data-mode={dark ? "dark" : ""}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;
