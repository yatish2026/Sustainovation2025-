import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, Award, Trophy, TrendingUp, Scale, Database,Clock,DollarSign,Leaf  } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';
import benchmarkingDashboard from "@/assets/benchmarking-dashboard.jpg";
import comparisonChart from "@/assets/comparison-chart.jpg";

const UsageBenchmarking = () => {
  // Benchmarking data
  const monthlyComparison = [
    { 
      month: 'Jan', 
      yourFacility: 1250, 
      districtAvg: 1850, 
      stateAvg: 2100,
      efficientPeers: 950
    },
    { 
      month: 'Feb', 
      yourFacility: 1180, 
      districtAvg: 1750, 
      stateAvg: 1950,
      efficientPeers: 890
    },
    { 
      month: 'Mar', 
      yourFacility: 1100, 
      districtAvg: 1680, 
      stateAvg: 1850,
      efficientPeers: 820
    },
    { 
      month: 'Apr', 
      yourFacility: 1050, 
      districtAvg: 1550, 
      stateAvg: 1750,
      efficientPeers: 780
    },
    { 
      month: 'May', 
      yourFacility: 1350, 
      districtAvg: 1950, 
      stateAvg: 2250,
      efficientPeers: 1050
    },
    { 
      month: 'Jun', 
      yourFacility: 1420, 
      districtAvg: 2100, 
      stateAvg: 2400,
      efficientPeers: 1150
    },
  ];

  const performanceMetrics = [
    { metric: 'Water Use Intensity', yourValue: 1.2, peerAvg: 1.8, unit: 'gal/sqft' },
    { metric: 'Leak Response Time', yourValue: 15, peerAvg: 42, unit: 'minutes' },
    { metric: 'Recycled Water %', yourValue: 28, peerAvg: 12, unit: '%' },
    { metric: 'Cost per Gallon', yourValue: 0.0032, peerAvg: 0.0048, unit: '$' },
    { metric: 'Water Score', yourValue: 86, peerAvg: 62, unit: 'pts' },
  ];

  const rankingData = [
    { category: 'Overall Efficiency', rank: 1, total: 45 },
    { category: 'Leak Prevention', rank: 2, total: 45 },
    { category: 'Cost Savings', rank: 1, total: 45 },
    { category: 'Innovation', rank: 3, total: 45 },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-water-primary">Usage</span> Benchmarking
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Compare your water performance against similar institutions and industry standards
        </p>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src={benchmarkingDashboard} 
            alt="Benchmarking dashboard"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Competitive Performance Insights</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our benchmarking system analyzes your water usage across 15 key metrics and compares
            you against anonymized data from similar facilities in your region and nationwide.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-water-primary">Top 5%</div>
              <div className="text-sm text-muted-foreground">National Ranking</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-eco-green">37%</div>
              <div className="text-sm text-muted-foreground">More Efficient Than Peers</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Monthly Comparison */}
      <div className="mb-16">
        <Card className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <CardTitle>Monthly Water Use Comparison</CardTitle>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-water-primary rounded-full"></div>
                <span className="text-sm">Your Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-eco-green rounded-full"></div>
                <span className="text-sm">Efficient Peers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-alert-orange rounded-full"></div>
                <span className="text-sm">District Avg</span>
              </div>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="yourFacility" fill="#3b82f6" name="Your Facility" />
                <Bar dataKey="efficientPeers" fill="#10b981" name="Efficient Peers" />
                <Bar dataKey="districtAvg" fill="#f97316" name="District Avg" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Performance Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Key Performance Metrics</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceMetrics}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis />
                <Tooltip />
                <Radar 
                  name="Your Facility" 
                  dataKey="yourValue" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.6} 
                />
                <Radar 
                  name="Peer Average" 
                  dataKey="peerAvg" 
                  stroke="#f97316" 
                  fill="#f97316" 
                  fillOpacity={0.6} 
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <img 
            src={comparisonChart} 
            alt="Water usage comparison chart"
            className="w-full h-auto rounded-xl shadow-lg border border-border"
          />
          <div className="mt-6 space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {index === 0 && <BarChart2 className="w-4 h-4 text-water-primary" />}
                  {index === 1 && <Clock className="w-4 h-4 text-alert-orange" />}
                  {index === 2 && <TrendingUp className="w-4 h-4 text-eco-green" />}
                  {index === 3 && <DollarSign className="w-4 h-4 text-water-secondary" />}
                  {index === 4 && <Award className="w-4 h-4 text-purple-500" />}
                  <span>{metric.metric}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">
                    {metric.yourValue}{metric.unit}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    vs {metric.peerAvg}{metric.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rankings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Your Rankings</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {rankingData.map((rank, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-water transition-all">
              <div className="text-5xl font-bold mb-3 flex justify-center">
                {rank.rank === 1 ? (
                  <Trophy className="text-yellow-500" />
                ) : rank.rank === 2 ? (
                  <Award className="text-gray-400" />
                ) : rank.rank === 3 ? (
                  <Award className="text-amber-700" />
                ) : (
                  <span>{rank.rank}</span>
                )}
                <span className="text-sm font-normal text-muted-foreground mt-auto ml-1">
                  /{rank.total}
                </span>
              </div>
              <div className="text-lg font-medium">{rank.category}</div>
              <div className="text-sm text-muted-foreground">
                {rank.rank === 1 ? 'Top performer' : 
                 rank.rank <= 3 ? 'Above average' : 'Average'}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Improvement Opportunities */}
      <div className="bg-surface-blue/30 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Improvement Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <CardTitle className="text-lg">Cooling Tower Optimization</CardTitle>
              <Scale className="w-5 h-5 text-water-primary" />
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                Potential 15-20% reduction in cooling water usage through improved cycling.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Potential Savings</span>
                <span className="font-medium text-eco-green">$3,200/year</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <CardTitle className="text-lg">Landscape Irrigation</CardTitle>
              <Leaf className="w-5 h-5 text-eco-green" />
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                Smart controllers could reduce outdoor water use by 30-40%.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Potential Savings</span>
                <span className="font-medium text-eco-green">$5,700/year</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
              <CardTitle className="text-lg">Data Reporting</CardTitle>
              <Database className="w-5 h-5 text-water-secondary" />
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                Enhanced sub-metering could identify 5-8% additional savings.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Potential Savings</span>
                <span className="font-medium text-eco-green">$1,800/year</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UsageBenchmarking;