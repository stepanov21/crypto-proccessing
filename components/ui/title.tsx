import * as React from "react";

import { cn } from "@/lib/utils";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        className={cn("mb-2.5 text-xl font-semibold", className)}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    );
  },
);
Title.displayName = "Input";

export { Title };
