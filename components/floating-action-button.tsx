"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, X, Heart, Calendar, BookOpen, Music, MessageSquare, PhoneCallIcon, HomeIcon } from "lucide-react"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const actions = [
    { icon: <Heart className="h-5 w-5" />, label: "Donate", href: "#donate" },
    //{ icon: <Calendar className="h-5 w-5" />, label: "Events", href: "/events" },
    //{ icon: <BookOpen className="h-5 w-5" />, label: "Sermons", href: "/sermons" },
    { icon: <Music className="h-5 w-5" />, label: "Choir", href: "/choir" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "Prayer", href: "#prayer" },
    { icon: <PhoneCallIcon className="h-5 w-5" />, label: "Contact", href: "/contact" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Feedback", href: "/feedback" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Gallery", href: "/gallery" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Blog", href: "/blog" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "About", href: "/about" },
    //{ icon: <HomeIcon className="h-5 w-5" />, label: "Home", href: "/" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Privacy", href: "/privacy" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Terms", href: "/terms" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Help", href: "/help" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Support", href: "/support" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Settings", href: "/settings" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Logout", href: "/logout" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Login", href: "/login" },
    //{ icon: <MessageSquare className="h-5 w-5" />, label: "Register", href: "/register" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      <div
        className={`flex flex-col-reverse gap-3 mb-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        {actions.map((action, index) => (
          <Button
            key={index}
            asChild
            size="icon"
            className="glass text-primary hover:bg-white/80 dark:hover:bg-gray-800/80 shadow-lg h-12 w-12 rounded-full transition-all duration-300"
            style={{
              transitionDelay: `${index * 50}ms`,
              transform: isOpen ? "scale(1)" : "scale(0)",
            }}
          >
            <Link href={action.href}>
              <span className="sr-only">{action.label}</span>
              {action.icon}
            </Link>
          </Button>
        ))}
      </div>

      {/* Main button */}
      <Button
        size="icon"
        onClick={toggleOpen}
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-45" : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </Button>
    </div>
  )
}

