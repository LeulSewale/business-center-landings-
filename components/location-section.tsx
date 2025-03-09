import { MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface LocationSectionProps {
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  mapUrl: string
}

export default function LocationSection({ address, city, state, zipCode, country, mapUrl }: LocationSectionProps) {
  return (
    <section id="location" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Location</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conveniently located in the heart of the business district
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-muted-foreground">{address}</p>
                <p className="text-muted-foreground">
                  {city}, {state} {zipCode}
                </p>
                <p className="text-muted-foreground">{country}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Directions</h3>
                <p className="text-muted-foreground">Located near public transportation and major highways.</p>
                <Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Get directions on Google Maps
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border bg-background">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Map of business center location"
              className="aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

