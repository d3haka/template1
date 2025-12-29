import { motion } from "motion/react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, FC } from "react";

type AnimatedButtonProps = ComponentProps<typeof motion.button> &
  VariantProps<typeof buttonVariants> & {};

export const AnimatedButton: FC<AnimatedButtonProps> = ({
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.1 } }}
      whileTap={{ scale: 0.97, y: 1, transition: { duration: 0.1 } }}
      transition={{ type: "spring", stiffness: 50 }}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn("cursor-pointer", buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
