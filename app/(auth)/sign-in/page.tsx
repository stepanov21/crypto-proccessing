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

import { default as AUTH_API } from "@/redux/auth/operations";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Page = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const submitForm = async (data: any) => {
    console.log(data);
    try {
      //@ts-ignore
      await dispatch(AUTH_API.loginUser(data));
    } catch (err) {
      console.log(err);
    }
    router.push("/wallet");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Card className="purple-gradient w-[350px] text-white">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
