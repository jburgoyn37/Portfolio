import * as React from "react";
import { cn } from "./utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, asChild, variant = "default", size = "md", children, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl border px-3 py-1.5 text-sm transition hover:shadow";
  const v = variant === "outline" ? "bg-transparent" : "bg-white";
  const s = size === "sm" ? "px-2 py-1 text-sm" : size === "lg" ? "px-4 py-2 text-base" : "";
  if (asChild) return <span className={cn(base, v, s, className)}>{children}</span>;
  return (
    <button className={cn(base, v, s, className)} {...props}>
      {children}
    </button>
  );
}
