import { GitCompareArrows, House, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return <header>
    <div className="flex items-center gap-4">
        <Image src={'/Neutronx.svg'} alt="logo" width={67} height={67}/>
        <span className="text-[32px] font-semibold">Neutronx</span>
    </div>
    <nav className="flex flex-col mt-14 gap-[30px]">
        <Link className="flex items-center gap-3" href={'/'}><House size={24}/><span>Личный кошелек</span></Link>
        <Link className="flex items-center gap-3" href={'/'}><Landmark size={24}/><span>Бизнес кошелек</span></Link>
        <Link className="flex items-center gap-3" href={'/'}><GitCompareArrows size={24}/><span>Торговый кошелек P2P</span></Link>
    </nav>
  </header>;
};

export default Header;
