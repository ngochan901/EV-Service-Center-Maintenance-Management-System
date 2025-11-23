import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tasks = [
  { id: 1, service: "Maintenance", customer: "Lê Ngọc Hân", vehicle: "VF6", status: "In Progress", progress: 65 },
  { id: 2, service: "Battery Check", customer: "Nguyễn Hải Đăng", vehicle: "VF5", status: "Pending", progress: 0 },
];

export default function MyTasks() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">My Tasks</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{task.service}</p>
                    <p className="text-sm text-muted-foreground">
                      {task.customer} ({task.vehicle})
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded text-xs font-semibold">
                    {task.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-foreground">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-all"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Update Progress
                  </Button>
                  <Button size="sm" variant="outline" className="border-border bg-transparent">
                    Mark Complete
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
