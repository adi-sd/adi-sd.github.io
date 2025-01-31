import React from "react";
import { personalInfo } from "../data/personal";
import { FaCircle } from "react-icons/fa";

const About: React.FC = () => {
    const { name, location, age, birthdate, hometown, profession, education, interests } = personalInfo;

    return (
        <section
            id="about"
            className="w-full h-fit md:h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white md:overflow-hidden"
        >
            <div className="container mx-auto px-6 py-10 h-full">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-6 md:mb-10 text-blue-500 text-center">About</h2>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
                    {/* Personal Info (Full Height) */}
                    <div className="space-y-6 h-full flex flex-col">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-500">Personal Details</h3>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden h-full">
                            <div className="w-full flex flex-col items-start justify-start">
                                <ul className="text-lg space-y-6 text-gray-300 break-words">
                                    <li>
                                        Hi, I’m <b className="text-blue-500">{name}</b>
                                    </li>
                                    <li>
                                        Currently based in <b className="text-blue-500">{location}</b>
                                    </li>
                                    <li>
                                        I’m <b className="text-blue-500">{age} years old</b>, born on{" "}
                                        <b className="text-blue-500">{birthdate}</b>
                                    </li>
                                    <li>
                                        Originally from <b className="text-blue-500">{hometown}</b>
                                    </li>
                                    {education.map((edu, index) => (
                                        <li key={index}>
                                            <b className="text-blue-500">{edu.title}</b>
                                            <span> from {edu.institution}</span>
                                        </li>
                                    ))}
                                    <li>
                                        Professionally, I’m a <b className="text-blue-500">{profession}</b>
                                    </li>
                                    <li>
                                        My Current interests include:
                                        <div className="flex flex-wrap my-4 gap-2 text-gray-300">
                                            {interests.map((interest, idx) => (
                                                <div key={idx} className="flex items-center gap-x-2 min-w-0">
                                                    <FaCircle size={10} className="flex-none" />
                                                    <span className="break-words">{interest}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education (Flex-based equal height) */}
                    <div className="space-y-6 flex flex-col h-full">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-500">Education</h3>
                        <div className="grid md:grid-rows-2 gap-6 h-fit md:h-full">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="h-fit md:h-full bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col gap-y-2 md:flex-grow overflow-hidden"
                                >
                                    <h4 className="text-2xl font-semibold text-blue-500">{edu.title}</h4>
                                    <div className="flex flex-col md:flex-row md:items-center justify-start gap-x-2 gap-y-2 md:gap-y-0 mt-2">
                                        <p className="text-lg md:text-xl text-gray-300">{`${edu.institution},`}</p>
                                        <span className="text-gray-400">{edu.duration}</span>
                                    </div>
                                    <div className="md:flex-1">
                                        <div className="flex items-center justify-start flex-wrap my-4 gap-3 text-gray-300">
                                            {edu.courses.map((course, idx) => (
                                                <div key={idx} className="flex items-center gap-x-2 min-w-0">
                                                    <FaCircle size={10} className="flex-none" />
                                                    <span className="break-words">{course}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
