import {
    FaJava,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaAws,
    FaDocker,
    FaJs,
    FaLock,
    FaPython,
    FaNpm,
    FaJira,
    FaBoxes,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
    SiTypescript,
    SiNextdotjs,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGraphql,
    SiJenkins,
    SiKubernetes,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiAuth0,
    SiOracle,
    SiFigma,
    SiGooglecloud,
    SiApachemaven,
    SiExpress,
    SiWebpack,
    SiVercel,
    SiRadixui,
    SiRedux,
    SiFramer,
    SiSpringboot,
    SiApachekafka,
    SiGrafana,
    SiEslint,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { GiWaterSplash } from "react-icons/gi";
import { AiFillOpenAI } from "react-icons/ai";
import { VscSymbolInterface } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { GiTeePipe } from "react-icons/gi";
import { TbScript } from "react-icons/tb";
import { ReactNode } from "react";

export type Skill = {
    name: string;
    icon: ReactNode;
};

export type SkillCategory = {
    category: string;
    skills: Skill[];
};

export const skills: SkillCategory[] = [
    {
        category: "Programming",
        skills: [
            { name: "Java", icon: <FaJava className="text-3xl text-red-600" /> },
            { name: "JavaScript", icon: <FaJs className="text-3xl text-yellow-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-3xl text-blue-500" /> },
            { name: "Python (Basic Proficiency)", icon: <FaPython className="text-3xl text-orange-500" /> },
            { name: "SQL", icon: <FaDatabase className="text-3xl text-blue-700" /> },
            { name: "NoSQL", icon: <SiMongodb className="text-3xl text-green-500" /> },
            { name: "Shell Scripts", icon: <TbScript className="text-3xl text-white" /> },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact className="text-3xl text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-3xl text-black" /> },
            { name: "HTML", icon: <SiHtml5 className="text-3xl text-orange-500" /> },
            { name: "CSS", icon: <SiCss3 className="text-3xl text-blue-600" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-3xl text-blue-400" /> },
            { name: "Redux", icon: <SiRedux className="text-3xl text-green-400" /> },
            { name: "Zustand", icon: <SiTailwindcss className="text-3xl text-blue-400" /> },
            { name: "Radix-UI", icon: <SiRadixui className="text-3xl text-purple-500" /> },
            { name: "Framer Motion", icon: <SiFramer className="text-3xl text-pink-500" /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Spring Boot", icon: <SiSpringboot className="text-3xl text-lime-500" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-3xl text-white" /> },
            { name: "Auth.js", icon: <SiAuth0 className="text-3xl text-orange-500" /> },
            { name: "JWT", icon: <FaLock className="text-3xl text-blue-600" /> },
            { name: "OAuth", icon: <TbBrandOauth className="text-3xl text-purple-600" /> },
            { name: "REST APIs", icon: <VscSymbolInterface className="text-3xl text-blue-500" /> },
            { name: "GraphQL APIs", icon: <SiGraphql className="text-3xl text-pink-500" /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-3xl text-blue-500" /> },
            { name: "Oracle DB", icon: <SiOracle className="text-3xl text-red-600" /> },
            { name: "Prisma ORM", icon: <SiPrisma className="text-3xl text-black" /> },
        ],
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "AWS", icon: <FaAws className="text-3xl text-orange-500" /> },
            { name: "GCP", icon: <SiGooglecloud className="text-3xl text-blue-500" /> },
            { name: "Vercel", icon: <SiVercel className="text-3xl text-black" /> },
            { name: "Webpack", icon: <SiWebpack className="text-3xl text-blue-400" /> },
            { name: "Docker", icon: <FaDocker className="text-3xl text-blue-600" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-3xl text-blue-500" /> },
            { name: "Kafka", icon: <SiApachekafka className="text-3xl text-yellow-500" /> },
            { name: "Grafana", icon: <SiGrafana className="text-3xl text-orange-500" /> },
            { name: "CI/CD", icon: <GiTeePipe className="text-3xl text-red-500" /> },
        ],
    },
    {
        category: "Tools & Misc.",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-3xl text-orange-600" /> },
            { name: "Jenkins", icon: <SiJenkins className="text-3xl text-red-500" /> },
            { name: "Figma", icon: <SiFigma className="text-3xl text-purple-500" /> },
            { name: "Maven", icon: <SiApachemaven className="text-3xl text-red-600" /> },

            { name: "NPM", icon: <FaNpm className="text-3xl text-red-600" /> },
            { name: "Generative AI", icon: <AiFillOpenAI className="text-3xl text-green-600" /> },
            { name: "ESLint", icon: <SiEslint className="text-3xl text-violet-600" /> },
            { name: "JIRA", icon: <FaJira className="text-3xl text-blue-600" /> },
            { name: "Microservice", icon: <FaBoxes className="text-3xl text-white" /> },

            { name: "Agile/SCRUM", icon: <BiNetworkChart className="text-3xl text-green-500" /> },
            { name: "Waterfall SDLC", icon: <GiWaterSplash className="text-3xl text-blue-400" /> },
        ],
    },
];
