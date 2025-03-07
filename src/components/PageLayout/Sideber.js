import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconWidget from "../Widget/icon_widget";
import SidebarItem from "../Sidebar/Sideber_item";
import { useAuth } from "../../contexts/AuthContext";
import SidebarItemSub from "../Sidebar/Sideber_item_sub";

const Sidebar = ({ isOpen, toggleOpen }) => {
    const { user } = useAuth();


    const adminList = [
        { title: "팀원 정보 관리", href: "/WorkVisual/admin/information", count: 0 },
        { title: "팀원 프로젝트 관리", href: "/WorkVisual/admin/project", count: 0 },
        { title: "팀원 통계 및 분석", href: "/WorkVisual/admin/statistics", count: 0 }
    ]
    const userList = [
        { title: "팀원 정보 관리", href: "/WorkVisual", count: 0 },
        { title: "팀원 프로젝트 관리", href: "/WorkVisual", count: 0 },
        { title: "팀원 통계 및 분석", href: "/WorkVisual", count: 0 }
    ]

    return (
        <aside id="sidebar" className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden  h-full pt-16 font-normal duration-75 lg:flex transition-width duration-200 ${isOpen ? 'w-16' : 'w-64'}`}>
            <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <ul className="pb-2 space-y-2">
                            <li className="flex items-center">
                                <Link to={`/WorkVisual/p/${user.id}/add`} className={`flex items-center justify-center text-sm bg-primary-600 text-white w-full py-2 px-1 rounded-lg hover:bg-primary-700 mr-2 ${isOpen ? 'hidden' : ''}`}>
                                    <IconWidget icon="Add" className="fill-white mr-1 w-5" />프로젝트 추가
                                </Link>
                                <button type="button" onClick={() => toggleOpen()} className="py-2">
                                    <IconWidget icon="Sort" className={`w-10 fill-black cursor-pointer ${isOpen ? 'hidden' : ''}`} />
                                    <IconWidget icon="Menu" className={`w-10 fill-black cursor-pointer ${isOpen ? '' : 'hidden'}`} />
                                </button>
                            </li>
                            {/* <li>
                                <SidebarItem href="/WorkVisual" name="대시보기" icon="Dashboard" textShow={isOpen} />
                            </li> */}
                            <li>
                                <SidebarItem href={`/WorkVisual/p/${user.id}/list`} name="내 프로젝트" icon="Description" textShow={isOpen} />
                            </li>
                            <li className={`${user.id != 1 ? 'hidden' : ''}`}>
                                <SidebarItemSub href={`/WorkVisual/admin`} name="조직 활동" icon="Public" textShow={isOpen} list={adminList} />
                            </li>
                            {/* <li>
                                <SidebarItemSub href={`/m/${user.id}`} name="직원 활동 " icon="Monitoring" textShow={isOpen} list={userList} />
                            </li> */}
                            {/* <li>
                                <SidebarItem href={`/WorkVisual/c/${user.id}`} name="캘린더 " icon="CalendarMonth" textShow={isOpen} />
                            </li> */}
                            <li>
                                <SidebarItem href={`/WorkVisual/profile/${user.id}`} name="프로필" icon="Settings" textShow={isOpen} />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800">
                    <Link className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>ƒ
                    </Link>
                    <Link className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                    </Link>
                    <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    </button>
                </div> */}
            </div>
        </aside>
    );
}

export default Sidebar;