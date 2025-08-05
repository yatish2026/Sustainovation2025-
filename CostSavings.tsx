import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, PieChart as PieChartIcon, BarChart2, Clock, Zap, Leaf } from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  CartesianGrid // Add this import
} from 'recharts';

import costSavingsDashboard from "@/assets/cost-savings-dashboard.jpg";
import waterComparison from "@/assets/water-comparison.jpg";

const CostSavings = () => {
  // Realistic dummy data
  const monthlySavings = [
    { name: 'Jan', savings: 1250, cost: 4200 },
    { name: 'Feb', savings: 1850, cost: 3800 },
    { name: 'Mar', savings: 2100, cost: 3600 },
    { name: 'Apr', savings: 1750, cost: 3950 },
    { name: 'May', savings: 2300, cost: 3400 },
    { name: 'Jun', savings: 2850, cost: 2950 },
  ];

  const savingsBreakdown = [
    { name: 'Leak Prevention', value: 38 },
    { name: 'Efficient Usage', value: 27 },
    { name: 'Greywater Recycling', value: 22 },
    { name: 'Peak Optimization', value: 13 },
  ];

  const comparisonData = [
    { name: 'Your Facility', value: 2850 },
    { name: 'Similar Facilities', value: 1850 },
    { name: 'District Average', value: 1250 },
    { name: 'National Average', value: 950 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const kpiMetrics = [
    { id: 1, title: "Monthly Savings", value: "$2,850", change: "+12.5%", icon: TrendingUp, trend: 'up' },
    { id: 2, title: "Annual Savings", value: "$34,200", change: "+18.2%", icon: DollarSign, trend: 'up' },
    { id: 3, title: "Payback Period", value: "2.4 years", change: "-0.8 yrs", icon: Clock, trend: 'down' },
    { id: 4, title: "ROI", value: "42%", change: "+5.3%", icon: PieChartIcon, trend: 'up' },
  ];


  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-eco-green">Cost Savings</span> Analytics
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Quantifiable financial benefits from optimized water management
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {kpiMetrics.map((metric) => (
          <Card key={metric.id} className="hover:shadow-water transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${
                metric.trend === 'up' ? 'text-eco-green' : 'text-water-primary'
              }`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${
                metric.trend === 'up' ? 'text-eco-green' : 'text-water-primary'
              }`}>
                {metric.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src={costSavingsDashboard} 
            alt="Cost savings dashboard"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Real-Time Savings Tracking</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our dashboard provides live updates on your water cost savings, comparing current
            performance against historical data and industry benchmarks.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Current Rate</div>
              <div className="text-xl font-bold text-eco-green">$3.12/gal</div>
              <div className="text-xs text-muted-foreground">-18% vs last year</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm font-medium mb-2">Savings To Date</div>
              <div className="text-xl font-bold text-eco-green">$15,670</div>
              <div className="text-xs text-muted-foreground">Since implementation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Savings Trend */}
      <div className="mb-16">
        <Card className="p-6">
          <CardTitle className="mb-6">Monthly Savings Trend</CardTitle>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySavings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="savings" fill="#10b981" name="Savings" />
                <Bar dataKey="cost" fill="#3b82f6" name="Water Costs" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            * Projected annual savings: <span className="font-medium">$34,200</span> based on current trends
          </div>
        </Card>
      </div>

      {/* Savings Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <Card className="p-6">
          <CardTitle className="mb-6">Savings Breakdown</CardTitle>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={savingsBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {savingsBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Where Your Savings Come From</h2>
          <div className="space-y-4">
            {savingsBreakdown.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div 
                  className="w-4 h-4 rounded-full mt-1.5" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Contributes ${(2850 * item.value/100).toLocaleString()} monthly
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Performance Comparison</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground">
            Your facility is performing better than <span className="font-medium">92%</span> of similar institutions
          </p>
        </div>
        <div>
          <img 
            src={waterComparison} 
            alt="Water cost comparison"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
      </div>

      {/* ROI Calculation */}
      <div className="mt-16 bg-surface-blue/30 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Return on Investment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-water-primary" /> Initial Investment
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hardware</span>
                <span className="font-medium">$28,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Installation</span>
                <span className="font-medium">$12,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Software</span>
                <span className="font-medium">$9,800</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold">$50,500</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-eco-green" /> Annual Savings
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Water Costs</span>
                <span className="font-medium">$34,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Maintenance</span>
                <span className="font-medium">$8,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Energy</span>
                <span className="font-medium">$4,300</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold">$47,000</span>
              </div>
            </div>
          </div>
          
          <div className="bg-background p-6 rounded-lg border border-border">
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-alert-orange" /> ROI Summary
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Payback Period</span>
                <span className="font-bold">2.4 years</span>
              </div>
              <div className="flex justify-between">
                <span>5-Year Savings</span>
                <span className="font-bold text-eco-green">$184,500</span>
              </div>
              <div className="flex justify-between">
                <span>ROI (5 years)</span>
                <span className="font-bold text-eco-green">265%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSavings;