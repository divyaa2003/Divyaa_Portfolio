import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Wifi, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "varshinidivyaa@gmail.com",
      href: "mailto:varshinidivyaa@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 7483466469",
      href: "tel:+917483466469"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/divyaa-varshini-g"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/divyaa2003"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-20 left-20 animate-float opacity-30">
        <div className="w-12 h-12 rounded-lg bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <MessageCircle size={20} className="text-portfolio-blue" />
        </div>
      </div>
      
      <div className="absolute top-1/3 right-24 animate-float opacity-40" style={{ animationDelay: '1.3s' }}>
        <div className="w-10 h-10 rounded-full bg-portfolio-green/20 backdrop-blur-sm border border-portfolio-green/30 flex items-center justify-center">
          <Wifi size={18} className="text-portfolio-green" />
        </div>
      </div>
      
      <div className="absolute bottom-24 left-32 animate-float opacity-35" style={{ animationDelay: '2.2s' }}>
        <div className="w-8 h-8 rounded-lg bg-portfolio-purple/20 backdrop-blur-sm border border-portfolio-purple/30 flex items-center justify-center">
          <Globe size={16} className="text-portfolio-purple" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 animate-slide-up hover:shadow-glow hover:shadow-portfolio-purple/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-portfolio-purple/20 flex items-center justify-center animate-glow hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-portfolio-purple" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-portfolio-purple transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 animate-slide-up hover:shadow-glow hover:shadow-portfolio-blue/20 transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="lg"
                        className="border-portfolio-purple/30 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors hover:shadow-sm"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon size={20} className="mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Quote */}
          <Card className="bg-gradient-card border-border/50 animate-slide-up hover:shadow-glow hover:shadow-portfolio-green/20 transition-all duration-300" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "Building innovative solutions with clean code, thoughtful design, and a passion for creating meaningful user experiences."
                </blockquote>
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="border-portfolio-purple/30 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors hover:shadow-sm"
                  asChild
                >
                  <a href="mailto:varshinidivyaa@gmail.com">
                    <Mail size={18} className="mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;