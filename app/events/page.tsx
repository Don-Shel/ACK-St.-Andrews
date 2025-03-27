import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Church event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto">Join us for worship, fellowship, and community events</p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Featured Event</h2>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image src="/placeholder.svg?height=600&width=800" alt="Featured event" fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Upcoming Event
                </div>
                <h3 className="text-2xl font-bold mb-3">Annual Harvest Festival</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <span>October 15, 2023</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <span>Church Grounds</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Join us for our Annual Harvest Festival, a day of thanksgiving, fellowship, and celebration. The event
                  will feature worship, food, games, and activities for all ages. Bring your family and friends for a
                  day of fun and community building.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="#">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Youth Conference",
                date: "November 5-7, 2023",
                time: "9:00 AM - 5:00 PM",
                location: "Fellowship Hall",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "A three-day conference for youth and young adults focused on spiritual growth, leadership development, and community building.",
              },
              {
                title: "Women's Retreat",
                date: "November 18-19, 2023",
                time: "All Day",
                location: "Eldoret Retreat Center",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "A weekend retreat for women to rest, reflect, and renew their faith through worship, prayer, and fellowship.",
              },
              {
                title: "Choir volume 2 production",
                date: "April 14, 2025",
                time: "6:00 PM - 8:00 PM",
                location: "Main Sanctuary",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "A special evening of Choir volume 2 song production.",
              },
              {
                title: "New Year's Eve Service",
                date: "December 31, 2023",
                time: "10:00 PM - 12:30 AM",
                location: "Main Sanctuary",
                image: "/placeholder.svg?height=400&width=600",
                description: "Join us as we pray, worship, and welcome the new year together as a church family.",
              },
              {
                title: "Marriage Enrichment Seminar",
                date: "January 20, 2024",
                time: "9:00 AM - 3:00 PM",
                location: "Fellowship Hall",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "A one-day seminar for married couples focused on strengthening relationships through biblical principles.",
              },
              {
                title: "Community Outreach Day",
                date: "February 10, 2024",
                time: "8:00 AM - 2:00 PM",
                location: "Various Locations",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "A day dedicated to serving our community through various outreach projects and initiatives.",
              },
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link href="#">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Regular Schedule</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    {
                      day: "Sunday",
                      events: [
                        { time: "10:00 AM - 13:00 AM", title: "Sunday Service", location: "Main Sanctuary" },
                        { time: "14:30 AM - 18:00 PM", title: "Youth Service", location: "Fellowship Hall" },
                        { time: "8:00 AM - 10:00 PM", title: "Sunday School Service", location: "Education Building" },
                      ],
                    },
                    {
                      day: "Wednesday",
                      events: [{ time: "5:30 PM - 7:00 PM", title: "Bible Study", location: "Fellowship Hall" }],
                    },
                    {
                      day: "Thursday",
                      events: [{ time: "6:00 PM - 7:30 PM", title: "Choir Practice", location: "Main Sanctuary" }],
                    },
                    {
                      day: "Friday",
                      events: [{ time: "6:00 PM - 8:00 PM", title: "Youth Fellowship", location: "Youth Center" }],
                    },
                    {
                      day: "Saturday",
                      events: [
                        {
                          time: "7:00 AM - 8:00 AM",
                          title: "Men's Prayer Breakfast (1st Saturday)",
                          location: "Fellowship Hall",
                        },
                        {
                          time: "9:00 AM - 11:00 AM",
                          title: "Women's Guild Meeting (2nd Saturday)",
                          location: "Fellowship Hall",
                        },
                        {
                          time: "10:00 AM - 12:00 PM",
                          title: "Community Service (3rd Saturday)",
                          location: "Various Locations",
                        },
                      ],
                    },
                  ].map((day, index) => (
                    <div key={index} className="p-6">
                      <h3 className="text-xl font-bold mb-4">{day.day}</h3>
                      <div className="space-y-4">
                        {day.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                            <div className="md:w-1/4">
                              <div className="flex items-center text-gray-600">
                                <Clock className="h-4 w-4 mr-2 text-primary" />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <div className="md:w-1/3">
                              <span className="font-medium">{event.title}</span>
                            </div>
                            <div className="md:w-1/3">
                              <div className="flex items-center text-gray-600">
                                <MapPin className="h-4 w-4 mr-2 text-primary" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Host an Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our church facilities are available for weddings, conferences, and other community events. Contact us to
            learn more about hosting your event at ACK St. Andrews Kibabet.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

