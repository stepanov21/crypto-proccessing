import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-block items-center justify-center whitespace-nowrap rounded-full text-[18px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none font-semibold disabled:opacity-50 dark:bg-[#f1f1f1] dark:text-black sm:text-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-black bg-ourGreen font-semibold dark:bg-black dark:text-white",
        form: "bg-ourGreen font-semibold text-black dark:bg-[#f1f1f1]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "w-full bg-transparent underline text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        wallet:
          "light-purple-gradient flex justify-between rounded-[18px] dark:bg-none dark:bg-white",
        aside: "bg-ourPurple text-white w-full font-semibold dark:bg-[#f1f1f1]",
      },
      size: {
        default: "h-[60px] px-20 sm:h-[50px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        full: "w-full",
        icon: "h-8 w-8 ml-4 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
