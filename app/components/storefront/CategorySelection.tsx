import Image from "next/image";
import Link from "next/link";
import all from "@/public/all.jpg"
import landscape from "@/public/landscape.jpg"
import maintenance from "@/public/maintenance.jpg"

export function CategoriesSelection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex items-center justify-between">
        <h2 className="font-extrabold text-2xl tracking-tight">
          Shop by Category
        </h2>
        <Link
          className="font-semibold hover:text-primary/80 text-primary text-sm"
          href="/products/all"
        >
          Browse all products &rarr;
        </Link>
      </div>

      <div className="gap-y-6 grid grid-cols-1 lg:gap-8 mt-6 sm:gap-x-6 sm:grid-cols-2 sm:grid-rows-2">
        <div className="aspect-h-1 aspect-w-2 group overflow-hidden rounded-xl sm:aspect-w-1 sm:row-span-2">
          <Image
            alt="All Products image"
            className="object-center object-cover"
            src={all}
          />
          <div className="bg-gradient-to-b from-transparent opacity-55 to-black" />
          <div className="flex items-end p-6">
            <Link href="/products/all">
              <h3 className="font-semibold text-white">All Products</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>

        <div className="aspect-h-1 aspect-w-2 group overflow-hidden rounded-xl sm:aspect-none sm:h-full sm:relative">
          <Image
            alt="Landscape image"
            className="object-center object-cover sm:absolute sm:h-full sm:inset-0 sm:w-full"
            src={landscape}
          />
          <div className="bg-gradient-to-b from-transparent opacity-55 sm:absolute sm:inset-0 to-black" />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <Link href="/products/landscape">
              <h3 className="font-semibold text-white">Landscape Products</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>

        <div className="aspect-h-1 aspect-w-2 group overflow-hidden rounded-xl sm:aspect-none sm:h-full sm:relative">
          <Image
            alt="Maintenance image"
            className="object-center object-cover sm:absolute sm:h-full sm:inset-0 sm:w-full"
            src={maintenance}
          />
          <div className="bg-gradient-to-b from-transparent opacity-55 sm:absolute sm:inset-0 to-black" />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <Link href="/products/maintenance">
              <h3 className="font-semibold text-white">Maintenance Products</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
