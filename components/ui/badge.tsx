import * as React from "react";
import { cn } from "./utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary";
};

export function Badge({ className, variant = "secondary", ...props }: BadgeProps) {
  const styles =
    variant === "secondary"
      ? "bg-gray-100 text-gray-700 border"
      : "bg-gray-900 text-white";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs",
        styles,
        className
      )}
      {...props}
    />
  );
}
