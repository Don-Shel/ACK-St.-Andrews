"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Clock, MapPin, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    title: "Easter Sunday Celebration",
    date: "March 31, 2024",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for a special Easter service celebrating the resurrection of Christ.",
    image: "/church1.jpg",
    tags: ["Worship", "Communion", "Special Service"]
  },
  {
    id: 2,
    title: "Youth Conference 2024",
    date: "April 15, 2024",
    time: "9:00 AM",
    location: "Church Hall",
    description: "A dynamic gathering for young people to grow in faith and fellowship.",
    image: "/church1.jpg",
    tags: ["Youth", "Conference", "Workshop"]
  },
{
    id: 3,
    title: "Church Choir Volume 2 Production",
    date: "April 20, 2024",
    time: "2:00 PM",
    location: "Recording Studio",
    description: "Join our award-winning choir for the recording of their second album of worship songs.",
    image: "/church1.jpg",
    tags: ["Music", "Choir", "Recording"]
},
{
    id: 4,
    title: "Prayer & Fasting Week",
    date: "May 1-7, 2024",
    time: "6:00 AM",
    location: "Main Sanctuary",
    description: "A week of spiritual renewal through corporate prayer and fasting.",
    image: "/church1.jpg",
    tags: ["Prayer", "Fasting", "Spiritual Growth"]
},
{
    id: 5,
    title: "Community Outreach",
    date: "May 15, 2024",
    time: "8:00 AM",
    location: "Community Center",
    description: "Serving our local community through various charitable activities and programs.",
    image: "/church1.jpg",
    tags: ["Outreach", "Community", "Service"]
}
]

export function EventsSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="relative z-10"
    >
      <div className="relative overflow-hidden rounded-3xl bg-black/5 backdrop-blur-xl border border-white/10">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {events.map((event) => (
            <div 
              key={event.id}
              className="w-full flex-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-secondary">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-secondary">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-black-300 mb-8">
                    {event.description}
                  </p>

                  <Button className="self-start bg-primary hover:bg-primary/90 rounded-full">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
        >
        
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeSlide ? "w-6 bg-primary" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}