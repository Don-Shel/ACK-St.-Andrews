"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")

    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all")
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential")
    setIsVisible(false)
  }

  const dismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto p-4 md:p-6 shadow-lg glass-card">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold">Cookie Consent</h3>
          <Button variant="ghost" size="icon" onClick={dismiss} className="h-8 w-8 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
          traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90">
            Accept All
          </Button>
          <Button
            variant="outline"
            onClick={acceptEssential}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Essential Only
          </Button>
          <Button variant="link" asChild className="text-gray-600 dark:text-gray-300">
            <a href="/privacy-policy">Privacy Policy</a>
          </Button>
        </div>
      </Card>
    </div>
  )
}

