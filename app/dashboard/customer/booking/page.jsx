import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, MapPin, Wrench } from "lucide-react";

export default function CustomerBooking() {
  const [formData, setFormData] = useState({
    vehicle: "",
    service: "",
    date: "",
    time: "",
    center: "",
    notes: "",
  });

  const services = ["Maintenance", "Battery Check", "Repair", "Inspection", "Charging System Check"];
  const centers = ["ECar Binh Duong", "ECar Thu Duc", "ECar Tan Binh", "ECar Phu Nhuan"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Book a Service</h1>
        <p className="text-muted-foreground mt-1">Schedule maintenance for your electric vehicle</p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Service Booking Form</CardTitle>
          <CardDescription>Fill in the details to book your service</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium">Select Vehicle</label>
                <select className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground mt-1">
                  <option>Choose a vehicle</option>
                  <option>VF5 - 30A-222.22</option>
                  <option>VF9 - 51A-CUS-159</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Service Type</label>
                <select className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground mt-1">
                  <option>Choose a service</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </label>
                <Input type="date" className="bg-input border-border mt-1" />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Preferred Time
                </label>
                <Input type="time" className="bg-input border-border mt-1" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Service Center
                </label>
                <select className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground mt-1">
                  <option>Choose a center</option>
                  {centers.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <textarea
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground mt-1"
                  rows={4}
                  placeholder="Any special requirements..."
                />
              </div>

            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Wrench className="w-4 h-4" />
              Book Service
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
