import {
  checkOut,
  delItem } from "@/app/actions"
import {
  CheckoutButton,
  DeleteItem
} from "@/app/components/SubmitButtons"
import { Cart } from "@/app/lib/interfaces"
import { redis } from "@/app/lib/redis"
import { Button } from "@/components/ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"
import emptyWheelbarrow from "@/public/emptyWheelbarrow.png"
import Link from "next/link"

export default async function BagRoute() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    redirect("/")
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`)
  
  let totalPrice = 0

  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity
  })

  return (
    <div className="max-w-2xl min-h-[55vh] mt-10 mx-auto">
      {
        !cart || !cart.items ? (
          <div className="border border-dashed flex flex-col items-center justify-center min-h-[400px] mt-20 p-8 rounded-lg text-center">
            <Image
              alt="Empty cart"
              src={emptyWheelbarrow}
            />
            <h1 className="font-semibold mt-6 text-xl">Empty</h1>
            <p className="leading-6 max-w-sm mb-8 mt-2 mx-auto text-center text-muted-foreground text-sm">
              Your Shopping Cart is currently empty. Please add products in order to view them here.
            </p>
            <Button asChild>
              <Link href="/">Shop Now!</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-10">
            {
              cart?.items.map((item) => (
                <div
                  className="flex"
                  key={item.id}
                >
                  <div className="h-24 relative sm:h-32 sm:w-32 w-24">
                    <Image
                      alt="Product image"
                      className="object-cover rounded-md"
                      fill
                      src={item.imageString}
                    />
                  </div>
                  <div className="flex font-medium justify-between ml-5 w-full">
                    <p>{item.name}</p>
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex gap-x-2 items-center">
                        <p>{item.quantity} x </p>
                        <p>${item.price}</p>
                      </div>

                      <form
                        action={delItem}
                        className="text-end"
                      >
                        <input
                          name="productId"
                          type="hidden"
                          value={item.id}
                        />
                        <DeleteItem />
                      </form>
                    </div>
                  </div>
                </div>
              ))
            }

            <div className="mt-10">
              <div className="flex font-medium items-center justify-between">
                <p>Subtotal: </p>
                <p>
                  ${
                    new Intl.NumberFormat("en-US")
                    .format(totalPrice)
                  }
                </p>
              </div>

              <form action={checkOut}>
                <CheckoutButton />
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}
