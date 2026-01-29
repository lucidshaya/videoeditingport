import { Award, Clock, Users, Zap } from "lucide-react";

const stats = [
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Projects Completed" },
  { icon: Zap, value: "24h", label: "Quick Turnaround" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-mono text-sm tracking-widest mb-4">ABOUT ME</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Visual Storytelling
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in video editing and motion design, 
                I specialize in creating compelling visual content that captivates audiences 
                and elevates brands.
              </p>
              <p>
                From fast-paced social media reels to cinematic documentaries and 
                intricate animations, I bring a unique blend of technical expertise 
                and creative vision to every project.
              </p>
              <p>
                I stay at the forefront of industry trends, incorporating AI-powered 
                tools and techniques to deliver innovative solutions that push creative 
                boundaries.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1 text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
