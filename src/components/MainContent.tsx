import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const pageVariants = {
    initial: { opacity: 0.5, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0.5, y: 0, transition: { duration: 0.3, ease: "easeIn" } }, 
};

const MainContent: React.FC = () => {
    const location = useLocation(); // Detects current route

    return (
        <div className="h-full w-full bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname} // Ensure animation runs on page change
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="h-full w-full"
                >
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MainContent;
