"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Maximize2, Info } from "lucide-react"

interface TourLocation {
  id: string
  name: string
  description: string
  image: string
  hotspots?: {
    x: number
    y: number
    tooltip: string
    linkedLocationId?: string
  }[]
}

const tourLocations: TourLocation[] = [
  {
    id: "sanctuary",
    name: "Main Sanctuary",
    description: "Our beautiful sanctuary where we gather for worship every Sunday.",
    image: "/church1.jpg",
    hotspots: [
      { x: 70, y: 50, tooltip: "Altar", linkedLocationId: "altar" },
      { x: 30, y: 60, tooltip: "Choir Area", linkedLocationId: "choir" },
    ],
  },
  {
    id: "altar",
    name: "Altar",
    description: "The altar where communion is served and the Word is preached.",
    image: "/placeholder.svg?height=600&width=800",
    hotspots: [{ x: 50, y: 80, tooltip: "Back to Sanctuary", linkedLocationId: "sanctuary" }],
  },
  {
    id: "choir",
    name: "Choir Area",
    description: "Where our talented choir leads the congregation in worship.",
    image: "/placeholder.svg?height=600&width=800",
    hotspots: [{ x: 50, y: 80, tooltip: "Back to Sanctuary", linkedLocationId: "sanctuary" }],
  },
  {
    id: "fellowship",
    name: "Fellowship Hall",
    description: "Where we gather for community events, meals, and activities.",
    image: "/placeholder.svg?height=600&width=800",
    hotspots: [
      { x: 20, y: 50, tooltip: "Kitchen", linkedLocationId: "kitchen" },
      { x: 80, y: 50, tooltip: "Exit to Grounds", linkedLocationId: "grounds" },
    ],
  },
  {
    id: "grounds",
    name: "Church Grounds",
    description: "Our beautiful outdoor space for gatherings and events.",
    image: "/placeholder.svg?height=600&width=800",
    hotspots: [
      { x: 40, y: 60, tooltip: "Main Entrance", linkedLocationId: "sanctuary" },
      { x: 70, y: 40, tooltip: "Fellowship Hall", linkedLocationId: "fellowship" },
    ],
  },
]

export default function VirtualTour() {
  const [currentLocation, setCurrentLocation] = useState<TourLocation>(tourLocations[0])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showInfo, setShowInfo] = useState(true)

  const navigateToLocation = (locationId: string) => {
    const location = tourLocations.find((loc) => loc.id === locationId)
    if (location) {
      setCurrentLocation(location)
    }
  }

  const nextLocation = () => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation.id)
    const nextIndex = (currentIndex + 1) % tourLocations.length
    setCurrentLocation(tourLocations[nextIndex])
  }

  const prevLocation = () => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation.id)
    const prevIndex = (currentIndex - 1 + tourLocations.length) % tourLocations.length
    setCurrentLocation(tourLocations[prevIndex])
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <Card className={`overflow-hidden ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}`}>
      <div className="relative h-[400px] md:h-[500px]">
        {/* Tour image */}
        <div className="absolute inset-0">
          <Image
            src={currentLocation.image || "/placeholder.svg"}
            alt={currentLocation.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Hotspots */}
        {currentLocation.hotspots?.map((hotspot, index) => (
          <button
            key={index}
            className="absolute w-8 h-8 rounded-full bg-primary/80 hover:bg-primary transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer animate-pulse-slow"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            onClick={() => hotspot.linkedLocationId && navigateToLocation(hotspot.linkedLocationId)}
            title={hotspot.tooltip}
          >
            <span className="sr-only">{hotspot.tooltip}</span>
          </button>
        ))}

        {/* Navigation controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevLocation}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextLocation}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Control buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="outline" size="icon" onClick={toggleInfo} className="glass text-primary rounded-full">
            <Info className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleFullscreen} className="glass text-primary rounded-full">
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Location info */}
        {showInfo && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-xl font-bold">{currentLocation.name}</h3>
            <p className="text-sm">{currentLocation.description}</p>
          </div>
        )}
      </div>
    </Card>
  )
}

