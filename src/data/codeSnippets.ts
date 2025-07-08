export const codeSnippets = {
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