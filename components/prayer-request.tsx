"use client"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, HandIcon as PrayingHands } from "lucide-react"
import { toast } from "sonner"

export default function PrayerRequest() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    prayerRequest: "",
    isPrivate: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      // Replace these with your actual EmailJS credentials
      const emailParams = {
        service_id: "service_1mcg2zb",
        template_id: "template_2ujvk4d",
        user_id: "-7puQ9w9wja02eQTu",
        template_params: {
          name: formData.name,
          phone: formData.phone,
          prayer_request: formData.prayerRequest,
          is_private: formData.isPrivate,
          to_email: "sheldonletting04gmail.com" // Replace with admin email
        }
      }

      await emailjs.send(
        emailParams.service_id,
        emailParams.template_id,
        emailParams.template_params,
        emailParams.user_id
      )

      setStatus("success")
      toast.success("Prayer request sent successfully!")
      setFormData({
        name: "",
        phone: "",
        prayerRequest: "",
        isPrivate: false
      })
    } catch (error) {
      setStatus("error")
      toast.error("Failed to send prayer request. Please try again.")
      console.error("Email error:", error)
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="bg-accent p-6 text-white text-center">
        <PrayingHands className="h-12 w-12 mx-auto mb-3" />
        <h3 className="text-2xl font-bold">Submit a Prayer Request</h3>
        <p className="mt-2">Our prayer team will pray for your needs</p>
      </div>
      <CardContent className="p-6">
        {status === "success" ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Prayer Request Received</h4>
            <p className="text-gray-600 mb-6">Our prayer team will be praying for your request. May God bless you.</p>
            <Button onClick={() => setStatus("idle")} className="bg-accent hover:bg-accent/90">
              Submit Another Request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div>
              <label htmlFor="prayerRequest" className="block text-sm font-medium mb-1">
                Prayer Request
              </label>
              <Textarea 
                id="prayerRequest"
                name="prayerRequest"
                rows={5}
                value={formData.prayerRequest}
                onChange={handleChange}
                placeholder="Share your prayer request here..."
                required 
              />
            </div>

            <div className="flex items-start">
              <input
                id="isPrivate"
                name="isPrivate"
                type="checkbox"
                checked={formData.isPrivate}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent mt-1"
              />
              <label htmlFor="isPrivate" className="ml-2 block text-sm text-gray-600">
                Keep my request private (only visible to the prayer team)
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90" 
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit Prayer Request"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

