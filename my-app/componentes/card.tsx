import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-xl border p-4 shadow-sm bg-white", className)} {...props} />
  );
}
