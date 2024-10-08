import prisma from "@/app/lib/db"
import {
  LoadingProductCart,
  ProductCard
} from "./ProductCard"
import { Suspense } from "react"

async function getData() {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 3
  })

  return data
}

export function FeaturedProducts() {
  return (
    <>
      <h2 className="font-extrabold text-2xl tracking-tight">
        Featured Items
      </h2>
      <Suspense fallback={<LoadingRows />}>
        <LoadFeaturedProducts />
      </Suspense>
    </>
  )
}

async function LoadFeaturedProducts() {
  const data = await getData()

  return (
    <div className="gap-5 grid lg:grid-cols-3 mt-5 sm:grid-cols-2">
      {
        data.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}

function LoadingRows() {
  return (
    <div className="gap-5 grid lg:grid-cols-3 mt-5 sm:grid-cols-2">
      <LoadingProductCart />
      <LoadingProductCart />
      <LoadingProductCart />
    </div>
  )
}
