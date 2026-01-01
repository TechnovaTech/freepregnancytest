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
        <section className="py-16 lg:py-24" style={{backgroundColor: '#fdf2f8'}}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Stethoscope className="h-4 w-4" />
                Our Services
              </div>
              <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Free Pregnancy Test Services
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Top Obstetrics and gynecology, Best gynecologist
              </p>
            </div>
          </div>
        </section>



        {/* Additional Services Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Obstetrics */}
              <Card className="border-border" style={{backgroundColor: '#f7f7f7'}}>
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Baby className="h-7 w-7" style={{color: '#ee2b74'}} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Obstetrics</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Are you pregnant or trying to get pregnant? Then you need obstetrics and gynecology care with Top OB-GYN to manage your health before, during, and after your pregnancy. Arizona Women Specialists provide comprehensive obstetrics care at offices in Glendale and Phoenix, Arizona.
                  </p>
                  <div className="mt-4">
                    <Link href="/">
                      <Button size="sm" style={{backgroundColor: '#ee2b74', color: 'white'}} className="hover:bg-primary/90">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Gynecology */}
              <Card className="border-border" style={{backgroundColor: '#f7f7f7'}}>
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-7 w-7" style={{color: '#ee2b74'}} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Gynecology</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Women's life stages center around their reproductive organs. Gynecology is an area of medicine that specializes in women's reproductive health. At Arizona Women Specialists provide comprehensive gynecology services with best gynecologist in Phoenix valley and Glendale, from well-woman exams to birth control to managing gynecological conditions like heavy periods. For patient-centered gynecology care, call the office nearest you or schedule an appointment online today with best OB-GYN.
                  </p>
                  <div className="mt-4">
                    <Link href="/">
                      <Button size="sm" variant="outline" style={{borderColor: '#ee2b74', color: '#ee2b74'}} className="hover:bg-primary/10">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Ultrasounds */}
              <Card className="border-border" style={{backgroundColor: '#f7f7f7'}}>
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Activity className="h-7 w-7" style={{color: '#ee2b74'}} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Ultrasounds</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ultrasound is a diagnostic imaging tool that uses sound waves to create images of your internal organs. At Arizona Women's Specialists in Glendale and Phoenix, Arizona, BEST OB-GYN (obstetrics and gynecology) practice has one of the most advanced ultrasound machines in assistance with gynaecologist, allowing them to get clear images. Call or schedule your ultrasound appointment online today.
                  </p>
                </CardContent>
              </Card>

              {/* Birth Control */}
              <Card className="border-border" style={{backgroundColor: '#f7f7f7'}}>
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Shield className="h-7 w-7" style={{color: '#ee2b74'}} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Birth Control</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    When feeling unsure about starting or growing your family, you may be considering your birth control options and offer many types of birth control, from the pill to tubal ligation. No matter where you are in your life, the team at Arizona Women's Specialists has a family planning option for you.
                  </p>
                </CardContent>
              </Card>

              {/* Pap Smears */}
              <Card className="border-border" style={{backgroundColor: '#f7f7f7'}}>
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Stethoscope className="h-7 w-7" style={{color: '#ee2b74'}} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Pap Smears</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Not too long ago, women needed Pap smears every year to screen for cervical cancer. But with advances in medical knowledge, you no longer need an annual Pap smear with top gynecologist. However, if it's been a while since your last Pap smear or you have concerns about cervical cancer. Schedule your Pap smear by calling the office in Glendale or Phoenix, Arizona, or booking an appointment online today.
                  </p>
                </CardContent>
              </Card>


            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}
