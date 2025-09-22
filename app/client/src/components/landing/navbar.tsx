"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet, TrendingUp, ArrowLeftRight, Shield } from "lucide-react"

interface NavbarProps {
  onLoginOpen: () => void
  onSignupOpen: () => void
}

export const Navbar({ onLoginOpen, onSignupOpen }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Lending", href: "#lending", icon: TrendingUp },
    { name: "Borrowing", href: "#borrowing", icon: Wallet },
    { name: "Swap", href: "#swap", icon: ArrowLeftRight },
    { name: "Security", href: "#security", icon: Shield },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Escrow</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="ghost" onClick={onLoginOpen}>
                Login
              </Button>
              <Button onClick={onSignupOpen}>Sign Up</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </a>
                )
              })}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" onClick={onLoginOpen} className="justify-start">
                  Login
                </Button>
                <Button onClick={onSignupOpen} className="justify-start">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
