"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const tabs = [
  // {
  //     name: "Операторы",
  //     path: '/admin/operators'
  // },
  // {
  //     name: "Бизнес-аккаунты",
  //     path: '/admin/business'
  // },
  // {
  //     name: "Транзакции",
  //     path: '/admin/transactions'
  // },
  {
    name: "Получено в сетях",
    path: "/admin/get-networks",
  },
];

const ActiveTab = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-20 flex gap-4 font-semibold">
      {tabs.map((tab) => (
        <Link
          className={cn(
            "rounded-full px-7 py-2.5 dark:text-black",
            pathname === tab.path && "bg-white text-black dark:bg-ourGray",
          )}
          key={tab.name}
          href={tab.path}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
};

export default ActiveTab;
