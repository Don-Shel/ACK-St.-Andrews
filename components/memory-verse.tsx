"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

// Bible verses array
const bibleVerses = [
  {
    verse:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
  },
  {
    verse:
      "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
  },
  {
    verse: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
  },
  {
    verse:
      "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    reference: "Joshua 1:9",
  },
  {
    verse: "The LORD is my shepherd, I lack nothing.",
    reference: "Psalm 23:1",
  },
  {
    verse:
      "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
  {
    verse:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
  },
  {
    verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    reference: "Matthew 6:33",
  },
  {
    verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    reference: "2 Corinthians 5:17",
  },
  {
    verse:
      "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.",
    reference: "Numbers 6:24-26",
  },
]

interface MemoryVerseProps {
  className?: string
  variant?: "default" | "overlay" | "minimal"
}

export default function MemoryVerse({ className = "", variant = "default" }: MemoryVerseProps) {
  const [currentVerse, setCurrentVerse] = useState(bibleVerses[0])
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    // Set initial random verse
    const randomIndex = Math.floor(Math.random() * bibleVerses.length)
    setCurrentVerse(bibleVerses[randomIndex])

    // Change verse every 10 seconds
    const interval = setInterval(() => {
      setIsChanging(true)
      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * bibleVerses.length)
        setCurrentVerse(bibleVerses[newIndex])
        setIsChanging(false)
      }, 500)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  if (variant === "overlay") {
    return (
      <div
        className={`absolute bottom-4 left-4 right-4 z-10 p-4 rounded-lg bg-gradient-to-t from-secondary/80 to-transparent backdrop-blur-sm ${className}`}
      >
        <div className={`transition-opacity duration-500 ${isChanging ? "opacity-0" : "opacity-100"}`}>
          <p className="text-white text-sm font-medium mb-1 italic">"{currentVerse.verse}"</p>
          <p className="text-primary font-bold text-right italic">— {currentVerse.reference}</p>
        </div>
      </div>
    )
  }

  if (variant === "minimal") {
    return (
      <div className={`${className}`}>
        <div className={`transition-opacity duration-500 ${isChanging ? "opacity-0" : "opacity-100"}`}>
          <p className="text-sm font-medium mb-1 italic">"{currentVerse.verse}"</p>
          <p className="text-primary text-sm font-bold text-right">— {currentVerse.reference}</p>
        </div>
      </div>
    )
  }

  return (
    <Card className={`glass-card overflow-hidden shadow-lg ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="bg-primary/15 dark:bg-primary/20 rounded-full p-3 flex-shrink-0">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className={`transition-opacity duration-500 ${isChanging ? "opacity-0" : "opacity-100"}`}>
            <p className="text-md font-medium mb-1 italic">"{currentVerse.verse}"</p>
            <p className="text-primary font-bold text-right">— {currentVerse.reference}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

