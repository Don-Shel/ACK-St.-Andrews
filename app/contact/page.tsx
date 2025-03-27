"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Church contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or prayer requests.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-600">Kibabet, ELdoret City, Kenya</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                <p className="text-gray-600">+254 700 000000</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                <p className="text-gray-600">info@ackstandrews.org</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Service Hours</h3>
                <p className="text-gray-600">Sunday: 8:00 AM - 13:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or need more information? Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <Card>
                <CardContent className="pt-6">
                  {formStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-4">Thank you for reaching out. We'll get back to you soon.</p>
                      <Button onClick={() => setFormStatus("idle")} className="bg-primary hover:bg-primary/90">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input id="firstName" name="firstName" required disabled={formStatus === "submitting"} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input id="lastName" name="lastName" required disabled={formStatus === "submitting"} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" required disabled={formStatus === "submitting"} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input id="phone" name="phone" type="tel" disabled={formStatus === "submitting"} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" name="subject" required disabled={formStatus === "submitting"} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <p className="text-gray-600 mb-8">
                We are located in Kibabet, Ngeria Prison, Eldoret, Uasin Gishu County. Join us for worship and fellowship.
              </p>
              <div className="h-[400px] rounded-lg overflow-hidden">
                {/* This would be replaced with an actual map component */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Map would be displayed here</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Service Times</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Sunday School Service</p>
                      <p className="text-gray-600">8:00 AM - 10:00 AM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Main Service</p>
                      <p className="text-gray-600">10:30 AM - 13:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Bible Study</p>
                      <p className="text-gray-600">Wednesday, 5:30 PM - 7:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

