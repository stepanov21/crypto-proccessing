"use client";
import { cn } from "@/lib/utils";
import { Link as LinkTrans } from "@/i18n/routing";
import { GitCompareArrows, House, Landmark } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ className }: { className?: string | undefined }) => {
  const t = useTranslations("Navigation");
  const local = useLocale();
  const pathname = usePathname();
  console.log("🚀 ~ Header ~ pathname:", pathname.slice(3, -1));

  return (
    <header className={cn("font-semibold", className)}>
      <div className="flex items-center gap-4">
        <Image
          src={"/Neutronx.svg"}
          className="dark:hidden sm:size-10"
          alt="logo"
          width={67}
          height={67}
        />
        <Image
          src={"/Neutronx-light.svg"}
          className="hidden dark:block sm:size-10"
          alt="logo"
          width={67}
          height={67}
        />
        <LinkTrans
          href={pathname.slice(3, pathname.length)}
          locale={local === "ru" ? "en" : "ru"}
        >
          <span className="text-[32px] dark:text-black sm:text-xl">
            Neutronx
          </span>
        </LinkTrans>
      </div>
      <nav className="mt-14 flex flex-col gap-[30px] dark:text-black sm:mt-8 sm:gap-4 sm:text-[16px]">
        <Link
          className="flex items-center gap-3 sm:text-[16px]"
          href={`/${local}/wallet`}
        >
          <House size={24} />
          <span>{t("personal")}</span>
        </Link>
        <Link
          className="flex items-center gap-3 sm:text-[16px]"
          href={`/${local}/business-wallet`}
        >
          <Landmark size={24} />
          <span>{t("business")}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
