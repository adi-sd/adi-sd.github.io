import React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="w-full h-fit md:h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white md:overflow-hidden"
        >
            <div className="container mx-auto px-6 py-10 h-full">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-6 text-blue-500 text-center">Technical Skills</h2>

                {/* Main Skills Card */}
                <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-6 gap-2">
                    {skills.map((skillSet, index) => (
                        <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
                            {/* Skill Group Title */}
                            <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">
                                {skillSet.category}
                            </h3>

                            {/* Skill Cards */}
                            <div className="flex flex-col gap-3 w-full">
                                {skillSet.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full flex items-center justify-start gap-x-4 bg-gray-800 py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
                                    >
                                        <div className="text-2xl">{skill.icon}</div>
                                        <span className="text-gray-300 font-semibold">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
