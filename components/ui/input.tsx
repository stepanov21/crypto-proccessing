import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-[60px] w-full rounded-[18px] border border-[#7F808D] border-input bg-transparent px-2.5 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#7F808D] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-2.5 text-[#7F808D]">
          {icon}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
