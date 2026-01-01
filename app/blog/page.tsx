'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
  }
]

export default function BlogPage() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#fdf2f8'}}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 font-serif text-4xl font-bold text-foreground lg:text-5xl">
                Women's Health Blog
              </h1>
              
              {/* Card below heading */}
              <div className="max-w-sm mx-auto mt-8">
                <Card className="border-border" style={{backgroundColor: '#f7f7f7'}}>
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                    <img
                      src="/b1 image.png"
                      alt="Birth Control"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="text-xs text-muted-foreground">
                      March 20, 2024
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Birth Control
                    </h3>
                    {isExpanded && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        When feeling unsure about starting or growing your family, you may be considering your birth control options. At Arizona Women's Specialists in Glendale and Phoenix, Arizona, Hetal Shah, Kassandra Reil CNM and Traci Aldridge WHNP offer many types of birth control, from the pill to tubal ligation. No matter where you are in your life, the team at Arizona Women's Specialists has a family planning option for you. Schedule your birth control consultation by calling the office most convenient to you or booking an appointment online today.
                      </p>
                    )}
                    <Button 
                      size="sm" 
                      style={{backgroundColor: '#ee2b74', color: 'white'}} 
                      className="hover:bg-primary/90"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? 'Show Less' : 'Continue Reading'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}