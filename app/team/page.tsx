import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Heart, Users } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Dr. Sarah Martinez",
    role: "OB-GYN Specialist",
    image: "/professional-female-doctor-in-medical-coat-smiling.jpg",
    education: "MD, Stanford University School of Medicine",
    certifications: "Board Certified in Obstetrics & Gynecology",
    experience: "15+ years of experience",
    bio: "Dr. Martinez specializes in high-risk pregnancies and minimally invasive gynecological procedures. She is passionate about providing compassionate, evidence-based care to women throughout all stages of life.",
  },
  {
    name: "Dr. Jennifer Chen",
    role: "OB-GYN Specialist",
    image: "/asian-female-doctor-in-medical-coat-professional.jpg",
    education: "MD, Johns Hopkins School of Medicine",
    certifications: "Board Certified in Obstetrics & Gynecology",
    experience: "12+ years of experience",
    bio: "Dr. Chen focuses on adolescent gynecology and family planning. Her warm, patient-centered approach creates a comfortable environment for discussing sensitive health concerns.",
  },
  {
    name: "Dr. Emily Johnson",
    role: "OB-GYN Specialist",
    image: "/blonde-female-doctor-in-medical-coat-smiling-warml.jpg",
    education: "MD, University of California, San Francisco",
    certifications: "Board Certified in Obstetrics & Gynecology",
    experience: "10+ years of experience",
    bio: "Dr. Johnson specializes in prenatal care and reproductive endocrinology. She believes in empowering women through education and personalized treatment plans.",
  },
  {
    name: "Dr. Rachel Williams",
    role: "OB-GYN Specialist",
    image: "/african-american-female-doctor-in-medical-coat-con.jpg",
    education: "MD, Harvard Medical School",
    certifications: "Board Certified in Obstetrics & Gynecology",
    experience: "18+ years of experience",
    bio: "Dr. Williams has extensive experience in menopause management and hormone therapy. Her holistic approach addresses both physical and emotional aspects of women's health.",
  },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Users className="h-4 w-4" />
                Our Team
              </div>
              <h1 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Meet Our Experienced OB-GYN Specialists
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Our board-certified physicians bring decades of combined expertise and a shared commitment to providing
                exceptional, compassionate care.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">{member.name}</h2>
                      <p className="text-xl font-medium text-primary">{member.role}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Education</p>
                          <p className="text-muted-foreground">{member.education}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Certifications</p>
                          <p className="text-muted-foreground">{member.certifications}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Heart className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Experience</p>
                          <p className="text-muted-foreground">{member.experience}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Team Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Why Choose Our Medical Team
              </h2>
              <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
                Our physicians are dedicated to providing the highest quality care with compassion and expertise.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Board Certified</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    All our physicians are board certified in Obstetrics & Gynecology
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Top Medical Schools</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Educated at prestigious institutions across the country
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Compassionate Care</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Patient-centered approach with empathy and understanding
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="space-y-4 p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">Extensive Experience</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Decades of combined experience in women's healthcare
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
                Ready to Meet Your Healthcare Team?
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Schedule an appointment with one of our experienced physicians today.
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Book Your Appointment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
