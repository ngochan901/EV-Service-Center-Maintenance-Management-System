"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

const customerData = {
  name: "CUSTOMER ROLE",
  email: "customerrole01@gmail.com",
  phone: "0373587004",
  vehicles: [
    {
      id: 1,
      model: "VF5",
      type: "A-Segment SUV",
      plate: "30A-222.22",
      vin: "VIN0000000000002",
      nextKm: "-",
      nextDate: "-",
    },
    {
      id: 2,
      model: "VF9",
      type: "E-Segment SUV",
      plate: "51A-CUS-159",
      vin: "VIN0000000000004",
      nextKm: "-",
      nextDate: "-",
    },
    {
      id: 3,
      model: "VF6",
      type: "B-Segment SUV",
      plate: "51G-111.13",
      vin: "VIN0000000000003",
      nextKm: "36000",
      nextDate: "23-11-2026",
    },
  ],
}

export default function CustomerProfile() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">User profile</h1>
      </div>

      {/* Personal Information */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Personal information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-sm text-muted-foreground">Full name</label>
              <p className="text-foreground font-medium">{customerData.name}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <p className="text-foreground font-medium">{customerData.email}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Phone Number</label>
              <p className="text-foreground font-medium">{customerData.phone}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your Vehicle */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Your Vehicle</CardTitle>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            <Plus className="w-4 h-4" />
            Add Vehicle
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerData.vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-bold text-foreground">{vehicle.model}</p>
                    <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <label className="text-muted-foreground">Number plate:</label>
                      <p className="text-foreground font-medium">{vehicle.plate}</p>
                    </div>
                    <div>
                      <label className="text-muted-foreground">VIN:</label>
                      <p className="text-foreground font-medium">{vehicle.vin}</p>
                    </div>
                    <div>
                      <label className="text-muted-foreground">Next kilometer:</label>
                      <p className="text-foreground font-medium">{vehicle.nextKm}</p>
                    </div>
                    <div>
                      <label className="text-muted-foreground">Next maintenance date:</label>
                      <p className="text-foreground font-medium">{vehicle.nextDate}</p>
                    </div>
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
