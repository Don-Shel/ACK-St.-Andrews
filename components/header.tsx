"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react" // Remove Search import
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import LanguageSwitcher from "./language-switcher"
import { useNotificationStore } from "@/lib/notification-store"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  //{ name: "Sermons", href: "/sermons" },
  { name: "Choir", href: "/choir" },
  //{ name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Remove searchOpen and searchQuery states
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { showBanner } = useNotificationStore()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  // Remove handleSearch function

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        showBanner ? "top-[32px] sm:top-[60px]" : "top-0",
        isScrolled ? "glass border-b border-white/20 dark:border-white/10 shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              ACK St. Andrews
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors relative group",
                pathname === item.href
                  ? "text-primary dark:text-primary"
                  : "text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === item.href ? "w-full" : "",
                )}
              ></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          {/* Remove search button */}

          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>

      {/* Remove search overlay */}

      {/* Mobile menu - Fixed positioning and z-index */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-[100] w-full max-w-sm overflow-y-auto glass shadow-xl px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  ACK St. Andrews
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-full p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Remove mobile search */}

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-semibold leading-7 transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-between mb-4">
                    <LanguageSwitcher />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="rounded-full"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 rounded-full w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

