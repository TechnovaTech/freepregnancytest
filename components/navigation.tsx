"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-[#ee2b74]" />
            <span className="font-serif text-xl font-bold">Women's Health</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-base font-bold hover:text-[#ee2b74] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-base font-bold hover:text-[#ee2b74] transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-base font-bold hover:text-[#ee2b74] transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-base font-bold hover:text-[#ee2b74] transition-colors">
              Blog
            </Link>
            <Link href="/cash-pay" className="text-base font-bold hover:text-[#ee2b74] transition-colors">
              Cash Pay
            </Link>
            <Button asChild className="bg-[#ee2b74] hover:bg-[#d91f63] text-white">
              <Link href="/#contact">Schedule Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-primary">
                Services
              </Link>
              <Link href="/#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary">
                Blog
              </Link>
              <Link href="/cash-pay" className="text-sm font-medium hover:text-primary">
                Cash Pay
              </Link>
              <Button asChild className="w-fit">
                <Link href="/#contact">Schedule Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}