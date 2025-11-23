"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const serviceHistory = [
  {
    id: 1,
    date: "2024-10-15",
    vehicle: "VF5 - 30A-222.22",
    service: "Maintenance & Repair",
    center: "ECar Binh Duong",
    cost: 1500000,
    status: "completed",
  },
  {
    id: 2,
    date: "2024-09-20",
    vehicle: "VF9 - 51A-CUS-159",
    service: "Battery Check",
    center: "ECar Thu Duc",
    cost: 500000,
    status: "completed",
  },
  {
    id: 3,
    date: "2024-08-10",
    vehicle: "VF5 - 30A-222.22",
    service: "Inspection",
    center: "ECar Tan Binh",
    cost: 300000,
    status: "completed",
  },
]

export default function ServiceHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Service History</h1>
        <p className="text-muted-foreground mt-1">View your past maintenance records</p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Past Services</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {serviceHistory.map((record) => (
              <div
                key={record.id}
                className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">{record.service}</p>
                    <p className="text-sm text-muted-foreground">{record.vehicle}</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Completed</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Date</span>
                    <p className="text-foreground font-medium">{record.date}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Center</span>
                    <p className="text-foreground font-medium">{record.center}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Cost</span>
                    <p className="text-foreground font-medium">
                      {record.cost.toLocaleString()} VND
                    </p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Status</span>
                    <p className="text-foreground font-medium capitalize">
                      {record.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
