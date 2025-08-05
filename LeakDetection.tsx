import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle, Wifi, Smartphone, Zap, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import leakImage from '../assets/leak.png'; // Import your leak image

const leaks = [
  {
    location: "Restroom B2 - Sink 3",
    severity: "Critical",
    flowRate: "2.5 gal/min",
    duration: "45 min",
    estimatedLoss: "112.5 gal",
    status: "active"
  },
  {
    location: "Kitchen - Dishwasher",
    severity: "Moderate",
    flowRate: "0.8 gal/min",
    duration: "2 hr",
    estimatedLoss: "96 gal",
    status: "active"
  },
  {
    location: "Outdoor - Sprinkler 2",
    severity: "Minor",
    flowRate: "0.3 gal/min",
    duration: "6 hr",
    estimatedLoss: "108 gal",
    status: "resolved"
  }
];

const LeakDetection = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-6 relative">
      {/* Back Arrow Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-50 p-2 rounded-full bg-white/80 hover:bg-white transition-all shadow-md"
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5 text-gray-800" />
      </button>

      {/* Leak Detection Hero Image */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img 
          src={leakImage}
          alt="Futuristic water pipe monitoring system"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Intelligent <span className="text-alert-orange">Leak Detection</span>
            </h1>
            <p className="text-lg md:text-xl">
              AI-powered sensors that identify and quantify leaks in real-time
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="hover:shadow-water transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Leaks</CardTitle>
            <AlertCircle className="h-4 w-4 text-alert-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 <span className="text-sm font-normal text-muted-foreground">detected</span></div>
            <p className="text-xs text-muted-foreground mt-2">1 critical leak ongoing</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-water transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sensors Active</CardTitle>
            <Wifi className="h-4 w-4 text-water-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87 <span className="text-sm font-normal text-muted-foreground">devices</span></div>
            <p className="text-xs text-muted-foreground mt-2">100% connectivity</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-water transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
            <Zap className="h-4 w-4 text-eco-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,850 <span className="text-sm font-normal text-muted-foreground">prevented</span></div>
            <p className="text-xs text-muted-foreground mt-2">From early detection</p>
          </CardContent>
        </Card>
      </div>

      {/* Leak Alerts Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Active Leak Alerts</h2>
        
        {leaks.filter(l => l.status === "active").map((leak, index) => (
          <Alert key={index} variant={leak.severity === "Critical" ? "destructive" : "default"}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{leak.location} - {leak.severity}</AlertTitle>
            <AlertDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <div>
                  <div className="text-sm font-medium">Flow Rate</div>
                  <div>{leak.flowRate}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Duration</div>
                  <div>{leak.duration}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Estimated Loss</div>
                  <div>{leak.estimatedLoss}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Alert Sent To</div>
                  <div className="flex items-center gap-1">
                    <Smartphone className="h-3 w-3" /> 3 devices
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        ))}

        {/* Technology Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Leak Detection Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardTitle className="mb-4">Budget-Friendly Sensors</CardTitle>
              <div className="space-y-4">
                <p>Our proprietary $25 sensors detect flow anomalies with 98% accuracy using:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Machine learning algorithms</li>
                  <li>Vibration pattern analysis</li>
                  <li>Pressure differential monitoring</li>
                  <li>Acoustic leak detection</li>
                </ul>
              </div>
            </Card>
            <Card className="p-6">
              <CardTitle className="mb-4">Instant Notification System</CardTitle>
              <div className="space-y-4">
                <p>When leaks are detected, our system:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sends SMS/text alerts to facility managers</li>
                  <li>Creates dashboard notifications</li>
                  <li>Auto-generates maintenance tickets</li>
                  <li>Provides shutoff valve recommendations</li>
                  <li>Calculates real-time water loss</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeakDetection;