"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/flogo image.png" 
              alt="Free Pregnancy Test Logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="font-serif text-xl font-bold text-[#ee2b74]">Free Pregnancy Test</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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
            <Link href="/#cash-pay" className="text-base font-bold text-black hover:text-[#ee2b74] transition-colors">
              Cash Pay
            </Link>
          </div>

          <Button asChild className="hidden md:block bg-[#ee2b74] hover:bg-[#d91f63] text-white">
            <Link href="https://healow.com/apps/practice/hetal-c-shah-md-6710?v=2&locale=en" target="_blank" rel="noopener noreferrer">Schedule Appointment</Link>
          </Button>

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
          <div className="md:hidden bg-white border-t py-4 shadow-lg">
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
              <Link href="/#cash-pay" className="text-sm font-medium text-black hover:text-primary">
                Cash Pay
              </Link>
              <Button asChild className="bg-[#ee2b74] hover:bg-[#d91f63] text-white w-fit">
                <Link href="https://healow.com/apps/practice/hetal-c-shah-md-6710?v=2&locale=en" target="_blank" rel="noopener noreferrer">Schedule Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}