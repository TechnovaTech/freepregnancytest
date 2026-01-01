import Link from "next/link"
import { Heart, Phone, MapPin, Clock, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-pink-50 border-t">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold">Women's Health</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Board-certified OB-GYN specialists providing comprehensive women's healthcare, advanced surgical procedures, and personalized care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/about" className="hover:text-primary">About</Link>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <Link href="/locations" className="hover:text-primary">Locations</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </div>
          </div>

          {/* Maryvale Office */}
          <div className="space-y-4">
            <h3 className="font-semibold text-black">Maryvale office</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">4700 North 51st Avenue, Phoenix, Arizona 85031</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">623-846-7597</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Hours Monday - Friday</p>
                  <p className="text-sm">Open today 08:00 am - 05:00 pm</p>
                </div>
              </div>
              <div className="mt-3">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-112.1697!3d33.5206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="180" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Arrowhead Office */}
          <div className="space-y-4">
            <h3 className="font-semibold text-black">Arrowhead office</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">18699 North 67th Avenue suite 320, Glendale, AZ, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">623-846-7597</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">Hours Monday - Friday</p>
                  <p className="text-sm">Open today 08:00 am - 05:00 pm</p>
                </div>
              </div>
              <div className="mt-3">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-112.2697!3d33.6206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2s18699%20N%2067th%20Ave%20suite%20320%2C%20Glendale%2C%20AZ!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="180" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright positioned under first 2 sections */}
        <div className="mt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 border-t pt-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Arizona Women's Specialists. All rights reserved.</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}