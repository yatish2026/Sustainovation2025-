import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Play, 
  Monitor, 
  School, 
  Building2, 
  ArrowRight,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Demo = () => {
  return (
    <section className="py-20 bg-surface-blue/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            See AquaWise
            <span className="text-water-primary"> in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our comprehensive water management platform through interactive demos 
            and request a pilot program for your facility
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Interactive Dashboard Demo */}
          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-water-primary to-water-secondary rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Live Dashboard Demo</h3>
                <p className="text-water-primary font-medium">Interactive prototype</p>
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img 
                src={dashboardImage} 
                alt="Interactive dashboard preview"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-water-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-water-primary ml-1" />
                </div>
              </div>
              
              {/* Live Data Indicators */}
              <div className="absolute top-4 left-4 bg-eco-green/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Live Data
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-water-primary px-3 py-2 rounded-lg text-sm font-medium">
                💧 2,847 gal saved today
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-eco-green" />
                <span className="text-sm">Real-time usage monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-eco-green" />
                <span className="text-sm">Leak detection alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-eco-green" />
                <span className="text-sm">Cost savings analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-eco-green" />
                <span className="text-sm">Mobile-responsive design</span>
              </div>
            </div>
            
<div className="flex gap-3">
  <Button 
    variant="hero" 
    className="flex-1"
    onClick={() => window.open('https://youtube.com/shorts/qSc8BRycaKM?feature=share', '_blank')}
  >
    <Play className="mr-2 h-4 w-4" />
    Try Interactive Demo
  </Button>
</div>
          </Card>
          
          {/* Pilot Program Request */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-eco-green to-eco-green/80 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Request Pilot Program</h3>
                  <p className="text-eco-green font-medium">Free 30-day trial</p>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Contact Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Title/Role</label>
                    <Input placeholder="Facilities Manager" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Institution Name</label>
                  <Input placeholder="School or facility name" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Facility Type</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Select type</option>
                      <option>Elementary School</option>
                      <option>High School</option>
                      <option>College/University</option>
                      <option>Senior Center</option>
                      <option>Healthcare Facility</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Approximate Size</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Select size</option>
                      <option>Small (under 500 people)</option>
                      <option>Medium (500-2000 people)</option>
                      <option>Large (2000+ people)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                  <Input type="email" placeholder="your.email@school.edu" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Current Water Challenges</label>
                  <Textarea 
                    placeholder="Tell us about your current water management challenges, goals, or specific areas of concern..."
                    rows={4}
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="updates" className="mt-1" />
                  <label htmlFor="updates" className="text-sm text-muted-foreground">
                    I'd like to receive updates about AquaWise features and water conservation tips
                  </label>
                </div>
                
                <Button variant="eco" className="w-full" size="lg">
                  Request Free Pilot Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <School className="w-4 h-4 text-eco-green" />
                    <span>Educational discount available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-water-primary" />
                    <span>No upfront costs</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;