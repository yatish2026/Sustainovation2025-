import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Leaf, Globe, Recycle, TreePine } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sustainabilityData = [
  { category: 'Water Saved', thisYear: 58200, lastYear: 42100 },
  { category: 'CO2 Reduced', thisYear: 4.2, lastYear: 3.1 },
  { category: 'Energy Saved', thisYear: 12400, lastYear: 9800 },
  { category: 'Dollars Saved', thisYear: 28700, lastYear: 21500 },
];

const comparisons = [
  { label: "Equivalent to", value: "100 trees planted", icon: TreePine },
  { label: "Equivalent to", value: "5 homes' annual water use", icon: Leaf },
  { label: "Saved enough for", value: "350,000 toilet flushes", icon: Recycle },
  { label: "Equal to", value: "1.5 Olympic swimming pools", icon: Globe },
];

const SustainabilityAnalytics = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-eco-green">Sustainability</span> Analytics
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive environmental impact metrics and conservation achievements
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {comparisons.map((item, index) => (
          <Card key={index} className="hover:shadow-water transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
              <item.icon className="h-4 w-4 text-eco-green" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 h-[400px]">
          <CardTitle className="mb-6">Annual Sustainability Metrics</CardTitle>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={sustainabilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="lastYear" fill="#8884d8" name="Last Year" />
              <Bar dataKey="thisYear" fill="#82ca9d" name="This Year" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <CardTitle className="mb-4">Water Conservation Highlights</CardTitle>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Water Saved</span>
                <span className="font-bold text-eco-green">58,200 gallons</span>
              </div>
              <div className="flex justify-between">
                <span>Reduction in Usage</span>
                <span className="font-bold text-eco-green">27% decrease</span>
              </div>
              <div className="flex justify-between">
                <span>Leaks Prevented</span>
                <span className="font-bold text-eco-green">24 incidents</span>
              </div>
              <div className="flex justify-between">
                <span>Cost Savings</span>
                <span className="font-bold text-eco-green">$28,700 annually</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <CardTitle className="mb-4">Environmental Impact</CardTitle>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>CO2 Emissions Reduced</span>
                <span className="font-bold text-eco-green">4.2 metric tons</span>
              </div>
              <div className="flex justify-between">
                <span>Energy Savings</span>
                <span className="font-bold text-eco-green">12,400 kWh</span>
              </div>
              <div className="flex justify-between">
                <span>Chemical Reduction</span>
                <span className="font-bold text-eco-green">42% less treatment</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <CardTitle className="mb-4">Certifications Achieved</CardTitle>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-eco-green rounded-full"></div>
              <span>LEED Water Efficiency Credit</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-eco-green rounded-full"></div>
              <span>EPA WaterSense Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-eco-green rounded-full"></div>
              <span>ISO 14001 Water Management</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle className="mb-4">Future Goals</CardTitle>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-water-primary rounded-full"></div>
              <span>40% reduction target by 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-water-primary rounded-full"></div>
              <span>Zero water waste initiative</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-water-primary rounded-full"></div>
              <span>100% greywater recycling</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <CardTitle className="mb-4">Peer Comparison</CardTitle>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Your Facility</span>
              <span className="font-bold">27% reduction</span>
            </div>
            <div className="flex justify-between">
              <span>District Average</span>
              <span>18% reduction</span>
            </div>
            <div className="flex justify-between">
              <span>State Average</span>
              <span>12% reduction</span>
            </div>
            <div className="flex justify-between">
              <span>National Average</span>
              <span>9% reduction</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SustainabilityAnalytics;