"use client";
import { useTheme, useToken } from "@/zustand/store";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname()

  useEffect(() => {
    if (token) return;
    if(pathname.startsWith('/invoice/')) return
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
