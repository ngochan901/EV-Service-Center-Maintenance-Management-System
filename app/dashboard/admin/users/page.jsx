import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

const users = [
  {
    id: 1,
    email: "lengochan090105@gmail.com",
    name: "Lê Ngọc Hân",
    phone: "0373587001",
    role: "ADMIN",
    created: "2025-10-11",
  },
  {
    id: 2,
    email: "dinhthingocoanh030805@gmail.com",
    name: "Ngọc Anh",
    phone: "0373587008",
    role: "ADMIN",
    created: "2025-10-11",
  },
  {
    id: 3,
    email: "staff010@example.com",
    name: "Võ Đức Anh",
    phone: "0912345010",
    role: "STAFF",
    created: "2025-10-11",
  },
];

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage system users and permissions
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          Create User
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Users</CardTitle>

          <div className="flex items-center bg-input border border-border rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-foreground ml-2 outline-none"
            />
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Phone
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Role
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Created
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-foreground">{user.email}</td>
                    <td className="py-4 px-4 text-foreground">{user.name}</td>
                    <td className="py-4 px-4 text-foreground">{user.phone}</td>

                    <td className="py-4 px-4">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          user.role === "ADMIN"
                            ? "bg-primary/20 text-primary"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-foreground text-xs">
                      {user.created}
                    </td>

                    <td className="py-4 px-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border bg-transparent"
                      >
                        Edit
                      </Button>
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
