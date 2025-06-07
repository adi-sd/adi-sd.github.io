import type { Project } from "@/data/projects";
import { FaCheckCircle, FaCode } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { RiProgress3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger, DialogOverlay } from "@/components/ui/dialog";
import ProjectDialogContent from "./ProjectDialogContent";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <Dialog>
            <DialogOverlay className="fixed inset-0 bg-white/20 dark:bg-gray-900/30 backdrop-blur-md backdrop-saturate-150 backdrop-contrast-75"></DialogOverlay>
            <DialogTrigger asChild>
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
                    <p className="text-gray-300 mb-4">{project.technologies}</p>
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
            </DialogTrigger>
            <ProjectDialogContent project={project}></ProjectDialogContent>
        </Dialog>
    );
};

export default ProjectCard;
