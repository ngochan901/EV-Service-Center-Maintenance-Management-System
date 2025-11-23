"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const mockUsers = [
  { id: 1, email: "admin@ecar.com", password: "admin123", role: "ADMIN", name: "Lê Ngọc Hân" },
  { id: 2, email: "staff@ecar.com", password: "staff123", role: "STAFF", name: "Võ Đức Anh" },
  { id: 3, email: "tech@ecar.com", password: "tech123", role: "TECHNICIAN", name: "Huyền Vũ Băng" },
  { id: 4, email: "customer@ecar.com", password: "customer123", role: "CUSTOMER", name: "CUSTOMER ROLE" },
]

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const user = mockUsers.find((u) => u.email === email && u.password === password)

    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
        }),
      )
      router.push(`/dashboard/${user.role.toLowerCase()}`)
    } else {
      setError("Invalid email or password")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border">
        <CardHeader className="space-y-2">
          <div className="text-2xl font-bold text-primary">Ecar Service</div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your EV Service Center account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border"
              />
            </div>
            {error && <div className="text-sm text-destructive">{error}</div>}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Demo Accounts:</p>
              <div className="space-y-2 text-xs">
                {mockUsers.map((user) => (
                  <div key={user.id} className="text-muted-foreground">
                    <span className="font-mono">{user.email}</span> / <span className="font-mono">{user.password}</span>{" "}
                    - {user.role}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
