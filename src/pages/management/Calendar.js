import { useState } from "react";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import IconWidget from "../../components/Widget/icon_widget";
import { useSidebar } from "../../contexts/hooks/useSidebar";
import useCommute from "../../contexts/hooks/useCommute";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../contexts/hooks/useForm";

const Calender = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date()); // 2025년 2월 초기값 설정
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('scheduleAll')));
    const { user } = useAuth();
    const [color, setColor] = useState(0);

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    const formattedMonth = `${currentDate.getFullYear()}년 ${monthNames[currentDate.getMonth()]}`;

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const filteredEvents = (day) => {
        if (!allData) return [];

        return allData.filter((event) => {
            let eventStart = new Date(event.start_date);
            eventStart = new Date(eventStart.getFullYear(), eventStart.getMonth(), eventStart.getDate())

            const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            return eventStart.getTime() == currentDay.getTime();
        });
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const toggleColor = (vla) => {
        setColor(vla);
    };

    const { formState, mainUrl, handleChange, handleSubmit } = useForm(
        {
            "title": `${user.data.username}님 출근`,
            "content": user.data.username + "님 " + new Date() + "에 출근 했습니다.",
            "start_date": new Date(),
            "end_date": null,
            "color": "#2563eb",
            "user": user.id,
            "schedule_option": 1
        },
        async (data) => {
            // try {
            //     const response = await fetch(`http://127.0.0.1:8000/api/accounts/schedule/com/`, {
            //         method: "POST",
            //         headers: { "Content-Type": "application/json" },
            //         body: JSON.stringify(data),
            //     });

            //     if (response.ok) {
            //         const result = await response.json();
            //         alert("로그인이 되었습니다.");
            //         // 로그인 성공 처리
            //     } else {
            //         // 오류 처리
            //     }
            // } catch (error) {
            // }
        }
    );

    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
    const previousMonthDays = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() - 1);


    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
                <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <main className="min-h-screen dark:bg-gray-700">
                        <section className="px-4 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
                            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-1 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">제출서 작성</h2>
                                <form action="#">
                                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">브랜드</label>
                                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option selected="">Select category</option>
                                                <option value="TV">TV/Monitors</option>
                                                <option value="PC">PC</option>
                                                <option value="GA">Gaming/Console</option>
                                                <option value="PH">Phones</option>
                                            </select>
                                        </div>
                                        <div className="flex justify-between sm:col-span-2">
                                            <div className="w-1/2">
                                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름(직위)</label>
                                                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" />
                                            </div>
                                            <div className="w-1/2 ml-2">
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">연차 갯수</label>
                                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                            </div>
                                        </div>
                                        <div className="flex justify-between sm:col-span-2">
                                            <div className="w-1/2">
                                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">입사일</label>
                                                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" />
                                            </div>
                                            <div className="w-1/2 ml-2">
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제추서 대기</label>
                                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">적용 날짜</label>
                                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option selected="">Select category</option>
                                                <option value="TV">TV/Monitors</option>
                                                <option value="PC">PC</option>
                                                <option value="GA">Gaming/Console</option>
                                                <option value="PH">Phones</option>
                                            </select>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">구분</label>
                                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option selected="">Select category</option>
                                                <option value="TV">TV/Monitors</option>
                                                <option value="PC">PC</option>
                                                <option value="GA">Gaming/Console</option>
                                                <option value="PH">Phones</option>
                                            </select>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="border rounded-lg p-4">
                                                <h3 className="text-[1.7em] text-center font-bold mb-4">제출서</h3>
                                                <div className="flex mb-2">
                                                    <span className="text-sm">설명: </span>
                                                    <span className="text-sm ml-20">직위: </span>
                                                </div>
                                                <div className="flex mb-2">
                                                    <span className="text-sm mr-2">발생 사유: </span>
                                                    <textarea className="text-sm w-[85%] focus:border-white"></textarea>
                                                </div>
                                                <div className="flex h-[10em]">
                                                    <span className="text-sm mr-2">처리 내용:</span>
                                                    <textarea className="text-sm w-[85%] focus:border-white"></textarea>
                                                </div>
                                                <p className="text-sm text-center mb-2 ">위와 같이 제출 합니다.</p>
                                                <p className="text-sm text-center mb-2">년 월 일</p>
                                                <p className="text-sm text-center">성명: <span>(인)</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                        Add product
                                    </button>
                                </form>
                            </div>
                            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">캔린더</h2>
                                <ul className="">
                                    <li className="flex items-center mb-4">
                                        <div className="w-40 flex items-center">이름</div>
                                        <span class="w-50 text-sm">비어 있음</span>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="w-40 flex items-center">조회 날짜</div>
                                        <span class="w-50 text-sm">비어 있음</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </main>
                </div>
            </main>
        </div>
    );
}

export default Calender;