import { Button } from "@/components/ui/button";
import { Linkedin, Github, MapPin, Mail, Phone, Code, Terminal, Database, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Professional Moving Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-16 h-16 rounded-lg bg-portfolio-purple/10 backdrop-blur-sm border border-portfolio-purple/20 flex items-center justify-center">
          <Code size={24} className="text-portfolio-purple" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 rounded-full bg-portfolio-green/10 backdrop-blur-sm border border-portfolio-green/20 flex items-center justify-center">
          <Terminal size={20} className="text-portfolio-green" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 rounded-lg bg-portfolio-blue/10 backdrop-blur-sm border border-portfolio-blue/20 flex items-center justify-center">
          <Database size={22} className="text-portfolio-blue" />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-10 h-10 rounded-full bg-portfolio-orange/10 backdrop-blur-sm border border-portfolio-orange/20 flex items-center justify-center">
          <Cpu size={18} className="text-portfolio-orange" />
        </div>
      </div>
      
      {/* Code Symbols */}
      <div className="absolute top-1/2 left-16 text-portfolio-purple/20 animate-pulse text-2xl font-mono">&lt;/&gt;</div>
      <div className="absolute top-1/4 right-1/3 text-portfolio-green/20 animate-pulse text-lg font-mono">{}</div>
      <div className="absolute bottom-1/3 left-1/3 text-portfolio-blue/20 animate-pulse text-xl font-mono">[]</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Divyaa Varshini G
            </h1>
            <div className="text-xl md:text-2xl text-portfolio-purple font-medium">
              Software Developer And UIUX Designer
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-portfolio-purple" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-portfolio-purple" />
                <span>varshinidivyaa@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-portfolio-purple" />
                <span>(+91) 7483466469</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proficient in Java,React.js, and Python, with a strong focus on building responsive, user-friendly applications. Adept at guiding design teams, managing projects from concept to deployment, and delivering high-quality, user-centric solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center items-center pt-8">
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                asChild
              >
                <a href="https://www.linkedin.com/in/divyaa-varshini-g" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                asChild
              >
                <a href="https://github.com/divyaa2003" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;