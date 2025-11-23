"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Users, Calendar, Wrench, Package, BarChart3, Settings, Home, Car } from "lucide-react"

export default function Sidebar({ role = "ADMIN" }) {
  const pathname = usePathname()

  const menuItems = {
    ADMIN: [
      { label: "Dashboard", href: "/dashboard/admin", icon: <Home className="w-5 h-5" /> },
      { label: "User Management", href: "/dashboard/admin/users", icon: <Users className="w-5 h-5" /> },
      { label: "Service Management", href: "/dashboard/admin/services", icon: <Wrench className="w-5 h-5" /> },
      { label: "Profit Report", href: "/dashboard/admin/reports", icon: <BarChart3 className="w-5 h-5" /> },
    ],
    STAFF: [
      { label: "Dashboard", href: "/dashboard/staff", icon: <Home className="w-5 h-5" /> },
      { label: "Booking", href: "/dashboard/staff/bookings", icon: <Calendar className="w-5 h-5" /> },
      { label: "Service Management", href: "/dashboard/staff/services", icon: <Wrench className="w-5 h-5" /> },
      { label: "Parts & Inventory", href: "/dashboard/staff/inventory", icon: <Package className="w-5 h-5" /> },
    ],
    TECHNICIAN: [
      { label: "Dashboard", href: "/dashboard/technician", icon: <Home className="w-5 h-5" /> },
      { label: "My Tasks", href: "/dashboard/technician/tasks", icon: <Wrench className="w-5 h-5" /> },
      { label: "Service Orders", href: "/dashboard/technician/orders", icon: <Calendar className="w-5 h-5" /> },
    ],
    CUSTOMER: [
      { label: "Profile", href: "/dashboard/customer", icon: <Home className="w-5 h-5" /> },
      { label: "My Vehicles", href: "/dashboard/customer/vehicles", icon: <Car className="w-5 h-5" /> },
      { label: "Booking", href: "/dashboard/customer/booking", icon: <Calendar className="w-5 h-5" /> },
      { label: "Service History", href: "/dashboard/customer/history", icon: <BarChart3 className="w-5 h-5" /> },
    ],
  }

  const items = menuItems[role] || []

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="text-xl font-bold text-sidebar-primary">Ecar Service</div>
      </div>
      <nav className="flex-1 overflow-auto p-4 space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
              pathname === item.href
                ? "bg-sidebar-primary/10 text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent/10",
            )}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/10 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  )
}
