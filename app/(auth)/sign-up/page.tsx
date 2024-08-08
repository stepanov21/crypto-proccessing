"use client";

import { useAuth } from "@/api/auth/queries";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "./types";


const Page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(registerUserSchema)});
  const { useRegisterUser } = useAuth();
  const router = useRouter();
  console.log(errors)

  const submitForm = async (data: any) => {
    console.log(data);
    try {
      useRegisterUser.mutateAsync(data);
      router.push("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Card className="bg-ourDarkPurple sm:min-w-[400px] text-white dark:bg-ourGray">
        <CardHeader>
          <CardTitle className="text-center">Create account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center">
            <div className="flex flex-col space-y-2.5">
              <Input
                className="rounded-ourRadius bg-transparent"
                id="email"
                placeholder={errors.email ? errors.email?.message as string : "Email"}
                {...register("email")}
                error={errors.email?.message as string}
              />
              <Input
                className="rounded-ourRadius bg-transparent"
                id="username"
                placeholder={errors.username ? errors.username?.message as string : "Login"}
                {...register("username")}
                error={errors.username?.message as string}
              />
              <Input
                className="rounded-ourRadius bg-transparent"
                id="password"
                placeholder={errors.password ? errors.password?.message as string : "Password"}
                {...register("password")}
                error={errors.password?.message as string}
              />
              <Input
                className="rounded-ourRadius bg-transparent"
                id="repeatPassword"
                {...register("repeatPassword")}
                placeholder={errors.repeatPassword ? errors.repeatPassword?.message as string : "Repeat Password"}
                error={errors.repeatPassword?.message as string}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full rounded-full bg-white text-black">
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
