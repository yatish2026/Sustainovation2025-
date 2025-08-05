import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Droplets } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: Droplets,
      stat: "30%",
      title: "Water Waste from Leaks",
      description: "Schools lose thousands of gallons daily through undetected pipe leaks and faulty fixtures",
      impact: "Average $15,000 annual loss per facility"
    },
    {
      icon: TrendingUp,
      stat: "60%",
      title: "Rising Water Costs", 
      description: "Utility expenses continue climbing while budgets remain tight for educational institutions",
      impact: "10-15% annual cost increase"
    },
    {
      icon: AlertTriangle,
      stat: "Zero",
      title: "Real-Time Monitoring",
      description: "Most facilities have no visibility into water usage patterns or leak detection capabilities",
      impact: "Issues go unnoticed for weeks"
    }
  ];

  return (
    <section className="py-20 bg-surface-blue/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The Water Crisis in 
            <span className="text-water-primary"> Educational Facilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schools and senior centers are losing millions of gallons and thousands of dollars 
            due to outdated water management systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-water transition-all duration-300 group cursor-pointer border-2 hover:border-water-primary/30">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-water-primary/20 to-water-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-8 h-8 text-water-primary" />
                </div>
                <div className="text-4xl font-bold text-alert-orange mb-2">{problem.stat}</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{problem.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {problem.description}
              </p>
              
              <div className="text-sm font-medium text-water-primary bg-water-light/50 px-4 py-2 rounded-lg">
                {problem.impact}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-alert-orange/10 to-alert-orange/5 px-8 py-4 rounded-xl border border-alert-orange/20">
            <AlertTriangle className="w-6 h-6 text-alert-orange" />
            <span className="text-lg font-medium">
              <span className="text-alert-orange font-bold">Result:</span> Facilities waste up to 
              <span className="text-water-primary font-bold"> 1 million gallons annually</span> and overspend by 
              <span className="text-eco-green font-bold">$50,000+</span> on preventable costs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;