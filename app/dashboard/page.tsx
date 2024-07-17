import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="gap-4 grid lg:grid-cols-4 md:gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>TOTAL REVENUE</CardTitle>
            <DollarSign className="h-4 text-green-500 w-4" />
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">$100,000</p>
            <p className="text-muted-foreground text-xs">Based on 100 Charges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>TOTAL SALES</CardTitle>
            <ShoppingBag className="h-4 text-blue-500 w-4" />
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">+50</p>
            <p className="text-muted-foreground text-xs">Total Sales on BG Nurser-E</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>TOTAL PRODUCTS</CardTitle>
            <PartyPopper className="h-4 text-indigo-500 w-4" />
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">37</p>
            <p className="text-muted-foreground text-xs">Total Products created</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>TOTAL USERS</CardTitle>
            <User2 className="h-4 text-orange-500 w-4" />
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">120</p>
            <p className="text-muted-foreground text-xs">Total User Signups</p>
          </CardContent>
        </Card>
      </div>

      <div className="gap-4 grid lg:grid-cols-2 md:gap-8 mt-10 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>TRANSACTIONS</CardTitle>
            <CardDescription>Recent BG Nurser-E transactions</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>RECENT SALES</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <Avatar className="h-9 hidden sm:flex w-9">
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <div className="gap-1 grid">
                <p className="font-medium text-sm">Cory Taylor</p>
                <p className="text-muted-foreground text-sm">official.cstdesign@gmail.com</p>
              </div>
              <p className="font-medium ml-auto">+$1,999.00</p>
            </div>
            <div className="flex gap-4 items-center">
              <Avatar className="h-9 hidden sm:flex w-9">
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <div className="gap-1 grid">
                <p className="font-medium text-sm">Cory Taylor</p>
                <p className="text-muted-foreground text-sm">official.cstdesign@gmail.com</p>
              </div>
              <p className="font-medium ml-auto">+$1,999.00</p>
            </div>
            <div className="flex gap-4 items-center">
              <Avatar className="h-9 hidden sm:flex w-9">
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <div className="gap-1 grid">
                <p className="font-medium text-sm">Cory Taylor</p>
                <p className="text-muted-foreground text-sm">official.cstdesign@gmail.com</p>
              </div>
              <p className="font-medium ml-auto">+$1,999.00</p>
            </div>
            <div className="flex gap-4 items-center">
              <Avatar className="h-9 hidden sm:flex w-9">
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <div className="gap-1 grid">
                <p className="font-medium text-sm">Cory Taylor</p>
                <p className="text-muted-foreground text-sm">official.cstdesign@gmail.com</p>
              </div>
              <p className="font-medium ml-auto">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
