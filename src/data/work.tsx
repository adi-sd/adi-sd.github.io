export type WorkExperience = {
    companyDetails: {
        title: string;
        company: string;
        location: string;
        dates: string;
        duration: string;
    };
    summary: string;
    keyContributions: string[];
    achievements: string[];
};

export const workExperience: WorkExperience[] = [
    {
        companyDetails: {
            title: "Software Engineer (Full-Stack)",
            company: "One Pacific Hub",
            location: "Long Beach, California, USA",
            dates: "Feb 10th, 2025 - Present",
            duration: "5 Months",
        },
        summary:
            "Developed a full-stack e-commerce platform while managing project milestones, coordinated directly with the CEO, and delivered progress updates in a fast-paced remote setting",
        keyContributions: [
            "Built a full-stack e-commerce platform from scratch using Next.js, Node.js, and PostgreSQL, tailored for the unique logistics of an import-export business",
            "Implemented core shopping features including product catalog, dynamic cart, user management, billing and order management with secure, role-based access and real-time user feedback",
            "Led solo development cycle, legacy integrations, driving technical decisions, stakeholder updates, and agile milestone planning while maintaining scalable, maintainable codebase standards",
        ],
        achievements: [],
    },
    {
        companyDetails: {
            title: "Software Developer (Full-Stack)",
            company: "Hansen Technologies",
            location: "Pune, MH, India",
            dates: "August 1st, 2018 - November 30th, 2022",
            duration: "4 Years, 4 Months",
        },
        summary:
            "Designed and delivered B2B telecommunications solutions using Java, Node.js, and React.js, enhancing user experience and system reliability. Automated QA processes, streamlined OSS device integration, improved deployment efficiency, and created and managed CI/CD pipelines. Implemented libraries to upgrade legacy systems and secured contracts through prototypes and proofs-of-concept. Collaborated with teams to execute high-stakes projects, ensuring seamless delivery and client satisfaction",
        keyContributions: [
            "Designed, implemented, and integrated B2B telecommunications software solutions using Java, Node.js, and React.js while diagnosing and resolving critical production issues to ensure 24/7 service availability",
            "Overhauled a key workflow UI microservice with React, significantly improving user experience and reducing load time to 3.5 seconds",
            "Implemented advanced error handling and auto-correction workflows that improved overall system reliability by 5%, reducing downtime and customer support incidents",
            "Led a two-person team to build prototypes and proof-of-concept features, directly helping to secure a 1-year product and services contract with a major client",
            "Developed a microservice to automate QA testing, cutting manual effort by 20%, shortening the delivery cycle to 4 days",
            "Engineered a well-documented library for OSS request translation incorporating low-level design patterns to streamline future system upgrades and reduce maintenance overhead",
            "Built and maintained CI/CD pipelines for Java and Node.js projects, streamlining multi-platform deployments on AWS EKS and improving deployment speed and consistency by 85%",
        ],
        achievements: [
            "Received multiple Hansen Employee of the Month awards for Focus and Commitment, Exceeding Expectations, and Dedication",
            "Served as Assessment Coordinator for employee onboarding and participated in the undergraduate hiring process (2021, 2022)",
        ],
    },
];
