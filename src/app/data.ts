import { Project, TimelineItem, SkillCategory } from "./types";

export const profileInfo = {
  name: "El Hanafi Abbaali",
  title: "Fullstack Developer & Cybersecurity Enthusiast",
  subtitle: "Modern Web Systems & UI/UX Engineering",
  email: "elhanafiabbaali@gmail.com",
  github: "https://github.com/ELHanafi007",
  bio: "I’m a fullstack developer focused on building modern, high-performance web experiences with strong attention to UI/UX, responsiveness, and security. I enjoy creating scalable systems, interactive interfaces, and polished digital products that combine engineering quality with visual impact. Beyond web development, I’m deeply interested in low-level systems, binary exploitation, and cybersecurity research, constantly improving my problem-solving mindset and technical foundations.",
  image: "/profile.jpg"
};

export const projectsData: Project[] = [
  {
    name: "Sugi Sushi Saudi Arabia",
    summary: "Premium Saudi Arabian restaurant platform built for modern branding and mobile-first experience.",
    description: "Developed and deployed a modern restaurant website focused on elegant design systems, responsive layouts, and smooth customer experience across all devices.",
    tech: ["Next.js", "React", "TailwindCSS", "UI/UX Design"],
    liveLink: "https://sugisushi.com.sa",
    highlight: "Built highly polished responsive frontend architecture with conversion-focused UI systems and smooth interaction design."
  },
  {
    name: "Monaliza House",
    summary: "Luxury-inspired business platform with immersive UI interactions and performance optimizations.",
    description: "Designed and developed a visually rich website experience with elegant layouts, premium branding direction, and modern responsive engineering principles.",
    tech: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    liveLink: "https://monalizahouse.com",
    highlight: "Implemented advanced UI/UX animations while maintaining fast loading performance and scalable component structure."
  },
  {
    name: "Diamont Aris Meubles",
    summary: "Modern furniture showcase platform combining visual storytelling and presentation systems.",
    description: "Built a premium furniture business website optimized for product presentation, customer engagement, and responsive browsing across desktop and mobile devices.",
    tech: ["Next.js", "JavaScript", "TailwindCSS", "Vercel"],
    liveLink: "https://diamontarismeubles.com",
    highlight: "Engineered responsive product-focused layouts with optimized visual hierarchy and smooth navigation systems."
  },
  {
    name: "RV Detailing",
    summary: "Premium automotive detailing website featuring bold branding and smooth animations.",
    description: "Created a visually impactful automotive service platform focused on elegant interaction systems, responsive performance, and modern UI/UX presentation.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vercel"],
    liveLink: "https://rv-detailing.vercel.app/",
    highlight: "Integrated advanced animation systems and responsive rendering optimizations while maintaining fast user experience."
  },
  {
    name: "Artificial Plants Shop",
    summary: "Immersive e-commerce storefront designed for modern product browsing and shopping experience.",
    description: "Developed an online shopping platform optimized for responsive product display, intuitive user navigation, and customer-focused browsing experiences.",
    tech: ["React", "Next.js", "TailwindCSS", "E-commerce UI"],
    liveLink: "https://www.artificialplants.shop",
    highlight: "Built scalable product presentation systems optimized for mobile responsiveness and visual consistency."
  },
  {
    name: "Trottinettes Maroc",
    summary: "Electric scooter platform focused on performance, product showcasing, and sleek digital branding.",
    description: "Built a responsive electric mobility platform designed to showcase products with modern layouts, optimized navigation, and visually engaging frontend architecture.",
    tech: ["Next.js", "React", "TailwindCSS"],
    liveLink: "https://trottinettes-maroc.vercel.app",
    highlight: "Optimized high-performance responsive sections and scalable frontend structure for product-focused experiences."
  },
  {
    name: "Nirrayas Portfolio Experience",
    summary: "Visually dynamic interactive portfolio demonstrating immersive animations.",
    description: "Created a visually dynamic portfolio experience centered around smooth user interaction, modern animations, and responsive rendering systems.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vercel"],
    liveLink: "https://nirrayas.vercel.app",
    highlight: "Designed advanced motion-driven UI interactions with optimized frontend performance."
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "Self-Taught Frontend Development Journey",
    subtitle: "Fundamentals of Web Development",
    details: [
      "Started learning HTML, CSS, and JavaScript fundamentals.",
      "Built first responsive interfaces and small web projects.",
      "Developed a strong curiosity for how modern web systems work internally."
    ]
  },
  {
    year: "2023",
    title: "Expanding Into CS & Low-Level Systems",
    subtitle: "Exploration & Foundation Building",
    details: [
      "Explored different IT fields including web development, cybersecurity, and systems engineering.",
      "Started learning C, Bash scripting, terminal workflows, and competitive programming concepts.",
      "Began developing a deeper understanding of problem-solving and low-level programming logic."
    ]
  },
  {
    year: "2024",
    title: "1337 Piscine Journey & Systems-Level Growth",
    subtitle: "Resilience & Mastering the Fundamentals",
    details: [
      "Attempted the first 1337 Piscine and failed, turning it into a major point of growth in discipline and technical mindset.",
      "Dedicated over a year to intense self-study, returning stronger for the second Piscine with vastly improved foundations.",
      "Deeply studied memory management in C, debuggers (GDB), binary inspector tools (objdump), and reverse engineering principles."
    ]
  },
  {
    year: "2025 - Present",
    title: "Freelance Fullstack Development & Security Research",
    subtitle: "Professional Delivery & Cyber Analysis",
    details: [
      "Building modern business websites and high-performance digital experiences for global clients.",
      "Developing responsive platforms with modern UI/UX engineering and scalable frontend architecture.",
      "Performing cybersecurity checks and technical analysis on web platforms to identify security vulnerabilities."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C", "SQL", "Bash"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express.js", "TailwindCSS", "Framer Motion"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "Linux", "Vercel", "REST APIs"]
  },
  {
    category: "Cybersecurity & Low-Level",
    items: ["GDB", "objdump", "Binary Analysis", "Reverse Engineering", "Linux Systems"]
  }
];
