"use client";

import { useLocale } from "next-intl";
import Error from "next/error";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const route = useRouter();
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="bg-ourDarkPuple rounded-[18px] px-20 py-10 text-3xl">
            404 NOT FOUND
          </h1>
          <Button onClick={() => route.push(`/en/wallet`)}>GO HOME</Button>
        </div>
        <Image
          className="pointer-events-none absolute right-1/2 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 object-cover opacity-30 dark:opacity-0"
          src={"/glow.svg"}
          width={1400}
          height={1400}
          alt="glow"
        />
      </body>
    </html>
  );
}
