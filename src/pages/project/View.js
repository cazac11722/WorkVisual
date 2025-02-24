import React from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import IconWidget from "../../components/Widget/icon_widget";
import SubHeader from "../../components/Body/SubHeader";
import MainProjectFrom from "./components/MainProjectFrom";
import SetMyGoals from "./components/SetMyGoals";
import { useSidebar } from "../../contexts/hooks/useSidebar";

const View = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen dark:bg-gray-700">
            <SubHeader />
            <section className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
              <MainProjectFrom />
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
