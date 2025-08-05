import { Card } from "@/components/ui/card";
import { 
  Cpu, 
  Database, 
  Cloud, 
  Smartphone,
  Brain,
  Wifi,
  Shield,
  Zap
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      category: "IoT & Hardware",
      icon: Cpu,
      color: "water-primary",
      technologies: [
        { name: "Raspberry Pi 4", description: "Edge computing for sensor data", icon: "🔌" },
        { name: "ESP32 Sensors", description: "Wireless water flow monitoring", icon: "📡" },
        { name: "LoRaWAN", description: "Long-range wireless communication", icon: "📶" },
        { name: "Smart Valves", description: "Automated water flow control", icon: "🔧" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "eco-green", 
      technologies: [
        { name: "TensorFlow", description: "Computer vision for leak detection", icon: "🧠" },
        { name: "OpenAI GPT", description: "HydroBot conversational AI", icon: "🤖" },
        { name: "scikit-learn", description: "Predictive maintenance models", icon: "📊" },
        { name: "OpenCV", description: "Real-time image processing", icon: "👁️" }
      ]
    },
    {
      category: "Backend & Cloud",
      icon: Database,
      color: "alert-orange",
      technologies: [
        { name: "Node.js", description: "Scalable API backend", icon: "⚡" },
        { name: "MongoDB", description: "Time-series data storage", icon: "🗄️" },
        { name: "AWS IoT Core", description: "Device management & messaging", icon: "☁️" },
        { name: "Redis", description: "Real-time caching & alerts", icon: "🚀" }
      ]
    },
    {
      category: "Frontend & Mobile",
      icon: Smartphone,
      color: "water-secondary",
      technologies: [
        { name: "React.js", description: "Interactive dashboard interface", icon: "⚛️" },
        { name: "React Native", description: "Cross-platform mobile app", icon: "📱" },
        { name: "D3.js", description: "Advanced data visualizations", icon: "📈" },
        { name: "PWA", description: "Offline-capable web app", icon: "🌐" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface-blue/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Built with
            <span className="text-water-primary"> Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive tech stack ensures reliable, scalable, and intelligent 
            water management across all facility types
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <Card key={index} className="p-8 hover:shadow-water transition-all duration-300 group">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-water-light/20 transition-colors">
                    <span className="text-2xl">{tech.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-water-primary/10 to-eco-green/10 px-8 py-6 rounded-xl border border-water-primary/20">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-water-primary" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-eco-green" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-6 h-6 text-alert-orange" />
              <span className="font-medium">Cloud Scalable</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-6 h-6 text-water-secondary" />
              <span className="font-medium">Real-time Sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;