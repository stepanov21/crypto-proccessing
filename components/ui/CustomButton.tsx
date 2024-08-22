import React from "react";
import { Button } from "./button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CustomButton = ({
  isLoading,
  children,
  className,
}: {
  isLoading?: boolean;
  children: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn("flex w-full", className)}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </Button>
  );
};

export default CustomButton;
