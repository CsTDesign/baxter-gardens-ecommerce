"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/"
  },
  {
    id: 1,
    name: "All Products",
    href: "/products/all"
  },
  {
    id: 2,
    name: "Landscape",
    href: "/products/landscape"
  },
  {
    id: 3,
    name: "Irrigation",
    href: "/products/irrigation"
  },
  {
    id: 4,
    name: "Maintenance",
    href: "/products/maintenance"
  },
]

export function NavbarLinks() {
  const location = usePathname()

  return (
    <div className="gap-x-2 hidden items-center justify-center md:flex ml-8">
      {
        navbarLinks.map((item) => (
          <Link
            className={
              cn(
                location === item.href
                  ? "bg-primary/10"
                  : "hover: bg-muted hover:bg-opacity-75",
                "font-medium group p-2 rounded-md"
              )
            }
            href={item.href}
            key={item.id}
          >
            {item.name}
          </Link>
        ))
      }
    </div>
  )
}
