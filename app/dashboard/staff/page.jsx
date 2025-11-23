"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, Wrench, TrendingUp } from "lucide-react"
import RecentOrders from "@/components/dashboard/recent-orders"

const stats = [
  { label: "Total Customers", value: "124", icon: Users, color: "text-blue-500" },
  { label: "Pending Services", value: "8", icon: Wrench, color: "text-orange-500" },
  { label: "Completed Today", value: "12", icon: TrendingUp, color: "text-green-500" },
  { label: "Revenue (Today)", value: "12.5M", icon: BarChart3, color: "text-purple-500" },
]

export default function StaffDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back to the service center</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-muted rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <RecentOrders />
    </div>
  )
}
