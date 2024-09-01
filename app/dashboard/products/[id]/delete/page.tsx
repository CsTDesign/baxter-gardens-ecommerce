import { deleteProduct } from "@/app/actions"
import { SubmitButton } from "@/app/components/SubmitButtons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Link from "next/link"

export default function DeleteRoute({
  params
}: {
  params: {
    id: string
  }
}) {
  return (
    <div className="flex h-[80vh] items-center justify-center w-full">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure?</CardTitle>
          <CardDescription>
            This action cannot be undone. This will permanently delete the product and remove all data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between w-full">
          <Button
            asChild
            variant="secondary"
          >
            <Link href="/dashboard/products">Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input
              name="productId"
              type="hidden"
              value={params.id}
            />
            <SubmitButton
              text="Delete Product"
              variant="destructive"
            />
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
