import Link from "next/link"
import { Heart, Phone, MapPin, Clock, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
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
              <Link href="/services" className="hover:text-primary">Services</Link>
              <Link href="/team" className="hover:text-primary">Our Providers</Link>
              <Link href="/locations" className="hover:text-primary">Locations</Link>
              <Link href="/about" className="hover:text-primary">About Us</Link>
              <Link href="/patient-portal" className="hover:text-primary">Patient Portal</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-muted-foreground">Obstetrics & Maternal Care</span>
              <span className="text-muted-foreground">Gynecological Surgery</span>
              <span className="text-muted-foreground">Fertility Treatments</span>
              <span className="text-muted-foreground">Hormone Therapy</span>
              <span className="text-muted-foreground">Preventive Screenings</span>
              <span className="text-muted-foreground">Aesthetic Services</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@womenshealth.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Women's Health Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}