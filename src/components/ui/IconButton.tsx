import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function IconButton({
  children,
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
