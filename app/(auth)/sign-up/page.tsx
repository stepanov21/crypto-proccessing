"use client";

import { useAuth } from "@/api/auth/queries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "./types";
import { Title } from "@/components/ui/title";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import CustomButton from "@/components/ui/CustomButton";
import useCustomToast from "@/hooks/useCustomToast";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerUserSchema) });
  const { useRegisterUser } = useAuth();
  const { mutateAsync, isError, isPending, error } = useRegisterUser();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCustomToast({ isError, error });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])


  const submitForm = async (data: any) => {
    try {
      mutateAsync(data);
    } catch (err) {

    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Card className="middle-purple-gradient text-white dark:bg-none dark:bg-ourGray">
        <CardHeader>
          <Title className="mb-0 text-center text-2xl font-bold text-[28px] sm:text-[20px]">Sign Up</Title>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center">
            <div className="flex flex-col space-y-4">
              <Input
                className="rounded-ourRadius bg-transparent"
                id="email"
                placeholder={
                  errors.email ? (errors.email?.message as string) : "Email"
                }
                {...register("email")}
                error={errors.email?.message as string}
              />
              <Input
                className="rounded-ourRadius bg-transparent"
                id="username"
                placeholder={
                  errors?.username
                    ? (errors.username?.message as string)
                    : "Login"
                }
                {...register("username")}
                error={errors.username?.message as string}
              />
              <Input
                className="rounded-ourRadius bg-transparent"
                id="password"
                placeholder={
                  errors.password
                    ? (errors?.password?.message as string)
                    : "Password"
                }
                {...register("password")}
                error={errors?.password?.message as string}
              />
              <Input
                className="rounded-ourRadius bg-transparent"
                id="repeatPassword"
                {...register("repeatPassword")}
                placeholder={
                  errors.repeatPassword
                    ? (errors.repeatPassword?.message as string)
                    : "Repeat Password"
                }
                error={errors.repeatPassword?.message as string}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <CustomButton
            isLoading={isPending}
            className="w-full rounded-full bg-ourGreen text-black"
          >
            Create account
          </CustomButton>
          <Link href={"/sign-in"} className="w-full font-medium">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Page;
