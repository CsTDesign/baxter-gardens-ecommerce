import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({
  className,
  ...props
}, ref) => (
  <div
    className={cn(
      "bg-card border rounded-lg shadow-sm text-card-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({
  className,
  ...props
}, ref) => (
  <div
    className={cn(
      "flex flex-col p-6 space-y-1.5",
      className
    )}
    ref={ref}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({
  className,
  ...props
}, ref) => (
  <h3
    className={cn(
      "font-semibold leading-none text-2xl tracking-tight",
      className
    )}
    ref={ref}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({
  className,
  ...props
}, ref) => (
  <p
    className={cn(
      "text-muted-foreground text-sm",
      className
    )}
    ref={ref}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({
  className,
  ...props }, ref) => (
  <div
    className={cn(
      "p-6 pt-0",
      className
    )}
    ref={ref}
    {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({
  className,
  ...props
}, ref) => (
  <div
    className={cn(
      "flex items-center p-6 pt-0",
      className
    )}
    ref={ref}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
}
