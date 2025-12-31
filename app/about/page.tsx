import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Award, Users, Shield, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" />
                About Our Clinic
              </div>
              <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Dedicated to Your Health & Wellbeing
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
                We believe every woman deserves compassionate, personalized healthcare in a warm and trusted
                environment.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Our Mission</h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    At Women's Specialty Healthcare, we are committed to providing exceptional, patient-centered care
                    that addresses the unique needs of women at every stage of life.
                  </p>
                  <p>
                    Our experienced team of board-certified OB-GYN physicians and compassionate staff work together to
                    create a supportive environment where you feel heard, respected, and empowered to make informed
                    decisions about your health.
                  </p>
                  <p>
                    From pregnancy care and routine wellness exams to advanced gynecological treatments, we combine
                    medical excellence with genuine compassion to deliver the highest standard of women's healthcare.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src="/female-doctor-consulting-with-pregnant-woman-in.jpg"
                    alt="Doctor consulting with patient"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                These principles guide everything we do and shape the care we provide to every patient.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Compassionate Care</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    We treat every patient with kindness, empathy, and genuine concern for their wellbeing and comfort.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Clinical Excellence</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Our team maintains the highest standards of medical expertise and stays current with the latest
                    advances in women's health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Patient-Centered</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Your needs, preferences, and goals are at the center of every decision we make about your care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Trust & Privacy</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    We maintain the highest level of confidentiality and create a safe space for open, honest
                    conversations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Accessibility</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    With multiple locations and flexible scheduling, we make quality healthcare convenient and
                    accessible.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Comprehensive Care</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    From preventive care to specialized treatments, we provide complete healthcare services under one
                    roof.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src="/modern-medical-clinic-waiting-room-with-comfor.jpg"
                    alt="Modern clinic interior"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 space-y-6 lg:order-2">
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Why Choose Us</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Board-Certified Physicians</h4>
                      <p className="text-muted-foreground">
                        Our experienced OB-GYN specialists bring decades of combined expertise.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">State-of-the-Art Facilities</h4>
                      <p className="text-muted-foreground">
                        Modern equipment and comfortable environments designed for your comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Same-Day Appointments</h4>
                      <p className="text-muted-foreground">
                        Flexible scheduling with same-day availability when you need care most.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Comprehensive Services</h4>
                      <p className="text-muted-foreground">
                        Complete OB-GYN care from preventive screenings to specialized treatments.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">Compassionate Team</h4>
                      <p className="text-muted-foreground">
                        Caring staff who make your comfort and wellbeing their top priority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <div className="mx-auto max-w-2xl space-y-6">
              <h2 className="text-balance font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Experience Healthcare That Puts You First
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Schedule an appointment today and discover the difference personalized, compassionate care can make.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/#contact">Book Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
