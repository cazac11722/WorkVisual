// hooks/useSidebar.js
import { useState, useEffect } from "react";

export const useSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(() => {
        const savedTheme = localStorage.getItem("sidebar");
        return savedTheme == 'true' ? true : false;
    });

    useEffect(() => {
        if (sidebarOpen) {
            localStorage.setItem("sidebar", true);
        } else {
            localStorage.setItem("sidebar", false);
        }
    }, [sidebarOpen]);

    const toggleSidebarOpen = () => setSidebarOpen((prev) => !prev);

    return { sidebarOpen, toggleSidebarOpen };
};
