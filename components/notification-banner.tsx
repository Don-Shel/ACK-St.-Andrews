"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bell, X } from "lucide-react"
import { useNotificationStore } from "@/lib/notification-store"

interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  link?: string
}

// Sample notifications
const sampleNotifications: Notification[] = [
  {
    id: "1",
    title: "Special Service",
    message: "Join us this Sunday for a special Easter celebration service at 8:00 AM.",
    type: "info",
    link: "/events",
  },
  {
    id: "2",
    title: "Prayer Meeting",
    message: "Weekly prayer meeting has been moved to Wednesday at 6:00 PM.",
    type: "warning",
    link: "/events",
  },
  {
    id: "3",
    title: "Choir Practice",
    message: "Choir practice scheduled for Saturday at 3:00 PM. All members please attend.",
    type: "info",
    link: "/choir",
  },
]

export default function NotificationBanner() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0)
  const { showBanner, setShowBanner, dismissed, setDismissed } = useNotificationStore()

  useEffect(() => {
    // Simulate fetching notifications
    setTimeout(() => {
      // Filter out dismissed notifications
      const activeNotifications = sampleNotifications.filter((notification) => !dismissed.includes(notification.id))
      setNotifications(activeNotifications)

      if (activeNotifications.length > 0) {
        setShowBanner(true)
      }
    }, 2000)

    // Rotate through notifications every 8 seconds
    const interval = setInterval(() => {
      if (notifications.length > 1) {
        setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [dismissed, notifications.length, setShowBanner])

  const dismissNotification = (id: string) => {
    setDismissed([...dismissed, id])

    // Remove the notification
    const updatedNotifications = notifications.filter((notification) => notification.id !== id)
    setNotifications(updatedNotifications)

    // If no more notifications, hide the banner
    if (updatedNotifications.length === 0) {
      setShowBanner(false)
    } else {
      // Adjust the index if needed
      if (currentNotificationIndex >= updatedNotifications.length) {
        setCurrentNotificationIndex(0)
      }
    }
  }

  const dismissAllNotifications = () => {
    setDismissed([...dismissed, ...notifications.map((n) => n.id)])
    setNotifications([])
    setShowBanner(false)
  }

  if (!showBanner || notifications.length === 0) return null

  const currentNotification = notifications[currentNotificationIndex]

  const getBgColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-500/80 backdrop-blur-md"
      case "warning":
        return "bg-amber-500/80 backdrop-blur-md"
      case "error":
        return "bg-red-500/80 backdrop-blur-md"
      default:
        return "bg-primary/80 backdrop-blur-md"
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-40 transition-transform duration-500 translate-y-0">
      <div className={`${getBgColor(currentNotification.type)} text-white p-3 shadow-md`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="h-5 w-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-bold">{currentNotification.title}</p>
              <p className="text-sm">{currentNotification.message}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentNotification.link && (
              <Button asChild variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                <a href={currentNotification.link}>Learn More</a>
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => dismissNotification(currentNotification.id)}
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

