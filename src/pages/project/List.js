import { useEffect, useState, useCallback } from "react";

import SubHeader from "../../components/Body/SubHeader";
import Footer from "../../components/PageLayout/Footer";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import { useSidebar } from "../../contexts/hooks/useSidebar";
import MainProjectTable from "./components/MainProjectTable";

const List = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();
    const [headerConfig, setHeaderConfig] = useState({
        title: "관리자 팀원 프로젝트 관리",
        ref: [
            { title: "관리자", href: "#" },
            { title: "팀원 프로젝트 관리", href: "#" },
        ],
        filter: true,
        back: false,
        titleShow: true,
        btn: ['download_file', 'print', 'delete']
    });
    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
                <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <main className="min-h-screen dark:bg-gray-700">
                        <SubHeader headerConfig={headerConfig} />
                        <MainProjectTable />
                    </main>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default List;