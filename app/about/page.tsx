"use client"

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, GraduationCap, Church } from "lucide-react"

// Add this events data outside the component
const weeklyEvents = {
  Sunday: [
    {
      time: "8:00 AM - 10:00 AM",
      title: "Sunday School Service",
      location: "Education Building",
      description: "Age-appropriate Bible lessons for children",
      venue: "Main Sanctuary - Ground Floor"
    },
    {
      time: "10:00 AM - 13:00 PM",
      title: "Main Sunday Service",
      location: "Main Sanctuary",
      description: "Worship, prayer, and Biblical teaching for all",
      venue: "Main Sanctuary - First Floor"
    },
    {
      time: "14:30 PM - 18:00 PM",
      title: "Youth Service",
      location: "Fellowship Hall",
      description: "Dynamic worship and relevant messages for young people",
      venue: "Youth Hall - Second Floor"
    }
  ],
  Monday: [
    {
      time: "17:00 PM - 18:30 PM",
      title: "Evening Prayer",
      location: "Chapel",
      description: "Daily evening prayers and Bible study",
      venue: "Chapel - Ground Floor"
    }
  ],
  Tuesday: [
    {
      time: "16:00 PM - 18:00 PM",
      title: "Women's Fellowship",
      location: "Fellowship Hall",
      description: "Bible study and prayer for women",
      venue: "Fellowship Hall - Ground Floor"
    }
  ],
  Wednesday: [
    {
      time: "17:00 PM - 19:00 PM",
      title: "Midweek Service",
      location: "Main Sanctuary",
      description: "Midweek prayers and Bible teaching",
      venue: "Main Sanctuary - Ground Floor"
    }
  ],
  Thursday: [
    {
      time: "16:00 PM - 18:00 PM",
      title: "Choir Practice",
      location: "Choir Room",
      description: "Weekly choir rehearsal",
      venue: "Choir Room - First Floor"
    }
  ],
  Friday: [
    {
      time: "16:00 PM - 18:00 PM",
      title: "Youth Bible Study",
      location: "Youth Room",
      description: "Bible study for young adults",
      venue: "Youth Room - Second Floor"
    }
  ],
  Saturday: [
    {
      time: "09:00 AM - 11:00 AM",
      title: "Children's Ministry",
      location: "Education Building",
      description: "Activities for children",
      venue: "Education Building - Ground Floor"
    }
  ]
}

export default function AboutPage() {
  const [selectedDay, setSelectedDay] = useState<keyof typeof weeklyEvents>("Sunday")

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Welcome to ACK St. Andrews Kibabet
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A place to grow in faith, connect with others, and serve the community
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Our Journey Through Time
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Celebrating our growth and milestones since 2018
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line - Hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent hidden md:block" />

              {[
                {
                  period: "2018-2022",
                  title: "The Beginning",
                  description: "ACK St. Andrews Kibabet was established in 2018 as a small mission outpost. The first services were held under a small church, with a dedicated group of faithful believers.",
                  milestones: ["First church service held", "Initial congregation of 50 members", "Foundation stone laid"],
                  image: "/church-old.jpg"
                },
                {
                  period: "2022-2024",
                  title: "Growth and Development",
                  description: "The church experienced significant growth, leading to the construction of a larger building. Various ministries were established during this period.",
                  milestones: ["New building construction", "Sunday School established", "Choir ministry began"],
                  image: "/church-construction.jpg"
                },
                {
                  period: "2023-2024",
                  title: "Expansion and Outreach",
                  description: "A period of significant expansion with daughter churches and community projects initiated.",
                  milestones: ["First daughter church planted", "Primary school established", "Community center opened"],
                  image: "/church-outreach.jpg"
                },
                {
                  period: "2024-Present",
                  title: "Modern Era",
                  description: "Embracing technology and modern worship while maintaining our traditional values.",
                  milestones: ["Live streaming services launched", "Digital giving implemented", "Youth program expanded"],
                  image: "/church-present.jpg"
                }
              ].map((era, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center mb-16 gap-8`}
                >
                  {/* Content Card - Full width on mobile */}
                  <div className="w-full md:w-1/2 px-4 md:px-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        {era.period}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {era.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                        {era.description}
                      </p>
                      <div className="space-y-2">
                        {era.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            <span className="text-sm">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
      
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary shadow-lg items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
      
                  {/* Image Section - Full width on mobile */}
                  <div className="w-full md:w-1/2 px-4 md:px-6 mt-6 md:mt-0">
                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={era.image}
                        alt={era.title}
                        fill
                        className="object-cover transition-transform hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rev. John Kiprotich",
                role: "Vicar",
                bio: "Rev. John has served as our vicar since 2015. He holds a Master of Divinity and is passionate about biblical teaching and community outreach.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Sarah Koech",
                role: "Church Warden",
                bio: "Sarah has been a member of St. Andrews for over 10 years and has served as Church Warden since 2018. She oversees church administration and operations.",
                image: "/leader 1.png?height=400&width=400",
              },
              {
                name: "Mr. Elias Kiptoo",
                role: "Youth Pastor",
                bio: "David leads our vibrant youth ministry, organizing activities, mentorship programs, and Bible studies for teenagers and young adults.",
                image: "/leader 2.png?height=400&width=400",
              },
              {
                name: "Mrs. Grace Langat",
                role: "Women's Ministry Leader",
                bio: "Grace coordinates our women's ministry, organizing Bible studies, prayer meetings, and outreach activities for the women in our church.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mr. Joseph Bett",
                role: "Music Director",
                bio: "Joseph leads our music ministry, coordinating the choir and worship team to enhance our worship experience through music.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Caroline Sang",
                role: "Children's Ministry Coordinator",
                bio: "Caroline oversees our children's ministry, ensuring that our youngest members grow in their faith through age-appropriate activities and lessons.",
                image: "/sundayschool teach.png?height=400&width=400",
              },
            ].map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              Weekly Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Join Us Throughout the Week
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
              We offer various services and activities throughout the week to help you grow in your faith journey
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-8">
              {Object.keys(weeklyEvents).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day as keyof typeof weeklyEvents)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${selectedDay === day
                      ? "bg-primary text-white scale-105 shadow-lg" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {weeklyEvents[selectedDay]?.map((event, index) => (
                <div 
                  key={index}
                  className="p-6 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b last:border-b-0 border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {event.time}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {event.title}
                        </p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {event.location}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {event.description}
                      </p>
                    </div>

                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2 justify-end">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {weeklyEvents[selectedDay]?.length === 0 && (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No events scheduled for this day
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Host an Event?</h2>
             <p className="text-l mb-8 max-w-2xl mx-auto">
                  Our church facilities are available for weddings, conferences, and other community events. Contact us to
                  learn more about hosting your event at ACK St. Andrews Kibabet.
             </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
      </section>
    </>
  )
}

