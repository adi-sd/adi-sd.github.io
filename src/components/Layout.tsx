import React from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import MainContent from "./MainContent";

const Layout: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col">
            {/* Navbar */}
            <div className="h-[4rem] w-full">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="h-[calc(100vh-4rem)] w-full">
                <MainContent />
            </div>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
