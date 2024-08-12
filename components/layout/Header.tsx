import { cn } from "@/lib/utils";
import { GitCompareArrows, House, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Header = ({ className }: { className?: string | undefined }) => {
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
        <span className="text-[32px] dark:text-black sm:text-xl">Neutronx</span>
      </div>
      <nav className="mt-14 sm:mt-8 flex flex-col gap-[30px]  sm:gap-4 dark:text-black sm:text-[16px]">
        <Link
          className="flex items-center gap-3 sm:text-[16px]"
          href={"/wallet"}
        >
          <House size={24} />
          <span>Личный кошелек</span>
        </Link>
        <Link
          className="flex items-center gap-3 sm:text-[16px]"
          href={"/business-wallet/transfer"}
        >
          <Landmark size={24} />
          <span>Бизнес кошелек</span>
        </Link>
        <Link
          className="flex items-center gap-3 sm:text-[16px]"
          href={"/merchant/transfer"}
        >
          <GitCompareArrows size={24} />
          <span>Торговый кошелек P2P</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
