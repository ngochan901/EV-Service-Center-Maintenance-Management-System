import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, CheckCircle, Clock } from "lucide-react";

const stats = [
  { label: "Today Tasks", value: "5", icon: Wrench, color: "text-blue-500" },
  { label: "Completed", value: "3", icon: CheckCircle, color: "text-green-500" },
  { label: "In Progress", value: "2", icon: Clock, color: "text-orange-500" },
];

const myTasks = [
  {
    id: 1,
    customer: "Lê Ngọc Hân",
    vehicle: "VF6 - 51G-111.13",
    service: "Maintenance & Repair",
    time: "10:00 - 12:00",
    status: "In Progress",
  },
  {
    id: 2,
    customer: "Nguyễn Hải Đăng",
    vehicle: "VF5 - 30A-222.22",
    service: "Battery Check",
    time: "14:00 - 15:00",
    status: "Pending",
  },
];

export default function TechnicianDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Dashboard</h1>
        <p className="text-muted-foreground mt-1">Today's tasks and assignments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 bg-muted rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>My Tasks Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myTasks.map((task) => (
              <div
                key={task.id}
                className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">{task.service}</p>
                    <p className="text-sm text-muted-foreground">
                      {task.customer} - {task.vehicle}
                    </p>
                  </div>
                  <Badge
                    className={
                      task.status === "In Progress"
                        ? "bg-orange-500/20 text-orange-300"
                        : "bg-blue-500/20 text-blue-300"
                    }
                  >
                    {task.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{task.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
