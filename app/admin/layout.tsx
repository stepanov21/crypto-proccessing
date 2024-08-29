import React, { ReactNode } from "react";
import Image from "next/image";

import Link from "next/link";

import AdminHeader from "@/components/admin/AdminHeader";
import ActiveTab from "@/components/admin/ActiveTab";
import AdminFooter from "@/components/admin/AdminFooter";
import Bage from "@/components/admin/Bage";
import UserRoleProvider from "@/providers/UserRoleProvider";
import AdminCard from "@/components/admin/AdminCard";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <UserRoleProvider>
      <AdminHeader />
      <main className="container max-w-[1200px] dark:text-black">
        <div className="mb-12 mt-16 flex items-center justify-between">
          <h2 className="text-[28px] font-semibold">Admin panel</h2>
        </div>
        <Image
          className="pointer-events-none absolute -left-32 -top-32 z-10 object-cover opacity-30 dark:opacity-0"
          src={"/glow.svg"}
          width={1200}
          height={1200}
          alt="glow"
        />
        <AdminCard />
        <ActiveTab />
        {children}
      </main>
      <AdminFooter />
    </UserRoleProvider>
  );
};

export default layout;
