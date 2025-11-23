import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const orders = [
  { id: 1, date: "2025-12-15", customer: "Lê Ngọc Hân", service: "Maintenance", vehicle: "VF6", status: "Done" },
  {
    id: 2,
    date: "2025-12-14",
    customer: "Nguyễn Hải Đăng",
    service: "Battery Check",
    vehicle: "VF5",
    status: "Completed",
  },
];

export default function TechnicianOrders() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Service Orders</h1>

      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Customer</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Vehicle</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Service</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4 text-foreground">{order.date}</td>
                    <td className="py-4 px-4 text-foreground">{order.customer}</td>
                    <td className="py-4 px-4 text-foreground">{order.vehicle}</td>
                    <td className="py-4 px-4 text-foreground">{order.service}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded font-semibold">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
