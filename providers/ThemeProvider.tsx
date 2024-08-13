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
  const { token } = useToken((state) => state);

  const router = useRouter();

  useEffect(() => {
    if (token) return;
    router.push("/sign-in");
    //eslint-disable-next-line
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
