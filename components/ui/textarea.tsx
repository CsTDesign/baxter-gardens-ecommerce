import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps>(({
    className,
    ...props
  }, ref) => {
    return (
      <textarea
        className={cn(
          "bg-background border border-input disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring min-h-[80px] placeholder:text-muted-foreground px-3 py-2 ring-offset-background rounded-md text-sm w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
