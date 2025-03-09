import { Building2, Clock, Coffee, Wifi } from "lucide-react"

export default function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Premium Business Amenities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to run your business efficiently in one place
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Modern Office Spaces</h3>
                <p className="text-muted-foreground">
                  Fully furnished private offices and coworking spaces designed for productivity
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wifi className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">High-Speed Internet</h3>
                <p className="text-muted-foreground">Enterprise-grade fiber internet to keep your business connected</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Coffee className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Premium Amenities</h3>
                <p className="text-muted-foreground">Complimentary coffee, tea, and refreshments in our lounge areas</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">24/7 Access</h3>
                <p className="text-muted-foreground">Secure access to your workspace whenever you need it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

