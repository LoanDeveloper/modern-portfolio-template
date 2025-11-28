import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-white/5 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:border-transparent hover:bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(to_right,var(--color-primary),#c084fc,#3b82f6)] hover:bg-origin-border hover:[background-clip:padding-box,border-box]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border border-white/10 bg-transparent hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:border-transparent hover:bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(to_right,var(--color-primary),#c084fc,#3b82f6)] hover:bg-origin-border hover:[background-clip:padding-box,border-box] hover:text-white backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:border-transparent hover:bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(to_right,var(--color-primary),#c084fc,#3b82f6)] hover:bg-origin-border hover:[background-clip:padding-box,border-box] hover:text-white",
        ghost: "hover:bg-white/5 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }