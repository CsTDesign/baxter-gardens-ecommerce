import * as React from "react"
import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({
  className,
  ...props
}, ref) => (
  <div className="overflow-auto relative w-full">
    <table
      className={cn("caption-bottom text-sm w-full", className)}
      ref={ref}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    className={cn(
      "[&_tr]:border-b",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({
  className,
  ...props
}, ref) => (
  <tbody
    className={cn(
      "[&_tr:last-child]:border-0",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({
  className,
  ...props
}, ref) => (
  <tfoot
    className={cn(
      "[&>tr]:last:border-b-0 bg-muted/50 border-t font-medium",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({
  className,
  ...props
}, ref) => (
  <tr
    className={cn(
      "border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({
  className,
  ...props
}, ref) => (
  <th
    className={cn(
      "[&:has([role=checkbox])]:pr-0 align-middle font-medium h-12 px-4 text-left text-muted-foreground ",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({
  className,
  ...props
}, ref) => (
  <td
    className={cn(
      "[&:has([role=checkbox])]:pr-0 align-middle p-4",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({
  className,
  ...props
}, ref) => (
  <caption
    className={cn(
      "mt-4 text-muted-foreground text-sm",
      className
    )}
    ref={ref}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
