import { useState } from "react";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import IconWidget from "../../components/Widget/icon_widget";
import { useSidebar } from "../../contexts/hooks/useSidebar";
import useCommute from "../../contexts/hooks/useCommute";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../contexts/hooks/useForm";

const CalenderTest = () => {
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
                                        <tr role="presentation ">
                                            <th className="py-3 w-[14%] bg-gray-100">일</th>
                                            <th className="py-3 w-[14%] bg-gray-100">월</th>
                                            <th className="py-3 w-[14%] bg-gray-100">화</th>
                                            <th className="py-3 w-[14%] bg-gray-100">수</th>
                                            <th className="py-3 w-[14%] bg-gray-100">목</th>
                                            <th className="py-3 w-[14%] bg-gray-100">금</th>
                                            <th className="py-3 w-[14%] bg-gray-100">토</th>
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
                                                        <td key={dayIndex} className={` p-0 border h-44 ${isPreviousMonth || isNextMonth ? 'text-gray-400' : ''}`}>
                                                            <div onClick={toggleOpen} className={`w-full h-full hover:bg-gray-100 cursor-pointer ${newDate.getMonth() == currentDate.getMonth() && newDate.getDate() == dayNumber ? 'bg-gray-100' : ''}`}>
                                                                <span className="flex justify-center text-center w-full">{displayDay}</span>
                                                                <div className="min-h-8">
                                                                    <div className="flex flex-col px-4">
                                                                        {filteredEvents(displayDay).map((event, index) => (
                                                                            <button key={index} type="button" className="flex items-center bg-[#ecfafa] w-full p-2 rounded-lg mb-2">
                                                                                <div className="w-2 h-2 rounded-lg bg-[#1c4ed8] mr-2"></div>
                                                                                <span className="text-sm">{event.title}</span>
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </div>
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
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}  method="post">
                            <div className="flex items-center justify-between mb-5">
                                <h5 className="text-[#6b7280] font-semibold text-sm ">새로운 이벤트</h5>
                                <button type="button" onClick={toggleOpen}>
                                    <IconWidget icon="Close" className="fill-black" />
                                </button>
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="title" className="mb-2 text-sm" >제목</label>
                                <input type="text" id="title" name="title" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." value={formState.title} onChange={handleChange} required={true} />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="description" className="mb-2 text-sm">내용</label>
                                <textarea id="description" name="description" rows={4} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." value={formState.content} onChange={handleChange} required={true} >
                                </textarea>
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="startDate" className="mb-2 text-sm">시작 날짜</label>
                                <input type="date" id="startDate" name="startDate" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." value={formState.start_date} onChange={handleChange} required={true} />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="endDate" className="mb-2 text-sm">종료 날짜</label>
                                <input type="date" id="endDate" name="endDate" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="제목을 입력해주세요." value={formState.end_date} onChange={handleChange} required={true} />
                            </div>
                            <div className="flex flex-col mb-3">
                                <label htmlFor="endDate" className="mb-2 text-sm">색상 설정</label>
                                <div className="flex">
                                    <button type="button" onClick={() => toggleColor(1)} className={`w-7 h-7 bg-[#9061f9] rounded-sm mr-2 ${color == 1 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(2)} className={`w-7 h-7 bg-[#6875f5] rounded-sm mr-2 ${color == 2 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(3)} className={`w-7 h-7 bg-[#2563eb] rounded-sm mr-2 ${color == 3 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(4)} className={`w-7 h-7 bg-[#e74694] rounded-sm mr-2 ${color == 4 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(5)} className={`w-7 h-7 bg-[#16bdca] rounded-sm mr-2 ${color == 5 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(6)} className={`w-7 h-7 bg-[#31c48d] rounded-sm mr-2 ${color == 6 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(7)} className={`w-7 h-7 bg-[#faca15] rounded-sm mr-2 ${color == 7 ? 'shadow-lg' : ''}`}></button>
                                    <button type="button" onClick={() => toggleColor(8)} className={`w-7 h-7 bg-[#ff8a4c] rounded-sm ${color == 8 ? 'shadow-lg' : ''}`}></button>
                                </div>
                            </div>
                            <div className="flex flex-col mb-3">
                                <h2 className="mb-2 text-sm">옵션 설정</h2>
                                <div className="flex mb-1">
                                    <input type="radio" id="goWork" name="work" className="mr-2" value={formState.schedule_option == 1} onChange={handleChange} required={true} />
                                    <label htmlFor="goWork" className="text-sm">출근 및 퇴근</label>
                                </div>
                                <div className="flex mb-1">
                                    <input type="radio" id="annualWork" name="work" className="mr-2" value={formState.schedule_option == 2} onChange={handleChange} required={true} />
                                    <label htmlFor="annualWork" className="text-sm">연차</label>
                                </div>
                            </div>
                        </form>
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

export default CalenderTest;