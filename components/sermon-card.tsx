import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, Calendar, Clock, Download } from "lucide-react"

interface SermonCardProps {
  title: string
  speaker: string
  date: string
  duration: string
  image: string
  description: string
  audioUrl: string
}

export function SermonCard({
  title,
  speaker,
  date,
  duration,
  image,
  description,
  audioUrl
}: SermonCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="lg" className="rounded-full">
            <PlayCircle className="h-6 w-6 mr-2" />
            Play Sermon
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
        <p className="text-sm font-medium">{speaker}</p>
        <Button variant="ghost" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}