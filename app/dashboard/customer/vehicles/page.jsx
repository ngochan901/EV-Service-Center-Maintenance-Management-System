import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit2, Trash2 } from "lucide-react";

const vehicles = [
  {
    id: 1,
    model: "VF5",
    type: "A-Segment SUV",
    plate: "30A-222.22",
    vin: "VIN0000000000002",
    nextKm: "-",
    nextDate: "-",
    lastService: "2024-10-15",
    mileage: 25000,
  },
  {
    id: 2,
    model: "VF9",
    type: "E-Segment SUV",
    plate: "51A-CUS-159",
    vin: "VIN0000000000004",
    nextKm: "-",
    nextDate: "-",
    lastService: "2024-09-20",
    mileage: 15000,
  },
];

export default function MyVehicles() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Vehicles</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your electric vehicles
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          Add Vehicle
        </Button>
      </div>

      <div className="grid gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase">Model</label>
                      <p className="text-lg font-semibold text-foreground">{vehicle.model}</p>
                      <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase">License Plate</label>
                      <p className="text-lg font-semibold text-foreground">{vehicle.plate}</p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase">Mileage</label>
                      <p className="text-lg font-semibold text-foreground">
                        {vehicle.mileage.toLocaleString()} km
                      </p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase">Last Service</label>
                      <p className="text-lg font-semibold text-foreground">{vehicle.lastService}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-border bg-transparent">
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-border text-destructive bg-transparent">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
