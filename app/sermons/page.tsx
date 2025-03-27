import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Download, PlayCircle, User, Search, Filter, Share2, Bookmark, Heart } from "lucide-react"
import { SermonPlayer } from "@/components/sermon-player/sermon-player"
import { SermonCard } from "@/components/sermon-card"
import { SermonFilterDialog } from "@/components/sermon-filter-dialog"

export default function SermonsPage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative pt-40 pb-32 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          >
            <source src="/videos/sermon-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Sermons & Teachings
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-200">
            Dive deep into God's Word through our collection of inspiring messages
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search sermons by title, speaker, or topic..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <SermonFilterDialog />
          </div>
        </div>
      </section>

      {/* Featured Sermon with Modern Player */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="/sermons/featured.jpg"
                  alt="Featured sermon"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-20 h-20 bg-primary/90 hover:bg-primary backdrop-blur-sm">
                    <PlayCircle className="h-10 w-10" />
                    <span className="sr-only">Play sermon</span>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-1">
                <SermonPlayer
                  audioUrl="/sermons/sample.mp3"
                  title="The Power of Faith in Difficult Times"
                  speaker="Rev. John Kiprotich"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Categories */}
      <section className="py-20">
        <div className="container mx-auto">
          <Tabs defaultValue="recent" className="space-y-8">
            <TabsList className="flex justify-center gap-2">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="series">Series</TabsTrigger>
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="speakers">Speakers</TabsTrigger>
            </TabsList>

            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SermonCard
                  title="Walking in Faith"
                  speaker="Rev. Sarah Johnson"
                  date="March 20, 2024"
                  duration="35 mins"
                  image="/sermons/sermon1.jpg"
                  description="Discover how to maintain strong faith in modern times"
                  audioUrl="/sermons/sermon1.mp3"
                />
              </div>
            </TabsContent>

            <TabsContent value="series" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">Spiritual Growth Series {i + 1}</h3>
                    <p className="text-gray-400 mb-4">A 4-part series on developing your spiritual life</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">4 sermons</span>
                      <Button variant="ghost" className="text-primary hover:text-primary/90">
                        View Series →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="topics" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Faith', 'Prayer', 'Worship', 'Family', 'Leadership', 'Healing', 'Purpose', 'Grace'].map((topic) => (
                <Card key={topic} className="bg-gray-800/50 border-white/10 hover:bg-gray-700/50 transition-all cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">{topic}</h3>
                    <p className="text-sm text-gray-400">12 sermons</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="speakers" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="bg-gray-800/50 border-white/10">
                  <CardContent className="p-4 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={`/speakers/speaker-${i + 1}.jpg`}
                        alt={`Speaker ${i + 1}`}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">Rev. John Doe</h3>
                    <p className="text-sm text-gray-400 mb-3">Senior Pastor</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Sermons
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

