import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'elhanafiabbaali@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi El Hanafi, I am reaching out to you because...',
    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ELHanafi007' },
    { name: 'whatsapp', url: 'https://wa.me/212631305954' },
    { name: 'instagram', url: 'https://instagram.com/0x_.hf' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Sugi Sushi Saudi Arabia',
        slug: 'sugi-sushi',
        liveUrl: 'https://sugisushi.com.sa',
        year: 2025,
        description: `Developed and deployed a modern restaurant website focused on elegant design systems, responsive layouts, and smooth customer experience across all devices.`,
        role: `Built highly polished responsive frontend architecture with conversion-focused UI systems and smooth interaction design.`,
        techStack: ['Next.js', 'React', 'TailwindCSS'],
        thumbnail: '/projects/thumbnail/sugi.svg',
        longThumbnail: '/projects/long/sugi.svg',
        images: [],
    },
    {
        title: 'Monaliza House',
        slug: 'monaliza-house',
        liveUrl: 'https://monalizahouse.com',
        year: 2025,
        description: `Designed and developed a visually rich website experience with elegant layouts, premium branding direction, and modern responsive engineering principles.`,
        role: `Implemented advanced UI/UX animations while maintaining fast loading performance and scalable component structure.`,
        techStack: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
        thumbnail: '/projects/thumbnail/monaliza.svg',
        longThumbnail: '/projects/long/monaliza.svg',
        images: [],
    },
    {
        title: 'Diamont Aris Meubles',
        slug: 'diamont-aris-meubles',
        liveUrl: 'https://diamontarismeubles.com',
        year: 2025,
        description: `Built a premium furniture business website optimized for product presentation, customer engagement, and responsive browsing across desktop and mobile devices.`,
        role: `Engineered responsive product-focused layouts with optimized visual hierarchy and smooth navigation systems.`,
        techStack: ['Next.js', 'JavaScript', 'TailwindCSS', 'Vercel'],
        thumbnail: '/projects/thumbnail/diamont.svg',
        longThumbnail: '/projects/long/diamont.svg',
        images: [],
    },
    {
        title: 'RV Detailing',
        slug: 'rv-detailing',
        liveUrl: 'https://rv-detailing.vercel.app',
        year: 2025,
        description: `Created a visually impactful automotive service platform focused on elegant interaction systems, responsive performance, and modern UI/UX presentation.`,
        role: `Integrated advanced animation systems and responsive rendering optimizations while maintaining fast user experience.`,
        techStack: ['React', 'TailwindCSS', 'Framer Motion', 'Vercel'],
        thumbnail: '/projects/thumbnail/rv.svg',
        longThumbnail: '/projects/long/rv.svg',
        images: [],
    },
    {
        title: 'Artificial Plants Shop',
        slug: 'artificial-plants-shop',
        liveUrl: 'https://www.artificialplants.shop',
        year: 2025,
        description: `Developed an online shopping platform optimized for responsive product display, intuitive user navigation, and customer-focused browsing experiences.`,
        role: `Built scalable product presentation systems optimized for mobile responsiveness and visual consistency.`,
        techStack: ['React', 'Next.js', 'TailwindCSS'],
        thumbnail: '/projects/thumbnail/plants.svg',
        longThumbnail: '/projects/long/plants.svg',
        images: [],
    },
    {
        title: 'Trottinettes Maroc',
        slug: 'trottinettes-maroc',
        liveUrl: 'https://trottinettes-maroc.vercel.app',
        year: 2025,
        description: `Built a responsive electric mobility platform designed to showcase products with modern layouts, optimized navigation, and visually engaging frontend architecture.`,
        role: `Optimized high-performance responsive sections and scalable frontend structure for product-focused experiences.`,
        techStack: ['Next.js', 'React', 'TailwindCSS'],
        thumbnail: '/projects/thumbnail/trottinettes.svg',
        longThumbnail: '/projects/long/trottinettes.svg',
        images: [],
    },
    {
        title: 'Nirrayas Portfolio Experience',
        slug: 'nirrayas-portfolio-experience',
        liveUrl: 'https://nirrayas.vercel.app',
        year: 2025,
        description: `Created a visually dynamic portfolio experience centered around smooth user interaction, modern animations, and responsive rendering systems.`,
        role: `Designed advanced motion-driven UI interactions with optimized frontend performance.`,
        techStack: ['React', 'TailwindCSS', 'Framer Motion', 'Vercel'],
        thumbnail: '/projects/thumbnail/nirrayas.svg',
        longThumbnail: '/projects/long/nirrayas.svg',
        images: [],
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Freelance Fullstack Development & Cybersecurity Research',
        company: 'Freelance',
        duration: '2025 - Present',
    },
    {
        title: '1337 Piscine Journey & Systems-Level Growth',
        company: '1337',
        duration: '2024',
    },
    {
        title: 'Expanding Into Computer Science & Low-Level Systems',
        company: 'Self-Taught',
        duration: '2023',
    },
    {
        title: 'Self-Taught Frontend Development Journey',
        company: 'Self-Taught',
        duration: '2022',
    },
];
