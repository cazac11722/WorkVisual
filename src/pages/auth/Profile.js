// import React from "react";
import { useEffect, useState, useCallback } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import IconWidget from "../../components/Widget/icon_widget";
import SubHeader from "../../components/Body/SubHeader";
import { useSidebar } from "../../contexts/hooks/useSidebar";
import { useForm } from "../../contexts/hooks/useForm";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [headerConfig, setHeaderConfig] = useState({
        title: "프로필",
        ref: [
            { title: "사용자", href: "#" },
            { title: "프로필", href: "#" },
        ],
        filter: false,
        back: false,
        titleShow: true,
        btn: []
    });
    const [errors, setErrors] = useState({});
    const [passwords, setPasswords] = useState({
        current_password: "",
        new_password: "",
        confirm_password: "",
    });
    const [passwordValidation, setPasswordValidation] = useState({
        minLength: false,
        lowercase: false,
        specialChar: false,
        differentFromOld: false,
    });


    const { formState, setFormState, mainUrl, handleChange, handleSubmit } = useForm(
        {
            username: "",
            email: "",
            profile:
            {
                phone_number: "",
                position: "",
                start_work_time: new Date(),
                end_work_time: new Date(),
                notifications: [],
                settings: [],
                name: "",
                hire_date: new Date(),
                address: "",
                postal_code: "",
                company_name: "",
                department: "",
                bio: "",
            }
        },
        async (data) => {
            data.profile.user = id;
            setIsLoading(true);
            setIsSuccess(false);

            try {
                const response = await fetch(`${mainUrl}/api/accounts/users/${id}/`, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const result = await response.json();
                    setIsSuccess(true);
                    setTimeout(() => {
                        setIsSuccess(false);
                    }, 2000);
                } else {
                    console.error("Login failed:", response.status);
                    // 오류 처리
                }
            } catch (error) {
                console.error("An error occurred:", error);
            } finally {
                setIsLoading(false);
            }
        }
    );

    const list = useCallback(async () => {
        const response = await fetch(`${mainUrl}/api/accounts/users/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            const result = await response.json();
            setFormState((prevState) => ({
                ...prevState,
                ...result, // 기존 상태를 유지하면서 새로운 데이터로 업데이트
                profile: { ...prevState.profile, ...result.profile }
            }));
        }
    }, [])

    const toggleNotifications = (index, e) => {
        setFormState((prevState) => ({
            ...prevState,
            profile: {
                ...prevState.profile,
                notifications: prevState.profile.notifications.map((item, i) =>
                    i === index ? e.target.checked : item
                ),
            },
        }));
    }

    const toggleSettings = (index, e) => {
        setFormState((prevState) => ({
            ...prevState,
            profile: {
                ...prevState.profile,
                settings: prevState.profile.settings.map((item, i) =>
                    i === index ? e.target.checked : item
                ),
            },
        }));
    }

    const toggleAllNotifications = () => {
        const areAllChecked = formState.profile.notifications.every((item) => item === true);

        setFormState((prevState) => ({
            ...prevState,
            profile: {
                ...prevState.profile,
                notifications: prevState.profile.notifications.map(() => !areAllChecked)
            },
        }));
    };

    const toggleAllSettings = () => {
        const areAllChecked = formState.profile.settings.every((item) => item === true);

        setFormState((prevState) => ({
            ...prevState,
            profile: {
                ...prevState.profile,
                settings: prevState.profile.settings.map(() => !areAllChecked)
            },
        }));
    };
    const passwordHandleChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prev) => ({ ...prev, [name]: value }));

        if (name === "new_password") {
            validatePassword(value);
        }
    };
    const validatePassword = (password) => {
        setPasswordValidation({
            minLength: password.length >= 10 && password.length <= 100,
            lowercase: /[a-z]/.test(password),
            specialChar: /[!@#?]/.test(password),
            differentFromOld: password !== passwords.current_password && password !== "",
        });
    };
    const passwordHandleSubmit = async (e) => {
        e.preventDefault();
        setErrors({}); // 초기화

        if (!passwordValidation.minLength ||
            !passwordValidation.lowercase ||
            !passwordValidation.specialChar ||
            !passwordValidation.differentFromOld) {
            setErrors({ new_password: "비밀번호 요구 사항을 충족해야 합니다." });
            return;
        }

        try {
            const response = await fetch(`${mainUrl}/api/accounts/change-password/`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(passwords),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrors(data);
            } else {
                alert("비밀번호가 성공적으로 변경되었습니다.");
            }
        } catch (error) {
            console.error("비밀번호 변경 오류:", error);
        }
    };

    useEffect(() => {
        list();
    }, [list])

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <Header />
            <main className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
                <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <main className="min-h-screen dark:bg-gray-700">
                        <SubHeader headerConfig={headerConfig} />
                        <form className="" onSubmit={handleSubmit} method="post">
                            <section className="p-4  grid grid-cols-1 lg:grid-cols-4 gap-4">
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                    <h3 className="font-bold text-lg">계정</h3>
                                    <div className="flex items-center w-full my-4">
                                        <img className="w-16 h-16 mr-4 rounded-full" src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png" alt="Bonnie avatar" />
                                        <button type="button" className="flex items-center justify-center text-sm bg-primary-600 text-white px-4 py-2 px-1 rounded-lg hover:bg-primary-700 mr-2 ">
                                            업로드
                                        </button>
                                        <button type="button" className="flex items-center justify-center text-sm border border-gray-300 text-black px-4 py-2 px-1 rounded-lg ">
                                            삭제
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                        <div className="flex flex-col mb-3 2xl:col-span-1">
                                            <label htmlFor="username" className="mb-2 text-sm">닉네임</label>
                                            <input type="text" id="current_username" name="username" value={formState.username ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="예) 홍길동" ></input>
                                        </div>
                                        <div className="flex flex-col mb-3 2xl:col-span-1">
                                            <label htmlFor="email" className="mb-2 text-sm">이메일</label>
                                            <input type="email" id="email" name="email" value={formState.email ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="예) email@email.com" ></input>
                                        </div>
                                        <div className="flex flex-col mb-3 2xl:col-span-1">
                                            <label htmlFor="profile.phone_number" className="mb-2 text-sm">전화번호</label>
                                            <input type="text" id="profile.phone_number" name="profile.phone_number" value={formState.profile.phone_number ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="예) 010-1234-4567" ></input>
                                        </div>
                                        <div className="flex flex-col mb-3 2xl:col-span-1">
                                            <label htmlFor="profile.company_name" className="mb-2 text-sm">회사 이름</label>
                                            <input type="text" id="profile.company_name" name="profile.company_name" value={formState.profile.company_name ?? ""} onChange={handleChange} required={false} disabled={true} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="등록된 조직이 없습니다."></input>
                                        </div>
                                        <div className="flex flex-col mb-3 2xl:col-span-1">
                                            <label htmlFor="profile.start_work_time" className="mb-2 text-sm">출근 시간 설정</label>
                                            <input type="time" id="profile.start_work_time" name="profile.start_work_time" value={formState.profile.start_work_time ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" ></input>
                                        </div>
                                        <div className="flex flex-col mb-3 2xl:col-span-1">
                                            <label htmlFor="profile.end_work_time" className="mb-2 text-sm">퇴근 시간 설정</label>
                                            <input type="time" id="profile.end_work_time" name="profile.end_work_time" value={formState.profile.end_work_time ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" ></input>
                                        </div>
                                    </div>
                                    <button type="submit" className="flex items-center justify-center text-sm bg-primary-600 text-white px-4 py-2 px-1 rounded-lg hover:bg-primary-700 mr-2 mt-4">
                                        {isLoading ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                                저장 중...
                                            </span>
                                        ) : isSuccess ? (
                                            <span className="flex items-center">
                                                ✅ 변경 완료
                                            </span>
                                        ) : (
                                            <span>변경 사항 저장</span>
                                        )}
                                    </button>
                                </div>
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                    <h3 className="font-bold text-lg border-b pb-4">알람</h3>
                                    <div className="flex items-center justify-between my-4 ">
                                        <h3 className="text-lg font-bold">알림 및 설정</h3>
                                        <button type="button" className="text-lg font-bold text-blue-900" onClick={toggleAllNotifications}>모두 선택</button>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.notifications[0] ?? false} onChange={(e) => toggleNotifications(0, e)} className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:bg-blue-600 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all rtl:peer-checked:after:-translate-x-full rounded-full "></div>
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-mb font-medium text-gray-900 dark:text-gray-300">계정 활동</span>
                                                <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300">엑셀시온에서 공지사항 및 서비스 업데이트를 받아보세요</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.notifications[1] ?? false} onChange={(e) => toggleNotifications(1, e)} className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-mb font-medium text-gray-900 dark:text-gray-300">모바일 푸시 알림</span>
                                                <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300">회사에 귀하의 관심이 필요할 때마다 푸시 알림을 받으세요.</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.notifications[2] ?? false} onChange={(e) => toggleNotifications(2, e)} className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-mb font-medium text-gray-900 dark:text-gray-300">이메일 알림</span>
                                                <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300">회사에서 귀하의 주의가 필요한 때마다 이메일 알림을 받으세요.</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.notifications[3] ?? false} onChange={(e) => toggleNotifications(3, e)} className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-mb font-medium text-gray-900 dark:text-gray-300">출퇴근 자동 설정</span>
                                                <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-300">귀한에 로그인, 로그아웃으로 자동으로 출/퇴근 체크 시스템 입니다.</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-between my-4 ">
                                        <h3 className="text-lg font-bold">다음과 같은 경우 이메일로 알려주세요.</h3>
                                        <button type="button" className="text-lg font-bold text-blue-900" onClick={toggleAllSettings}>모두 선택</button>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.settings[0] ?? false} onChange={(e) => toggleSettings(0, e)} className="peer" />
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">누군가가 나를 언급한다</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.settings[1] ?? false} onChange={(e) => toggleSettings(1, e)} className="peer" />
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">누군가가 나에게 그들의 프로젝트 중 하나에 협력자가 되어 달라고 요청했습니다.</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.settings[2] ?? false} onChange={(e) => toggleSettings(2, e)} className="peer" />
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">새로운 팀원을 초대하라는 초대장을 받습니다.</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.settings[3] ?? false} onChange={(e) => toggleSettings(3, e)} className="peer" />
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">새로운 팀원을 초대하라는 초대장을 받습니다.</span>
                                            </div>
                                        </label>
                                        <label className="inline-flex cursor-pointer mb-4">
                                            <input type="checkbox" checked={formState.profile.settings[4] ?? false} onChange={(e) => toggleSettings(4, e)} className="peer" />
                                            <div className="flex flex-col">
                                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">누군가 내 초대를 수락했습니다</span>
                                            </div>
                                        </label>
                                    </div>
                                    <button type="submit" className="flex items-center justify-center text-sm bg-primary-600 text-white px-4 py-2 px-1 rounded-lg hover:bg-primary-700 mr-2 mt-4">
                                        {isLoading ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                                저장 중...
                                            </span>
                                        ) : isSuccess ? (
                                            <span className="flex items-center">
                                                ✅ 변경 완료
                                            </span>
                                        ) : (
                                            <span>변경 사항 저장</span>
                                        )}
                                    </button>
                                </div>
                            </section>
                            <section className="p-4 pt-0 grid grid-cols-1 gap-1">
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                    <h3 className="font-bold text-lg border-b pb-4">일반 정보</h3>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 2xl:col-span-1">
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="profile.name" className="mb-2 text-sm">이름</label>
                                                <input type="text" id="profile.name" name="profile.name" value={formState.profile.name ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="예) 홍길동"></input>
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="profile.hire_date" className="mb-2 text-sm">입사 날짜</label>
                                                <input type="date" id="profile.hire_date" name="profile.hire_date" value={formState.profile.hire_date ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" ></input>
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="profile.address" className="mb-2 text-sm">주소</label>
                                                <input type="text" id="profile.address" name="profile.address" value={formState.profile.address ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="예) 도움6로 42, 국립중앙박물관, 상암동 1595"></input>
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="profile.postal_code" className="mb-2 text-sm">우편번호</label>
                                                <input type="text" id="profile.postal_code" name="profile.postal_code" value={formState.profile.postal_code ?? ""} onChange={handleChange} required={false} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="예) 12345"></input>
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="profile.department" className="mb-2 text-sm">부서</label>
                                                <input type="text" id="profile.department" name="profile.department" value={formState.profile.department ?? ""} onChange={handleChange} required={false} disabled={true} placeholder="등록된 조직이 없습니다." className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm"></input>
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="profile.position" className="mb-2 text-sm">직급</label>
                                                <input type="text" id="profile.position" name="profile.position" value={formState.profile.position ?? ""} onChange={handleChange} required={true} disabled={true} placeholder="등록된 조직이 없습니다." className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm"  ></input>
                                            </div>
                                        </div>
                                        <div className="2xl:col-span-1">
                                            <textarea type="text" id="profile.bio" name="profile.bio" value={formState.profile.bio ?? ""} onChange={handleChange} required={false} rows="11" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="자기 소개를 작성해 주세요.">
                                            </textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="flex items-center justify-center text-sm bg-primary-600 text-white px-4 py-2 px-1 rounded-lg hover:bg-primary-700 mr-2 mt-4">
                                        {isLoading ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                                저장 중...
                                            </span>
                                        ) : isSuccess ? (
                                            <span className="flex items-center">
                                                ✅ 변경 완료
                                            </span>
                                        ) : (
                                            <span>변경 사항 저장</span>
                                        )}
                                    </button>
                                </div>
                            </section>
                        </form>
                        <form onSubmit={passwordHandleSubmit} method="post">
                            <section className="p-4 pt-0 grid grid-cols-1 gap-1">
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                                    <h3 className="font-bold text-lg border-b pb-4">비밀번호</h3>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1 2xl:col-span-1">
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="current_password" className="mb-2 text-sm">현재 비밀번호</label>
                                                <input type="password" id="current_password" name="current_password" value={passwords.current_password} onChange={passwordHandleChange} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="현재 비밀번호를 입력해주세요." />
                                                {errors.current_password && <p className="text-red-500 text-sm">{errors.current_password}</p>}
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="new_password" className="mb-2 text-sm">새로운 비밀번호</label>
                                                <input type="password" id="new_password" name="new_password" value={passwords.new_password} onChange={passwordHandleChange} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="새로운 비밀번호를 입력해주세요." />
                                                {errors.new_password && <p className="text-red-500 text-sm">{errors.new_password}</p>}
                                            </div>
                                            <div className="flex flex-col mb-3 2xl:col-span-1">
                                                <label htmlFor="confirm_new_password" className="mb-2 text-sm">새로운 비밀번호를 확인하세요</label>
                                                <input type="password" id="confirm_new_password" name="new_password_chk" value={passwords.new_password_chk} onChange={passwordHandleChange} className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm" placeholder="새로운 비밀번호를 입력해주세요." />
                                                {errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password}</p>}
                                            </div>
                                        </div>
                                        <div className="2xl:col-span-1">
                                            <div className="p-4 bg-gray-100 rounded-lg ">
                                                <h3 className="text-sm font-bold mb-1">비밀번호 요구 사항:</h3>
                                                <p className="text-sm mb-4 text-gray-600">다음 요구 사항이 충족되는지 확인하세요.</p>
                                                <ul>
                                                    <li className="flex">
                                                        <IconWidget icon={passwordValidation.minLength ? "CheckBox" : "CloseBox"} className={`w-4 mr-1 ${passwordValidation.minLength ? "fill-green-500" : "fill-red-500"}`} />
                                                        <span className="text-sm text-gray-600">최소 10자 이상 (최대 100자)</span>
                                                    </li>
                                                    <li className="flex">
                                                        <IconWidget icon={passwordValidation.lowercase ? "CheckBox" : "CloseBox"} className={`w-4 mr-1 ${passwordValidation.lowercase ? "fill-green-500" : "fill-red-500"}`} />
                                                        <span className="text-sm text-gray-600">최소한 하나의 소문자</span>
                                                    </li>
                                                    <li className="flex">
                                                        <IconWidget icon={passwordValidation.specialChar ? "CheckBox" : "CloseBox"} className={`w-4 mr-1 ${passwordValidation.specialChar ? "fill-green-500" : "fill-red-500"}`} />
                                                        <span className="text-sm text-gray-600">최소한 하나의 특수문자를 포함해야 합니다(예: ! @ # ?)</span>
                                                    </li>
                                                    <li className="flex">
                                                        <IconWidget icon={passwordValidation.differentFromOld ? "CheckBox" : "CloseBox"} className={`w-4 mr-1 ${passwordValidation.differentFromOld ? "fill-green-500" : "fill-red-500"}`} />
                                                        <span className="text-sm text-gray-600">이전 비밀번호와 상당히 다릅니다</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="flex items-center justify-center text-sm bg-primary-600 text-white px-4 py-2 px-1 rounded-lg hover:bg-primary-700 mr-2 mt-4">
                                        {isLoading ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                                저장 중...
                                            </span>
                                        ) : isSuccess ? (
                                            <span className="flex items-center">
                                                ✅ 변경 완료
                                            </span>
                                        ) : (
                                            <span>변경 사항 저장</span>
                                        )}
                                    </button>
                                </div>
                            </section>
                        </form>
                    </main>
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Profile;
