import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const bookings = [
  {
    id: 1,
    date: "2025-12-15",
    customer: "Lê Ngọc Hân",
    vehicle: "VF5 - 30A-222.22",
    service: "Maintenance",
    status: "Confirmed",
  },
  {
    id: 2,
    date: "2025-12-16",
    customer: "Nguyễn Hải Đăng",
    vehicle: "VF9 - 51A-CUS-159",
    service: "Battery Check",
    status: "Pending",
  },
];

export default function Bookings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
          <p className="text-muted-foreground mt-1">Manage customer service appointments</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          New Booking
        </Button>
      </div>

      <div className="grid gap-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground">Date</label>
                      <p className="font-medium text-foreground">{booking.date}</p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground">Customer</label>
                      <p className="font-medium text-foreground">{booking.customer}</p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground">Vehicle</label>
                      <p className="font-medium text-foreground">{booking.vehicle}</p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground">Service</label>
                      <p className="font-medium text-foreground">{booking.service}</p>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground">Status</label>
                      <p
                        className={`font-medium ${
                          booking.status === "Confirmed" ? "text-green-400" : "text-orange-400"
                        }`}
                      >
                        {booking.status}
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="border-border bg-transparent">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
