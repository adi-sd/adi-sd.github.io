export type Project = {
    title: string;
    date: string;
    technologies: string;
    githubLink?: string;
    deploymentLink?: string;
    isCompleted: boolean;
    description?: string[];
};

export const projects: Project[] = [
    {
        title: "Song Pool", // updated
        date: "March 2025 - June 2025",
        technologies:
            "Next.js, Next-Auth, Typescript, Socket.io, PostgresQL, React, HTML, TailwindCSS, Spotify Web APIs",
        githubLink: "https://github.com/adi-sd/song-pool-app",
        deploymentLink: "https://song-pool.onrender.com/",
        isCompleted: true,
        description: [
            "Designed and implemented a collaborative music curation platform for ambient environments (cafes, co-working spaces), allowing patrons to vote on what music plays in real-time",
            "Integrated Spotify Web API for central music control, managed real-time user sessions, created real-time voting and music recommendations system for ambient music curation according to the majority of patrons' taste",
        ],
    },
    {
        title: "One-Clip", // updated
        date: "February 2025 - April 2025",
        technologies:
            "Next.js, Next-Auth, Typescript, React, HTML, TailwindCSS, Google OAuth Sign In, Mongo Db, Prisma ORM",
        githubLink: "https://github.com/adi-sd/one-clip",
        deploymentLink: "https://one-clip.vercel.app/",
        isCompleted: true,
        description: [
            "Built a cloud-synced clipboard app with instant copy-paste functionality and rich-text support, optimized for personal productivity and mobile use",
            "Integrated Google OAuth via NextAuth for secure login; used Prisma ORM to manage user-specific data and clip storage on MongoDB Atlas",
        ],
    },
    {
        title: "Crypto Board", // updated
        date: "November 2024 - December 2024",
        technologies:
            "React, React Router, Material UI, dayjs, React Gauge Chart, Python, Django, Pymongo, MongoDB, TextBlob, Web Crawler, Docker",
        githubLink: "https://github.com/ejpusc/CSCI578-CryptoBoard",
        isCompleted: true,
        description: [
            "Developed a full-stack cryptocurrency dashboard with real-time price tracking, volume metrics, and social sentiment analysis",
            "Scraped and parsed crypto-related text data, using TextBlob for NLP-based sentiment scoring",
            "Deployed frontend (React) and backend (Django) services with Docker and GCP",
        ],
    },
    {
        title: "Next.js Auth Toolbox", // updated
        date: "June 2024 - July 2024",
        technologies: "TypeScript, React.js, Next.js, Auth.js, Next-Auth, Tailwind CSS",
        githubLink: "https://github.com/adi-sd/nextjs-auth-toolbox",
        deploymentLink: "https://nextjs-auth-toolbox.vercel.app/",
        isCompleted: true,
        description: [
            "Created a comprehensive authentication toolbox for Next.js applications, simplifying the integration of various authentication methods including OAuth providers (Google, GitHub), email/password, and magic links",
            "Implemented secure session management, role-based access control, and user profile management using Auth.js and Next-Auth",
            "Provided extensive documentation and examples to facilitate easy adoption by developers",
        ],
    },
    {
        title: "Task It", // updated
        date: "July 2024 - August 2024",
        technologies: "Next.js, Next-Auth, Typescript, React, HTML, TailwindCSS",
        githubLink: "https://github.com/adi-sd/task-it",
        deploymentLink: "https://task-it-beige.vercel.app/",
        isCompleted: true,
        description: [
            "Developed a task management web application with user authentication, allowing users to create, edit, and organize tasks into projects",
            "Implemented features such recycle bin, drag-and-drop task organization using React and TailwindCSS for a responsive UI",
            "Integrated Next-Auth for secure user authentication and session management with Google SSO",
        ],
    },
    {
        title: "Spotify Clone", // updated
        date: "May 2024",
        technologies: "Next.js, Next-Auth, Typescript, React, HTML, TailwindCSS",
        githubLink: "https://github.com/adi-sd/spotify-clone",
        deploymentLink: "https://spotify-clone-mauve-six.vercel.app/",
        isCompleted: true,
        description: [
            "Built a self upload mp3 music player web app with a sleek, responsive UI inspired by Spotify",
            "Implemented user authentication using Next-Auth with Google SSO, allowing users to securely log in and manage their music library",
            "Developed core features including music playback, playlist creation, and search functionality using React and TailwindCSS",
            "Implemented a two-tier subscription model with free and premium plans using Stripe Webhooks",
        ],
    },
    {
        title: "Video Library Search with Video Clip Query", // updated
        date: "December 2023",
        technologies: "Python, Numpy, CV2, PyQt",
        githubLink: "https://github.com/adi-sd/csci-576-final-project",
        isCompleted: true,
        description: [
            "Developed a video library pre-processing algorithm (shot boundary detection, frame histogram calculation and hashing) in Python to streamline video data indexing and retrieval with an interactive desktop video player interface (PyQt5)",
            "Enabled querying the library using a short video clip as input, achieving precise frame matches with an average lookup time of 200–300 ms for a 100+ video database",
        ],
    },
    {
        title: "Color Histogram Based Object Detection", // updated
        date: "October 2023",
        technologies: "Java, Maven, OpenCV",
        githubLink: "https://github.com/adi-sd/color-histogram-based-object-detection",
        isCompleted: true,
        description: [
            "Implemented a color histogram-based object detection algorithm in Java using OpenCV, achieving an average precision of 85%",
            "Developed a user-friendly GUI to facilitate image uploads and display detection results with bounding boxes and confidence scores",
            "Supports multiple object detection and different sized objects in a single image",
        ],
    },
    {
        title: "EBay Window-Shopping Application", // updated
        date: "September 2023",
        technologies: "Node.js, Angular, Swift, MongoDB, Google Cloud, eBay Open Source APIs",
        githubLink: "https://github.com/adi-sd/ebay-window-shopping-app",
        isCompleted: true,
        description: [
            "Developed a full-stack e-commerce web and iOS application using Node.js, Angular, and Swift, integrating eBay's open-source APIs for product search and details",
        ],
    },
    {
        title: "Portfolio Website", // updated
        date: "July 2023",
        technologies: "React.js, Vite, TypeScript, HTML, CSS, TailwindCSS, JavaScript, Google Fonts",
        githubLink: "https://github.com/adi-sd/adi-sd.github.io",
        deploymentLink: "https://adi-sd.github.io/",
        isCompleted: true,
        description: [
            "Designed and developed a personal portfolio website to showcase projects, skills, and work experience",
            "Implemented a responsive design using React.js and TailwindCSS, ensuring optimal viewing across devices",
            "Deployed the website using GitHub Pages for easy access and sharing",
        ],
    },
    {
        title: "Bulk Resume Shortlisting",
        date: "December 2019",
        technologies: "Angular, Python Flask, HTML, CSS, and Typescript",
        githubLink: "https://github.com/adi-sd/input-and-intelligence",
        isCompleted: true,
    },
    {
        title: "Cyber Forensic Framework for PaaS Cloud Service Providers",
        date: "May 2018",
        technologies: "Java, Shell Scripts, Python, MongoDB, HTML, CSS",
        githubLink: "https://github.com/adi-sd/paas-cloud-forensics",
        isCompleted: true,
    },
];
