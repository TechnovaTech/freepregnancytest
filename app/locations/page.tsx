import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, NavigationIcon, Mail } from "lucide-react"
import Link from "next/link"

const locations = [
  {
    name: "Phoenix Central Clinic",
    address: "123 Healthcare Drive",
    city: "Phoenix, AZ 85001",
    phone: "(555) 123-4567",
    email: "phoenix@womensspecialty.com",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.845574448726!2d-112.07404!3d33.448376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU0LjIiTiAxMTLCsDA0JzI2LjUiVw!5e0!3m2!1sen!2sus!4v1234567890",
  },
  {
    name: "Scottsdale Women's Center",
    address: "456 Medical Plaza Boulevard",
    city: "Scottsdale, AZ 85251",
    phone: "(555) 234-5678",
    email: "scottsdale@womensspecialty.com",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.845574448726!2d-111.92613!3d33.494167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI5JzM5LjAiTiAxMTHCsDU1JzM0LjEiVw!5e0!3m2!1sen!2sus!4v1234567890",
  },
  {
    name: "Tempe Healthcare Clinic",
    address: "789 University Avenue",
    city: "Tempe, AZ 85281",
    phone: "(555) 345-6789",
    email: "tempe@womensspecialty.com",
    hours: [
      { day: "Monday - Friday", time: "7:30 AM - 6:00 PM" },
      { day: "Saturday", time: "8:00 AM - 3:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.845574448726!2d-111.93991!3d33.427204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzM3LjkiTiAxMTHCsDU2JzIzLjciVw!5e0!3m2!1sen!2sus!4v1234567890",
  },
]

export default function LocationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                Our Locations
              </div>
              <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Convenient Locations Across the Metro Area
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Find a clinic near you and experience compassionate, professional women's healthcare in a comfortable
                setting.
              </p>
            </div>
          </div>
        </section>

        {/* Locations List */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {locations.map((location, index) => (
                <Card key={location.name} className="overflow-hidden border-border">
                  <div className="grid gap-0 lg:grid-cols-2">
                    {/* Map */}
                    <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="aspect-video h-full w-full lg:aspect-auto">
                        <iframe
                          src={location.mapEmbed}
                          width="100%"
                          height="100%"
                          style={{ border: 0, minHeight: "400px" }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${location.name}`}
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <CardContent className={`order-2 space-y-6 p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div>
                        <h2 className="mb-2 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                          {location.name}
                        </h2>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <p>{location.address}</p>
                            <p>{location.city}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 shrink-0 text-primary" />
                          <a
                            href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                            className="text-lg font-medium text-foreground hover:text-primary"
                          >
                            {location.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 shrink-0 text-primary" />
                          <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary">
                            {location.email}
                          </a>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                          <div className="space-y-1">
                            {location.hours.map((hour) => (
                              <div key={hour.day} className="flex gap-2">
                                <span className="min-w-[140px] font-medium text-foreground">{hour.day}:</span>
                                <span className="text-muted-foreground">{hour.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a
                            href={`https://www.google.com/maps/dir//${encodeURIComponent(location.address + ", " + location.city)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <NavigationIcon className="mr-2 h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                What to Expect at Our Clinics
              </h2>
              <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                All our locations offer the same high standard of care in modern, welcoming facilities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border bg-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Same-Day Appointments</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Walk-ins welcome and same-day scheduling available at all locations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <NavigationIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Easy Parking</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Convenient parking available at all clinic locations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Accessible Locations</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Multiple locations across the metro area for your convenience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <div className="mx-auto max-w-2xl space-y-6">
              <h2 className="text-balance font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Visit Us Today for Compassionate Care
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Walk-ins welcome for pregnancy testing. Call ahead for all other services.
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Schedule Your Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
