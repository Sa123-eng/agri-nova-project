import { Navigation } from "@/components/Navigation";
import { MetricCard } from "@/components/MetricCard";
import { WeatherWidget } from "@/components/WeatherWidget";
import { CropCard } from "@/components/CropCard";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { Button } from "@/components/ui/button";
import { 
  Sprout, 
  TrendingUp, 
  Droplets, 
  Thermometer,
  ArrowRight,
  Leaf
} from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Agriculture
            <br />
            <span className="text-accent-foreground">Management</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Optimize your farm operations with AI-powered insights, real-time monitoring, and data-driven decisions.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Overview */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Farm Overview</h2>
            <Button variant="outline" size="sm">
              View Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Yield"
              value="4,200 kg"
              change="+12.5%"
              changeType="positive"
              icon={Sprout}
            />
            <MetricCard
              title="Farm Efficiency"
              value="94.2%"
              change="+2.1%"
              changeType="positive"
              icon={TrendingUp}
            />
            <MetricCard
              title="Water Usage"
              value="1,250 L"
              change="-8.3%"
              changeType="positive"
              icon={Droplets}
            />
            <MetricCard
              title="Avg Temperature"
              value="24°C"
              change="±0°C"
              changeType="neutral"
              icon={Thermometer}
            />
          </div>
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Analytics Chart */}
            <AnalyticsChart />
            
            {/* Crop Cards */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-primary" />
                Active Crops
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CropCard
                  name="Corn Fields"
                  area="25.5 hectares"
                  status="Healthy"
                  progress={78}
                />
                <CropCard
                  name="Wheat Fields"
                  area="18.2 hectares"
                  status="Growing"
                  progress={65}
                />
                <CropCard
                  name="Soybean Fields"
                  area="12.8 hectares"
                  status="Harvest Ready"
                  progress={95}
                />
                <CropCard
                  name="Tomato Greenhouse"
                  area="3.5 hectares"
                  status="Attention"
                  progress={42}
                />
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <WeatherWidget />
            
            {/* Quick Actions */}
            <div className="bg-gradient-card rounded-xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Sprout className="w-4 h-4 mr-2" />
                  Schedule Irrigation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Droplets className="w-4 h-4 mr-2" />
                  Check Sensors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;