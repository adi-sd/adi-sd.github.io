import React, { useState } from "react";
import { workExperience } from "../data/work";
import { FaCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Work: React.FC = () => {
    // State to track which work‐experience page we’re on (1-indexed)
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = workExperience.length;

    // Handlers to move between pages
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Grab the single work‐experience object for the current page
    const work = workExperience[currentPage - 1];

    return (
        <section id="work" className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-10 flex flex-col h-full">
                {/* Section Title (fixed at top) */}
                <h2 className="text-4xl font-bold mb-6 text-blue-500 text-center">Work Experience</h2>

                <div className="h-full flex-1 overflow-y-auto space-y-6">
                    {/* Two-Column on Desktop / Stacked on Mobile */}
                    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column: Header & Summary */}
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

                            {/* Achievements Card – visible on desktop (md and up) */}
                            {work.achievements.length !== 0 && (
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
                            )}
                        </div>

                        {/* Right Column: Key Contributions */}
                        <div className="w-full h-full bg-gray-900 p-6 rounded-lg shadow-lg">
                            <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-4">Key Contributions</h4>
                            <div className="h-[94%] flex flex-col items-center gap-y-3 text-gray-300">
                                {work.keyContributions.map((item, idx) => (
                                    <div key={idx} className="flex gap-x-2 min-w-0">
                                        <FaCircle size={10} className="flex-none mt-[6px]" />
                                        <span className="break-words">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Card – visible on mobile (below md) */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg md:hidden block">
                            <h4 className="text-lg md:text-xl font-semibold text-blue-500 mb-4">Achievements</h4>
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

                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-6">
                        {/* Previous Button */}
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaArrowLeft size={24} />
                        </button>

                        {/* Page Indicator */}
                        <span className="text-lg text-gray-300">
                            {currentPage} / {totalPages}
                        </span>

                        {/* Next Button */}
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
