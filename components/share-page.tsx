"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, Linkedin, Mail, LinkIcon, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SharePageProps {
  title?: string
  description?: string
  className?: string
}

export default function SharePage({ title, description, className = "" }: SharePageProps) {
  const [copied, setCopied] = useState(false)

  // Get current URL
  const getUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href
    }
    return ""
  }

  // Get page title
  const getTitle = () => {
    return title || (typeof document !== "undefined" ? document.title : "ACK St. Andrews Kibabet")
  }

  // Get page description
  const getDescription = () => {
    return description || "Check out this page from ACK St. Andrews Kibabet Church"
  }

  const shareUrl = getUrl()
  const shareTitle = getTitle()
  const shareDescription = getDescription()

  // Share on Facebook
  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  // Share on Twitter
  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      "_blank",
    )
  }

  // Share on LinkedIn
  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  // Share via Email
  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(
      `${shareDescription}\n\n${shareUrl}`,
    )}`
  }

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={`gap-2 ${className}`}>
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={shareFacebook} className="cursor-pointer">
          <Facebook className="h-4 w-4 mr-2" />
          <span>Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareTwitter} className="cursor-pointer">
          <Twitter className="h-4 w-4 mr-2" />
          <span>Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareLinkedIn} className="cursor-pointer">
          <Linkedin className="h-4 w-4 mr-2" />
          <span>LinkedIn</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareEmail} className="cursor-pointer">
          <Mail className="h-4 w-4 mr-2" />
          <span>Email</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyLink} className="cursor-pointer">
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <LinkIcon className="h-4 w-4 mr-2" />
              <span>Copy Link</span>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

