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
    <header className="flex items-center justify-between container mx-auto max-w-[1200px] mt-11 lg:gap-10">
      <div>
        <Image
          className="lg:size-[50px] dark:hidden"
          src={"/Neutronx.svg"}
          width={67}
          height={67}
          alt="logo"
        />
        <Image
          className="lg:size-[50px] hidden dark:block"
          src={"/Neutronx-light.svg"}
          width={67}
          height={67}
          alt="logo"
        />
      </div>
      <Select>
        <SelectTrigger className="w-[95px] px-6 dark:bg-[#F1F1F1] dark:border-[#d0d0d0] lg:hidden">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent className="dark:bg-[#F1F1F1] dark:text-black dark:border-[#d0d0d0]">
          <SelectGroup>
            <SelectItem value="apple">EN</SelectItem>
            <SelectItem value="banana">RU</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <nav className="flex gap-10 lg:hidden rounded-full bg-ourDarkPurple dark:bg-ourGray dark:text-black h-[60px] items-center px-5">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Rules</Link>
        <Link href={"#"}>Contacts</Link>
      </nav>
      <Button
        className="px-0 size-10 bg-white dark:border dark:border-black dark:bg-[#F1F1F1] dark:text-black sm:w-10 lg:hidden flex"
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
