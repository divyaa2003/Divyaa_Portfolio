import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Globe, Code, Lightbulb, Palette, Target } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      title: "Design Team Lead",
      organization: "Software Development Club, MVJCE",
      description: "Led UI/UX initiatives, conducted 10+ workshops, mentored junior designers and speaker for many events,Guest sessions and workshops.",
      icon: Users,
      color: "portfolio-purple"
    },
    {
      title: "Event Coordinator",
      organization: "VertechX Fest & Cyberforge Hackathon",
      description: "Managed planning, logistics, and successful execution of large-scale tech events and contributed to event branding, visual assets, and user experience design.",
      icon: Trophy,
      color: "portfolio-green"
    },
    {
      title: "Website Developer",
      organization: "SWAYAM Cultural Fest",
      description: "Built and maintained the official Fest website with end-to-end design and backend integration.",
      icon: Globe,
      color: "portfolio-blue"
    },
    {
      title: "Technical Club Member",
      organization: "NIC, Saahitya & Aakriti Clubs",
      description: "Actively engaged in cultural, literary, and technical clubs; participated in various intra- and inter-college technical events like quizzards & CTF,representing MVJCE and showcased innovative projects in ideathons.",
      icon: Code,
      color: "portfolio-orange"
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 relative overflow-hidden">
      {/* Professional Moving Elements */}
      <div className="absolute top-24 right-12 animate-float opacity-30">
        <div className="w-14 h-14 rounded-lg bg-portfolio-green/20 backdrop-blur-sm border border-portfolio-green/30 flex items-center justify-center">
          <Lightbulb size={22} className="text-portfolio-green" />
        </div>
      </div>
      
      <div className="absolute top-1/2 left-16 animate-float opacity-40" style={{ animationDelay: '1.2s' }}>
        <div className="w-10 h-10 rounded-full bg-portfolio-orange/20 backdrop-blur-sm border border-portfolio-orange/30 flex items-center justify-center">
          <Palette size={18} className="text-portfolio-orange" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-32 animate-float opacity-35" style={{ animationDelay: '2.8s' }}>
        <div className="w-8 h-8 rounded-lg bg-portfolio-blue/20 backdrop-blur-sm border border-portfolio-blue/30 flex items-center justify-center">
          <Target size={16} className="text-portfolio-blue" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
            Leadership & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Active participation in technical clubs and community leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={activity.title}
                className="group bg-gradient-card border-border/50 hover:border-portfolio-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-purple/20 animate-slide-up hover:shadow-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${activity.color}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                      <Icon size={24} className={`text-${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">{activity.title}</CardTitle>
                      <p className="text-sm text-portfolio-purple font-medium">{activity.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;