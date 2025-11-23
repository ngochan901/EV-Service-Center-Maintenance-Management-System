"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit2, X } from "lucide-react"

const orders = [
  {
    id: 1,
    customer: "CUSTOMER ROLE",
    carModel: "VF6",
    plate: "51G-111.13",
    center: "ECar Binh Duong",
    service: "Maintenance & Repair",
    appointment: "10:00:00 15-12-2025",
    technician: "ROLE TECHNICIAN",
    status: "New",
  },
  {
    id: 2,
    customer: "CUSTOMER ROLE",
    carModel: "VF6",
    plate: "51G-111.13",
    center: "ECar Binh Duong",
    service: "Maintenance",
    appointment: "14:00:00 10-07-2025",
    technician: "ROLE TECHNICIAN",
    status: "Completed",
  },
  {
    id: 3,
    customer: "CUSTOMER ROLE",
    carModel: "VF9",
    plate: "51A-CUS-159",
    center: "ECar Binh Duong",
    service: "Repair",
    appointment: "12:00:00 29-11-2025",
    technician: "ROLE TECHNICIAN",
    status: "In Progress",
  },
]

export default function RecentOrders() {
  const [filter, setFilter] = useState("all")

  const getStatusBadge = (status) => {
    switch (status) {
      case "New":
        return <Badge className="bg-blue-500/20 text-blue-300">{status}</Badge>
      case "In Progress":
        return <Badge className="bg-orange-500/20 text-orange-300">{status}</Badge>
      case "Completed":
        return <Badge className="bg-green-500/20 text-green-300">{status}</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" className="border-border bg-transparent">
          Filter options
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Customer Name</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Car Model</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">License Plate</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Center</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Service</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Appointment</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Technician</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 text-foreground">{order.customer}</td>
                  <td className="py-4 px-4 text-foreground">{order.carModel}</td>
                  <td className="py-4 px-4 text-foreground">{order.plate}</td>
                  <td className="py-4 px-4 text-foreground">{order.center}</td>
                  <td className="py-4 px-4 text-foreground">{order.service}</td>
                  <td className="py-4 px-4 text-foreground">{order.appointment}</td>
                  <td className="py-4 px-4 text-foreground">{order.technician}</td>
                  <td className="py-4 px-4">{getStatusBadge(order.status)}</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      {order.status !== "Completed" && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
