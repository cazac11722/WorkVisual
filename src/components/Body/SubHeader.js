import { Link } from "react-router-dom";
import IconWidget from "../Widget/icon_widget";
import { useState } from "react";
import { usePopup } from "../../contexts/hooks/usePopup";


const SubHeader = ({ headerConfig }) => {
    
    return (
        <div className="p-4 pb-0 bg-white block sm:flex items-center justify-between lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mb-1">
                <div className="mb-4">
                    <nav className="flex mb-5">
                        <ul className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            <li className="inline-flex items-center">
                                <Link to={"/WorkVisual"} className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                    <svg className="w-5 h-5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd"></path>
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            {
                                headerConfig.ref.map((e, i) => (
                                    <li key={"header_ref_" + i}>
                                        <div className="flex items-center">
                                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                            {e.title}
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">{headerConfig.title}</h1>
                </div>
                {/* <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                    <Link to={'/WorkVisual'} className={`flex items-center ${headerConfig.back ? "" : "hidden"}`}>
                        <IconWidget icon="ArrowBack" className="w-5" />
                        <span className={`text-sm font-bold ml-2 `}>Back to 대시버드</span>
                    </Link>
                    <div className="flex ml-auto border-none">
                        
                        <button type="button" onClick={departmentSetModal} id="add_new_department" className={`flex align-center items-center mx-1 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border ${headerConfig.btn.includes("add_new_department") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Add" className="w-5 fill-gray-500" />
                            <span className="ml-1 text-sm ">부서 설정</span>
                        </button>

                        <button type="button" onClick={RankSetModal} id="add_new_rank" className={`flex align-center items-center mx-1 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border ${headerConfig.btn.includes("add_new_rank") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Add" className="w-5 fill-gray-500" />
                            <span className="ml-1 text-sm ">직급/등급 설정</span>
                        </button>

                        <button type="button" onClick={ReasonSetModal} id="add_new_reason" className={`flex align-center items-center mx-1 text-black transition bg-white hover:bg-gray-200 rounded-lg text-sm px-2 py-2 border ${headerConfig.btn.includes("add_new_reason") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Add" className="w-5 fill-gray-500" />
                            <span className="ml-1 text-sm ">사유 설정</span>
                        </button>

                        <button type="button" onClick={UserAddModal} id="add_new_user" className={`flex align-center items-center mx-1 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${headerConfig.btn.includes("add_new_user") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Add" className="w-5 fill-white" />
                            <span className="ml-1 text-sm">팀원 추가</span>
                        </button>

                        <button type="button" id="add_new_project" className={`flex align-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${headerConfig.btn.includes("add_new_project") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Add" className="w-5 fill-white" />
                            <span className="ml-1 text-sm">프로젝트 추가</span>
                        </button>


                        <button
                            type="button"
                            onClick={(e) => {
                                setIsOption((prev) => !prev);
                            }}
                            className={`flex py-2 px-4 bg-white border rounded-lg relative items-center  hover:bg-gray-100 ${headerConfig.btn.includes("download_file") == 1 ? "" : "hidden"}`}
                        >
                            <IconWidget icon="Download" className="w-5 mr-1 fill-black" />
                            <span className="text-sm mr-1">다운로드</span>

                            <div className={`absolute left-0 top-full mt-2 bg-white px-2 py-2 w-40 shadow-md rounded-lg border ${isOption ? '' : 'hidden'}`}>
                                <ul className="w-full">
                                    <li className="flex px-2 py-3 hover:bg-gray-200 rounded-lg"><IconWidget icon="PDF" className="w-5 fill-black" /> <span className="text-sm ml-2"> PDF 다운로드</span></li>
                                    <li className="flex px-2 py-3 hover:bg-gray-200 rounded-lg"><IconWidget icon="Save" className="w-5 fill-black" /> <span className="text-sm ml-2"> Excel 다운로드</span></li>
                                    <li className="flex px-2 py-3 hover:bg-gray-200 rounded-lg"><IconWidget icon="Save" className="w-5 fill-black" /> <span className="text-sm ml-2"> Img 다운로드</span></li>
                                </ul>
                            </div>
                        </button>

                        <button className={`flex align-center items-center mx-2 text-white bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800 hover:bg-blue-500 ${headerConfig.btn.includes("print") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Print" className="w-5 mr-1 fill-white" />
                            Print
                        </button>

                        <button className={`flex align-center items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 ${headerConfig.btn.includes("delete") == 1 ? "" : "hidden"}`}>
                            <IconWidget icon="Delete" className="w-5" />
                            <span className="ml-1 text-sm">삭제</span>
                        </button>

                    </div>
                </div> */}
                {/* <div className={`px-4 mt-4 ${headerConfig.filter ? "" : "hidden"}`}>
                    <div className="grid grid-cols-6 lg:grid-cols-6 gap-6">
                        <div className={`2xl:col-span-1`}>
                            <input type="text" id="username" name="username" className="border border-[#d1d5db] rounded-lg bg-[#f9fafb] p-2 text-[#111827] text-sm w-full" placeholder="팀원 이름을 입력해주세요." />
                        </div>
                        <div className={`2xl:col-span-1`}>
                            <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                                <option>계급/등급 선택</option>
                            </select>
                        </div>
                        <div className={`2xl:col-span-1`}>
                            <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                                <option>현재 상태</option>
                            </select>
                        </div>
                        <div className={`2xl:col-span-1`}>
                            <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                                <option>평가</option>
                            </select>
                        </div>
                        <div className={`2xl:col-span-1`}>
                            <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                                <option>평가</option>
                            </select>
                        </div>
                        <div className={`2xl:col-span-1`}>
                            <select name="goal_type" id="goal_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            >
                                <option>평가</option>
                            </select>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default SubHeader;