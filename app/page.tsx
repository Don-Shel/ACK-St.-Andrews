import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, BookOpen, Calendar, Check, Clock, Heart, MapPin, Users, Youtube } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import NewsletterSignup from "@/components/newsletter-signup"
import DonationForm from "@/components/donation-form"
import PrayerRequest from "@/components/prayer-request"
import MemoryVerse from "@/components/memory-verse"
import AnimatedCounter from "@/components/animated-counter"
import SermonPlayer from "@/components/sermon-player"
import VirtualTour from "@/components/virtual-tour"
import { EventsSection } from "@/components/events/events-section"

const services = [
  { icon: Clock, title: "Sunday School", time: "8:00 — 10:00 AM", copy: "A joyful start for children to worship, learn, and grow together." },
  { icon: Users, title: "Main Service", time: "10:30 AM — 12:00 PM", copy: "Energetic worship and relevant teaching for the whole family." },
  { icon: BookOpen, title: "Bible Study", time: "Wednesdays · 5:30 PM", copy: "Go deeper into Scripture through discussion and shared discovery." },
]

const values = ["A warm welcome for every generation", "Worship that brings us closer to God", "Practical faith lived out in community"]

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-secondary text-secondary-foreground">
        <Image src="/church1.jpg" alt="ACK St. Andrews church building" fill priority className="object-cover object-center opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,hsl(var(--secondary))_8%,transparent_65%),linear-gradient(0deg,hsl(var(--secondary)/.8),transparent_65%)]" />
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="container relative z-10 mx-auto flex min-h-[92svh] items-end px-4 pb-24 pt-32 md:px-8 md:pb-28">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.28em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Welcome home
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.05em] text-white sm:text-7xl lg:text-8xl">Faith that feels like family.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">Join ACK St. Andrews Kibabet for wholehearted worship, honest community, and a life of service in Eldoret.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-primary px-7 text-secondary hover:bg-primary/90"><Link href="/contact">Plan your visit <ArrowUpRight data-icon="inline-end" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 px-7 text-white hover:bg-white/15"><Link href="#services">Explore our rhythm</Link></Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2"><Clock className="size-4 text-primary" /> Sundays at 10:30 AM</span>
              <span className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> Kibabet, Eldoret</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-6 hidden text-right text-xs uppercase tracking-[0.24em] text-white/50 md:block">Scroll to discover <span className="ml-3 text-primary">↓</span></div>
      </section>

      <section className="border-b border-border bg-background py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-5 px-4 md:px-8">
          <p className="text-sm text-muted-foreground">A growing church family serving Kibabet since 2015.</p>
          <div className="flex items-center gap-6 text-sm font-medium"><Link className="text-primary hover:underline" href="/about">Our story</Link><Link className="text-foreground hover:text-primary" href="/choir">Meet the choir</Link><Link className="text-foreground hover:text-primary" href="/gallery">See the gallery</Link></div>
        </div>
      </section>

      <section id="services" className="section-shell bg-background"><div className="container mx-auto px-4 md:px-8"><ScrollAnimation><div className="max-w-2xl"><p className="eyebrow">Find your rhythm</p><h2 className="display-heading mt-4">There is a place for you here.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Whether you are taking your first step or finding a deeper rhythm of faith, our weekly gatherings make space for questions, joy, and connection.</p></div></ScrollAnimation><div className="mt-14 grid gap-5 md:grid-cols-3">{services.map(({ icon: Icon, title, time, copy }, index) => <ScrollAnimation key={title} className={`delay-${index * 100}`}><Card className="group h-full rounded-[1.5rem] border-border/70 bg-card/70 shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"><CardContent className="flex h-full flex-col p-7"><div className="mb-10 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon /></div><p className="text-sm font-medium text-primary">{time}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p><Link href="/contact" className="mt-auto pt-8 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">Learn more <span aria-hidden="true">↗</span></Link></CardContent></Card></ScrollAnimation>)}</div></div></section>

      <section className="section-shell bg-muted/35"><div className="container mx-auto grid items-center gap-12 px-4 md:px-8 lg:grid-cols-[.9fr_1.1fr]"><ScrollAnimation><div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-secondary"><Image src="/church choir 3.png" alt="ACK St. Andrews choir singing" fill className="object-cover opacity-85 transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" /><div className="absolute bottom-7 left-7 text-white"><p className="text-sm uppercase tracking-[0.2em] text-primary">Our community</p><p className="mt-2 text-2xl font-semibold">Many voices. One song.</p></div></div></ScrollAnimation><ScrollAnimation><div><p className="eyebrow">What guides us</p><h2 className="display-heading mt-4">Come as you are. Grow as you go.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">We are a welcoming Anglican parish where worship, friendship, and service meet. Our doors are open to curious seekers, growing families, and everyone in between.</p><div className="mt-8 flex flex-col gap-4">{values.map((value) => <div key={value} className="flex items-center gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"><Check className="size-4" /></span><span className="font-medium">{value}</span></div>)}</div><Button asChild className="mt-10 rounded-full"><Link href="/about">Discover our story <ArrowUpRight data-icon="inline-end" /></Link></Button></div></ScrollAnimation></div></section>

      <section className="section-shell bg-background"><div className="container mx-auto px-4 md:px-8"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Stay connected</p><h2 className="display-heading mt-4">Life at St. Andrews.</h2></div><Link href="/events" className="font-semibold text-primary hover:underline">View all events <span aria-hidden="true">↗</span></Link></div><EventsSection /></div></section>

      <section className="section-shell bg-secondary text-white"><div className="container mx-auto grid gap-12 px-4 md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><ScrollAnimation><div><p className="eyebrow text-primary">A little encouragement</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Make room for wonder.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-white/70">Watch a service, listen to a sermon, or simply take a quiet moment with Scripture today.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="rounded-full bg-primary text-secondary hover:bg-primary/90"><a href="https://www.youtube.com/@ACKSTANDREWSKIBABETCHOIRELDORE" target="_blank" rel="noopener noreferrer">Watch on YouTube <Youtube data-icon="inline-end" /></a></Button><Button asChild variant="outline" className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white/15"><Link href="/contact">Visit in person</Link></Button></div></div></ScrollAnimation><ScrollAnimation><div className="rounded-[1.5rem] border border-white/15 bg-white/5 p-7 backdrop-blur"><MemoryVerse variant="minimal" /><div className="mt-7 border-t border-white/10 pt-6"><SermonPlayer title="The Power of Faith in Difficult Times" speaker="Rev. John Kiprotich" audioSrc="/placeholder.mp3" /></div></div></ScrollAnimation></div></section>

      <section className="section-shell bg-background"><div className="container mx-auto px-4 md:px-8"><div className="mb-10 text-center"><p className="eyebrow">See it for yourself</p><h2 className="display-heading mt-4">A space to belong.</h2></div><ScrollAnimation><VirtualTour /></ScrollAnimation><div className="mt-8 text-center"><Button asChild variant="outline" className="rounded-full"><Link href="/contact">Come and see us <ArrowUpRight data-icon="inline-end" /></Link></Button></div></div></section>

      <section className="section-shell bg-muted/35"><div className="container mx-auto px-4 md:px-8"><div className="mb-10 max-w-2xl"><p className="eyebrow">A generous life</p><h2 className="display-heading mt-4">Support & prayer.</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">Every prayer, gift, and act of service helps our church keep showing up for the community.</p></div><div className="grid gap-6 lg:grid-cols-2"><ScrollAnimation><DonationForm /></ScrollAnimation><ScrollAnimation><PrayerRequest /></ScrollAnimation></div></div></section>

      <section className="section-shell bg-primary/10"><div className="container mx-auto px-4 md:px-8"><div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-primary">Keep in touch</p><h2 className="display-heading mt-4">Good things are better shared.</h2></div><NewsletterSignup /></div></div></section>

      <section className="relative overflow-hidden bg-primary py-20 text-secondary"><div className="ambient-orb ambient-orb-three" /><div className="container relative z-10 mx-auto px-4 text-center md:px-8"><Heart className="mx-auto mb-5 size-8 fill-current" /><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Your next Sunday could feel different.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-secondary/75">We would love to welcome you into the ACK St. Andrews family.</p><Button asChild size="lg" className="mt-8 rounded-full bg-secondary px-8 text-white hover:bg-secondary/90"><Link href="/contact">Plan your visit <ArrowUpRight data-icon="inline-end" /></Link></Button></div></section>
    </>
  )
}
