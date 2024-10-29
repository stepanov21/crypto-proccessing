"use client";

import { Link as LinkTrans } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const ChangeLanguage = () => {
  const local = useLocale();
  const pathname = usePathname();
  return (
    <LinkTrans
      href={pathname.slice(3, pathname.length)}
      locale={local === "ru" ? "en" : "ru"}
    >
      <Button variant={"wallet"} size={"icon"}>
        <span className="text-sm">{local === "ru" ? "EN" : "RU"}</span>
      </Button>
    </LinkTrans>
  );
};

export default ChangeLanguage;
