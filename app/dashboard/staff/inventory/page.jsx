import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Plus } from "lucide-react";

const parts = [
  { id: 1, name: "Battery Module", stock: 2, minLevel: 5, unit: "pcs" },
  { id: 2, name: "Motor Controller", stock: 5, minLevel: 3, unit: "pcs" },
  { id: 3, name: "Cooling System", stock: 1, minLevel: 2, unit: "pcs" },
  { id: 4, name: "Power Inverter", stock: 8, minLevel: 4, unit: "pcs" },
  { id: 5, name: "Brake Pads", stock: 12, minLevel: 10, unit: "sets" },
];

export default function Inventory() {
  const lowStockParts = parts.filter((p) => p.stock <= p.minLevel);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Parts & Inventory</h1>
          <p className="text-muted-foreground mt-1">Manage EV service parts and supplies</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          Add Part
        </Button>
      </div>

      {lowStockParts.length > 0 && (
        <Card className="bg-destructive/10 border-destructive/30">
          <CardContent className="pt-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
            <div>
              <p className="font-semibold text-destructive">Low Stock Alert</p>
              <p className="text-sm text-muted-foreground">
                {lowStockParts.length} item(s) below minimum level:{" "}
                {lowStockParts.map((p) => p.name).join(", ")}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Current Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Part Name</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Current Stock</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Min. Level</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Unit</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {parts.map((part) => (
                  <tr
                    key={part.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-foreground">{part.name}</td>
                    <td className="py-4 px-4 text-foreground font-semibold">{part.stock}</td>
                    <td className="py-4 px-4 text-foreground">{part.minLevel}</td>
                    <td className="py-4 px-4 text-foreground">{part.unit}</td>
                    <td className="py-4 px-4">
                      <div
                        className={`text-xs font-semibold px-2 py-1 rounded w-fit ${
                          part.stock <= part.minLevel
                            ? "bg-destructive/20 text-destructive"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {part.stock <= part.minLevel ? "Low Stock" : "In Stock"}
                      </div>
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
