import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-water-conservation.jpg";

const Hero = () => {
  const openDemoVideo = () => {
    window.open('https://youtu.be/oN5o6SG5y1g', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-surface-blue/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--water-primary))_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-water-light/30 px-4 py-2 rounded-full text-sm font-medium text-water-primary">
                <div className="w-2 h-2 bg-eco-green rounded-full animate-pulse"></div>
                Smart Water Conservation
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Smart Water
                <span className="block bg-gradient-to-r from-water-primary to-water-secondary bg-clip-text text-transparent">
                  Conservation
                </span>
                <span className="block text-eco-green">
                  for Schools &
                </span>
                <span className="block text-eco-green">
                  Senior Centers
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Revolutionize water management with AI-powered monitoring, greywater recycling, 
                and intelligent leak detection. Save costs, reduce waste, and create sustainable facilities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={openDemoVideo}
              >
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
 
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-water-primary">30%</div>
                <div className="text-sm text-muted-foreground">Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-green">$50K+</div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-alert-orange">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-float">
              <img 
                src={heroImage} 
                alt="Smart water conservation system in action" 
                className="w-full h-auto object-cover animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-eco-green/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium animate-pulse">
                💧 Leak Detected
              </div>
              
              <div className="absolute bottom-4 left-4 bg-water-primary/90 backdrop-blur-sm text-white px-4 py-3 rounded-lg">
                <div className="text-xs opacity-80">Real-time Savings</div>
                <div className="text-lg font-bold">2,847 gallons today</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-water-secondary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-eco-green/10 rounded-full animate-wave"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;