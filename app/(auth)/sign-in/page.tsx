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

const Page = () => {
  const { register, handleSubmit } = useForm();
  const { useLoginUser } = useAuth();
  const router = useRouter();

  const submitForm = async (data: any) => {
    try {
      await useLoginUser.mutateAsync(data);
      router.push("/wallet");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Card className="min-w-[400px] bg-ourDarkPurple text-white dark:bg-ourGray">
        <CardHeader>
          <Title className="mb-0 text-center text-2xl">SIGN IN</Title>
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
          <Button
            type="submit"
            className="w-full rounded-full bg-white text-black"
          >
            Login
          </Button>
          <Link href={"/sign-up"} className="w-full">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Page;
