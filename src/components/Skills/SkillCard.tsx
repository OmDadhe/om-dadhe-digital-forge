import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { codeSnippets } from "@/data/codeSnippets";
import CodeSnippet from "./CodeSnippet";

interface SkillCardProps {
  title: string;
  skills: string[];
  hoveredSkill: string | null;
  onSkillHover: (skill: string | null) => void;
}

const SkillCard = ({ title, skills, hoveredSkill, onSkillHover }: SkillCardProps) => {
  return (
    <Card className="bg-card border-border card-hover">
      <CardHeader>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {skills.map((skill) => (
            <div key={skill} className="space-y-2 relative">
              <div 
                className="p-3 bg-muted rounded-md cursor-pointer transition-colors hover:bg-muted/80 glow-effect"
                onMouseEnter={() => onSkillHover(skill)}
                onMouseLeave={() => onSkillHover(null)}
              >
                <span className="font-medium text-white text-sm sm:text-base break-words">{skill}</span>
              </div>
              
              {hoveredSkill === skill && codeSnippets[skill as keyof typeof codeSnippets] && (
                <CodeSnippet 
                  skill={skill}
                  code={codeSnippets[skill as keyof typeof codeSnippets]}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;