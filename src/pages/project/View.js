// import React from "react";
import { useEffect, useState, useCallback } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import IconWidget from "../../components/Widget/icon_widget";
import SubHeader from "../../components/Body/SubHeader";
import MainProjectFrom from "./components/MainProjectFrom";
import SetMyGoals from "./components/SetMyGoals";
import { useSidebar } from "../../contexts/hooks/useSidebar";
import ChatRoom from "./components/ChatRoom";

const View = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();
  const [headerConfig, setHeaderConfig] = useState({
    title: "프로젝트 상세",
    ref: [
      { title: "내 프로젝트", href: "#" },
      { title: "#", href: "#" },
    ],
    filter: false,
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
            <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <MainProjectFrom />
            </section>
            <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <ChatRoom  />
              <SetMyGoals />
            </section>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default View;
