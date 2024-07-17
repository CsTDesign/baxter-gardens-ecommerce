import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
  return (
    <section className="flex items-center justify-between min-h-[80vh] w-full">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="flex justify-center w-full">
            <Check className="bg-green-500/30 h-12 p-2 rounded-full text-green-500 w-12" />
          </div>
          <div className="mt-3 sm:mt-5 text-center w-full">
            <h3 className="font-medium leading-6 text-lg">
              Payment Successful
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              We hope you enjoy your product&#x28;s&#x29;.
            </p>
          
            <Button
              asChild
              className="mt-5 sm:mt-6 w-full"
            >
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}
