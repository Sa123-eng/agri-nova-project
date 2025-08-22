import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const yieldData = [
  { month: "Jan", yield: 2400, efficiency: 85 },
  { month: "Feb", yield: 2100, efficiency: 82 },
  { month: "Mar", yield: 2800, efficiency: 88 },
  { month: "Apr", yield: 3200, efficiency: 92 },
  { month: "May", yield: 3800, efficiency: 95 },
  { month: "Jun", yield: 4200, efficiency: 94 },
];

export function AnalyticsChart() {
  return (
    <Card className="p-6 bg-gradient-card shadow-soft">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Crop Yield Analytics</h3>
        <p className="text-sm text-muted-foreground">Monthly performance overview</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={yieldData}>
            <defs>
              <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Area
              type="monotone"
              dataKey="yield"
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#yieldGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}