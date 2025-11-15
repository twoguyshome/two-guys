import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Home, Wrench, Paintbrush, Zap, Building } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Kitchen Remodeling",
    description: "Complete kitchen renovations with modern designs and quality materials"
  },
  {
    icon: Paintbrush,
    title: "Interior Finishing",
    description: "Professional painting, trim work, and interior design services"
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Custom woodwork, cabinetry, and structural repairs"
  },
  {
    icon: Building,
    title: "Outdoor Projects",
    description: "Deck building, fencing, railings, and exterior improvements"
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Fix-it services for all your home maintenance needs"
  },
  {
    icon: Zap,
    title: "Fixture Installation",
    description: "Professional installation of lighting, appliances, and fixtures"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From small repairs to complete renovations, we handle all your commercial and residential needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
