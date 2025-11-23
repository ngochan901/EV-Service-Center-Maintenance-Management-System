import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceStats = [
  { service: "Maintenance", total: 125, completed: 120, revenue: 187.5 },
  { service: "Repair", total: 68, completed: 65, revenue: 156.0 },
  { service: "Battery Check", total: 92, completed: 90, revenue: 46.0 },
  { service: "Inspection", total: 45, completed: 45, revenue: 13.5 },
];

export default function AdminServices() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Service Management</h1>
        <p className="text-muted-foreground mt-1">All services overview</p>
      </div>

      {/* Statistics Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Service Statistics</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Service Type</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Total Orders</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Completed</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Completion %</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Revenue (M)</th>
                </tr>
              </thead>

              <tbody>
                {serviceStats.map((stat, idx) => {
                  const percentage = (stat.completed / stat.total) * 100;

                  return (
                    <tr key={idx} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4 px-4 text-foreground font-medium">{stat.service}</td>

                      <td className="py-4 px-4 text-foreground">{stat.total}</td>

                      <td className="py-4 px-4 text-foreground">{stat.completed}</td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-foreground">
                            {percentage.toFixed(0)}%
                          </span>
                        </div>
                      </td>

                      <td className="py-4 px-4 text-accent font-bold">{stat.revenue}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
