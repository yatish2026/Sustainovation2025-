import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Smartphone, Bell, BellOff, MapPin, AlertTriangle, Clock, Battery, Wifi } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import mobileAlertsDashboard from "@/assets/mobile-alerts-dashboard.jpg";
import notificationScreenshot from "@/assets/notification-screenshot.jpg";
import alertFlowDiagram from "@/assets/alert-flow-diagram.jpg";

const MobileAlerts = () => {
  // Sample alert data
  const activeAlerts = [
    {
      id: 1,
      severity: "Critical",
      location: "Restroom B2 - Sink 3",
      time: "2 minutes ago",
      status: "unread",
      flowRate: "2.5 gal/min"
    },
    {
      id: 2,
      severity: "Warning",
      location: "Kitchen Area - Dishwasher",
      time: "15 minutes ago",
      status: "read",
      flowRate: "0.8 gal/min"
    }
  ];

  const alertHistory = [
    { id: 101, date: "Today", resolved: true, location: "Outdoor Sprinkler 2" },
    { id: 102, date: "Yesterday", resolved: true, location: "Floor 3 - Shower" },
    { id: 103, date: "Jun 12", resolved: true, location: "Boiler Room" },
    { id: 104, date: "Jun 10", resolved: true, location: "Laundry Room" }
  ];

  const notificationTypes = [
    {
      type: "Leak Detection",
      description: "Immediate push notification with location details",
      icon: AlertTriangle,
      color: "text-alert-orange"
    },
    {
      type: "Usage Spike",
      description: "Warning when usage exceeds thresholds",
      icon: Bell,
      color: "text-water-primary"
    },
    {
      type: "System Status",
      description: "Daily summary and maintenance alerts",
      icon: Battery,
      color: "text-eco-green"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-water-primary">Mobile</span> Alert System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Instant notifications for water anomalies sent directly to your devices
        </p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src={mobileAlertsDashboard} 
            alt="Mobile alerts dashboard"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Real-Time Alert Monitoring</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our system detects water issues instantly and notifies facility managers through multiple channels:
            mobile push notifications, SMS texts, and dashboard alerts - ensuring you never miss a critical event.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4 flex items-center gap-3">
              <Bell className="w-5 h-5 text-alert-orange" />
              <div>
                <div className="font-medium">Avg. Response Time</div>
                <div className="text-sm text-muted-foreground">Under 5 minutes</div>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex items-center gap-3">
              <Wifi className="w-5 h-5 text-water-primary" />
              <div>
                <div className="font-medium">System Uptime</div>
                <div className="text-sm text-muted-foreground">99.99% reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Active Alerts</h2>
        <div className="space-y-4">
          {activeAlerts.map((alert) => (
            <Alert 
              key={alert.id} 
              variant={alert.severity === "Critical" ? "destructive" : "default"}
              className="cursor-pointer hover:shadow-md transition-all"
            >
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="flex items-center justify-between">
                <span>{alert.location}</span>
                <span className="text-sm font-normal">{alert.time}</span>
              </AlertTitle>
              <AlertDescription className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <div className="text-sm font-medium">Flow Rate</div>
                  <div>{alert.flowRate}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Status</div>
                  <div className="flex items-center gap-2">
                    {alert.status === "unread" ? (
                      <Bell className="w-4 h-4 text-alert-orange" />
                    ) : (
                      <BellOff className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span>{alert.status === "unread" ? "Requires attention" : "Acknowledged"}</span>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>

      {/* Mobile Notification Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Mobile Notification Examples</h2>
          <div className="space-y-4">
            {notificationTypes.map((item, index) => (
              <Card key={index} className="p-4 flex items-start gap-4">
                <div className={`p-2 rounded-lg ${item.color}/20 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">{item.type}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <img 
            src={notificationScreenshot} 
            alt="Mobile notification example"
            className="w-full h-auto rounded-xl shadow-lg border border-border max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Alert Flow Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src={alertFlowDiagram} 
            alt="Alert flow diagram"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">How Our Alert System Works</h2>
          <ol className="space-y-4 list-decimal pl-5">
            <li>
              <div className="font-medium">Detection</div>
              <p className="text-muted-foreground text-sm">
                Sensors identify abnormal flow patterns or leaks (as small as 0.1 gal/min)
              </p>
            </li>
            <li>
              <div className="font-medium">Verification</div>
              <p className="text-muted-foreground text-sm">
                AI cross-checks with other sensors to confirm the alert
              </p>
            </li>
            <li>
              <div className="font-medium">Notification</div>
              <p className="text-muted-foreground text-sm">
                Instant alerts sent via push, SMS, and email within 15 seconds
              </p>
            </li>
            <li>
              <div className="font-medium">Resolution</div>
              <p className="text-muted-foreground text-sm">
                System tracks acknowledgment and provides repair guidance
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* Alert History */}
      <div className="bg-surface-blue/30 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Alert History</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-water-primary">24</div>
            <div className="text-sm text-muted-foreground">Alerts this month</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-eco-green">92%</div>
            <div className="text-sm text-muted-foreground">Resolved within 1 hour</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-alert-orange">2.1</div>
            <div className="text-sm text-muted-foreground">Avg. alerts per week</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-water-secondary">$8,500</div>
            <div className="text-sm text-muted-foreground">Potential savings</div>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="font-medium mb-4">Recent Resolved Alerts</h3>
          <div className="space-y-3">
            {alertHistory.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{alert.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{alert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAlerts;