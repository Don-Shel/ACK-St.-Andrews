import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, BookOpen, Users, Youtube, ChevronRight, ChevronLeft } from "lucide-react"

// Import our components
import ScrollAnimation from "@/components/scroll-animation"
import NewsletterSignup from "@/components/newsletter-signup"
import YouTubeVideo from "@/components/youtube-video"
import DonationForm from "@/components/donation-form"
import PrayerRequest from "@/components/prayer-request"
import MemoryVerse from "@/components/memory-verse"
import AnimatedCounter from "@/components/animated-counter"
import SermonPlayer from "@/components/sermon-player"
import VirtualTour from "@/components/virtual-tour"
import {EventsSection } from "@/components/events/events-section"


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 py-16 sm:py-0">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/church1.jpg?height=1080&width=1920"
            alt="Church building"
            fill
            className="object-cover transform scale-105 animate-subtle-zoom"
            priority
          />
          {/* Modern gradient overlay with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/70 to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Animated patterns and shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Modern geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-primary/30 to-transparent blur-2xl animate-float-slow"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full border border-white/10 backdrop-blur-sm animate-spin-slow"></div>
            
            {/* Modern line decorations */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Content container with improved mobile layout */}
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Church name with adjusted typography */}
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-medium tracking-wider uppercase">
                Welcome to
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-accent-foreground">
                  ACK St. Andrews
                </span>
                <span className="block text-xl sm:text-3xl md:text-5xl mt-2 font-light">
                  Kibabet
                </span>
              </h1>
            </div>

            {/* Tagline with adjusted sizing */}
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-in-up opacity-90 px-4">
              Join us in worship, fellowship, and service as we grow together in faith
            </p>

            {/* Optimized call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up">
              <Button 
                asChild 
                size="default"
                className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg rounded-full w-[180px] sm:min-w-[200px] h-10 sm:h-12 shadow-lg shadow-primary/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="border-2 border-white/50 bg-transparent hover:bg-white/10 text-white text-base sm:text-lg rounded-full w-[180px] sm:min-w-[200px] h-10 sm:h-12 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
              >
                <Link href="/contact">Visit Us</Link>
              </Button>
            </div>

            {/* Service time info with adjusted spacing */}
            <div className="mt-8 sm:mt-12 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm animate-fade-in-up delay-300">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Join us this Sunday at 10:30 AM</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator adjusted for mobile */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/60 animate-scroll"></div>
          </div>
        </div>

        {/* Memory verse with adjusted padding */}
        <div className="absolute bottom-0 left-0 right-0">
          <MemoryVerse 
            variant="overlay" 
            className="bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm px-4 py-3 sm:py-4" 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollAnimation className="text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                <AnimatedCounter end={2015} className="text-primary mb-2" />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Established</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                <AnimatedCounter end={100} suffix="+" className="text-primary mb-2" />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Members</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                <AnimatedCounter end={40} suffix="+" className="text-primary mb-2" />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Choir Members</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
                <AnimatedCounter end={12} className="text-primary mb-2" />
                <p className="text-gray-600 dark:text-gray-300 font-medium">Ministries</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="section-title">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Service Times</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-shadow border-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sunday School Service</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">8:00 AM - 10:00 AM</p>
                  <p className="text-gray-500 dark:text-gray-400">Let the children join for worship and prayer as we guide them through the Word of God.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-shadow border-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Main Service</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">10:30 AM - 12:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Energetic worship and relevant teachings for all people.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-shadow border-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bible Study</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Wednesday, 5:30 PM - 7:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Dive deeper into God's Word with interactive study and discussion.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="section-title">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Virtual Church Tour
            </h2>
          </div>
          <ScrollAnimation>
            <VirtualTour />
          </ScrollAnimation>
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Explore our church facilities virtually. Click on the hotspots to navigate between different areas of our
              church.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
              <Link href="/contact">
                Visit Us In Person
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Stream */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="section-title">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Join Us Live</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video 
                    src="/Blue Neon Tech Coming Soon Video.mp4" 
                    className="w-full h-full object-cover"
                    poster="/service-thumbnail.jpg"
                    loop
                    autoPlay
                    muted
                    ></video>
                </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <h3 className="text-2xl font-bold mb-4">Watch Our Services Live</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can't make it to church in person? Join us online for our live-streamed services every Sunday. We
                broadcast our services live on YouTube so you can worship with us from anywhere in the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Every Sunday</h4>
                    <p className="text-gray-600 dark:text-gray-300">10:30 AM - 13:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Youtube className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Subscribe to Our Channel</h4>
                    <p className="text-gray-600 dark:text-gray-300">Never miss a service or special event</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
                  <a
                    href="https://www.youtube.com/@ACKSTANDREWSKIBABETCHOIRELDORE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe to Our Channel
                  </a>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300/70 to-white-700/90 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent" />
        </div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-1">
              Upcoming Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Join Us in Fellowship
            </h2>
            <p className="mt-1 text-gray-600 max-w-2xl mx-auto">
              Stay connected with our community through these upcoming events
            </p>
          </div>
          <EventsSection />
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="section-title">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Latest Sermon</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/church1.jpg?height=800&width=600"
                  alt="Pastor preaching"
                  fill
                  className="object-cover"
                />
                <MemoryVerse variant="overlay" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <h3 className="text-2xl font-bold mb-4">The Power of Faith in Difficult Times</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                In this powerful sermon, Rev. John explores how faith can sustain us through life's most challenging
                moments. Drawing from Scripture and personal experiences, he offers practical guidance on maintaining
                hope and trust in God when facing adversity.
              </p>
              <SermonPlayer
                title="The Power of Faith in Difficult Times"
                speaker="Rev. John Kiprotich"
                audioSrc="/placeholder.mp3"
                className="mb-6"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Choir Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="section-title text-center mb-12">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent text-4xl font-bold">
              Our Award-Winning Choir
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Raising voices in harmony to glorify God through traditional and contemporary gospel music
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content - Spans 7 columns */}
            <div className="lg:col-span-7">
              <ScrollAnimation>
                
                <div className="prose dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Excellence in Worship</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    With over four decades of ministry through music, our choir has become a cornerstone of worship at ACK St. Andrews Kibabet. Our repertoire includes traditional hymns, contemporary gospel, and original compositions in multiple languages including English, Swahili, and Kalenjin.
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-2xl text-primary">20+</h4>
                      <p className="text-sm text-gray-600">Members</p>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-2xl text-primary">10+</h4>
                      <p className="text-sm text-gray-600">Songs</p>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-2xl text-primary">3</h4>
                      <p className="text-sm text-gray-600">Languages</p>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-bold text-2xl text-primary">15+</h4>
                      <p className="text-sm text-gray-600">Awards</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Latest Releases - Spans 5 columns */}
            <div className="lg:col-span-5">
              <ScrollAnimation>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Latest Performances</h3>
                  
                  <div className="space-y-4">
                    {/* Individual Performance Items */}
                    <div className="group hover:bg-primary/5 p-3 rounded-lg transition-all">
                      <Link href="https://www.youtube.com/watch?v=3j9nWXbqfH4" 
                            className="flex items-start space-x-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src="/song1.jpg" // Fallback image
                            alt="Boisietab Chi_ACK Kibabet Choir_Eldoret Diocese"
                            fill
                            className="object-cover"
                            sizes="(max-width: 96px) 100vw, 96px"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                          Boisietab Chi_ACK Kibabet Choir_Eldoret Diocese
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Kalenjin Worship
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Released: October 2024
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Add more performance items here */}
                  </div>

                  <div className="mt-6">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full">
                      <a
                        href="https://www.youtube.com/@ACKSTANDREWSKIBABETCHOIRELDORE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Youtube className="mr-2 h-5 w-5" />
                        Subscribe to Our Channel
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-12">
            <ScrollAnimation>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/church choir 3.png" // Fallback image
                    alt="Choir performance"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/church choir 4.png"
                    alt="Choir in traditional attire"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/church choir 5.png"
                    alt="Choir performance at event"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/church choir 9.png"
                    alt="Choir group photo"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
              <Link href="/choir">
                View Full Choir Profile
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="donate" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="section-title">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Support & Prayer</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <DonationForm />
            </ScrollAnimation>
            <div id="prayer">
              <ScrollAnimation>
                <PrayerRequest />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <ScrollAnimation>
            <NewsletterSignup />
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Come experience the love, joy, and community at ACK St.
            Andrews Kibabet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg rounded-full">
              <Link href="/contact">Get Directions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/20 text-lg rounded-full"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}