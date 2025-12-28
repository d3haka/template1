import { motion } from "motion/react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

export function ButtonAnimated({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof motion.button> & VariantProps<typeof buttonVariants> & {}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.1 } }}
      whileTap={{ scale: 0.97, y: 1, transition: { duration: 0.1 } }}
      transition={{ type: "spring", stiffness: 50 }}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
