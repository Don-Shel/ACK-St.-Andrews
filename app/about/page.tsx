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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="section-title">
            <h2>Our History</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">The Beginning (2018-2022)</h3>
                <p className="text-gray-600">
                  ACK St. Andrews Kibabet was established in 20188 as a small mission outpost by the Anglican Church of
                  Kenya. The first services were held under a small church, with a small group of faithful believers gathering
                  for worship. As the congregation grew, a small modern structure was built to serve as the first church
                  building.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Growth and Development (2022-2024)</h3>
                <p className="text-gray-600">
                  By the mid-2022, the church had grown significantly, necessitating the construction of a larger
                  building. Through the dedication and sacrificial giving of the members, a permanent stone church was
                  built and consecrated in mid-2023. During this period, various ministries were established, including
                  Sunday School, Church Choir, and Youth Ministry.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Expansion and Outreach (2023-2024)</h3>
                <p className="text-gray-600">
                  The early 2023 saw a period of significant expansion and outreach. The church began
                  planting daughter churches in neighboring communities, established a primary school, and initiated
                  various community development projects. The main sanctuary was expanded to accommodate the growing
                  congregation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Modern Era (2024-Present)</h3>
                <p className="text-gray-600">
                  In recent years, ACK St. Andrews Kibabet has continued to grow and adapt to meet the changing needs of
                  the community. The church has embraced technology, introduced contemporary worship alongside
                  traditional liturgy, and expanded its social ministries. Today, we stand on the shoulders of those who
                  came before us, continuing their legacy of faith, service, and community impact.
                </p>
              </div>
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
                name: "Mr. David Rotich",
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
                name: "Mrs. Calorine Sang",
                role: "Children's Ministry Coordinator",
                bio: "Elizabeth oversees our children's ministry, ensuring that our youngest members grow in their faith through age-appropriate activities and lessons.",
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

