import { Layers, Film, Palette, Sparkles } from "lucide-react";

const tools = [
  {
    name: "After Effects",
    icon: Sparkles,
    description: "Motion graphics & visual effects",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Premiere Pro",
    icon: Film,
    description: "Professional video editing",
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "DaVinci Resolve",
    icon: Palette,
    description: "Color grading & finishing",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CapCut",
    icon: Layers,
    description: "Short-form content creation",
    color: "from-cyan-500 to-blue-500",
  },
];

const skills = [
  "Color Grading",
  "Motion Graphics",
  "Visual Effects",
  "Sound Design",
  "Storytelling",
  "Next-Gen Workflows",
  "Character Animation",
  "UI/UX Animation",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">EXPERTISE</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tools & Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mastering industry-leading software to deliver exceptional visual content
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon size={24} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
              <p className="text-muted-foreground text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.05}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
