import React from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import IconWidget from "../../components/Widget/icon_widget";
import SubHeader from "../../components/Body/SubHeader";
import MainChart from "./components/MainChart";
import SubChart from "./components/SubChart";
import { Link } from "react-router-dom";
import { useSidebar } from "../../contexts/hooks/useSidebar";

const Dashboard = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar(); 

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Header />
      <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen dark:bg-gray-700">
            <section className="px-4 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
                    <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
                  </div>
                  <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                    12.5%
                    <IconWidget icon="ArrowUpSo" />
                  </div>
                </div>
                <MainChart />
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Statistics this month
                  <button type="button" className="ml-1">
                    <IconWidget icon="Isow" className="fill-black" />
                    <span className="sr-only ">Show information</span>
                  </button>
                </h3>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                  <li className="w-full">
                    <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Top products</button>
                  </li>
                  <li className="w-full">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Top Customers</button>
                  </li>
                </ul>
                <div className="pt-4">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">iPhone 14 Pro</p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              <IconWidget icon="ArrowUpSo" />
                              20%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$445,467</div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">iPhone 14 Pro</p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              <IconWidget icon="ArrowUpSo" />
                              20%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$445,467</div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">iPhone 14 Pro</p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              <IconWidget icon="ArrowUpSo" />
                              20%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$445,467</div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate dark:text-white">iPhone 14 Pro</p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                              <IconWidget icon="ArrowUpSo" />
                              20%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$445,467</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="px-4 mt-4 grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                  <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                  <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <IconWidget icon="ArrowUpSo" />
                      12.5%
                    </span>
                    Since last month
                  </p>
                </div>
                <div className="w-full">
                  <SubChart />
                </div>
              </div>
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                  <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                  <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <IconWidget icon="ArrowUpSo" />
                      12.5%
                    </span>
                    Since last month
                  </p>
                </div>
                <div className="w-full">
                  <SubChart />
                </div>
              </div>
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="w-full">
                  <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
                  <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                  <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                      <IconWidget icon="ArrowUpSo" />
                      12.5%
                    </span>
                    Since last month
                  </p>
                </div>
                <div className="w-full">
                  <SubChart />
                </div>
              </div>
            </section>
            <section className="px-4 mt-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="items-center justify-between lg:flex">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">내 업무 모음</h3>
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">오늘 등록한 내 업무 입니다.</span>
                  </div>
                  <div className="items-center sm:flex">
                    <div className="flex items-center"></div>
                    <div className="flex items-center space-x-4"></div>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border border-l text-center text-gray-500 uppercase dark:text-white w-10"><input type="checkbox" /></th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white">업로드일</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white w-1/6">제목</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white w-1/4">내용</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white">작성자</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white">진행사항</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white">업무 개수</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white">총 시간</th>
                        <th scope="col" className="p-4 text-xs font-medium tracking-wider border text-center text-gray-500 uppercase dark:text-white">보기</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <input type="checkbox" />
                        </td>
                        <td className="p-4 text-sm border text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">2025-02-01</td>
                        <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">제목 입니다!!</td>
                        <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">내용 입니다!!</td>
                        <td className="p-4 text-sm border text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">관리자</span>
                        </td>
                        <td className="p-4 text-sm border text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">진행중</span>
                        </td>
                        <td className="p-4 text-sm border text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <span>1</span>개
                        </td>
                        <td className="p-4 text-sm border text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          30분
                        </td>
                        <td className="p-4 text-sm border text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          <button type="button" className="Btn_Tiem_Start bg-green-500 text-white px-2 py-1 rounded text-sm mr-1">수정</button>
                          <button type="button" className="Btn_Tiem_End bg-red-500 text-white px-2 py-1 rounded text-sm">삭제</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between pt-3 sm:pt-6">
                  <div className="flex-shrink-0">
                    <Link to={"#"} className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                      Transactions Report
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
