import * as React from "react";
import { cn } from "./utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs bg-gray-50", className)}
      {...props}
    />
  );
}
