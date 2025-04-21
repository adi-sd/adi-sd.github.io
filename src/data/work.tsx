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
            title: "Full Stack Software Engineer",
            company: "Hansen Technologies",
            location: "Pune, MH, India",
            dates: "August 1st, 2018 - November 30th, 2022",
            duration: "4 Years, 4 Months",
        },
        summary:
            "Designed and delivered B2B telecommunications solutions using Java, Node.js, and React.js, enhancing user experience and system reliability. Automated QA processes, streamlined OSS device integration, improved deployment efficiency, and created and managed CI/CD pipelines. Implemented libraries to upgrade legacy systems and secured contracts through prototypes and proofs-of-concept. Collaborated with teams to execute high-stakes projects, ensuring seamless delivery and client satisfaction.",
        keyContributions: [
            "Delivered production-grade telecom solutions that powered critical OSS/BSS operations, balancing fast-paced product development with real-time incident resolution to maintain 24/7 system availability.",
            "Redesigned key microservices in the OSS workflow using React, leading to noticeable improvements in frontend performance (3.5 seconds load time), system usability, and customer satisfaction.",
            "Improved system reliability by 5% through the implementation of error handling, auto-correction logic, and compensation workflows, reducing client-reported incidents and support overhead.",
            "Led a successful prototype initiative that helped the sales team secure a 1-year service contract by delivering PoCs that demonstrated technical feasibility and rapid execution.",
            "Built a modular protocol translation library (JSR89 to JSR264) using object factory patterns to support legacy system upgrades — reducing tech debt and simplifying future integrations.",
            "Automated QA processes by developing a test microservice with web-based reporting, reducing manual testing time by 20% and shortening delivery cycles by a full day.",
            "Designed and maintained CI/CD pipelines for Java and Node.js services, streamlining deployments on AWS EKS, EC2, and S3, and increasing release consistency and reliability.",
        ],
        achievements: [
            "Received multiple Hansen Employee of the Month awards for Focus and Commitment, Exceeding Expectations, and Dedication.",
            "Served as Assessment Coordinator for employee onboarding and participated in the undergraduate hiring process (2021, 2022).",
        ],
    },
];
