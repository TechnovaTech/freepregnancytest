import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Menopause: A Complete Guide for Women",
    excerpt: "Learn about the stages of menopause, common symptoms, and effective treatment options to help you navigate this natural transition with confidence.",
    category: "Menopause",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/professional-female-doctor-in-medical-coat-smiling.jpg"
  },
  {
    id: 2,
    title: "Pregnancy Nutrition: Essential Foods for a Healthy Baby",
    excerpt: "Discover the key nutrients and foods that support your baby's development during pregnancy, plus meal planning tips for expectant mothers.",
    category: "Pregnancy",
    author: "Dr. Maria Rodriguez",
    date: "March 12, 2024",
    readTime: "6 min read",
    image: "/pregnant-woman-having-ultrasound-scan-with-doc.jpg"
  },
  {
    id: 3,
    title: "The Importance of Regular Gynecological Screenings",
    excerpt: "Why routine checkups are crucial for women's health and what to expect during your annual gynecological examination.",
    category: "Preventive Care",
    author: "Dr. Jennifer Lee",
    date: "March 10, 2024",
    readTime: "5 min read",
    image: "/female-doctor-consulting-with-patient-in-moder.jpg"
  },
  {
    id: 4,
    title: "Fertility After 35: What You Need to Know",
    excerpt: "Understanding age-related fertility changes and modern treatment options for women planning to conceive after 35.",
    category: "Fertility",
    author: "Dr. Amanda Chen",
    date: "March 8, 2024",
    readTime: "7 min read",
    image: "/asian-female-doctor-in-medical-coat-professional.jpg"
  },
  {
    id: 5,
    title: "Managing PCOS: Lifestyle Changes That Make a Difference",
    excerpt: "Practical strategies for managing Polycystic Ovary Syndrome through diet, exercise, and medical treatment options.",
    category: "Hormonal Health",
    author: "Dr. Lisa Thompson",
    date: "March 5, 2024",
    readTime: "9 min read",
    image: "/blonde-female-doctor-in-medical-coat-smiling-warml.jpg"
  },
  {
    id: 6,
    title: "Postpartum Recovery: Your Guide to Healing",
    excerpt: "Essential information about physical and emotional recovery after childbirth, including when to seek medical attention.",
    category: "Postpartum",
    author: "Dr. Rachel Williams",
    date: "March 3, 2024",
    readTime: "10 min read",
    image: "/african-american-female-doctor-in-medical-coat-con.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Women's Health Blog
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Expert insights, health tips, and the latest information on women's healthcare from our board-certified specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-border hover:shadow-lg transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <Badge className="w-fit">{post.category}</Badge>
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                    >
                      Read More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}