"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const MainWidth = ({ children }: { children: ReactNode }) => {
  const local = useLocale();
  const pathname = usePathname();
  return (
    <main
      className={cn(
        "max-w-[520px]",
        (pathname === `/${local}/wallet` ||
          pathname === `/${local}/business-wallet`) &&
          "max-w-full",
      )}
    >
      {children}
    </main>
  );
};

export default MainWidth;
