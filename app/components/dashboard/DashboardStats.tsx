import prisma from "@/app/lib/db"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  DollarSign,
  PartyPopper,
  ShoppingBag,
  User2
} from "lucide-react"

async function getData() {
  const [
    user,
    products,
    order
  ] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true
      }
    }),
    prisma.product.findMany({
      select: {
        id: true
      }
    }),
    prisma.order.findMany({
      select: {
        amount: true
      }
    })
  ])

  return {
    user,
    products,
    order
  }
}

export async function DashboardStats() {
  const {
    user,
    products,
    order
  } = await getData()
  
  const totalAmount = order.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.amount
    }, 0
  )

  return (
    <div className="gap-4 grid lg:grid-cols-4 md:gap-8 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="uppercase">Total Revenue</CardTitle>
          <DollarSign className="h-4 text-green-500 w-4" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl">
            ${
              new Intl.NumberFormat("en-US")
              .format(totalAmount / 100)
            }
          </p>
          <p className="text-muted-foreground text-xs">
            Based on 100 Charges
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="uppercase">Total Sales</CardTitle>
          <ShoppingBag className="h-4 text-blue-500 w-4" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl">
            +{order.length}
          </p>
          <p className="text-muted-foreground text-xs">
            Total Sales on BG Nurser-E
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="uppercase">Total Products</CardTitle>
          <PartyPopper className="h-4 text-indigo-500 w-4" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl">
            {products.length}
          </p>
          <p className="text-muted-foreground text-xs">
            Total Products created
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="uppercase">Total Users</CardTitle>
          <User2 className="h-4 text-orange-500 w-4" />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-2xl">
            {user.length}
          </p>
          <p className="text-muted-foreground text-xs">
            Total User Signups
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
