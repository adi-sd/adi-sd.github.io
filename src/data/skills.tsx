import { FaJava, FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker, FaJs, FaLock } from "react-icons/fa";
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
    SiPython,
    SiGooglecloud,
    SiApachemaven,
    SiExpress,
    SiWebpack,
    SiVercel,
    SiRadixui,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { GiWaterSplash } from "react-icons/gi";
import { VscSymbolInterface } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { GiTeePipe } from "react-icons/gi";
import { TbScript } from "react-icons/tb";

export const skills = [
    {
        category: "Languages",
        skills: [
            { name: "Java", icon: <FaJava className="text-3xl text-red-600" /> },
            { name: "JavaScript", icon: <FaJs className="text-3xl text-yellow-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-3xl text-blue-500" /> },
            { name: "SQL", icon: <FaDatabase className="text-3xl text-blue-700" /> },
            { name: "NoSQL", icon: <SiMongodb className="text-3xl text-green-500" /> },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: "React.js", icon: <FaReact className="text-3xl text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-3xl text-black" /> },
            { name: "Radix-UI", icon: <SiRadixui className="text-3xl text-purple-500" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-3xl text-blue-400" /> },
            { name: "HTML", icon: <SiHtml5 className="text-3xl text-orange-500" /> },
            { name: "CSS", icon: <SiCss3 className="text-3xl text-blue-600" /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-3xl text-white" /> },
            { name: "Auth.js", icon: <SiAuth0 className="text-3xl text-orange-500" /> },
            { name: "JWT", icon: <FaLock className="text-3xl text-blue-600" /> },
            { name: "OAuth", icon: <TbBrandOauth className="text-3xl text-purple-600" /> },
            { name: "REST APIs", icon: <VscSymbolInterface className="text-3xl text-blue-500" /> },
            { name: "GraphQL", icon: <SiGraphql className="text-3xl text-pink-500" /> },
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
            { name: "CI/CD", icon: <GiTeePipe className="text-3xl text-red-500" /> },
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
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-3xl text-orange-600" /> },
            { name: "Jenkins", icon: <SiJenkins className="text-3xl text-red-500" /> },
            { name: "Figma", icon: <SiFigma className="text-3xl text-purple-500" /> },
            { name: "Maven", icon: <SiApachemaven className="text-3xl text-red-600" /> },
            { name: "Python Scripts", icon: <SiPython className="text-3xl text-yellow-500" /> },
            { name: "Shell Scripts", icon: <TbScript className="text-3xl text-white" /> },
            { name: "Agile SDLC", icon: <BiNetworkChart className="text-3xl text-green-500" /> },
            { name: "Waterfall SDLC", icon: <GiWaterSplash className="text-3xl text-blue-400" /> },
        ],
    },
];
