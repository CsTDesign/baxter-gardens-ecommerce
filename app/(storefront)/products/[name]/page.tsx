import { ProductCard } from "@/app/components/storefront/ProductCard"
import prisma from "@/app/lib/db"

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true
        },
        where: {
          status: "published"
        }
      })

      return {
        title: "All Products",
        data: data
      }
    }
    case "landscape": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true
        },
        where: {
          status: "published",
          category: "landscape"
        }
      })

      return {
        title: "Landscape Products",
        data: data
      }
    }
    case "irrigation": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true
        },
        where: {
          status: "published",
          category: "irrigation"
        }
      })

      return {
        title: "Irrigation Products",
        data: data
      }
    }
    case "maintenance": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true
        },
        where: {
          status: "published",
          category: "maintenance"
        }
      })

      return {
        title: "Maintenance Products",
        data: data
      }
    }
  }
}

export default async function CategoriesPage({
  params
}: {
  params: {
    name: string
  }
}) {
  const {
    data,
    title
  } = await getData(params.name)
  
  return (
    <section>
      <h1 className="font-semibold my-5 text-3xl">{title}</h1>
      <div className="gap-5 grid lg:grid-cols-3 md:grid-cols-2">
        {
          data.map((item) => (
            <ProductCard
              item={item}
              key={item.id}
            />
          ))
        }
      </div>
    </section>
  )
}
