import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Briefcase, FileCode, Laptop } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Website Development Intern",
    company: "Octanet Services Pvt. Ltd",
    duration: "February 2025 - March 2025",
    type: "Internship",
    description: "Completed a web development internship at Octanet Services Pvt. Ltd., gaining hands-on experience in frontend development using HTML, CSS, JavaScript, and backend integration. Contributed to building responsive, user-friendly web applications while working collaboratively in a professional development environment.",
    technologies: ["HTML", "CSS", "JavaScript", "Backend Integration", "Responsive Design"]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-20 left-16 animate-float opacity-30">
        <div className="w-12 h-12 rounded-lg bg-portfolio-purple/20 backdrop-blur-sm border border-portfolio-purple/30 flex items-center justify-center">
          <Briefcase size={20} className="text-portfolio-purple" />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-20 animate-float opacity-40" style={{ animationDelay: '1.8s' }}>
        <div className="w-10 h-10 rounded-full bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <FileCode size={18} className="text-portfolio-blue" />
        </div>
      </div>
      
      <div className="absolute bottom-28 right-28 animate-float opacity-35" style={{ animationDelay: '2.5s' }}>
        <div className="w-8 h-8 rounded-lg bg-portfolio-green/20 backdrop-blur-sm border border-portfolio-green/30 flex items-center justify-center">
          <Laptop size={16} className="text-portfolio-green" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in web development and technology solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 hover:border-portfolio-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 animate-slide-up hover:shadow-glow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-portfolio-purple/20 flex items-center justify-center flex-shrink-0 animate-glow hover:scale-110 transition-transform duration-300">
                  <Building size={24} className="text-portfolio-purple" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-foreground">{experience.title}</CardTitle>
                    <Badge variant="secondary" className="bg-portfolio-purple/20 text-portfolio-purple w-fit hover:bg-portfolio-purple/30 transition-colors">
                      {experience.type}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building size={16} className="text-portfolio-purple" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-portfolio-purple" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {experience.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-portfolio-purple/30 text-portfolio-purple hover:bg-portfolio-purple/10 transition-colors hover:shadow-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;