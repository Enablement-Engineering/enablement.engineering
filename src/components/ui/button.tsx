import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary: Yellow for main brand actions
        default: "bg-primary-400 text-secondary-900 hover:bg-primary-300 font-semibold",
        // Secondary: Ink/Black for supporting actions
        secondary: "bg-secondary-900 text-neutral-50 hover:bg-secondary-800",
        // Accent: Orange for highlights/call-to-action
        accent: "bg-accent-500 text-white hover:bg-accent-600",
        // Destructive: Standard red for destructive actions
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline: Ink outline on paper background
        outline: "border border-ink bg-paper hover:bg-ink hover:text-paper",
        // Ghost: Subtle interaction for tertiary actions
        ghost: "hover:bg-neutral-100 hover:text-ink",
        // Link: Teal for inline text links with underlines
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };