"use client"

import { Button } from "@/components/ui/button"
import { Loader2, ShoppingCart } from "lucide-react"
import { useFormStatus } from "react-dom"

interface buttonProps {
  text: string
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined
}

export function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus()
  
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="animate-spin h-4 mr-2 w-4" />
          Please wait...
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
        >
          {text}
        </Button>
      )}
    </>
  )
}

export function ShoppingCartButton() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <Button
          className="mt-5 w-full"
          disabled
          size="lg"
        >
          <Loader2 className="animate-spin h-5 mr-4 w-5" /> Please wait...
        </Button>
      ) : (
        <Button
          className="mt-5 w-full"
          size="lg"
          type="submit"
        >
          <ShoppingCart className="h-5 mr-4 w-5" /> Add to Cart
        </Button>
      )}
    </>
  )
}

export function DeleteItem() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <button
          className="font-medium text-end text-red-500"
          disabled
        >
          Deleting...
        </button>
      ) : (
        <button
          className="font-medium text-end text-red-500"
          type="submit"
        >
          Delete
        </button>
      )}
    </>
  )
}

export function CheckoutButton() {
  const { pending } = useFormStatus()
  
  return (
    <>
      {pending ? (
        <Button
          className="mt-5 w-full"
          disabled
          size="lg"
        >
          <Loader2 className="animate-spin h-5 mr-2 w-5" /> Please wait...
        </Button>
      ) : (
        <Button
          className="mt-5 w-full"
          size="lg"
          type="submit"
        >
          Checkout
        </Button>
      )}
    </>
  )
}
