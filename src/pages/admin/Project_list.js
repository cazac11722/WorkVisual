import { useEffect, useState, useCallback, useRef } from "react";

import SubHeader from "../../components/Body/SubHeader";
import Footer from "../../components/PageLayout/Footer";
import Header from "../../components/PageLayout/Header";
import Sidebar from "../../components/PageLayout/Sideber";
import { useSidebar } from "../../contexts/hooks/useSidebar";
import { useForm } from "../../contexts/hooks/useForm";
import { Link } from "react-router-dom";
import { usePopup } from "../../contexts/hooks/usePopup";
import { useAuth } from "../../contexts/AuthContext";
import IconWidget from "../../components/Widget/icon_widget";

const ProjectList = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();

    const { openPopup } = usePopup();

    const { user } = useAuth();
    const optionBoxRef = useRef(null);
    const [onModal, setOnModal] = useState(null);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const [data, setData] = useState([]);
    const [reasons, setReasons] = useState([]);
    const { mainUrl } = useForm();

    const [headerConfig, setHeaderConfig] = useState({
        title: "관리자 팀원 정보 관리",
        ref: [
            { title: "관리자", href: "#" },
            { title: "팀원 정보 관리", href: "#" },
        ],
        filter: true,
        back: true,
        titleShow: true,
        btn: ["add_new_department", "add_new_rank", "add_new_reason", "add_new_user"]
    });

    const list = useCallback(async () => {
        const response1 = await fetch(`${mainUrl}/api/task_management/tasks/?organization=${user.id}`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        });

        if (response1.ok) {
            const result1 = await response1.json();
            setData(result1);
        }
    }, [])

    useEffect(() => {
        list();
        document.addEventListener('click', hideOptions, true);

        return () => {
            document.removeEventListener('click', hideOptions, true);
        };
    }, [list])

    const toggleOnMdal = (e) => {
        setOnModal(e);
    }

    const togglePointerModal = (activeId) => {
        openPopup({
            type: "pointerUpdateModal",  // 팝업 유형
            data: data,
            setData: setData,
            id: activeId,
        });
    };

    const toggleReasonModal = (activeId) => {
        openPopup({
            type: "reasonUpdateModal",  // 팝업 유형
            data: reasons,
            setData: setData,
            id: activeId,
        });
    };

    const toggleDepartmentModal = (activeId) => {
        openPopup({
            type: "departmentUpdateModal",  // 팝업 유형
            data: data,
            setData: setData,
            id: activeId,
        });
    }

    const DepartmentSetModal = () => {
        openPopup({
            type: "DepartmentSetModal",  // 팝업 유형
            data: data,
            setData: setData,
        });
    }

    const RankSetModal = () => {
        openPopup({
            type: "RankSetModal",  // 팝업 유형
            data: data,
            setData: setData,
        });
    }

    const ReasonSetModal = () => {
        openPopup({
            type: "ReasonSetModal",  // 팝업 유형
            data: reasons,
            setData: setReasons,
        });
    }

    const UserProjectAdd = () => {
        openPopup({
            type: "UserProjectAdd",  // 팝업 유형
            data: data,
            setData: setData,
        });
    }

    const hideOptions = useCallback((e) => {
        if (optionBoxRef.current === null) {
            return;
        }
        if (!optionBoxRef.current.contains(e.target)) {
            setOnModal(0);
        }
    }, []);

    const handleCheckboxChange = (userId, mouseEvent = null) => {
        if (userId == "ALL" && mouseEvent) {
            let chk_user_list = mouseEvent.target.checked ? (data.map((e) => e.id)) : [];
            setSelectedUsers((prevSelectedUsers) => {
                return chk_user_list;
            });
        } else {

            setSelectedUsers((prevSelectedUsers) => {
                if (prevSelectedUsers.includes(userId)) {
                    return prevSelectedUsers.filter(id => id !== userId);
                } else {
                    return [...prevSelectedUsers, userId];
                }
            });
        }
    };

    const deleteSelectedUsers = async () => {
        var confirmflag = window.confirm("정말 삭제 하시겠습니까?");
        if (!confirmflag) return false;
        try {
            for (const userId of selectedUsers) {
                const response = await fetch(`${mainUrl}/api/task_management/tasks/${userId}/`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                });
                if (!response.ok) throw new Error('Failed to delete user with ID ' + userId);
            }
            alert("삭제가 되었습니다.");
            // Update the local state to remove deleted users
            setData(prevData => ( prevData.filter(user => !selectedUsers.includes(user.id)) ));
            setSelectedUsers([]); // Reset selected users
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while deleting users.");
        }
    };

    const deleteUsers = async (userId) => {
        var confirmflag = window.confirm("정말 삭제 하시겠습니까?");
        if (!confirmflag) return false;
        try {
            const response = await fetch(`${mainUrl}/api/accounts/organization-users/${userId}/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) throw new Error('Failed to delete user with ID ' + userId);
            alert("삭제가 되었습니다.");
            // Update the local state to remove deleted users
            setData(prevData => ({
                ...prevData,
                userList: prevData.userList.filter(user => user.id != userId)
            }));
            setSelectedUsers([]); // Reset selected users
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while deleting users.");
        }
    };


    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
                <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <main className="min-h-screen bg-white dark:bg-gray-700">
                        <SubHeader headerConfig={headerConfig} />

                        <section className="p-4">
                            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                                <Link to={'/WorkVisual'} className={`flex items-center ${headerConfig.back ? "" : "hidden"}`}>
                                    <IconWidget icon="ArrowBack" className="w-5" />
                                    <span className={`text-sm font-bold ml-2 `}>Back to 대시버드</span>
                                </Link>
                                <div className="flex ml-auto border-none">

                                    <button type="button" onClick={DepartmentSetModal} id="add_new_department" className={`flex align-center items-center mx-1 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border`}>
                                        <IconWidget icon="Add" className="w-5 fill-gray-500" />
                                        <span className="ml-1 text-sm ">목표 설정</span>
                                    </button>

                                    <button type="button" onClick={RankSetModal} id="add_new_rank" className={`flex align-center items-center mx-1 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border`}>
                                        <IconWidget icon="Add" className="w-5 fill-gray-500" />
                                        <span className="ml-1 text-sm ">공통 텍스트 설정</span>
                                    </button>

                                    <button type="button" onClick={ReasonSetModal} id="add_new_reason" className={`flex align-center items-center mx-1 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border`}>
                                        <IconWidget icon="Add" className="w-5 fill-gray-500" />
                                        <span className="ml-1 text-sm ">업무 결과 설정</span>
                                    </button>

                                    <button type="button" onClick={UserProjectAdd} id="add_new_user" className={`flex align-center items-center mx-1 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 `}>
                                        <IconWidget icon="Add" className="w-5 fill-white" />
                                        <span className="ml-1 text-sm">프로젝트 추가</span>
                                    </button>

                                    <button className={`flex align-center items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 `}
                                        onClick={deleteSelectedUsers}>
                                        <IconWidget icon="Delete" className="w-5" />
                                        <span className="ml-1 text-sm">삭제</span>
                                    </button>

                                </div>
                            </div>
                        </section>

                        <section className="">
                            <div className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 border-b">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-10">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => handleCheckboxChange("ALL", e)}
                                                />
                                            </th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]">날짜</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[25em]">제목</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]">진행 상태</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]">작성자</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white">진행도</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[15em]">진행 시간</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]">마감일</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]">시간별 평균값</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]">컨펌 요청</th>
                                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-r dark:text-white w-[8em]"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((e, i) => {
                                                const upload_date = new Date(e.modified_date)
                                                return (<tr key={i}>
                                                    <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedUsers.includes(e.id)}
                                                            onChange={() => handleCheckboxChange(e.id)}
                                                        />
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span>{upload_date.getFullYear()}년 {upload_date.getDate()}월 {upload_date.getDay()}일</span>
                                                    </td>
                                                    <td className="p-4 text-sm border text-center font-normal text-gray-800 whitespace-nowrap dark:text-gray-400">
                                                        <Link to={`/WorkVisual/p/1/view/${e.id || ''}`} className="font-semibold hover:underline">
                                                            {e.name || "제목 없음"}
                                                        </Link>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-500">
                                                            {e.progress || "진행중"}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span className=" text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-500">
                                                            {e.author_profile?.name || "이름 없음"}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <div className="flex justify-end mb-1">
                                                            <span>75%</span>
                                                        </div>
                                                        <div className="bg-gray-200 rounded-lg h-2">
                                                            <div className="bg-primary-600 w-[75%] h-2 rounded-lg"></div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span>총 10분 30초</span>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span>2024년 3월 12일</span>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span>총 10분 30초</span>
                                                    </td>
                                                    <td className="p-4 text-center text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white ">
                                                        <span>요청</span>
                                                    </td>
                                                    <td className="p-4 text-sm border text-center font-normal text-gray-900 whitespace-nowrap dark:text-white relative">
                                                        <button type="button" onClick={() => toggleOnMdal(i + 1)} className="text-white px-2 py-1 rounded text-sm mr-1">
                                                            <IconWidget icon="MoreHoriz" className="fill-black" />
                                                        </button>
                                                        <div ref={optionBoxRef} className={`absolute right-2 top-16 z-30 w-40 bg-white shadow rounded-lg ${onModal == (i + 1) ? '' : "hidden"}`}>
                                                            <ul className="p-2">
                                                                <li onClick={() => toggleReasonModal(e)} className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-1">
                                                                    <IconWidget icon="Isow" className="fill-black w-4 mr-2" />
                                                                    <span>연차 및 반차 부여</span>
                                                                </li>
                                                                <li onClick={() => toggleDepartmentModal(e)} className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-1">
                                                                    <IconWidget icon="Isow" className="fill-black w-4 mr-2" />
                                                                    <span>부서/직급 설정</span>
                                                                </li>
                                                                <li onClick={() => togglePointerModal(e)} className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-1">
                                                                    <IconWidget icon="Bolt" className="fill-black w-4 mr-2" />
                                                                    <span>포인터 부여</span>
                                                                </li>
                                                                <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-1">
                                                                    <IconWidget icon="Visibility" className="fill-black w-4 mr-2" />
                                                                    <span>캘린더 보기</span>
                                                                </li>
                                                                <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-1">
                                                                    <IconWidget icon="Chat" className="fill-black w-4 mr-2" />
                                                                    <span>채팅</span>
                                                                </li>
                                                            </ul>
                                                            <div onClick={() => deleteUsers(e.id)} className="border-t p-2 hover:bg-gray-100">
                                                                <button type="button" className="flex items-center justify-center">
                                                                    <IconWidget icon="Delete" className="fill-red-500 mr-1 w-5 " />
                                                                    <span className="text-red-500">삭제</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>

                    </main>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default ProjectList;