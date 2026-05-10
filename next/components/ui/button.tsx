import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,colors] focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-ink text-bg hover:opacity-90",
        secondary: "border border-line bg-surface text-ink hover:border-line-strong",
        ghost: "text-ink hover:text-accent",
      },
      size: {
        sm: "h-8 px-3 text-[13px] rounded-[6px]",
        md: "h-11 px-5 text-[14.5px] rounded-[8px]",
        lg: "h-12 px-6 text-[15px] rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
