"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center gap-1 rounded-md border border-input bg-background text-sm ring-offset-background",
      className
    )}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    position?: "left" | "right"
  }
>(({ className, position = "left", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center px-3 text-muted-foreground",
      position === "right" && "ml-auto",
      className
    )}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

export { InputGroup, InputGroupAddon }
