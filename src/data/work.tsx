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
            title: "Software Developer",
            company: "Hansen Technologies",
            location: "Pune, MH, India",
            dates: "August 1st, 2018 - November 30th, 2022",
            duration: "4 Years, 4 Months",
        },
        summary:
            "Designed and delivered B2B telecommunications solutions using Java, Node.js, and React.js, enhancing user experience and system reliability. Automated QA processes, streamlined OSS device integration, improved deployment efficiency, and created and managed CI/CD pipelines. Implemented libraries to upgrade legacy systems and secured contracts through prototypes and proofs-of-concept. Collaborated with teams to execute high-stakes projects, ensuring seamless delivery and client satisfaction.",
        keyContributions: [
            "Designed and integrated robust telecommunications B2B software solutions using Java, Node.js, and React.js for both front-end and back-end environments.",
            "Developed reusable, maintainable, and modular code for cross-functional components within a microservice architecture.",
            "Overhauled a critical OSS Workflow UI micro-service with React.js, enhancing user experience and usability.",
            "Built prototypes and proofs-of-concept, helping secure a 1-year product and service contract for the Sales team.",
            "Automated testing processes with a web-based microservice, reducing QA team setup time by 15%.",
            "Engineered a custom recursive library using the Object Factory design pattern, enabling seamless system upgrades.",
            "Diagnosed and resolved production bugs, ensuring uninterrupted service delivery.",
            "Implemented CI/CD pipelines for Java and Node.js projects, streamlining multi-platform delivery on AWS.",
            "Enhanced system reliability by 40% through advanced error-handling mechanisms and auto-correction workflows.",
            "Managed CI/CD pipelines for two large-scale projects using AWS (S3, EC2, EKS).",
            "Collaborated with onsite teams to coordinate live system testing, demonstrating strong communication skills.",
            "Delivered diverse telecommunications projects, improving operational efficiency and client satisfaction.",
        ],
        achievements: [
            "Received multiple Hansen Employee of the Month awards for Focus and Commitment, Exceeding Expectations, and Dedication.",
            "Served as Assessment Coordinator for employee onboarding and participated in the undergraduate hiring process (2021, 2022).",
        ],
    },
];
