import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export const contactDetails = [
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
        link: "https://github.com/adi-sd",
        icon: <FaGithub className="text-2xl text-blue-500" />,
    },
    {
        name: "Email",
        link: "mailto:aditya.s.dhage@gmail.com",
        icon: <FaEnvelope className="text-2xl text-blue-500" />,
    },
    {
        name: "Resume",
        link: "/Aditya_Dhage_Resume_LinkedIn.pdf",
        icon: <FaFileAlt className="text-2xl text-blue-500" />,
    },
];
