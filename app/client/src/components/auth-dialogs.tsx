"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"
import { Separator } from ./ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Eye, EyeOff, Github, Mail } from "lucide-react"

interface AuthDialogsProps {
  isLoginOpen: boolean
  isSignupOpen: boolean
  onLoginClose: () => void
  onSignupClose: () => void
  onSwitchToSignup: () => void
  onSwitchToLogin: () => void
}

export const  AuthDialogs({
  isLoginOpen,
  isSignupOpen,
  onLoginClose,
  onSignupClose,
  onSwitchToSignup,
  onSwitchToLogin,
}: AuthDialogsProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })

      const result = await response.json()

      if (response.ok) {
        console.log("Login successful:", result)
        onLoginClose()
        // Handle successful login (e.g., store token, redirect)
      } else {
        console.error("Login failed:", result.message)
        // Handle login error
      }
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (signupData.password !== signupData.confirmPassword) {
      console.error("Passwords don't match")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("https://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: signupData.firstName,
          lastName: signupData.lastName,
          email: signupData.email,
          password: signupData.password,
          role: signupData.role,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        console.log("Registration successful:", result)
        onSignupClose()
        // Handle successful registration
      } else {
        console.error("Registration failed:", result.message)
        // Handle registration error
      }
    } catch (error) {
      console.error("Registration error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={onLoginClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Welcome Back</DialogTitle>
            <DialogDescription className="text-center">Sign in to your account to continue</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full bg-transparent" type="button">
                <Mail className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full bg-transparent" type="button">
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="link" className="px-0 text-sm">
                  Forgot password?
                </Button>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Button
                variant="link"
                className="px-0"
                onClick={() => {
                  onLoginClose()
                  onSwitchToSignup()
                }}
              >
                Sign up
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={isSignupOpen} onOpenChange={onSignupClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Create Account</DialogTitle>
            <DialogDescription className="text-center">
              Join thousands of users in the DeFi revolution
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Social Signup Buttons */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full bg-transparent" type="button">
                <Mail className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full bg-transparent" type="button">
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or create with email</span>
              </div>
            </div>

            {/* Signup Form */}
            <form className="space-y-4" onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-firstname">First Name</Label>
                  <Input
                    id="signup-firstname"
                    placeholder="John"
                    required
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-lastname">Last Name</Label>
                  <Input
                    id="signup-lastname"
                    placeholder="Doe"
                    required
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-role">Role</Label>
                <Select
                  value={signupData.role}
                  onValueChange={(value) => setSignupData({ ...signupData, role: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="borrower">Borrower</SelectItem>
                    <SelectItem value="lender">Lender</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="liquidity_provider">Liquidity Provider</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    required
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Button
                variant="link"
                className="px-0"
                onClick={() => {
                  onSignupClose()
                  onSwitchToLogin()
                }}
              >
                Sign in
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
