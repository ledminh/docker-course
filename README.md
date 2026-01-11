# Interactive Docker Course 🐳

A comprehensive, self-paced web-based course for learning Docker from first principles through to upper-intermediate topics. This interactive curriculum features hands-on exercises, visual diagrams, quizzes, and real-world projects.

## 🎯 Target Audience

This course is designed for:
- Developers wanting to learn containerization
- DevOps engineers looking to master Docker
- Students with basic command-line experience
- Anyone interested in modern application deployment

## 📚 Course Structure

The course consists of 11 comprehensive modules:

### Module 1: Introduction to Containers and Virtualisation
- What containers are and how they differ from VMs
- Linux namespaces and cgroups
- Benefits of containerisation
- Interactive diagrams and quizzes

### Module 2: Docker Architecture and CLI Fundamentals
- Client-server architecture
- Docker daemon, client, and registry
- Basic CLI commands
- Hands-on exercises

### Module 3: Images and Image Creation
- Understanding Docker images vs containers
- Layered file systems
- Writing Dockerfiles
- Building and tagging images

### Module 4: Managing Containers
- Running containers with various options
- Port mapping and environment variables
- Logs and debugging
- Container lifecycle management

### Module 5: Persistent Storage with Volumes
- Docker volumes vs bind mounts
- Creating and managing volumes
- Sharing data between containers
- Volume lifecycle

### Module 6: Networking and Connectivity
- Docker network drivers (bridge, host, overlay, etc.)
- Custom networks
- Container communication
- Port mapping

### Module 7: Multi-Container Applications with Docker Compose
- Introduction to Docker Compose
- Writing docker-compose.yml files
- Managing multi-service stacks
- Environment variables and secrets

### Module 8: Writing Dockerfiles and Best Practices
- RUN, CMD, and ENTRYPOINT instructions
- Multi-stage builds
- Image optimization
- Security best practices

### Module 9: Orchestration with Docker Swarm
- Container orchestration concepts
- Swarm clusters and nodes
- Services and tasks
- High availability and scaling

### Module 10: Security Basics and Best Practices
- Container security fundamentals
- Running as non-root
- Vulnerability scanning
- Network hardening

### Module 11: Final Project and Next Steps
- End-to-end microservice application
- Integrating all learned concepts
- Real-world deployment scenario
- Path to Kubernetes

## 🚀 Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/ledminh/docker-course.git
   cd docker-course
   ```

2. **Open the course:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Navigate to:** `http://localhost:8000` (if using a local server)

## ✨ Features

- **🎨 Modern, Responsive Design:** Beautiful UI that works on desktop, tablet, and mobile
- **📊 Interactive Diagrams:** SVG-based architecture diagrams and visualizations
- **✅ Quizzes & Assessments:** Test your knowledge with interactive quizzes
- **💡 Hints & Solutions:** Get help when you need it without spoiling the learning
- **📝 Hands-on Exercises:** Real Docker commands and code examples
- **🎯 Progress Tracking:** Track your completion through each module
- **📋 Copy-to-Clipboard:** Easy code copying for hands-on practice

## 🛠️ Technologies Used

- **HTML5:** Semantic markup for content structure
- **CSS3:** Modern styling with gradients, animations, and responsive design
- **JavaScript:** Interactive features, quizzes, and progress tracking
- **SVG:** Scalable vector graphics for diagrams
- **Local Storage:** Save progress across sessions

## 📖 How to Use This Course

1. **Start with Module 1:** Build a strong foundation
2. **Complete exercises:** Hands-on practice is essential
3. **Take quizzes:** Reinforce your understanding
4. **Use hints wisely:** Try to solve challenges first
5. **Progress sequentially:** Each module builds on previous knowledge
6. **Practice on your machine:** Install Docker and try commands locally

## 🔧 Prerequisites

To get the most out of this course:
- Basic command-line/terminal experience
- Understanding of basic programming concepts
- A computer with internet access
- (Optional) Docker installed on your system for hands-on practice

## 🎓 Learning Objectives

By the end of this course, you will be able to:
- ✅ Understand containerization and its benefits
- ✅ Build and manage Docker images
- ✅ Run and orchestrate containers
- ✅ Configure networks and persistent storage
- ✅ Use Docker Compose for multi-container applications
- ✅ Apply security best practices
- ✅ Deploy applications using Docker Swarm
- ✅ Build production-ready containerized applications

## 📁 Project Structure

```
docker-course/
├── index.html              # Main landing page
├── styles.css              # Global styles
├── script.js               # Interactive JavaScript
├── modules/                # Course modules
│   ├── module1.html       # Introduction to Containers
│   ├── module2.html       # Docker Architecture & CLI
│   ├── module3.html       # Images & Image Creation
│   ├── module4.html       # Managing Containers
│   ├── module5.html       # Persistent Storage
│   ├── module6.html       # Networking
│   ├── module7.html       # Docker Compose
│   ├── module8.html       # Dockerfile Best Practices
│   ├── module9.html       # Docker Swarm
│   ├── module10.html      # Security Basics
│   └── module11.html      # Final Project
├── knowledge-base.pdf      # Reference documentation
├── specs.pdf               # Course specifications
└── README.md               # This file
```

## 🤝 Contributing

This course is part of a learning project. Suggestions and improvements are welcome!

## 📝 License

This educational content is provided as-is for learning purposes.

## 🙏 Acknowledgments

- Based on official Docker documentation
- Inspired by best practices from the Docker community
- Created as an interactive learning experience

## 📧 Questions or Feedback?

Feel free to open an issue in the repository for questions, suggestions, or feedback!

---

**Happy Learning! 🐳**

Start your Docker journey by opening `index.html` or visiting the course homepage.
