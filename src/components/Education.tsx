import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Brain } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering",
    major: "Major in Computer Science",
    institution: "MVJCE College of Engineering",
    duration: "2022-2026",
    description: "Pursuing Bachelor of Engineering with a major in Computer Science, developing strong foundations in software development, algorithms, data structures, and modern programming paradigms."
  };

  return (
    <section id="education" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-16 right-16 animate-float opacity-30">
        <div className="w-12 h-12 rounded-lg bg-portfolio-purple/20 backdrop-blur-sm border border-portfolio-purple/30 flex items-center justify-center">
          <BookOpen size={20} className="text-portfolio-purple" />
        </div>
      </div>
      
      <div className="absolute bottom-24 left-24 animate-float opacity-40" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 rounded-full bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <Brain size={16} className="text-portfolio-blue" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 hover:border-portfolio-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 animate-slide-up hover:shadow-glow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-portfolio-purple/20 flex items-center justify-center flex-shrink-0 animate-glow hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} className="text-portfolio-purple" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-foreground">{education.degree}</CardTitle>
                    <Badge variant="secondary" className="bg-portfolio-purple/20 text-portfolio-purple w-fit hover:bg-portfolio-purple/30 transition-colors">
                      {education.major}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-portfolio-purple" />
                      <span>{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-portfolio-purple" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;