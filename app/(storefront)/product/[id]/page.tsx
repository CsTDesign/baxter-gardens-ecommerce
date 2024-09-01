import { addItem } from "@/app/actions"
import { FeaturedProducts } from "@/app/components/storefront/FeaturedProducts"
import { ImageSlider } from "@/app/components/storefront/ImageSlider"
import { ShoppingCartButton } from "@/app/components/SubmitButtons"
import prisma from "@/app/lib/db"
import { StarIcon } from "lucide-react"
import { notFound } from "next/navigation"

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true
    }
  })

  if (!data) {
    return notFound()
  }

  return data
}

export default async function ProductIdRoute({
  params
}: {
  params: {
    id: string
  }
}) {
  const data = await getData(params.id)
  
  const addProductToShoppingCart = addItem.bind(null, data.id)

  return (
    <>
      <div className="gap-6 grid grid-cols-1 items-start lg:gap-x-24 md:grid-cols-2 py-6">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="font-extrabold text-3xl text-gray-900 tracking-tight">
            {data.name}
          </h1>
          <p className="mt-2 text-3xl text-gray-900">${data.price}</p>
          <div className="flex gap-1 items-center mt-3">
            <StarIcon className="fill-yellow-500 h-4 text-yellow-500 w-4" />
            <StarIcon className="fill-yellow-500 h-4 text-yellow-500 w-4" />
            <StarIcon className="fill-yellow-500 h-4 text-yellow-500 w-4" />
            <StarIcon className="fill-yellow-500 h-4 text-yellow-500 w-4" />
            <StarIcon className="fill-yellow-500 h-4 text-yellow-500 w-4" />
          </div>
          <p className="mt-6 text-base text-gray-700">{data.description}</p>
          
          <form action={addProductToShoppingCart}>
            <ShoppingCartButton />
          </form>
        </div>
      </div>

      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </>
  )
}
