"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lg hover:bg-forest-soft",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:shadow-md",
        outline:
          "border border-forest-soft/40 bg-white/80 text-forest-soft hover:border-forest-soft hover:bg-white",
        ghost:
          "text-forest hover:text-forest-soft hover:bg-forest/10",
        link: "text-deep-aqua underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-base",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-7 text-lg",
        icon: "h-10 w-10",
      },
      glow: {
        true: "ring-1 ring-forest/20 backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      glow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
