"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { useAuth } from "@/api/auth/queries";
import { Title } from "@/components/ui/title";
import useCustomToast from "@/hooks/useCustomToast";
import CustomButton from "@/components/ui/CustomButton";
import { useEffect, useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";
import { useUserRole } from "@/api/admin/queries";

const Page = () => {
  const { register, handleSubmit, reset } = useForm();
  const { useLoginUser } = useAuth();
  const { mutateAsync, error, isError, isPending } = useLoginUser();
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();

  useCustomToast({ isError, error });

  const submitForm = async (data: any) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      reset();
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Card className="middle-purple-gradient text-white dark:bg-ourGray dark:bg-none">
        <CardHeader>
          <Title className="mb-0 text-center text-[28px] font-bold sm:text-[20px]">
            Sign In
          </Title>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Input
                {...register("username")}
                className="rounded-ourRadius bg-transparent"
                id="username"
                placeholder="Login"
                required
              />
              <div className="relative">
                <Input
                  {...register("password")}
                  className="rounded-ourRadius bg-transparent"
                  id="password"
                  placeholder="Password"
                  type={hidePassword ? "password" : "text"}
                  required
                />
                <div
                  onClick={() => setHidePassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {hidePassword ? <EyeOff /> : <EyeIcon />}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <CustomButton
            isLoading={isPending}
            className="w-full rounded-full bg-ourGreen text-black"
          >
            Login
          </CustomButton>
          <Link href={"/sign-up"} className="w-full">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Page;
