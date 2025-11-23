"use client"

import { useRouter } from "next/navigation"
import { Bell, Moon, LogOut } from "lucide-react"

export default function Header({ user }) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div></div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground">
          <Moon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
            {user?.name?.[0]?.toUpperCase() || "R"}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{user?.name || "User"}</span>
            <span className="text-xs text-muted-foreground">{user?.role || "ROLE"}</span>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground ml-2"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
