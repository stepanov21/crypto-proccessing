import { z, ZodType } from "zod";

export interface IRegUser {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const UserSchema: ZodType<IRegUser> = z
  .object({
    username: z.string().min(4, { message: "Username is too short" }),
    email: z.string().email({ message: "Invalid e-mail" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"], // path of error
  });
