import type { Project } from "@/data/projects";
import { FaCode } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { twJoin } from "tailwind-merge";

interface ProjectDialogContentProps {
    project: Project;
}

function ProjectDialogContent({ project }: ProjectDialogContentProps) {
    return (
        <DialogContent className="bg-gray-900 text-white rounded-lg max-w-md w-[90%] mx-auto p-6 md:p-8 border-0">
            <DialogHeader className="flex flex-col items-start">
                <DialogTitle className="text-3xl font-bold mb-2">{project.title}</DialogTitle>
                <DialogDescription className="text-sm text-gray-400 flex flex-col items-start gap-y-2">
                    <span className="text-white font-semibold text-lg">Technologies:</span>
                    <div className="text-lg text-left">{project.technologies}</div>
                </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
                {/* Status & Date */}
                <div className="flex items-center justify-between">
                    <span
                        className={twJoin(
                            "px-2 py-1 rounded-full text-xs font-semibold",
                            project.isCompleted ? "bg-green-700 text-green-200" : "bg-yellow-600 text-yellow-100"
                        )}
                    >
                        {project.isCompleted ? "Completed" : "In Progress"}
                    </span>
                    <span className="text-sm text-gray-500">{project.date}</span>
                </div>

                {/* Description bullets */}
                {project.description && project.description.length > 0 && (
                    <ul className="w-full list-disc list-inside text-gray-300 space-y-2 text-left">
                        {project.description.map((line, idx) => (
                            <li key={idx}>{line}</li>
                        ))}
                    </ul>
                )}
            </div>
            <DialogFooter className="w-full mt-6">
                {/* Links */}
                <div className="w-full flex flex-wrap justify-between gap-4 mt-4">
                    {project.githubLink && (
                        <Link
                            to={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-400 flex items-center py-2 px-4 bg-gray-600/50 rounded-md hover:bg-gray-600/75"
                        >
                            <FaCode className="text-ld md:text-xl" />
                            <span>View Code</span>
                        </Link>
                    )}
                    {project.deploymentLink && (
                        <Link
                            to={project.deploymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-400 flex items-center py-2 px-4 bg-gray-600/50 rounded-md hover:bg-gray-600/75"
                        >
                            <FaDisplay className="text-ld md:text-xl" />
                            <span>View Deployment</span>
                        </Link>
                    )}
                </div>
            </DialogFooter>
        </DialogContent>
    );
}

export default ProjectDialogContent;
