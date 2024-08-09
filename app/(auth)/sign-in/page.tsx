"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
      <Card className="bg-ourDarkPurple min-w-[400px] text-white dark:bg-ourGray">
        <CardHeader>
          <Title className="text-center text-2xl mb-0">SIGN IN</Title>
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
