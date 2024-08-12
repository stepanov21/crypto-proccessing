import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Header from "./Header";
import WalletsList from "../custom/WalletsList";
import CreateNewMerchantPopup from "../custom/CreateNewMerchantPopup";
import { Menu } from "lucide-react";

const MobileAsideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="hidden lg:flex" asChild>
        <Button className="hidden sm:flex" variant={"wallet"} size={"icon"}>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#0c0716] border-none max-w-[600px] sm:max-w-full sm:w-full overflow-auto" side={"left"}>
        <SheetHeader>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Header />
          <WalletsList />
          <CreateNewMerchantPopup />
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileAsideMenu;
