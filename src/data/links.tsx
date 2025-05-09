import { ReactNode } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export type SocialLink = { name: string; link: string; icon: ReactNode };

export const contactDetails: SocialLink[] = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/adi.s.d/",
        icon: <FaInstagram className="text-2xl text-blue-500" />,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/adisd/",
        icon: <FaLinkedin className="text-2xl text-blue-500" />,
    },
    {
        name: "GitHub",
        link: "https://www.github.com/adi-sd",
        icon: <FaGithub className="text-2xl text-blue-500" />,
    },
    {
        name: "Email",
        link: "mailto:aditya.s.dhage@gmail.com",
        icon: <FaEnvelope className="text-2xl text-blue-500" />,
    },
    {
        name: "Resume",
        link: "/Aditya_Dhage_Full_Stack_4Y_Resume_Public.pdf",
        icon: <FaFileAlt className="text-2xl text-blue-500" />,
    },
];
