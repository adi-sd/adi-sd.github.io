import React from "react";
import { workExperience } from "../data/work";
import { FaCircle } from "react-icons/fa";

const Work: React.FC = () => {
    return (
        <section
            id="work"
            className="w-full h-fit md:h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white md:overflow-hidden"
        >
            <div className="container mx-auto px-6 py-10">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-6 text-blue-500 text-center ">Work Experience</h2>

                {/* Work Experience Cards */}
                <div className="grid grid-cols-1 gap-6 md:gap-12 items-start">
                    {workExperience.map((work, index) => (
                        <div key={index} className="space-y-6">
                            {/* Two-Column Layout for Desktop | Stacked Layout for Mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="w-full h-full flex flex-col gap-y-4">
                                    {/* Header Card */}
                                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
                                            {work.companyDetails.title}
                                        </h3>
                                        <h4 className="text-lg md:text-xl text-gray-300 font-bold">
                                            {work.companyDetails.company}, {work.companyDetails.location}
                                        </h4>
                                        <p className="text-gray-400 mt-2">
                                            <b>Dates:</b> {work.companyDetails.dates}
                                        </p>
                                        <p className="text-gray-400 mt-2">
                                            <b>Duration:</b> {work.companyDetails.duration}
                                        </p>
                                    </div>
                                    {/* Summary Card */}
                                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                                        <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-4">Summary</h4>
                                        <p className="text-lg text-gray-300 leading-relaxed">{work.summary}</p>
                                    </div>

                                    {/* Achievements Card - Hidden in Desktop View*/}
                                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hidden md:block md:flex-grow">
                                        <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-4">
                                            Achievements
                                        </h4>
                                        <div className="flex flex-col gap-4 text-gray-300">
                                            {work.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex gap-x-2 min-w-0">
                                                    <FaCircle size={10} className="flex-none mt-[6px]" />
                                                    <span className="break-words">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Key Contributions Card */}
                                <div className="w-full h-full bg-gray-900 p-6 rounded-lg shadow-lg">
                                    <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-4">
                                        Key Contributions
                                    </h4>
                                    <div className="h-[94%] flex flex-col items-center justify-between text-gray-300">
                                        {work.keyContributions.map((item, idx) => (
                                            <div key={idx} className="flex gap-x-2 min-w-0">
                                                <FaCircle size={10} className="flex-none mt-[6px]" />
                                                <span className="break-words">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements Card - Displayed in Mobile View */}
                                <div className="bg-gray-900 p-6 rounded-lg shadow-lg md:hidden block">
                                    <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-4">
                                        Achievements
                                    </h4>
                                    <div className="flex flex-col gap-4 text-gray-300">
                                        {work.achievements.map((achievement, idx) => (
                                            <div key={idx} className="flex gap-x-2 min-w-0">
                                                <FaCircle size={10} className="flex-none mt-[6px]" />
                                                <span className="break-words">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End of Two-Column Layout */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
