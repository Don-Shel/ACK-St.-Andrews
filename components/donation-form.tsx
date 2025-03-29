"use client"

import { useState } from "react"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart } from "lucide-react"
import { toast } from "sonner"

export default function DonationForm() {
  const [amount, setAmount] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  })

  const presetAmounts = ["10", "25", "50", "100"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: Date.now().toString(),
    amount: Number(amount),
    currency: 'KES',
    payment_options: 'card,mpesa,mobilemoney',
    customer: {
      email: `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@example.com`,
      phone_number: formData.phoneNumber,
      name: `${formData.firstName} ${formData.lastName}`,
    },
    customizations: {
      title: 'ACK St. Andrews Donation',
      description: 'Donation to support our ministry',
      logo: 'https://your-church-logo-url.png',
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      handleFlutterPayment({
        callback: (response) => {
          if (response.status === "successful") {
            setStatus("success")
            toast.success("Thank you for your donation!")
            closePaymentModal()
          } else {
            setStatus("error")
            toast.error("Payment failed. Please try again.")
          }
        },
        onClose: () => {
          setStatus("idle")
        },
      })
    } catch (error) {
      setStatus("error")
      toast.error("Something went wrong. Please try again.")
      console.error("Payment error:", error)
    }
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
              <label className="block text-sm font-medium mb-2">Select Amount (KSH)</label>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {presetAmounts.map((preset) => (
                  <Button
                    key={preset}
                    type="button"
                    variant={amount === preset ? "default" : "outline"}
                    className={amount === preset ? "bg-primary hover:bg-primary/90" : ""}
                    onClick={() => setAmount(preset)}
                  >
                    KSH {preset}
                  </Button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">KSH</span>
                <Input
                  type="number"
                  placeholder="Other amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-12"
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
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 254700000000"
                  required
                />
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

