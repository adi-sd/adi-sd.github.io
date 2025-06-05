export type Project = {
    title: string;
    date: string;
    description: string;
    githubLink?: string;
    deploymentLink?: string;
    isCompleted: boolean;
};

export const projects: Project[] = [
    {
        title: "Song Pool", // updated
        date: "March 2025 - June 2025",
        description:
            "Next.js, Next-Auth, Typescript, Socket.io, PostgresQL, React, HTML, TailwindCSS, Spotify Web APIs",
        githubLink: "https://github.com/adi-sd/song-pool-app",
        deploymentLink: "https://song-pool.onrender.com/",
        isCompleted: true,
    },
    {
        title: "One-Clip", // updated
        date: "February 2025 - April 2025",
        description:
            "Next.js, Next-Auth, Typescript, React, HTML, TailwindCSS, Google OAuth Sign In, Mongo Db, Prisma ORM",
        githubLink: "https://github.com/adi-sd/one-clip",
        deploymentLink: "https://one-clip.vercel.app/",
        isCompleted: true,
    },
    {
        title: "Crypto Board", // updated
        date: "November 2024 - December 2024",
        description:
            "React, React Router, Material UI, dayjs, React Gauge Chart, Python, Django, Pymongo, MongoDB, TextBlob, Web Crawler, Docker",
        githubLink: "https://github.com/ejpusc/CSCI578-CryptoBoard",
        isCompleted: true,
    },
    {
        title: "Next.js Auth Toolbox", // updated
        date: "June 2024 - July 2024",
        description: "TypeScript, React.js, Next.js, Auth.js, Next-Auth, Tailwind CSS",
        githubLink: "https://github.com/adi-sd/nextjs-auth-toolbox",
        deploymentLink: "https://nextjs-auth-toolbox.vercel.app/",
        isCompleted: true,
    },
    {
        title: "Task It", // updated
        date: "July 2024 - August 2024",
        description: "Next.js, Next-Auth, Typescript, React, HTML, TailwindCSS",
        githubLink: "https://github.com/adi-sd/task-it",
        deploymentLink: "https://task-it-beige.vercel.app/",
        isCompleted: true,
    },
    {
        title: "Spotify Clone", // updated
        date: "May 2024",
        description: "Next.js, Next-Auth, Typescript, React, HTML, TailwindCSS",
        githubLink: "https://github.com/adi-sd/spotify-clone",
        deploymentLink: "https://spotify-clone-mauve-six.vercel.app/",
        isCompleted: true,
    },
    {
        title: "Video Library Search with Video Clip Query", // updated
        date: "December 2023",
        description: "Python, Numpy, CV2, PyQt",
        githubLink: "https://github.com/adi-sd/csci-576-final-project",
        isCompleted: true,
    },
    {
        title: "Color Histogram Based Object Detection", // updated
        date: "October 2023",
        description: "Java, Maven, OpenCV",
        githubLink: "https://github.com/adi-sd/color-histogram-based-object-detection",
        isCompleted: true,
    },
    {
        title: "EBay Window-Shopping Application", // updated
        date: "September 2023",
        description: "Node.js, Angular, Swift, MongoDB, Google Cloud, eBay Open Source APIs",
        githubLink: "https://github.com/adi-sd/ebay-window-shopping-app",
        isCompleted: true,
    },
    {
        title: "Portfolio Website", // updated
        date: "July 2023",
        description: "React.js, Vite, TypeScript, HTML, CSS, TailwindCSS, JavaScript, Google Fonts",
        githubLink: "https://github.com/adi-sd/adi-sd.github.io",
        deploymentLink: "https://adi-sd.github.io/",
        isCompleted: true,
    },
    {
        title: "Bulk Resume Shortlisting",
        date: "December 2019",
        description: "Angular, Python Flask, HTML, CSS, and Typescript",
        githubLink: "https://github.com/adi-sd/input-and-intelligence",
        isCompleted: true,
    },
    {
        title: "Cyber Forensic Framework for PaaS Cloud Service Providers",
        date: "May 2018",
        description: "Java, Shell Scripts, Python, MongoDB, HTML, CSS",
        githubLink: "https://github.com/adi-sd/paas-cloud-forensics",
        isCompleted: true,
    },
];
