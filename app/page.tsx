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
              className="w-full h-full object-cover object-center sm:object-left"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32 lg:px-8 lg:py-48">
            <div className="max-w-2xl">
              <div className="mb-8">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wide leading-tight">
                  ENRICH YOUR PREGNANCY CARE AT<br />FREE PREGNANCY TEST
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Achieve optimal care with personalized attention..
                </p>
                <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 font-medium">
                  Walk in SAME DAY APPOINTMENTS
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="https://healow.com/apps/practice/hetal-c-shah-md-6710?v=2&locale=en" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white/80 backdrop-blur-sm border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 sm:px-12 py-3 text-sm sm:text-base font-bold rounded-full transition-all shadow-lg w-full sm:w-fit">
                    BOOK YOUR APPOINTMENT
                  </Button>
                </Link>
                <Link href="/#cash-pay">
                  <Button className="bg-[#ee2b74] hover:bg-[#d91f63] text-white px-8 sm:px-12 py-3 text-sm sm:text-base font-bold rounded-full transition-all shadow-lg w-full sm:w-fit">
                    CASH PAY
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Cards Section */}
          <div className="absolute bottom-[-100px] left-0 right-0 z-20">
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
                    <p className="text-base leading-relaxed">Everything you need for your ongoing care, all in one place.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with 3 Cards */}
        <section id="about" className="pt-32 pb-16 lg:pt-32 lg:pb-24">
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

        {/* Cash Pay Section */}
        <section id="cash-pay" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Cash Pay Price List
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Free Pregnancy Test office offer lowest prices for CASH PAY patients.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* First Card - Free Services & Basic Visits */}
              <Card className="p-8 border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-rose-100 hover:shadow-xl transition-all">
                <CardContent className="space-y-6 p-0">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-bold text-pink-800 mb-2">
                      FREE PREGNANCY TEST
                    </h3>
                    <p className="text-pink-700 font-medium mb-6">Walk in free pregnancy test and free first OB ultrasound</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white/70 p-3 rounded-lg shadow-sm">
                        <span className="text-pink-700 font-medium">Provider visit - Established Patient</span>
                        <span className="text-pink-800 font-bold text-xl">$75</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/70 p-3 rounded-lg shadow-sm">
                        <span className="text-pink-700 font-medium">Provider visit - New Patient</span>
                        <span className="text-pink-800 font-bold text-xl">$100</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/70 p-3 rounded-lg shadow-sm">
                        <span className="text-pink-700 font-medium">Ultrasounds</span>
                        <span className="text-pink-800 font-bold text-xl">$75</span>
                      </div>
                      <p className="text-pink-600 text-sm text-center">
                        OB and GYN ultrasounds
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Card - Family Planning Services */}
              <Card className="p-8 border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-rose-100 hover:shadow-xl transition-all">
                <CardContent className="space-y-6 p-0">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-bold text-pink-800 mb-6">
                      FAMILY PLANNING SERVICES
                    </h3>
                    <p className="text-pink-700 font-medium mb-4">Contraceptive management</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-pink-700 font-bold text-lg">Depo shot</span>
                        <span className="text-pink-800 font-bold text-xl">$50</span>
                      </div>
                      <p className="text-pink-600 text-sm">Injection</p>
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-pink-700 font-bold text-lg">IUD Insertion</span>
                        <span className="text-pink-800 font-bold text-xl">$150</span>
                      </div>
                      <p className="text-pink-600 text-sm">Mirena, Paragard, Liletta, Kyla .. etc</p>
                    </div>
                    
                    <div className="bg-white/70 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-pink-700 font-bold text-lg">IUD Removal</span>
                        <span className="text-pink-800 font-bold text-xl">$100</span>
                      </div>
                      <p className="text-pink-600 text-sm">All IUD's, Nexplanon etc</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Link href="https://patient.klara.com/#/widget/publicScheduling/scheduling/YmM1NTkzMzg4Y2U2MTg5YjMxZDcwNmMyMDllNTJmNzFmMmM3ZmMwYTQyMDFkM2FjNDFlNjQ1NzM3MGQwCjk3MmEkRnd6WU54ckh1TlZ6VW5zZjNEcU5GZz09" target="_blank" rel="noopener noreferrer">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-bold">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Scrolling Text Section */}
        <section className="py-8 overflow-hidden bg-white">
          <div className="whitespace-nowrap animate-scroll">
            <span className="text-6xl font-bold inline-block px-8" style={{color: '#bbb0a633'}}>
              WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • WOMEN'S HEALTH • 
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
