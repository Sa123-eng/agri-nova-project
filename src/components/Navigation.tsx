import { Button } from "@/components/ui/button";
import { Leaf, BarChart3, Cloud, Settings, User, Bell } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-hero rounded-xl">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">AgriTech Pro</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-foreground">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Leaf className="w-4 h-4 mr-2" />
              Crops
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Cloud className="w-4 h-4 mr-2" />
              Weather
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}