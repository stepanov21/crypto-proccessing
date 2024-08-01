import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

const WalletFinder = () => {
  return (
    <div className="relative">
      <Input
        className="rounded-full border-none bg-ourPurple font-semibold"
        icon={<Search size={20} />}
        placeholder="Найти монету"
      />
      <X className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-ourLightPurple" />
    </div>
  );
};

export default WalletFinder;
