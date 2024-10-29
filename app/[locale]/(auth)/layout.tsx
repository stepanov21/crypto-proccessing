import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="w-full max-w-[400px] px-5">{children}</div>
      <Toaster />
      <Image
        className="pointer-events-none absolute right-1/2 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 object-cover opacity-30 dark:opacity-0"
        src={"/glow.svg"}
        width={1400}
        height={1400}
        alt="glow"
      />
    </div>
  );
};

export default layout;
