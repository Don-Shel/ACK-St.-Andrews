"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  return (
    <div className="bg-highlight p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-6">Stay updated with our latest sermons, events, and announcements.</p>

      {status === "success" ? (
        <div className="text-center py-4">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-lg font-medium">Thank you for subscribing!</p>
          <p className="text-gray-600 mt-2">You'll receive our updates soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
            disabled={status === "submitting"}
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={status === "submitting"}>
            {status === "submitting" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      )}
    </div>
  )
}

