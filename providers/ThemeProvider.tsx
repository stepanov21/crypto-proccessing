"use client";
import { useTheme, useToken } from "@/zustand/store";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

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
  const pathname = usePathname();
  const local = useLocale();

  useEffect(() => {
    if (token) return;
    if (pathname.startsWith(`/${local}/invoice/`)) return;
    router.push("/en/sign-in");
    //eslint-disable-next-line
  }, [token]);

  return (
    <body
      suppressHydrationWarning
      className={`${className} ${dark ? "bg-white" : ""}`}
      data-mode={dark ? "dark" : ""}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;
