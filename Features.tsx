import { Card } from "@/components/ui/card";
import { 
  Gauge,
  AlertCircle,
  Leaf,
  Recycle,
  Zap,
  BarChart2,
  Smartphone,
  Droplets,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Gauge,
      title: "Real-Time Monitoring",
      description: "Track water usage across all facilities with second-by-second updates",
      color: "water-primary",
      path: "/features/real-time-monitoring"
    },
    {
      icon: AlertCircle,
      title: "Leak Detection",
      description: "AI-powered alerts for abnormal usage patterns or potential leaks",
      color: "alert-orange",
      path: "/features/leak-detection"
    },
    {
      icon: Leaf,
      title: "Sustainability Analytics",
      description: "Measure environmental impact with detailed reports",
      color: "eco-green",
      path: "/features/sustainability-analytics"
    },
    {
      icon: Recycle,
      title: "Greywater Recycling",
      description: "Smart systems to repurpose water for non-potable uses",
      color: "water-secondary",
      path: "/features/greywater-recycling"
    },
    {
      icon: Zap,
      title: "Automated Controls",
      description: "Schedule and remotely control water systems",
      color: "alert-orange",
      path: "/features/automated-controls"
    },
    {
      icon: BarChart2,
      title: "Cost Savings",
      description: "Detailed financial savings and ROI calculations",
      color: "eco-green",
      path: "/features/cost-savings"
    },
    {
      icon: Smartphone,
      title: "Mobile Alerts",
      description: "Receive instant notifications on your phone",
      color: "water-primary",
      path: "/features/mobile-alerts"
    },
    {
      icon: Droplets,
      title: "Usage Benchmarking",
      description: "Compare performance against similar institutions",
      color: "water-secondary",
      path: "/features/usage-benchmarking"
    }
  ];

  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive
            <span className="text-water-primary"> Water Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge hardware with intelligent software 
            to deliver complete water conservation solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-water transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${feature.color}/30 transition-colors`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-sm text-water-primary font-medium flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;