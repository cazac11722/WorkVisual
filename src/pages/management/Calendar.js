import { useState } from "react";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import IconWidget from "../../components/Widget/icon_widget";
import { useSidebar } from "../../contexts/hooks/useSidebar";

const Calender = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date()); // 2025년 2월 초기값 설정

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

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

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
                        <section className="">
                            <div className="p-4 bg-white flex items-center justify-between">
                                <div className="flex items-center w-auto">
                                    <div className="flex">
                                        <button onClick={goToPreviousMonth} type="button" title="Previous month" className="p-2 hover:bg-gray-100 rounded-lg group">
                                            <IconWidget icon="ChevronLeft" className="fill-gray-400 group-hover:fill-black" />
                                        </button>
                                        <button onClick={goToNextMonth} type="button" title="Next month" className="p-2 hover:bg-gray-100 rounded-lg group">
                                            <IconWidget icon="ChevronRight" className="fill-gray-400 group-hover:fill-black" />
                                        </button>
                                    </div>
                                    <h2 className="ml-3 text-lg font-medium">{formattedMonth}</h2>
                                    <button onClick={goToToday} type="button" className="border p-2 rounded-lg ml-3 text-sm">오늘 날짜</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button type="button" title="This month" className="border rounded-s-lg px-3 py-2 text-sm" >Month</button>
                                    <button type="button" title="This month" className="border -ml-px px-3 py-2 text-sm " >Week</button>
                                    <button type="button" title="This month" className="border -ml-px px-3 py-2 text-sm " >Day</button>
                                    <button type="button" title="This month" className="border rounded-e-lg -ml-px px-3 py-2 text-sm " >List</button>
                                    <button to={`/WorkVisual/p//add`} onClick={toggleOpen} className="flex items-center justify-center text-sm bg-primary-600 text-white py-2 px-3 rounded-lg hover:bg-primary-700 ml-3">
                                        <IconWidget icon="Add" className="fill-white mr-1 w-5" />이벤트 추가
                                    </button>
                                </div>
                            </div>
                            <div className="grow relative bg-white">
                                <table className="border w-full border-collapse">
                                    <thead role="rowgroup">
                                        <tr role="presentation">
                                            <th className="py-3">일</th>
                                            <th className="py-3">월</th>
                                            <th className="py-3">화</th>
                                            <th className="py-3">수</th>
                                            <th className="py-3">목</th>
                                            <th className="py-3">금</th>
                                            <th className="py-3">토</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 6 }, (_, weekIndex) => (
                                            <tr key={weekIndex}>
                                                {Array.from({ length: 7 }, (_, dayIndex) => {
                                                    const dayNumber = weekIndex * 7 + dayIndex - firstDay + 1;
                                                    const isPreviousMonth = dayNumber <= 0;
                                                    const isNextMonth = dayNumber > daysInMonth;
                                                    const displayDay = isPreviousMonth ? previousMonthDays + dayNumber : isNextMonth ? dayNumber - daysInMonth : dayNumber;
                                                    const newDate = new Date();
                                                    return (
                                                        <td key={dayIndex} onClick={toggleOpen} className={`p-0 border h-44 ${isPreviousMonth || isNextMonth ? 'text-gray-400' : ''}`}>
                                                            <div className={`w-full h-full hover:bg-gray-100 cursor-pointer ${newDate.getMonth() == currentDate.getMonth() && newDate.getDate() == dayNumber ? 'bg-gray-100' : ''}`}>
                                                                <span className="flex justify-center text-center w-full">{displayDay}</span>
                                                                {/* <div className="min-h-8">
                                                                    <div className="flex flex-col px-4">
                                                                        <button type="button" className="flex items-center bg-[#ecfafa] w-full p-2 rounded-lg mb-2">
                                                                            <div className="w-2 h-2 rounded-lg bg-[#1c4ed8] mr-2"></div>
                                                                            <span className="text-sm">홍길동님 출근 9시 00분</span>
                                                                        </button>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </div>
                <div onClick={toggleOpen} className={`fixed w-screen h-screen left-0 top-0 bg-black z-30 opacity-30 ${isOpen ? '' : 'hidden'}`}></div>
                <div className={`fixed py-2 px-4 bg-white right-0 top-0 h-screen z-40 w-80 ${isOpen ? '' : 'hidden'}`}>
                    <div className="flex flex-col justify-between h-full">
                        <div className="">
                            <div className="flex items-center justify-between mb-5">
                                <h5 className="text-[#6b7280] font-semibold text-sm ">새로운 이벤트</h5>
                                <button type="button" onClick={toggleOpen}>
                                    <IconWidget icon="Close" className="fill-black" />
                                </button>
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="title" className="mb-2 text-sm">제목</label>
                                <input type="text" id="title" name="title" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="description" className="mb-2 text-sm">내용</label>
                                <textarea id="description" name="description" rows={4} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." >
                                </textarea>
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="startDate" className="mb-2 text-sm">시작 날짜</label>
                                <input type="date" id="startDate" name="startDate" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="endDate" className="mb-2 text-sm">종료 날짜</label>
                                <input type="date" id="endDate" name="endDate" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="endDate" className="mb-2 text-sm">색상 설정</label>
                                <div className="flex">
                                    <button type="button" className="w-7 h-7 bg-[#9061f9] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#6875f5] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#2563eb] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#e74694] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#16bdca] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#31c48d] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#faca15] rounded-sm mr-2"></button>
                                    <button type="button" className="w-7 h-7 bg-[#ff8a4c] rounded-sm"></button>
                                </div>
                            </div>
                            <div className="flex flex-col mb-3">
                                <h2 className="mb-2 text-sm">옵션 설정</h2>
                                <div className="flex mb-1">
                                    <input type="checkbox" id="goWork" name="goWork" className="mr-2" />
                                    <label htmlFor="goWork" className="text-sm">출근</label>
                                </div>
                                <div className="flex mb-1">
                                    <input type="checkbox" id="leaveWork" name="leaveWork" className="mr-2" />
                                    <label htmlFor="leaveWork" className="text-sm">퇴근</label>
                                </div>
                                <div className="flex mb-1">
                                    <input type="checkbox" id="annualWork" name="annualWork" className="mr-2" />
                                    <label htmlFor="annualWork" className="text-sm">연차</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <button type="button" className="bg-[#2563eb] text-white w-1/2 py-3 rounded-lg text-sm hover:bg-[#4778e5]" >이벤트 추가</button>
                            <button type="button" onClick={toggleOpen} className="w-1/2 py-3 rounded-lg border ml-2 text-gray-400 hover:bg-gray-100 hover:text-black text-sm">닫기</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Calender;