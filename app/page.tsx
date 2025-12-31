import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar, Users, MapPin, Baby, Stethoscope, Activity, Shield, Clock, Phone, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0 z-0">
            <img
              src="/w2-image.png"
              alt="Healthcare professional"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-32 lg:px-8 lg:py-40">
            <div className="max-w-2xl">
              <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                  ENRICH YOUR PREGNANCY CARE AT<br />ARIZONA WOMEN SPECIALISTS
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Achieve optimal care with personalized attention..
                </p>
                <p className="text-base text-gray-500 mb-8 font-medium">
                  Walk in SAME DAY APPOINTMENTS
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button className="bg-white/80 backdrop-blur-sm border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-12 py-3 text-base font-bold rounded-full transition-all shadow-lg w-fit">
                  BOOK YOUR APPOINTMENT
                </Button>
                <Button className="bg-[#ee2b74] hover:bg-[#d91f63] text-white px-12 py-3 text-base font-bold rounded-full transition-all shadow-lg w-fit">
                  CASH PAY
                </Button>
              </div>
            </div>
          </div>
          
          {/* Cards Section */}
          <div className="absolute bottom-[-50px] left-0 right-0 z-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-teal-400 to-teal-600 text-white p-12 rounded-lg shadow-xl hover:shadow-2xl transition-all min-h-[200px]">
                  <CardContent className="text-center p-0">
                    <h3 className="text-2xl font-bold mb-6">New Patients</h3>
                    <p className="text-base leading-relaxed">Welcome! Let us help make your first appointment successful.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-12 rounded-lg shadow-xl hover:shadow-2xl transition-all min-h-[200px]">
                  <CardContent className="text-center p-0">
                    <h3 className="text-2xl font-bold mb-6">Newly Pregnant</h3>
                    <p className="text-base leading-relaxed">Congrats! Here's the info you'll need to get started with OB visits.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-12 rounded-lg shadow-xl hover:shadow-2xl transition-all min-h-[200px]">
                  <CardContent className="text-center p-0">
                    <h3 className="text-2xl font-bold mb-6">Current Patients</h3>
                    <p className="text-base leading-relaxed">Log in to your MyChart account for everything you need.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with 3 Cards */}
        <section id="about" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                About Free Pregnancy Test
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center p-8 border-border hover:shadow-lg transition-all bg-pink-100">
                <CardContent className="space-y-6 p-0">
                  <div className="mx-auto w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      FREE Pregnancy Test
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Free Pregnancy Test offers
                    </p>
                    <p className="text-muted-foreground mb-2">
                      FREE Pregnancy test .......
                    </p>
                    <p className="text-muted-foreground mb-4">
                      No appointment needed......
                    </p>
                    <p className="text-gray-800 font-medium">
                      JUST WALK IN.... :-)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 border-border hover:shadow-lg transition-all bg-pink-100">
                <CardContent className="space-y-6 p-0">
                  <div className="mx-auto w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
                    <Target className="w-16 h-16 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Free Pregnancy Test has been proudly serving the Phoenix Valley area for over two decades at offices in Glendale and Phoenix, offer quality Gynecology and Maternity care to ensure every patient receives the ABCs: the
                    </p>
                    <p className="text-gray-800 font-medium italic mt-2">
                      "Absolute Best Care"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 border-border hover:shadow-lg transition-all bg-pink-100">
                <CardContent className="space-y-6 p-0">
                  <div className="mx-auto w-32 h-32 rounded-full bg-pink-100 flex items-center justify-center">
                    <Users className="w-16 h-16 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Our Team
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Free Pregnancy Test team also includes amazing ultrasound technicians who have a combined experience of more than 40 years. When performing ultrasounds, giving them the ability to send ultrasound pictures to a patient's phone through text messaging.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Scrolling Text Section */}
        <section className="py-8 overflow-hidden" style={{backgroundColor: 'rgba(255, 240, 243, 0.8)'}}>
          <div className="whitespace-nowrap animate-scroll">
            <span className="text-6xl font-bold inline-block px-8" style={{color: '#fffof3cc'}}>
              WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • 
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
