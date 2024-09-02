"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const local = useLocale();
  console.log("🚀 ~ Page ~ local:", local);
  const router = useRouter();
  useEffect(() => {
    router.push(`/${local}/wallet`);
    //eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Page;
