import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  { id: 1, name: "Maintenance", count: 15, revenue: 22500000 },
  { id: 2, name: "Repair", count: 8, revenue: 18000000 },
  { id: 3, name: "Battery Check", count: 12, revenue: 6000000 },
  { id: 4, name: "Inspection", count: 6, revenue: 1800000 },
];

export default function ServiceManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Service Management</h1>
        <p className="text-muted-foreground mt-1">Overview of all available services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-foreground">{service.name}</p>
                  <Badge className="mt-2 bg-primary/20 text-primary">
                    {service.count} bookings
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-xl font-bold text-accent">
                    {(service.revenue / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
