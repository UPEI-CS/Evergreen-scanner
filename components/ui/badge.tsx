import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        success:
          "border-transparent bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800",
        lost: "border-transparent bg-red-500 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800", // Red for Lost
        damaged:
          "border-transparent bg-orange-600 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700", // Orange for Damaged
        missing:
          "border-transparent bg-red-800 text-white hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-900", // Darker red for Missing
        discard:
          "border-transparent bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700", // Gray for Discard/Weed
        checkedout:
          "border-transparent bg-blue-600 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700", // Blue for Checked Out
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
