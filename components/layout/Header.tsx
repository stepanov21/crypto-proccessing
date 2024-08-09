import { GitCompareArrows, House, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="font-semibold lg:hidden">
      <div className="flex items-center gap-4">
        <Image src={"/Neutronx.svg"} className="dark:hidden" alt="logo" width={67} height={67} />
        <Image src={"/Neutronx-light.svg"} className="hidden dark:block" alt="logo" width={67} height={67} />
        <span className="text-[32px] dark:text-black">Neutronx</span>
      </div>
      <nav className="mt-14 flex flex-col gap-[30px] dark:text-black">
        <Link className="flex items-center gap-3" href={"/wallet/transfer"}>
          <House size={24} />
          <span>Личный кошелек</span>
        </Link>
        <Link className="flex items-center gap-3" href={"/business-wallet/transfer"}>
          <Landmark size={24} />
          <span>Бизнес кошелек</span>
        </Link>
        <Link className="flex items-center gap-3" href={"/merchant/transfer"}>
          <GitCompareArrows size={24} />
          <span>Торговый кошелек P2P</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
