import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Smartphone, Cpu, Wifi, Zap, Clock, Settings, AlertCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import automationDashboard from "@/assets/automation-dashboard.jpg";
import mobileControl from "@/assets/mobile-control.jpg";
import valveSystem from "@/assets/smart-valve-system.jpg";

const AutomatedControls = () => {
  // Mock data for demonstration
  const controlledSystems = [
    { name: "Irrigation System", status: true, lastActive: "2 hours ago" },
    { name: "Greywater Processing", status: true, lastActive: "Active now" },
    { name: "Cooling Tower Supply", status: false, lastActive: "5 hours ago" },
    { name: "Toilet Flush System", status: true, lastActive: "Active now" },
  ];

  const scheduledTasks = [
    { task: "Nighttime Watering", time: "02:00 - 04:00", days: "Mon, Wed, Fri" },
    { task: "System Flush", time: "06:00", days: "Daily" },
    { task: "Peak Usage Adjustment", time: "07:00 - 09:00", days: "Weekdays" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-water-primary">Automated</span> Water Controls
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Intelligent system management with remote monitoring and AI optimization
        </p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src={automationDashboard} 
            alt="Automation control dashboard"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Centralized Control System</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our automated platform gives you complete visibility and control over all water systems
            from a single dashboard. Monitor flows, adjust settings, and receive alerts - all in
            real time from any device.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-water-primary" />
              <span className="text-sm">Cloud Connected</span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-water-primary" />
              <span className="text-sm">AI Optimized</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-water-primary" />
              <span className="text-sm">Mobile Access</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-water-primary" />
              <span className="text-sm">Instant Alerts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Interface Demo */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Interactive System Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {controlledSystems.map((system, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
                <CardTitle className="text-lg">{system.name}</CardTitle>
                <Switch checked={system.status} />
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className={system.status ? "text-eco-green" : "text-muted-foreground"}>
                    {system.status ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Active</span>
                  <span>{system.lastActive}</span>
                </div>
                <Slider 
                  defaultValue={[system.status ? 75 : 0]} 
                  max={100} 
                  step={1} 
                  className="mt-4"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Mobile Management</h2>
          <p className="text-muted-foreground leading-relaxed">
            Control your water systems from anywhere with our dedicated mobile app. Receive push
            notifications for critical events and make adjustments on-the-go.
          </p>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
              <Smartphone className="w-6 h-6 text-water-primary" />
              <div>
                <div className="font-medium">Real-time Monitoring</div>
                <div className="text-sm text-muted-foreground">
                  View all system metrics from your phone
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
              <AlertCircle className="w-6 h-6 text-alert-orange" />
              <div>
                <div className="font-medium">Instant Alerts</div>
                <div className="text-sm text-muted-foreground">
                  Get notified of leaks or system issues
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
              <Settings className="w-6 h-6 text-water-secondary" />
              <div>
                <div className="font-medium">Remote Adjustments</div>
                <div className="text-sm text-muted-foreground">
                  Change settings from anywhere
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img 
            src={mobileControl} 
            alt="Mobile control interface"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
      </div>

      {/* Smart Valve System */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src={valveSystem} 
            alt="Smart valve control system"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Smart Valve Network</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our IoT-enabled valves provide precise flow control throughout your facility.
            The system automatically adjusts based on usage patterns and can isolate
            sections during leaks or maintenance.
          </p>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center p-2 bg-water-primary/10 rounded-lg mt-0.5">
                <Zap className="w-4 h-4 text-water-primary" />
              </div>
              <div>
                <div className="font-medium">Instant Section Isolation</div>
                <div className="text-sm text-muted-foreground">
                  Automatically shuts off problem areas within seconds
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center p-2 bg-water-primary/10 rounded-lg mt-0.5">
                <Cpu className="w-4 h-4 text-water-primary" />
              </div>
              <div>
                <div className="font-medium">Predictive Adjustments</div>
                <div className="text-sm text-muted-foreground">
                  AI anticipates usage patterns and pre-adjusts flow
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center p-2 bg-water-primary/10 rounded-lg mt-0.5">
                <Clock className="w-4 h-4 text-water-primary" />
              </div>
              <div>
                <div className="font-medium">Usage Scheduling</div>
                <div className="text-sm text-muted-foreground">
                  Program different settings for various times and days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduling System */}
      <div className="bg-surface-blue/30 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Automated Scheduling</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Set it and forget it - create custom schedules for all your water systems that
          automatically adjust based on season, weather, and facility occupancy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scheduledTasks.map((task, index) => (
            <Card key={index} className="p-6 hover:shadow-water transition-all">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-water-primary" />
                  {task.task}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{task.time}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Days</span>
                  <span className="font-medium">{task.days}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomatedControls;