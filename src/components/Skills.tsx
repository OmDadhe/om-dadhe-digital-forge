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

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    "Spring Boot": `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
}`,
    "Microservices": `version: '3'
services:
  api-gateway:
    image: nginx:alpine
    ports:
      - "80:80"
  
  user-service:
    build: ./user-service
    environment:
      - DB_HOST=postgres
  
  order-service:
    build: ./order-service
    depends_on:
      - rabbitmq`,
    "Java": `public class BinarySearchTree {
    private Node root;
    
    public void insert(int value) {
        root = insertRec(root, value);
    }
    
    private Node insertRec(Node root, int value) {
        if (root == null) {
            root = new Node(value);
            return root;
        }
        if (value < root.value)
            root.left = insertRec(root.left, value);
        else if (value > root.value)
            root.right = insertRec(root.right, value);
        return root;
    }
}`,
    "JavaScript/TypeScript": `interface User {
  id: string;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('/api/users');
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};`,
    "Python": `from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root: Optional[TreeNode]) -> List[int]:
    result = []
    
    def dfs(node):
        if node:
            dfs(node.left)
            result.append(node.val)
            dfs(node.right)
    
    dfs(root)
    return result`,
    "Redis": `import redis
from typing import Optional

class CacheService:
    def __init__(self):
        self.client = redis.Redis(host='localhost', port=6379, db=0)
    
    def get(self, key: str) -> Optional[str]:
        value = self.client.get(key)
        return value.decode('utf-8') if value else None
    
    def set(self, key: str, value: str, expiry: int = 3600):
        self.client.setex(key, expiry, value)
    
    def delete(self, key: str) -> bool:
        return bool(self.client.delete(key))`,
    "MongoDB": `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}`,
    "Docker": `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]`,
    "AWS": `import boto3
from botocore.exceptions import ClientError

def upload_to_s3(file_name, bucket, object_name=None):
    if object_name is None:
        object_name = file_name
    
    s3_client = boto3.client('s3')
    try:
        s3_client.upload_file(file_name, bucket, object_name)
        return True
    except ClientError as e:
        print(f"Error: {e}")
        return False`
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
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="p-3 bg-muted rounded-md cursor-pointer transition-colors hover:bg-muted/80">
                      <span className="font-medium text-foreground">{skill}</span>
                    </div>
                    
                    {hoveredSkill === skill && codeSnippets[skill as keyof typeof codeSnippets] && (
                      <div className="absolute top-0 left-0 w-full z-10 bg-code-bg border border-code-border rounded-md p-4 shadow-lg">
                        <pre className="text-xs text-accent font-mono whitespace-pre-wrap overflow-hidden">
                          {codeSnippets[skill as keyof typeof codeSnippets]}
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
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