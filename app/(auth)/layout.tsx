import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";
import Image from "next/image";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center relative">
      <div className="px-5 max-w-[400px] w-full">{children}</div>
      <Toaster />
      <Image
        className="pointer-events-none absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 object-cover opacity-30 dark:opacity-0"
        src={"/glow.svg"}
        width={1400}
        height={1400}
        alt="glow"
      />
    </div>
  );
};

export default layout;
