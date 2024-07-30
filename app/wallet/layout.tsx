import CreateNewMerchantPopup from "@/components/custom/CreateNewMerchantPopup";
import { Button } from "@/components/ui/button";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="grid grid-cols-[4fr_8fr] px-[30px] pt-[110px]">
    <aside>
        <CreateNewMerchantPopup/>
    </aside>
    {children}
    </main>;
};

export default layout;
