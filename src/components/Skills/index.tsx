import { useState } from "react";
import { skillCategories } from "@/data/skillCategories";
import SkillCard from "./SkillCard";
import KeyAchievements from "./KeyAchievements";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 animate-scroll-fade">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-responsive-3xl md:text-5xl font-bold mb-4 text-white">
            Technical Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Specialized in building scalable backend systems with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              hoveredSkill={hoveredSkill}
              onSkillHover={setHoveredSkill}
            />
          ))}
        </div>

        <KeyAchievements />
      </div>
    </section>
  );
};

export default Skills;