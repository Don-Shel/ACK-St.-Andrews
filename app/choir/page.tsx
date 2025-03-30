'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Youtube, Calendar } from "lucide-react"
import YouTubeVideo from "@/components/youtube-video"
import ScrollAnimation from "@/components/scroll-animation"
import { getChannelVideos, YouTubeVideoType } from "@/services/youtube"

export default function ChoirPage() {
  const [videos, setVideos] = useState<YouTubeVideoType[]>([])
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Fetch initial videos
  useEffect(() => {
    loadVideos()
  }, [])

  const loadVideos = async (pageToken?: string) => {
    setLoading(true)
    try {
      const { videos: newVideos, nextPageToken: token } = await getChannelVideos(pageToken)
      if (pageToken) {
        setVideos(prev => [...prev, ...newVideos])
      } else {
        setVideos(newVideos)
      }
      setNextPageToken(token)
    } catch (error) {
      console.error('Error loading videos:', error)
    }
    setLoading(false)
  }

  // Upcoming performances by the church choir
  const upcomingPerformances = [
    {
      title: "Sunday Service",
      date: "Every Sunday",
      time: "8:00 AM",
      location: "Main Sanctuary",
    },
    {
      title: "Choir Volume 2 production",
      date: "April 14, 2025",
      time: "6:00 PM",
      location: "Main Sanctuary",
    },
    {
      title: "Community Outreach",
      date: "January 15, 2025",
      time: "2:00 PM",
      location: "Kibabet Community Center",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/church choir 2.png?height=600&width=1920"
            alt="Church choir"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">ACK St. Andrews Choir</h1>
          <p className="text-xl max-w-3xl mx-auto">Lifting hearts and voices in praise and worship to glorify God</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#videos">Watch Videos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
              <a
                href="https://www.youtube.com/@ACKSTANDREWSKIBABETCHOIRELDORE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="mr-2 h-5 w-5" />
                YouTube Channel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About the Choir */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/church choir 8.png?height=800&width=600" alt="Church choir" fill className="object-cover" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Choir</h2>
              <p className="text-gray-600 mb-6">
                The ACK St. Andrews Kibabet Choir has been serving the church and community through music ministry for
                over 20 years. Our choir consists of dedicated members who use their God-given talents to lead the
                congregation in worship and praise.
              </p>
              <p className="text-gray-600 mb-6">
                We sing a variety of music including traditional hymns, contemporary Christian songs, and African gospel
                music. Our mission is to glorify God through music and to inspire others to worship Him in spirit and in
                truth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">40+ Members</h4>
                    <p className="text-gray-600">Dedicated singers</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">5+ Years</h4>
                    <p className="text-gray-600">Of music ministry</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Videos - Updated Section */}
      <section id="videos" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Performances</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our latest worship performances and musical offerings
            </p>
          </div>
          
          {loading && videos.length === 0 && (
            <div className="text-center py-12 font-bold italics">
              <p>Loading videos...</p>
            </div>
          )}

          {!loading && videos.length === 0 && (
            <div className="text-center py-12">
              <p>No videos found. Please check back later.</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <ScrollAnimation key={video.id} className="h-full">
                <Card className="h-full transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                      <YouTubeVideo videoId={video.id} title={video.title} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-900">
                      <div className="flex items-center space-x-2">
                        <span>{video.viewCount} views</span>
                        <span>•</span>
                        <span>{video.likeCount} likes</span>
                      </div>
                      <div className="flex items-center space-x-2 font-bold">
                        <span>{video.duration}</span>
                        <span>•</span>
                        <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {nextPageToken && (
            <div className="text-center mt-12">
              <Button
                onClick={() => loadVideos(nextPageToken)}
                disabled={loading}
                className="bg-primary hover:bg-primary/90 min-w-[200px]"
              >
                {loading ? 'Loading...' : 'Load More Videos'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Performances */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Upcoming Performances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingPerformances.map((performance, index) => (
              <ScrollAnimation key={index}>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{performance.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>Date:</strong> {performance.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {performance.time}
                      </p>
                      <p>
                        <strong>Location:</strong> {performance.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Choir */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Choir</h2>
              <p className="mb-6">
                Do you have a passion for music and a heart for worship? We invite you to join our choir! No
                professional experience is required—just a willingness to learn and a commitment to regular rehearsals.
              </p>
              <p className="mb-8">
                We rehearse every Thursday evening from 6:00 PM to 7:30 PM in the Main Sanctuary. Come and use your
                voice to glorify God and minister to others through music.
              </p>
              <Button asChild size="lg" className="bg-gold text-secondary hover:bg-gold/90">
                <Link href="/contact">Contact Us to Join</Link>
              </Button>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/church choir 5.png?height=800&width=600"
                  alt="Choir rehearsal"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}

