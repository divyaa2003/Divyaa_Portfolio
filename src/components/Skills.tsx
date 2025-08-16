import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Palette, Settings, Cpu, Monitor, Layers, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "portfolio-purple",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "🟨" },
        { name: "C", icon: "🅒" },
        { name: "C++", icon: "⚡" }
      ]
    },
    {
      title: "Frontend & UI/UX",
      icon: Globe,
      color: "portfolio-green",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "React (Basics)", icon: "⚛️" },
        { name: "Responsive Design", icon: "📱" },
        { name: "Figma", icon: "🎯" },
        { name: "Canva", icon: "🎪" },
        { name: "Wireframing", icon: "📐" },
        { name: "Prototyping", icon: "🔧" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "portfolio-blue",
      skills: [
        { name: "MySQL", icon: "🐬" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🖥️" },
        { name: "Spring Boot", icon: "🌐" },
        { name: "RESTful API Development & Integration", icon: "🔗" }
      ]
    },
    {
      title: "Other Tools",
      icon: Settings,
      color: "portfolio-orange",
      skills: [
        { name: "Postman", icon: "📮" },
        { name: "Power BI", icon: "📊" },
        { name: "Tableau", icon: "📈" },
        { name: "VS Code", icon: "💻" },
        { name: "Git", icon: "🔧" },
        { name: "GitHub", icon: "🌍" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-10 left-10 animate-float opacity-30">
        <div className="w-8 h-8 rounded-lg bg-portfolio-purple/20 backdrop-blur-sm border border-portfolio-purple/30 flex items-center justify-center">
          <Cpu size={16} className="text-portfolio-purple" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-12 animate-float opacity-40" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-6 rounded-full bg-portfolio-green/20 backdrop-blur-sm border border-portfolio-green/30 flex items-center justify-center">
          <Monitor size={14} className="text-portfolio-green" />
        </div>
      </div>
      
      <div className="absolute bottom-20 left-20 animate-float opacity-30" style={{ animationDelay: '3s' }}>
        <div className="w-10 h-10 rounded-lg bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <Layers size={18} className="text-portfolio-blue" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across multiple technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="group bg-gradient-card border-border/50 hover:border-portfolio-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 animate-slide-up hover:shadow-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-${category.color}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    <Icon size={24} className={`text-${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-secondary/50 text-foreground hover:bg-portfolio-purple/20 hover:text-portfolio-purple transition-colors cursor-default flex items-center gap-1.5 hover:shadow-sm"
                      >
                        <span className="text-sm">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
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

export default Skills;
