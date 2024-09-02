import * as React from "react";

import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-[60px] w-full rounded-[18px] border border-white bg-transparent px-2.5 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#bebfd3] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#464646] dark:text-black sm:h-[50px]",
            icon && "pl-10",
            error && "border-red-500",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-2.5 text-[#7F808D]">
          {icon}
        </div>
        {props.disabled && (
          <Lock
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 dark:text-ourPurple"
          />
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
