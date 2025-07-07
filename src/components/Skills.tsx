import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const codeSnippets = {
    "Node.js": `const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});
app.listen(3000);`,
    "Express.js": `const router = express.Router();
router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});
module.exports = router;`,
    "FastAPI": `from fastapi import FastAPI
app = FastAPI()
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}`,
    "Spring Boot": `@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}`,
    "Microservices": `version: '3'
services:
  api-gateway:
    image: nginx:alpine
  user-service:
    build: ./user-service
  order-service:
    build: ./order-service`,
    "JavaScript/TypeScript": `interface User {
  id: string;
  name: string;
}
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  return response.json();
};`,
    "Java": `public class UserService {
    private UserRepository repository;
    
    public User findById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new UserNotFoundException());
    }
}`,
    "Python": `class UserManager:
    def __init__(self, db):
        self.db = db
    
    def create_user(self, data):
        user = User(**data)
        self.db.save(user)
        return user`,
    "C": `#include <stdio.h>
int main() {
    printf("Hello World");
    return 0;
}`,
    "SQL": `SELECT u.id, u.name, COUNT(o.id) as orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY orders DESC;`,
    "Supabase": `import { createClient } from '@supabase/supabase-js'
const supabase = createClient(url, key)
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('active', true)`,
    "MongoDB": `const user = await User.findOneAndUpdate(
  { email: 'user@example.com' },
  { $set: { lastLogin: new Date() } },
  { new: true }
);`,
    "MySQL": `SELECT u.*, p.title as latest_post
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.active = 1
ORDER BY p.created_at DESC;`,
    "Redis": `import redis
client = redis.Redis()
client.setex('user:123', 3600, json.dumps(user_data))
cached_user = client.get('user:123')`,
    "Apache Kafka": `@KafkaListener(topics = "user-events")
public void handleUserEvent(UserEvent event) {
    logger.info("Processing: {}", event);
    userService.processEvent(event);
}`,
    "Docker": `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
    "AWS": `import boto3
s3 = boto3.client('s3')
s3.upload_file(
    'local_file.txt',
    'my-bucket',
    'remote_file.txt'
)`,
    "Kubernetes": `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-server`,
    "CI/CD": `name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install && npm test`,
    "Git/GitHub": `git checkout -b feature/new-endpoint
git add .
git commit -m "Add user API endpoint"
git push origin feature/new-endpoint`
  };

  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "Microservices"]
    },
    {
      title: "Programming Languages", 
      skills: ["JavaScript/TypeScript", "Java", "Python", "C", "SQL"]
    },
    {
      title: "Databases & Messaging",
      skills: ["Supabase", "MongoDB", "MySQL", "Redis", "Apache Kafka"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "AWS", "Kubernetes", "CI/CD", "Git/GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in building scalable backend systems with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="space-y-2">
                      <div 
                        className="p-3 bg-muted rounded-md cursor-pointer transition-colors hover:bg-muted/80"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="font-medium text-foreground">{skill}</span>
                      </div>
                      
                      {hoveredSkill === skill && codeSnippets[skill as keyof typeof codeSnippets] && (
                        <div className="bg-code-bg border border-code-border rounded-md overflow-hidden">
                          <div className="bg-muted/20 px-3 py-1 text-xs text-muted-foreground border-b border-code-border">
                            {skill} - Code Example
                          </div>
                          <div className="p-3">
                            <pre className="text-xs text-accent font-mono whitespace-pre-wrap overflow-x-auto">
                              {codeSnippets[skill as keyof typeof codeSnippets]}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-card border-border">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-primary mb-2">Architecture Design</h3>
              <p className="text-sm text-muted-foreground">Event-driven microservices with 99.9% uptime</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card border-border">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-primary mb-2">Performance Optimization</h3>
              <p className="text-sm text-muted-foreground">45% response time improvement with caching</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card border-border">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-primary mb-2">AI Integration</h3>
              <p className="text-sm text-muted-foreground">Real-time code review with ML-powered suggestions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;