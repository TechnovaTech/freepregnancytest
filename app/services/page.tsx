import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, Heart, Activity, Shield, Stethoscope, CheckCircle2, Clock, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Stethoscope className="h-4 w-4" />
                Our Services
              </div>
              <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Comprehensive Women's Healthcare Services
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
                From routine wellness exams to specialized treatments, we provide complete OB-GYN care tailored to every
                stage of your life.
              </p>
            </div>
          </div>
        </section>

        {/* Obstetrics & Pregnancy Care */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Baby className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                  Obstetrics & Pregnancy Care
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Comprehensive prenatal care, delivery support, and postpartum services designed to ensure a healthy
                  pregnancy and smooth transition into motherhood.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Free walk-in pregnancy testing with immediate results</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Complete prenatal care from conception through delivery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">High-risk pregnancy management and monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Same-day ultrasound services with advanced imaging</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Postpartum care and breastfeeding support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Genetic counseling and prenatal screening</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src="/pregnant-woman-having-ultrasound-scan-with-doc.jpg"
                    alt="Pregnancy ultrasound"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gynecology Services */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src="/female-doctor-consulting-with-patient-in-moder.jpg"
                    alt="Gynecology consultation"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 space-y-6 lg:order-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                  Gynecology & Women's Health
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Expert care for all aspects of women's health, from annual wellness exams to treatment of
                  gynecological conditions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Annual wellness exams and pelvic exams</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Treatment for irregular periods and menstrual disorders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Menopause management and hormone therapy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">PCOS and endometriosis treatment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Pelvic pain evaluation and management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">Minimally invasive surgical procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Additional Specialized Services
              </h2>
              <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                We offer a full range of specialized services to support your health and wellness throughout every stage
                of life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Ultrasound */}
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Activity className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Ultrasound Imaging</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      2D, 3D, and 4D ultrasound
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Prenatal ultrasound screening
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Diagnostic pelvic ultrasound
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Same-day imaging available
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Birth Control */}
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Birth Control & Family Planning</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Contraception counseling
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      IUD insertion and removal
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Birth control pills and patches
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Implants and injections
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preventive Care */}
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Stethoscope className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Preventive Screenings</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Pap smears and HPV testing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Breast cancer screening
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      STD testing and treatment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Bone density screening
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Adolescent Care */}
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Adolescent Gynecology</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      First gynecology visit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Menstrual irregularities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      HPV vaccination
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Reproductive health education
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Infertility */}
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Infertility Consultation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Fertility evaluation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Ovulation monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Fertility counseling
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Referral coordination
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Urgent Care */}
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Clock className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Same-Day Urgent Care</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Urgent gynecological issues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Pregnancy concerns
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Infection treatment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Walk-ins accepted
                    </li>
                  </ul>
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
                Ready to Schedule Your Appointment?
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Our compassionate team is here to provide the personalized care you deserve. Contact us today.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/locations">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#contact">Book Online</Link>
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
