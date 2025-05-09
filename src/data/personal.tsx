export type PersonalInfo = {
    name: string;
    location: string;
    age: number;
    birthdate: string;
    hometown: string;
    profession: string;
    education: {
        title: string;
        institution: string;
        duration: string;
        courses: string[];
    }[];
    interests: string[];
};

export const personalInfo: PersonalInfo = {
    name: "Aditya Sanjay Dhage",
    location: "Los Angeles, CA, USA",
    age: 28,
    birthdate: "31st October",
    hometown: "Pune, Maharashtra, India",
    profession: "Software Developer",
    education: [
        {
            title: "Master of Science - Computer Science",
            institution: "University of Southern California",
            duration: "January 2023 - December 2024",
            courses: [
                "CSCI-578: Analysis of Algorithms",
                "CSCI-585: Database Systems",
                "CSCI-571: Web Technologies",
                "CSCI-576: Multimedia Systems Design",
                "CSCI-572: Information Retrieval and Web Search Engines",
                "CSCI-499: Introduction to Human-Computer Interaction",
                "CSCI-578: Software Architectures",
            ],
        },
        {
            title: "Bachelor of Engineering - Computer Engineering",
            institution: "Savitribai Phule Pune University",
            duration: "August 2014 - June 2018",
            courses: [
                "Fundamentals of Programming Languages",
                "Data Structures and Problem Solving",
                "Operating Systems",
                "Object-Oriented Multi-core Programming",
                "Computer Organization",
                "Theory of Computation",
                "Software Engineering",
                "High-Performance Computing",
                "Cloud Computing",
                "Cybersecurity",
            ],
        },
    ],
    interests: [
        "Full-Stack Software Development",
        "Web Applications Development",
        "Java, JavaScript and TypeScript Programming",
        "Data Structures, Algorithms, and Problem Solving",
        "Building software solutions for real-world problems",
    ],
};
