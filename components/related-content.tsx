import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"

interface RelatedItem {
  id: string
  title: string
  excerpt: string
  image: string
  date?: string
  speaker?: string
  duration?: string
  type: "sermon" | "event" | "blog"
  slug: string
}

interface RelatedContentProps {
  title?: string
  items: RelatedItem[]
  className?: string
}

export default function RelatedContent({ title = "You May Also Like", items, className = "" }: RelatedContentProps) {
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={`/${item.type}s/${item.slug}`}>
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h4>

                {item.type === "sermon" && item.speaker && (
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <User className="h-4 w-4 mr-1" />
                    <span>{item.speaker}</span>
                  </div>
                )}

                {item.date && (
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                )}

                {item.duration && (
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{item.duration}</span>
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{item.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

