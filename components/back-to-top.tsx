"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      try {
        // Check if window is defined (client-side only)
        if (typeof window !== 'undefined') {
          setIsVisible(window.scrollY > 300)
        }
      } catch (error) {
        console.error('Error in scroll handler:', error)
      }
    }

    // Initial check
    toggleVisibility()

    // Add event listener only on client side
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", toggleVisibility, { passive: true })
      return () => window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0)
    }
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 rounded-full bg-primary/90 
        hover:bg-primary text-white shadow-lg h-12 w-12 
        transition-all duration-300 ease-in-out"
      aria-label="Scroll back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  )
}

