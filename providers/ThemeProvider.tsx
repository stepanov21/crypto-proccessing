"use client";
import { useTheme } from "@/zustand/store";
import React, { ReactNode, useRef } from "react";

const ThemeProvider = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const dark = useTheme((state) => state.dark);
  const bodyRef = useRef<HTMLBodyElement | null>(null);
  console.log(dark);

  return (
    <body
      ref={bodyRef}
      className={`${className} ${dark && "bg-white"}`}
      data-mode={dark ? "dark" : ""}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;
