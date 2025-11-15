import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";
import project7 from "@/assets/project-7.png";
import project8 from "@/assets/project-8.png";
import project9 from "@/assets/project-9.png";
import project10 from "@/assets/project-10.png";
import project11 from "@/assets/project-11.png";
import project12 from "@/assets/project-12.png";
import project13 from "@/assets/project-13.png";
import project14 from "@/assets/project-14.png";
import project15 from "@/assets/project-15.png";

const projects = [
  {
    image: project1,
    title: "Kitchen Renovation",
    description: "Modern kitchen with black granite countertops and wood flooring"
  },
  {
    image: project2,
    title: "Bedroom Flooring",
    description: "Beautiful hardwood floor installation with natural light"
  },
  {
    image: project3,
    title: "Master Bedroom",
    description: "Complete room renovation with hardwood flooring"
  },
  {
    image: project4,
    title: "Open Living Space",
    description: "Spacious living room with fireplace and modern finishes"
  },
  {
    image: project5,
    title: "Home Interior",
    description: "Professional staircase and entryway renovation"
  },
  {
    image: project6,
    title: "Interior Remodel",
    description: "Complete home interior transformation"
  },
  {
    image: project7,
    title: "Living Room",
    description: "Modern living space with quality craftsmanship"
  },
  {
    image: project8,
    title: "Room Renovation",
    description: "Professional finish work and attention to detail"
  },
  {
    image: project9,
    title: "Home Upgrade",
    description: "Quality renovation with modern touches"
  },
  {
    image: project10,
    title: "Interior Work",
    description: "Expert craftsmanship in every detail"
  },
  {
    image: project11,
    title: "Outdoor Renovation",
    description: "Exterior painting and deck refinishing"
  },
  {
    image: project12,
    title: "Backyard Project",
    description: "Complete outdoor transformation with custom structures"
  },
  {
    image: project13,
    title: "Basement Remodel",
    description: "Modern basement with custom lighting and flooring"
  },
  {
    image: project14,
    title: "Kitchen Installation",
    description: "Complete kitchen with custom cabinetry and countertops"
  },
  {
    image: project15,
    title: "Kitchen Progress",
    description: "In-progress countertop installation and tile work"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the quality and craftsmanship that sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
