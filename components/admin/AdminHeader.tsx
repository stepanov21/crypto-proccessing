"use client";
import Image from "next/image";
import React from "react";
import { LogOut, MoonStar, Sun, UserPlus } from "lucide-react";
// import { MobileMenu } from "./MobileMenu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useTheme } from "@/zustand/store";
import Link from "next/link";
import { Button } from "../ui/button";

const AdminHeader = () => {
  const changeTheme = useTheme((state) => state.changeTheme);
  return (
    <header className="container mx-auto mt-11 flex max-w-[1200px] items-center justify-between lg:gap-10">
      <div>
        <Image
          className="dark:hidden lg:size-[50px]"
          src={"/Neutronx.svg"}
          width={67}
          height={67}
          alt="logo"
        />
        <Image
          className="hidden dark:block lg:size-[50px]"
          src={"/Neutronx-light.svg"}
          width={67}
          height={67}
          alt="logo"
        />
      </div>
      <Select>
        <SelectTrigger className="w-[95px] px-6 dark:border-[#d0d0d0] dark:bg-[#F1F1F1] lg:hidden">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent className="dark:border-[#d0d0d0] dark:bg-[#F1F1F1] dark:text-black">
          <SelectGroup>
            <SelectItem value="apple">EN</SelectItem>
            <SelectItem value="banana">RU</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <nav className="flex h-[60px] items-center gap-10 rounded-full bg-ourDarkPurple px-5 dark:bg-ourGray dark:text-black lg:hidden">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Rules</Link>
        <Link href={"#"}>Contacts</Link>
      </nav>
      <Button
        className="flex size-10 bg-white px-0 dark:border dark:border-black dark:bg-[#F1F1F1] dark:text-black lg:hidden sm:w-10"
        onClick={changeTheme}
      >
        <Sun className={"dark:hidden"} size={20} />
        <MoonStar className={"hidden dark:block"} size={20} />
      </Button>
      {/* <div className="flex bg-[#252032] dark:bg-[#F1F1F1] rounded-full h-[60px] p-1.5 lg:ml-auto items-center">
        <Link href={'/sign-up'}>
          <Button className="bg-white px-5 text-sm dark:bg-white dark:text-black h-[50px]">
            <UserPlus className="mr-2 lg:mr-0" />
            <span className="lg:hidden">Sign Up</span>
          </Button>
        </Link>
        <Link href={'/sign-up'}>
        <Button className="bg-transparent text-white dark:bg-transparent px-5 text-sm dark:text-black">
          <LogOut className="mr-2 lg:mr-0" />
          <span className="lg:hidden">Sign In</span>
        </Button>
        </Link>
      </div> */}
      {/* <MobileMenu /> */}
    </header>
  );
};

export default AdminHeader;
