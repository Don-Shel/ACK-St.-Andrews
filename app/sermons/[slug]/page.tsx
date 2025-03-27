import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, User } from "lucide-react"
import SermonPlayer from "@/components/sermon-player"
import SharePage from "@/components/share-page"
//import PrintPage from "@/components/print-page"
import RelatedContent from "@/components/related-content"

// This would normally come from a database or CMS
const sermon = {
  title: "The Power of Faith in Difficult Times",
  slug: "power-of-faith-difficult-times",
  speaker: "Rev. John Kiprotich",
  date: "June 4, 2023",
  duration: "45 minutes",
  image: "/placeholder.svg?height=600&width=800",
  audioSrc: "/placeholder.mp3",
  content: `
    <p>In this powerful sermon, Rev. John explores how faith can sustain us through life's most challenging moments. Drawing from Scripture and personal experiences, he offers practical guidance on maintaining hope and trust in God when facing adversity.</p>
    
    <h2>Key Scripture Passages</h2>
    <ul>
      <li>Hebrews 11:1 - "Now faith is confidence in what we hope for and assurance about what we do not see."</li>
      <li>Romans 8:28 - "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."</li>
      <li>2 Corinthians 4:17-18 - "For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal."</li>
    </ul>
    
    <h2>Main Points</h2>
    <ol>
      <li>Faith gives us perspective in difficult times</li>
      <li>Faith connects us to God's power and promises</li>
      <li>Faith is strengthened through trials</li>
      <li>Faith leads to action and perseverance</li>
    </ol>
    
    <p>When we face challenges, our faith reminds us that God is still in control. It helps us see beyond our current circumstances to the bigger picture of what God is doing in our lives. As Proverbs 3:5-6 reminds us, "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."</p>
  `,
  tags: ["faith", "trials", "hope", "trust"],
  series: "Walking in Faith",
}

// Related sermons
const relatedSermons = [
  {
    id: "1",
    title: "Finding Peace in a Troubled World",
    excerpt: "How to find and maintain God's peace even in the midst of life's storms and challenges.",
    image: "/placeholder.svg?height=400&width=600",
    speaker: "Rev. John Kiprotich",
    date: "May 28, 2023",
    duration: "38 minutes",
    type: "sermon" as const,
    slug: "finding-peace-troubled-world",
  },
  {
    id: "2",
    title: "The Call to Discipleship",
    excerpt: "What it means to be a true disciple of Jesus Christ in today's world and how to follow His example.",
    image: "/placeholder.svg?height=400&width=600",
    speaker: "Rev. David Rotich",
    date: "May 21, 2023",
    duration: "42 minutes",
    type: "sermon" as const,
    slug: "call-to-discipleship",
  },
  {
    id: "3",
    title: "Living with Purpose",
    excerpt: "Discovering God's purpose for your life and how to align your goals and actions with His will.",
    image: "/placeholder.svg?height=400&width=600",
    speaker: "Bishop Samuel Koech",
    date: "May 7, 2023",
    duration: "45 minutes",
    type: "sermon" as const,
    slug: "living-with-purpose",
  },
]

export default function SermonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{sermon.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center text-gray-300">
              <User className="h-5 w-5 mr-2" />
              <span>{sermon.speaker}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{sermon.date}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 mr-2" />
              <span>{sermon.duration}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#listen">Listen Now</a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
              <a href="#download">
                <Download className="h-4 w-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sermon Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Audio Player */}
              <div id="listen" className="mb-8">
                <SermonPlayer title={sermon.title} speaker={sermon.speaker} audioSrc={sermon.audioSrc} />
              </div>

              {/* Sermon Text */}
              <div className="prose dark:prose-invert max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: sermon.content }} />
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {sermon.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/sermons/tags/${tag}`}
                      className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share and Print */}
              <div className="flex gap-3">
                <SharePage
                  title={sermon.title}
                  description={`Listen to ${sermon.title} by ${sermon.speaker} at ACK St. Andrews Kibabet`}
                />
               
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Series Info */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-3">Part of Series</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{sermon.series}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/sermons/series/${sermon.series.toLowerCase().replace(/\s+/g, "-")}`}>View Series</Link>
                </Button>
              </div>

              {/* Download */}
              <div id="download" className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-3">Download Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="#" download>
                        <Download className="h-4 w-4 mr-2" />
                        Audio (MP3)
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="#" download>
                        <Download className="h-4 w-4 mr-2" />
                        Sermon Notes (PDF)
                      </a>
                    </Button>
                  </li>
                  <li>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="#" download>
                        <Download className="h-4 w-4 mr-2" />
                        Slides (PDF)
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>

              {/* Recent Sermons */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">Recent Sermons</h3>
                <ul className="space-y-4">
                  {relatedSermons.slice(0, 3).map((sermon) => (
                    <li key={sermon.id}>
                      <Link href={`/sermons/${sermon.slug}`} className="flex gap-3 group">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={sermon.image || "/placeholder.svg"}
                            alt={sermon.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {sermon.title}
                          </h4>
                          <p className="text-sm text-gray-500">{sermon.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sermons */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <RelatedContent title="You May Also Like" items={relatedSermons} />
        </div>
      </section>
    </>
  )
}

