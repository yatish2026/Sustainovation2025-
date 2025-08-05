import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge, Droplets, AlertCircle, ArrowLeft } from "lucide-react"; // Added ArrowLeft icon
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import heroImage from '../assets/hero-water-conservation.jpg';

const waterData = [
  { month: 'Jan', usage: 12500, saved: 3800, wasted: 1200 },
  { month: 'Feb', usage: 11800, saved: 4200, wasted: 900 },
  { month: 'Mar', usage: 14200, saved: 5100, wasted: 1500 },
  { month: 'Apr', usage: 13100, saved: 4900, wasted: 1100 },
  { month: 'May', usage: 15200, saved: 6200, wasted: 1800 },
  { month: 'Jun', usage: 16800, saved: 7100, wasted: 2100 },
];

const RealTimeMonitoring = () => {
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

      {/* Hero Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
        <img 
          src={heroImage}
          alt="Water conservation dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-300">Real-Time</span> Water Monitoring
            </h1>
            <p className="text-lg md:text-xl">
              Advanced tracking and analytics for optimal water resource management
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="hover:shadow-water transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Usage</CardTitle>
            <Gauge className="h-4 w-4 text-water-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847 <span className="text-sm font-normal text-muted-foreground">gal/hr</span></div>
            <p className="text-xs text-muted-foreground mt-2">+12.1% from last hour</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-water transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Water Saved</CardTitle>
            <Droplets className="h-4 w-4 text-eco-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,210 <span className="text-sm font-normal text-muted-foreground">gal today</span></div>
            <p className="text-xs text-muted-foreground mt-2">+8.3% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-water transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Potential Leaks</CardTitle>
            <AlertCircle className="h-4 w-4 text-alert-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 <span className="text-sm font-normal text-muted-foreground">detected</span></div>
            <p className="text-xs text-muted-foreground mt-2">1 critical in restroom B2</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardTitle className="mb-6">Monthly Water Analytics</CardTitle>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="usage" stroke="#3b82f6" name="Total Usage" />
                <Line type="monotone" dataKey="saved" stroke="#10b981" name="Water Saved" />
                <Line type="monotone" dataKey="wasted" stroke="#ef4444" name="Water Wasted" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle className="mb-6">Annual Water Impact</CardTitle>
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Total Saved</div>
              <div className="text-2xl font-bold text-eco-green">58,200 gal</div>
              <div className="text-xs text-muted-foreground mt-2">≈ $12,800 savings</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Total Wasted</div>
              <div className="text-2xl font-bold text-alert-orange">8,600 gal</div>
              <div className="text-xs text-muted-foreground mt-2">≈ $1,900 loss</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">CO2 Reduced</div>
              <div className="text-2xl font-bold text-water-primary">4.2 tons</div>
              <div className="text-xs text-muted-foreground mt-2">Equivalent to 100 trees</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Leaks Prevented</div>
              <div className="text-2xl font-bold text-water-secondary">24</div>
              <div className="text-xs text-muted-foreground mt-2">Potential $5,200 saved</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;