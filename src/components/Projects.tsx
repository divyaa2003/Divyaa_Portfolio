import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Leaf, Dumbbell, Search, Shield, Cpu, Monitor, Smartphone, Server, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PranaEdge (AI Based Physical &  Wellness Platform)",
      description: "Yoga meditation app with chatbot, AI voice, and pose correction & detection. Personalized health-based suggestions.",
      status: "Ongoing",
      icon: Leaf,
      color: "portfolio-green",
      technologies: ["React.js", "HTML", "CSS"],
      link: "https://github.com/divyaa2003"
    },
     {
  title: "SnapKart — AI-powered Online Grocery Platform (MERN Stack)",
  description: "A full-featured online grocery shopping platform including user Authentication,product Management,Admin Panel,Shopping Cart,Payment Checkout & AI-based feature like voice search.",
  status: "Completed",
  icon: ShoppingCart,
  color: "portfolio-green",
  technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "AI"],
  link: "https://github.com/divyaa2003/SnapKart"
},

    {
      title: "History Explorer",
      description: "React-based search and filter-enabled platform to explore historical timelines with interactive visualizations.",
      status: "Completed",
      icon: Search,
      color: "portfolio-purple",
      technologies: ["React.js", "JavaScript"],
      link: "https://github.com/divyaa2003/HistoryExplorer"
    },

    {
      title: "Fitness Companion App",
      description: "Web app to log workouts, track fitness goals, and visualize performance with comprehensive analytics.",
      status: "Completed",
      icon: Dumbbell,
      color: "portfolio-blue",
      technologies: ["React.js", "Tailwind CSS"],
      link: "https://github.com/divyaa2003/React-Fitnessapp"
    },
    {
      title: "AI Security Analyzer",
      description: "Detects SQLi, XSS, and DDoS threat using j48 model. Features a dynamic UI with real-time insights.",
      status: "Completed",
      icon: Shield,
      color: "portfolio-orange",
      technologies: ["Java", "Spring Boot", "WEKA", "Chart.js"],
      link: "https://github.com/divyaa2003/ai-security-analyzer"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-16 left-12 animate-float opacity-30">
        <div className="w-14 h-14 rounded-lg bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <Monitor size={22} className="text-portfolio-blue" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-16 animate-float opacity-40" style={{ animationDelay: '1.5s' }}>
        <div className="w-10 h-10 rounded-full bg-portfolio-green/20 backdrop-blur-sm border border-portfolio-green/30 flex items-center justify-center">
          <Smartphone size={18} className="text-portfolio-green" />
        </div>
      </div>
      
      <div className="absolute bottom-24 left-20 animate-float opacity-30" style={{ animationDelay: '3s' }}>
        <div className="w-12 h-12 rounded-lg bg-portfolio-orange/20 backdrop-blur-sm border border-portfolio-orange/30 flex items-center justify-center">
          <Server size={20} className="text-portfolio-orange" />
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 animate-float opacity-35" style={{ animationDelay: '0.8s' }}>
        <div className="w-8 h-8 rounded-full bg-portfolio-purple/20 backdrop-blur-sm border border-portfolio-purple/30 flex items-center justify-center">
          <Cpu size={16} className="text-portfolio-purple" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing full-stack development and AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="group bg-gradient-card border-border/50 hover:border-portfolio-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 animate-slide-up hover:shadow-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${project.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                      <Icon size={24} className={`text-${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                        <Badge 
                          variant={project.status === "Ongoing" ? "default" : "secondary"}
                          className={project.status === "Ongoing" 
                            ? "bg-portfolio-green/20 text-portfolio-green hover:bg-portfolio-green/30 transition-colors" 
                            : "bg-portfolio-purple/20 text-portfolio-purple hover:bg-portfolio-purple/30 transition-colors"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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

                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-portfolio-purple/30 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors hover:shadow-sm"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Code size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;