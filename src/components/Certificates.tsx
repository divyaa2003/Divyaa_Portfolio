import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, Star, Trophy, Zap } from "lucide-react";

const Certificates = () => {
  const certifications = [
    {
    title: "Career Essentials in Software Development and Generative AI",
    provider: "Microsoft & LinkedIn",
    icon: "🤖💼",
    description: "Focused on core software development skills and introduction to Generative AI tools and practices."

    },
    {
      title: "Figma UI/UX Essentials",
      provider: "Udemy",
      icon: "🎯",
      description: "Comprehensive course covering UI/UX design principles and Figma mastery"
    },
    {
      title: "Java ,Python Programming and HTML Fundamentals",
      provider: "IIT Bombay (Spoken Tutorial)",
      icon: "☕ 🌐 ",
      description: "Java fundamentals and object-oriented programming concepts,Web development basics and HTML structure mastery"
      
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      provider: "Deloitte(Forage)",
      icon: "📊",
      description: "Completed Deloitte’s job simulation on Forage, focusing on data cleaning, visualization (Excel, Power BI), and delivering business insights for client scenarios."
    },
    {
      title: "Web Development Internship",
      provider: "Octanet Services",
      icon: "💻",
      description: "Practical experience in full-stack web development"
    },
    {
      title: "Node.js and Express.js fundamentals , Building Personalised chatbot with Open ai and LongChain",
      provider: "Linkedin Learning",
      icon: "⚙️",
      description: "Building a website with Node.js and express.js and also building personalised chatbot"
    },
    {
      title: "CSE Quiz Competition and PB Capture the Flag",
      provider: "Gopalan College of Engineering and Dayananda Sagar of Engineering",
      icon: "🏆",
      description: "Participated in the inter-college Computer Science quiz and cybersecurity competition achievement"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-20 left-16 animate-float opacity-30">
        <div className="w-10 h-10 rounded-lg bg-portfolio-orange/20 backdrop-blur-sm border border-portfolio-orange/30 flex items-center justify-center">
          <Star size={18} className="text-portfolio-orange" />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 rounded-full bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <Trophy size={16} className="text-portfolio-blue" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-32 animate-float opacity-30" style={{ animationDelay: '2.5s' }}>
        <div className="w-6 h-6 rounded-lg bg-portfolio-green/20 backdrop-blur-sm border border-portfolio-green/30 flex items-center justify-center">
          <Zap size={14} className="text-portfolio-green" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development and skill enhancement certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 hover:border-portfolio-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-blue/20 animate-slide-up hover:shadow-glow">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-portfolio-blue/20 flex items-center justify-center animate-glow hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-portfolio-blue" />
                </div>
                <CardTitle className="text-2xl text-center">Professional Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:shadow-sm hover:scale-[1.02] animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-12 h-12 rounded-lg bg-portfolio-blue/20 flex items-center justify-center flex-shrink-0 hover:bg-portfolio-blue/30 transition-colors">
                      <span className="text-xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-portfolio-blue mb-2">
                        <Award size={14} />
                        <span>{cert.provider}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;