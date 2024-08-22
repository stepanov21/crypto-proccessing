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

const Page = () => {
  const { register, handleSubmit, reset } = useForm();
  const { useLoginUser } = useAuth();
  const { mutateAsync, error, isError, isPending } = useLoginUser();

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
      <Card className="min-w-[400px] middle-purple-gradient text-white dark:bg-ourGray">
        <CardHeader>
          <Title className="mb-0 text-center text-[28px] font-bold">Sign In</Title>
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
              <Input
                {...register("password")}
                className="rounded-ourRadius bg-transparent"
                id="password"
                placeholder="Password"
                required
              />
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
          <Link href={"/sign-up"} className="w-full ">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Page;
