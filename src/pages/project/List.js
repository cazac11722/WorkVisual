import SubHeader from "../../components/Body/SubHeader";
import Footer from "../../components/PageLayout/Footer";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import { useSidebar } from "../../contexts/hooks/useSidebar";

const List = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar(); 

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
                <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <main className="min-h-screen dark:bg-gray-700">
                        <SubHeader />
                        <section className="">
                            <div className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-10"><input type="checkbox" /></th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">업로드일</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-1/6">제목</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-1/4">내용</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">작성자</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">진행사항</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">업무 개수</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">총 시간</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">보기</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 text-sm border-r font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="p-4 text-sm border-r text-center font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">2025-02-01</td>
                                            <td className="p-4 text-sm border-r font-normal text-gray-900 whitespace-nowrap dark:text-white">제목 입니다!!</td>
                                            <td className="p-4 text-sm border-r font-normal text-gray-900 whitespace-nowrap dark:text-white">내용 입니다!!</td>
                                            <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                                            </td>
                                            <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Completed</span>
                                            </td>
                                            <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <span>1</span>개
                                            </td>
                                            <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                30분
                                            </td>
                                            <td className="p-4 text-sm border-r text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <button type="button" className="Btn_Tiem_Start bg-green-500 text-white px-2 py-1 rounded text-sm mr-1">수정</button>
                                                <button type="button" className="Btn_Tiem_End bg-red-500 text-white px-2 py-1 rounded text-sm">삭제</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Showing
                                        <span className="font-semibold text-gray-900 dark:text-white">1-20</span>
                                        of
                                        <span className="font-semibold text-gray-900 dark:text-white">2290</span>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default List;