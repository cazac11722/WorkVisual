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
                
            </main>
        </div>
    );
}

export default Calender;