import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function ProfitReport() {
  const data = [
    { month: "Maintenance", revenue: 187.5, cost: 50, profit: 137.5 },
    { month: "Repair", revenue: 156.0, cost: 45, profit: 111.0 },
    { month: "Battery Service", revenue: 92.0, cost: 20, profit: 72.0 },
    { month: "Other Services", revenue: 15.0, cost: 10, profit: 5.0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profit Report</h1>
        <p className="text-muted-foreground mt-1">
          Financial overview and analytics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Revenue (Month)
              </p>
              <p className="text-3xl font-bold text-accent mt-2">450.5M</p>
              <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12.5% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Expenses (Month)
              </p>
              <p className="text-3xl font-bold text-foreground mt-2">125.0M</p>
              <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4 rotate-180" />
                +5% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Net Profit (Month)
              </p>
              <p className="text-3xl font-bold text-green-400 mt-2">325.5M</p>
              <p className="text-xs text-green-400 mt-2">
                Profit Margin: 72.2%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Breakdown */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Monthly Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-border last:border-b-0"
              >
                <p className="font-medium text-foreground mb-2">{item.month}</p>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Revenue</span>
                    <p className="font-bold text-accent">{item.revenue}M</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Cost</span>
                    <p className="font-bold text-foreground">{item.cost}M</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Profit</span>
                    <p className="font-bold text-green-400">{item.profit}M</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
