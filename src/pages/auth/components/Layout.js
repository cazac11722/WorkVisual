// Layout.js
import React from "react";

const Layout = ({ children}) => {
    return (
        <main className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto h-screen pt:mt-0 dark:bg-gray-900">
                {children}
            </div>
        </main>
    );
};

export default Layout;
