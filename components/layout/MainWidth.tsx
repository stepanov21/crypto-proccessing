"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const MainWidth = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <main
      className={cn(
        "max-w-[520px]",
        (pathname === "/wallet" || pathname === "/business-wallet") &&
          "max-w-full",
      )}
    >
      {children}
    </main>
  );
};

export default MainWidth;
