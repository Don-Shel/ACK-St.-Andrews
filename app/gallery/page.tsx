"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "worship", name: "Worship" },
  { id: "events", name: "Events" },
  { id: "community", name: "Community" },
  { id: "youth", name: "Youth" },
]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sunday worship service",
    category: "worship",
    title: "Sunday Worship Service",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Youth conference",
    category: "youth",
    title: "Youth Conference 2023",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Community outreach",
    category: "community",
    title: "Community Outreach Program",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Easter celebration",
    category: "events",
    title: "Easter Celebration",
  },
  {
    id: 5,
    src: "/church chior 1.png?height=600&width=800",
    alt: "Choir performance",
    category: "worship",
    title: "Church Choir Performance",
  },
  {
    id: 6,
    src: "/sunday school per4m.png?height=600&width=800",
    alt: "Children's Sunday school",
    category: "youth",
    title: "Children's Sunday School",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Harvest festival",
    category: "events",
    title: "Annual Harvest Festival",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Women's guild meeting",
    category: "community",
    title: "Women's Guild Meeting",
  },
  {
    id: 9,
    src: "/church construction 2.png?height=600&width=800",
    alt: "Church building construction",
    category: "worship",
    title: "Church Building Under Construction",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Youth worship team",
    category: "youth",
    title: "Youth Worship Team",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Christmas celebration",
    category: "events",
    title: "Christmas Celebration",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Community service day",
    category: "community",
    title: "Community Service Day",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/church overview.png?height=600&width=1920"
            alt="Church gallery"
            fill
            className="object-cover"
            priority
          />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/80 to-black/90"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse through moments captured at our church events and activities
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Photo Gallery</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium text-center px-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <div className="relative h-full w-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

