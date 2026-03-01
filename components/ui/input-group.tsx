"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-input bg-background ring-offset-background flex h-10 w-full items-center gap-1 rounded-md border text-sm",
      className
    )}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    position?: "left" | "right";
  }
>(({ className, position = "left", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-muted-foreground flex items-center px-3",
      position === "right" && "ml-auto",
      className
    )}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

export { InputGroup, InputGroupAddon };
