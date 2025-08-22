import { Card } from "@/components/ui/card";
import { Cloud, Sun, Droplets, Wind } from "lucide-react";

export function WeatherWidget() {
  return (
    <Card className="p-6 bg-gradient-card shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Weather Today</h3>
        <Sun className="w-8 h-8 text-warning" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-foreground">24°C</span>
          <span className="text-muted-foreground">Sunny</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Droplets className="w-4 h-4 text-chart-1" />
            <div>
              <p className="text-xs text-muted-foreground">Humidity</p>
              <p className="text-sm font-medium">65%</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Wind className="w-4 h-4 text-chart-2" />
            <div>
              <p className="text-xs text-muted-foreground">Wind</p>
              <p className="text-sm font-medium">12 km/h</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Cloud className="w-4 h-4 text-chart-3" />
            <div>
              <p className="text-xs text-muted-foreground">Rain</p>
              <p className="text-sm font-medium">0 mm</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}