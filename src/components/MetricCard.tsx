import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  className 
}: MetricCardProps) {
  return (
    <Card className={cn(
      "p-6 bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300 border-0",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-accent rounded-xl">
            <Icon className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
        <div className={cn(
          "text-sm font-medium px-2 py-1 rounded-lg",
          changeType === "positive" && "text-success bg-success/10",
          changeType === "negative" && "text-destructive bg-destructive/10",
          changeType === "neutral" && "text-muted-foreground bg-muted"
        )}>
          {change}
        </div>
      </div>
    </Card>
  );
}