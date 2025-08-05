import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Recycle, Droplets, Filter, Leaf, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

import greywaterSystemImg from "@/assets/greywater-recycling.jpg";
import filtrationProcessImg from "@/assets/filtration-process.jpg";
import reuseApplicationsImg from "@/assets/reuse-applications.jpg";


const GreywaterRecycling = () => {
  const systemStats = [
    { name: "Water Reclaimed", value: 65, unit: "%", icon: Droplets },
    { name: "Energy Saved", value: 40, unit: "%", icon: Zap },
    { name: "Cost Reduction", value: 55, unit: "%", icon: Leaf },
  ];

  const waterSources = [
    { name: "Aqua Waste Water", percentage: 35 },
    { name: "AC Condensate", percentage: 25 },
    { name: "Household Greywater", percentage: 40 },
  ];

  const reuseCases = [
    { application: "Toilet Flushing", savings: "30-40%", icon: Recycle },
    { application: "Landscape Irrigation", savings: "50-60%", icon: Leaf },
    { application: "Cleaning Purposes", savings: "20-30%", icon: Filter },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-water-secondary">Greywater</span> Recycling System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Smart repurposing of non-potable water for sustainable facility management
        </p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src={greywaterSystemImg}
            alt="Greywater recycling system diagram"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Closed-Loop Water Recovery</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our advanced greywater recycling system collects, treats, and repurposes water from multiple sources,
            reducing freshwater demand by up to 65%. The process maintains strict hygiene standards while
            significantly lowering your water footprint.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {systemStats.map((stat, index) => (
              <Card key={index} className="text-center p-4 bg-white shadow-md">
                <stat.icon className="w-8 h-8 mx-auto text-water-secondary mb-2" />
                <div className="text-2xl font-bold">{stat.value}{stat.unit}</div>
                <div className="text-sm text-muted-foreground">{stat.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Water Sources */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our System Collects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {waterSources.map((source, index) => (
            <Card key={index} className="p-6 bg-white shadow-md">
              <CardTitle className="mb-4">{source.name}</CardTitle>
              <Progress value={source.percentage} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Contribution</span>
                <span>{source.percentage}% of total</span>
              </div>
              <CardContent className="p-0 mt-4 text-sm">
                {index === 0 && "From water fountains, decorative fountains, and aquatic features"}
                {index === 1 && "Condensate water from air conditioning and cooling systems"}
                {index === 2 && "From sinks, showers, and laundry (excluding kitchen waste)"}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filtration Process */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">4-Stage Purification Process</h2>
          <ol className="space-y-4 list-decimal pl-5">
            <li className="font-medium">Sediment Filtration</li>
            <p className="text-muted-foreground text-sm pl-4">
              Removes hair, lint, and large particles through mesh filters
            </p>

            <li className="font-medium">Biological Treatment</li>
            <p className="text-muted-foreground text-sm pl-4">
              Natural bacteria break down organic matter in aerobic chambers
            </p>

            <li className="font-medium">Membrane Filtration</li>
            <p className="text-muted-foreground text-sm pl-4">
              Ultrafiltration removes 99.9% of pathogens and microorganisms
            </p>

            <li className="font-medium">UV Disinfection</li>
            <p className="text-muted-foreground text-sm pl-4">
              Final sterilization ensures water safety for non-potable uses
            </p>
          </ol>
        </div>
        <div>
          <img
            src={filtrationProcessImg}
            alt="Filtration process"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Reuse Applications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={reuseApplicationsImg}
            alt="Greywater system"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Smart Reuse Applications</h2>
          <p className="text-muted-foreground leading-relaxed">
            The treated water is automatically distributed to appropriate non-potable uses based on
            quality levels and demand patterns, with priority given to highest-value applications.
          </p>

          <div className="space-y-4 mt-6">
            {reuseCases.map((useCase, index) => (
              <Card key={index} className="p-4 flex items-center gap-4 bg-white shadow-md">
                <div className="p-3 rounded-lg bg-water-secondary/20 text-water-secondary">
                  <useCase.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">{useCase.application}</div>
                  <div className="text-sm text-muted-foreground">
                    Saves {useCase.savings} of freshwater usage
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* System Benefits */}
      <div className="mt-16 bg-water-secondary/10 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">System Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white shadow-md">
            <CardTitle className="flex items-center gap-3 mb-4">
              <Zap className="text-eco-green" /> Energy Efficient
            </CardTitle>
            <CardContent className="p-0 text-muted-foreground">
              Uses 60% less energy than traditional treatment systems through gravity-fed
              design and solar-powered components.
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-md">
            <CardTitle className="flex items-center gap-3 mb-4">
              <Leaf className="text-eco-green" /> Eco-Friendly
            </CardTitle>
            <CardContent className="p-0 text-muted-foreground">
              Reduces strain on municipal systems and decreases chemical usage by 75%
              compared to conventional treatment.
            </CardContent>
          </Card>

          <Card className="p-6 bg-white shadow-md">
            <CardTitle className="flex items-center gap-3 mb-4">
              <Droplets className="text-water-secondary" /> Water Security
            </CardTitle>
            <CardContent className="p-0 text-muted-foreground">
              Provides backup water supply during shortages, with capacity to store
              up to 5,000 gallons of treated water.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GreywaterRecycling;
