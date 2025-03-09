import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BusinessHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Premier Business Center
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Professional office spaces designed to elevate your business. Modern amenities, prime location, and
                exceptional service.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="#location">
                <Button size="lg" variant="outline">
                  View Location
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Business Center Building"
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

