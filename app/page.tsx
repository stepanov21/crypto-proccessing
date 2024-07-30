'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { default as AUTH_API } from "@/redux/auth/operations";
import { UnknownAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import authSelector from '@/redux/auth/selectors'
import { useRouter } from "next/navigation";
import MerchantWasCreated from "@/components/custom/MerchantWasCreated";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const isLoggedIn = useSelector<RootState>(state => state.auth.isLoggedIn)
  const router = useRouter()

  useEffect(() => {
    if(!isLoggedIn) {
      router.push('/sign-in')
    }
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={async () => await dispatch(AUTH_API.logoutUser())}>Logout</Button>
    </main>
  );
}
