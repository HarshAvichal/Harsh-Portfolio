export const Bio = {
  name: "Harsh Avichal",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Programmer",
  ],
  description: `Hey there!\n\nI'm Harsh Avichal, a passionate software engineer and cloud enthusiast, navigating the ever-evolving universe of technology. From building robust web apps and automating cloud deployments to orchestrating DevOps pipelines, I thrive on turning complex challenges into elegant solutions. Whether it's crafting seamless user experiences, optimizing infrastructure, or exploring the latest in AI and automation, I'm always on a quest to learn, create, and make an impact.\nReady to collaborate, innovate, and take on the next big adventure in tech!`,
  github: "https://github.com/HarshAvichal",
  resume: "/Harsh Avichal Resume.pdf",
  linkedin: "https://www.linkedin.com/in/harshavichal0614/",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Python", icon: "SiPython" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Bash", icon: "SiGnubash" },
      { name: "Shell", icon: "SiGnubash" },
      { name: "SQL", icon: "SiMysql" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: "FaReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Redux", icon: "SiRedux" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "FaDocker" },
      { name: "Kubernetes", icon: "SiKubernetes" },
      { name: "Helm", icon: "SiHelm" },
      { name: "Jenkins", icon: "SiJenkins" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "FaGithub" },
      { name: "GitLab", icon: "FaGitlab" },
      { name: "Ansible", icon: "SiAnsible" },
      { name: "ArgoCD", icon: "SiArgocd" },
      { name: "SonarQube", icon: "SiSonarqube" },
      { name: "Terraform", icon: "SiTerraform" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: "FaAws" },
      { name: "Azure", icon: "FaMicrosoft" },
      { name: "GCP", icon: "SiGooglecloud" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Redis", icon: "SiRedis" },
    ],
  },
  {
    title: "Monitoring & CI/CD",
    skills: [
      { name: "Prometheus", icon: "SiPrometheus" },
      { name: "Grafana", icon: "SiGrafana" },
      { name: "Jenkins", icon: "SiJenkins" },
      { name: "GitHub Actions", icon: "SiGithubactions" },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: "FaLinux" },
      { name: "Windows", icon: "FaWindows" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: require("../images/iteam_technology_logo.jpeg"),
    role: "Software Engineer Intern",
    company: "iTeam Technologies",
    date: "Jan. 2024 – May 2024",
    desc: "Contributed to the development of an internal logistics management platform by building backend APIs with Node.js and Express, reducing manual inventory tracking delays by 30%. Dockerized microservices and deployed them to AWS EKS using Helm, ensuring reliable and scalable service rollout. Built Terraform modules for provisioning AWS infrastructure and automated deployments through Jenkins CI/CD, cutting release time by 60%.",
    skills: [
      "Node.js",
      "Express.js",
      "AWS",
      "Docker",
      "Helm",
      "Terraform",
      "Jenkins CI/CD"
    ],
  },
  {
    id: 1,
    img: require("../images/mykareerstudio_logo.jpeg"),
    role: "Software Engineer Intern",
    company: "Kareer Studios",
    date: "May 2023 – Sept. 2023",
    desc: "Developed a role-based student career counseling platform with dashboards for Admins, Counselors, and Students, improving task efficiency by 40%. Built secure data intake and performance-tracking modules, a parent meeting scheduler, and a Study Abroad workflow supporting 5+ countries. Integrated an ML-based engine using sklearn to suggest university matches, improving counselor alignment accuracy by 25%.",
    skills: [
      "React.js",
      "Node.js",
      "ML (sklearn)",
      "Dashboards",
      "Performance Tracking"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: require("../images/stevens.jpeg"),
    school: "Stevens Institute of Technology",
    date: "Sept. 2024 – May 2026",
    grade: "3.89 / 4.00 GPA",
    desc: "Currently pursuing Master of Science in Computer Science at Stevens Institute of Technology, Hoboken, NJ.",
    degree: "Master of Science in Computer Science",
  },
  {
    id: 1,
    img: require("../images/charusat.jpeg"),
    school: "Charotar University of Science & Technology",
    date: "Sept. 2020 – May 2024",
    grade: "9.09 / 10.0 CGPA",
    desc: "Bachelor of Technology in Computer Science, Gujarat, India.",
    degree: "Bachelor of Technology in Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "StudyNotion",
    description:
      "Built a full-stack e-learning platform enabling instructors to create and monetize courses, with students tracking progress post-enrollment — reducing manual course management efforts by 50%. Implemented JWT-based authentication, role-based access control, and Razorpay integration for secure transactions. Developed REST APIs and responsive dashboards with protected routes using React Router, Tailwind CSS, and MongoDB.",
    image: require("../images/studynotion.png"),
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "JWT"
    ],
    category: "web app",
    github: "https://github.com/HarshAvichal/StudyNotion",
    webapp: "(add your live link here if any)",
  },
  {
    id: 1,
    title: "ConsultEdge",
    description:
      "Built and deployed a responsive portfolio website to modernize a local tax consultancy's online presence, improving mobile experience and lead conversion potential by 30%. Implemented custom form handling with backend validation and deployed the site publicly to production hosting. Delivered the project end-to-end, including client requirements, testing, and deployment — now live and in business use.",
    image: require("../images/infinity.png"),
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express"
    ],
    category: "web app",
    github: "https://github.com/HarshAvichal/Infinity-Consultancy",
    webapp: "https://infinity-consultancy-bilimora.vercel.app/",
  },
  {
    id: 2,
    title: "EasyShop Cloud Infrastructure Deployment",
    description:
      "Provisioned Kubernetes-based infrastructure to deploy a modern e-commerce application on AWS EKS using Terraform, integrating GitHub-triggered Jenkins pipelines with ArgoCD for CI/CD, and securing production traffic via TLS-enabled NGINX ingress with Cert Manager and custom domain routing.",
    image: require("../images/easyshop.png"),
    tags: [
      "Next.js",
      "AWS",
      "Terraform",
      "Kubernetes",
      "ArgoCD"
    ],
    category: "devops",
    github: "https://github.com/HarshAvichal/EasyShop-Cloud-Infra-Deployment",
    webapp: "(add your live link here if any)",
  },
  {
    id: 3,
    title: "EventEase",
    description:
      "EventEase is a web application designed to streamline the event management process, enabling seamless coordination between organizers and participants. The platform allows organizers to create, manage, and track events, while participants can easily register, receive updates, and interact with event details in real time. Features include automated notifications, participant management, and analytics for event performance.",
    image: require("../images/EventEase.png"),
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Event Management"
    ],
    category: "web app",
    github: "https://github.com/HarshAvichal/EventEase",
    webapp: "https://event-ease-in.vercel.app/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
