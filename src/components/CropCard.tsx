import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CropCardProps {
  name: string;
  area: string;
  status: "Healthy" | "Growing" | "Attention" | "Harvest Ready";
  progress: number;
  image?: string;
}

export function CropCard({ name, area, status, progress }: CropCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Healthy":
        return "bg-success text-success-foreground";
      case "Growing":
        return "bg-chart-1 text-white";
      case "Attention":
        return "bg-warning text-warning-foreground";
      case "Harvest Ready":
        return "bg-chart-2 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{area}</p>
        </div>
        <Badge className={getStatusColor(status)}>
          {status}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Growth Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </Card>
  );
}