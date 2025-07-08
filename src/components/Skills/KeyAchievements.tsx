import { Card, CardContent } from "@/components/ui/card";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "Architecture Design",
      description: "Event-driven microservices with 99.9% uptime"
    },
    {
      title: "Performance Optimization", 
      description: "45% response time improvement with caching"
    },
    {
      title: "AI Integration",
      description: "Real-time code review with ML-powered suggestions"
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {achievements.map((achievement) => (
        <Card key={achievement.title} className="text-center bg-card border-border card-hover">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
            <p className="text-sm text-white/70">{achievement.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KeyAchievements;