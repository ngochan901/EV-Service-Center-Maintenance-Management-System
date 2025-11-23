"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoginForm from "@/components/auth/login-form"

export default function Home() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setIsAuthenticated(true)
      const userData = JSON.parse(user)
      router.push(`/dashboard/${userData.role.toLowerCase()}`)
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-background">Loading...</div>
  }

  return !isAuthenticated ? <LoginForm /> : null
}
