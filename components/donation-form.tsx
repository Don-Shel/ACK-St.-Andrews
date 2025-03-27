"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart } from "lucide-react"

export default function DonationForm() {
  const [amount, setAmount] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const presetAmounts = ["10", "25", "50", "100"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <Card className="overflow-hidden">
      <div className="bg-primary p-6 text-white text-center">
        <Heart className="h-12 w-12 mx-auto mb-3" />
        <h3 className="text-2xl font-bold">Support Our Ministry</h3>
        <p className="mt-2">Your generosity helps us spread God's love</p>
      </div>
      <CardContent className="p-6">
        {status === "success" ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Thank You for Your Donation!</h4>
            <p className="text-gray-600 mb-6">Your generosity helps us continue our mission and ministry.</p>
            <Button onClick={() => setStatus("idle")} className="bg-primary hover:bg-primary/90">
              Make Another Donation
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Amount</label>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {presetAmounts.map((preset) => (
                  <Button
                    key={preset}
                    type="button"
                    variant={amount === preset ? "default" : "outline"}
                    className={amount === preset ? "bg-primary hover:bg-primary/90" : ""}
                    onClick={() => setAmount(preset)}
                  >
                    Ksh.{preset}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Ksh.</span>
                <Input
                  type="number"
                  placeholder="Other amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 "
                  min="1"
                  step="1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input id="number" type="phone number" required />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!amount || status === "submitting"}
            >
              {status === "submitting" ? "Processing..." : "Donate Now"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

