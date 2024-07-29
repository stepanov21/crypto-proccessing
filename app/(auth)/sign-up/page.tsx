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
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface IRegUser {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Page = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const submitForm = async (data: any) => {
    console.log(data);
    try {
      //@ts-ignore
      await dispatch(AUTH_API.registerUser(data));
    } catch(err) {
      console.log(err)
    }
    router.push("/sign-in");
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Card className="w-[350px] purple-gradient text-white">
        <CardHeader>
          <CardTitle className="text-center">Create account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center">
            <div className="flex flex-col space-y-2.5">
              <Input
                className="bg-transparent rounded-ourRadius"
                id="email"
                placeholder="Email"
                {...register("email")}
              />
              <Input
                className="bg-transparent rounded-ourRadius"
                id="username"
                placeholder="Login"
                {...register("username")}
              />
              <Input
                className="bg-transparent rounded-ourRadius"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
              <Input
                className="bg-transparent rounded-ourRadius"
                id="repeatPassword"
                placeholder="Repeat password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full bg-white text-black rounded-full">
            Create account
          </Button>
          <Link href={"/sign-in"} className="w-full">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Page;
