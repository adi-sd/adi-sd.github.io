import React, { useState } from "react";
import { FaCode, FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { RiProgress3Fill } from "react-icons/ri";
import { projects } from "../data/projects";
import { FaDisplay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
    const projectsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <section
            id="projects"
            className="w-full h-fit md:h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white md:overflow-hidden"
        >
            <div className="container mx-auto px-6 py-10 h-full md:flex md:flex-col md:gap-0">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-6 text-blue-500 text-center">Projects</h2>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                            {/* Completion Status Icon */}
                            <div className="absolute top-4 right-4 text-2xl">
                                {project.isCompleted ? (
                                    <FaCheckCircle className="text-green-500" title="Completed" />
                                ) : (
                                    <RiProgress3Fill className="text-yellow-400" title="In Progress" />
                                )}
                            </div>

                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-2">
                                <b>Duration:</b> {project.date}
                            </p>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="mt-auto flex items-center justify-between">
                                {project.githubLink && (
                                    <Link
                                        to={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                                    >
                                        <FaCode className="text-xl" />
                                        <span>View Code</span>
                                    </Link>
                                )}
                                {project.deploymentLink && (
                                    <Link
                                        to={project.deploymentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
                                    >
                                        <FaDisplay className="text-xl" />
                                        <span>View Deployment</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination - Only on Desktop */}
                {totalPages > 1 && (
                    <div className="md:mt-auto hidden md:flex items-center justify-center mt-8 gap-6">
                        {/* Previous Button */}
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed`}
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
                            className={`text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            <FaArrowRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
