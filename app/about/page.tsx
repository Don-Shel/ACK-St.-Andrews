import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Church interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Church</h1>
          <p className="text-l max-w-3xl mx-auto italic">
            Learn about our history, mission, and vision at ACK St. Andrews Kibabet
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To make disciples of Jesus Christ, build a community of believers, and serve our neighbors with
                  compassion and love, all for the glory of God.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be a vibrant, growing church that transforms lives through the power of the Gospel, equips
                  believers for ministry, and impacts our community with the love of Christ.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                <ul className="space-y-3">
                  {[
                    "Biblical Teaching and Preaching",
                    "Passionate Worship",
                    "Fervent Prayer",
                    "Authentic Community",
                    "Compassionate Service",
                    "Intentional Discipleship",
                  ].map((value, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Church congregation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

            {/* Our History */}
<section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Our Journey Through Time
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Celebrating our growth and milestones since 2018
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Timeline Line - Hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent hidden md:block" />

        {[
                {
                  period: "2018-2022",
                  title: "The Beginning",
                  description: "ACK St. Andrews Kibabet was established in 2018 as a small mission outpost. The first services were held under a small church, with a dedicated group of faithful believers.",
                  milestones: ["First church service held", "Initial congregation of 50 members", "Foundation stone laid"],
                  image: "/church-old.jpg"
                },
                {
                  period: "2022-2024",
                  title: "Growth and Development",
                  description: "The church experienced significant growth, leading to the construction of a larger building. Various ministries were established during this period.",
                  milestones: ["New building construction", "Sunday School established", "Choir ministry began"],
                  image: "/church-construction.jpg"
                },
                {
                  period: "2023-2024",
                  title: "Expansion and Outreach",
                  description: "A period of significant expansion with daughter churches and community projects initiated.",
                  milestones: ["First daughter church planted", "Primary school established", "Community center opened"],
                  image: "/church-outreach.jpg"
                },
                {
                  period: "2024-Present",
                  title: "Modern Era",
                  description: "Embracing technology and modern worship while maintaining our traditional values.",
                  milestones: ["Live streaming services launched", "Digital giving implemented", "Youth program expanded"],
                  image: "/church-present.jpg"
                }
              ].map((era, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center mb-16 gap-8`}
                >
                  {/* Content Card - Full width on mobile */}
                  <div className="w-full md:w-1/2 px-4 md:px-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
                      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        {era.period}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {era.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                        {era.description}
                      </p>
                      <div className="space-y-2">
                        {era.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                            <span className="text-sm">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
      
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary shadow-lg items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
      
                  {/* Image Section - Full width on mobile */}
                  <div className="w-full md:w-1/2 px-4 md:px-6 mt-6 md:mt-0">
                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={era.image}
                        alt={era.title}
                        fill
                        className="object-cover transition-transform hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rev. John Kiprotich",
                role: "Vicar",
                bio: "Rev. John has served as our vicar since 2015. He holds a Master of Divinity and is passionate about biblical teaching and community outreach.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Sarah Koech",
                role: "Church Warden",
                bio: "Sarah has been a member of St. Andrews for over 10 years and has served as Church Warden since 2018. She oversees church administration and operations.",
                image: "/leader 1.png?height=400&width=400",
              },
              {
                name: "Mr. Elias Kiptoo",
                role: "Youth Pastor",
                bio: "David leads our vibrant youth ministry, organizing activities, mentorship programs, and Bible studies for teenagers and young adults.",
                image: "/leader 2.png?height=400&width=400",
              },
              {
                name: "Mrs. Grace Langat",
                role: "Women's Ministry Leader",
                bio: "Grace coordinates our women's ministry, organizing Bible studies, prayer meetings, and outreach activities for the women in our church.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mr. Joseph Bett",
                role: "Music Director",
                bio: "Joseph leads our music ministry, coordinating the choir and worship team to enhance our worship experience through music.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Caroline Sang",
                role: "Children's Ministry Coordinator",
                bio: "Caroline oversees our children's ministry, ensuring that our youngest members grow in their faith through age-appropriate activities and lessons.",
                image: "/sundayschool teach.png?height=400&width=400",
              },
            ].map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

