"use client";
import { useTheme, useToken } from "@/zustand/store";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const ThemeProvider = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const dark = useTheme((state) => state.dark);
  const { token } = useToken((state) => state)
  console.log(dark);

  const router = useRouter();

  useEffect(() => {
    console.log(token);
    if (token) return 
    router.push("/sign-in");
  }, [token]);

  return (
    <body
      className={`${className} ${dark ? "bg-white" : ""}`}
      data-mode={dark ? "dark" : ""}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;
