import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import CreateNewMerchantPopup from "../custom/CreateNewMerchantPopup";
import WalletsList from "../custom/WalletsList";
import Header from "./Header";

const MobileAsideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="hidden lg:flex" asChild>
        <Button className="hidden sm:flex" variant={"wallet"} size={"icon"}>
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="max-w-[600px] overflow-auto border-none bg-[#0c0716] dark:bg-white sm:w-full sm:max-w-full"
        side={"left"}
      >
        <SheetHeader></SheetHeader>
        <div className="grid gap-8 py-4">
          <Header />
          <WalletsList />
          <CreateNewMerchantPopup />
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileAsideMenu;
