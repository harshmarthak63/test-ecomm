import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface PriceDisplayProps extends HTMLAttributes<HTMLDivElement> {
  currentPrice: string | number;
  originalPrice?: string | number;
  currency?: string; // default ₹
  size?: "sm" | "md" | "lg";
}

export default function PriceDisplay({
  currentPrice,
  originalPrice,
  currency = "₹",
  size = "md",
  className,
  ...props
}: PriceDisplayProps) {
  const sizes = {
    sm: {
      current: "text-base",
      original: "text-sm",
      gap: "gap-2",
    },
    md: {
      current: "text-xl",
      original: "text-base",
      gap: "gap-3",
    },
    lg: {
      current: "text-2xl",
      original: "text-lg",
      gap: "gap-4",
    },
  };

  const format = (v: string | number) => {
    if (typeof v === "number") return v.toLocaleString("en-IN");
    return v;
  };

  const s = sizes[size];

  return (
    <div
      className={cn("flex items-end", s.gap, className)}
      {...props}
    >
      <span className={cn("font-bold text-gray-900 leading-none", s.current)}>
        {currency}
        {format(currentPrice)}
      </span>

      {originalPrice && (
        <span
          className={cn(
            "text-gray-400 line-through leading-none",
            s.original
          )}
        >
          {currency}
          {format(originalPrice)}
        </span>
      )}
    </div>
  );
}
