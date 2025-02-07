// Layout.js
import React from "react";

const Layout = ({ children, isDarkMode, onThemeToggle }) => {
    return (
        <main className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto h-screen pt:mt-0 dark:bg-gray-900">
                <button 
                    className="absolute top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded" 
                    onClick={onThemeToggle}>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
                {children}
            </div>
        </main>
    );
};

export default Layout;
