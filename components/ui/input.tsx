import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  ...props
}, ref) => {
  return (
    <input
      className={cn(
        "bg-background border border-input disabled:opacity-50 disabled:cursor-not-allowed file:bg-transparent file:border-0 file:font-medium file:text-sm flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring h-10 placeholder:text-muted-foreground px-3 py-2 ring-offset-background rounded-md text-sm w-full",
        className
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
